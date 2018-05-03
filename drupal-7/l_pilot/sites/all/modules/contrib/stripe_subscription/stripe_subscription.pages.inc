<?php
/**
 * @file
 * Callbacks for the stripe_subscription module.
 */

/**
 * Cancel Subscription Form
 */
function stripe_subscription_subscription_cancel_form($form, &$form_state, $subscription_id = NULL, $uid_instead_of_sub_id = NULL) {
        watchdog('stripe_subscription_subscription_cancel_form', 'subscription_id is %str uid_instead_of_sub_id is %two', array('%str' => $subscription_id, '%two' => $uid_instead_of_sub_id));
  if (!empty($uid_instead_of_sub_id)) {
    $account = user_load(intval($subscription_id));

        watchdog('stripe_subscription_subscription_cancel_form', 'uid is %str', array('%str' => $account->uid));
    if (!empty($account->uid)) {
      $livemode = stripe_customer_livemode();

      $customer_id = stripe_customer_get_id($account);
      $subscription_id = db_query("SELECT subscription_id FROM {stripe_subscriptions} WHERE customer_id = :customer_id AND livemode = :livemode",
        array(':customer_id' => $customer_id, ':livemode' => $livemode))->fetchField();
        watchdog('stripe_subscription_subscription_cancel_form', 'returned subscription_id is %str', array('%str' => $subscription_id));
    }
  }

  stripe_load_library();
  global $user;
  $subscription = NULL;
  $customer = NULL;

  $back_path = 'subscription';

  if (isset($subscription_id)) {
    $subscription = \Stripe\Subscription::retrieve($subscription_id);

    if ($subscription instanceof \Stripe\Subscription) {
      // Load the provided subscription by its ID, and make sure it belongs to them,
      // or we are an administrator.
      $customer_id = $subscription->customer;
      $subscriber_uid = stripe_customer_get_uid($customer_id);
      $account = user_load($subscriber_uid);

      // If we're not an admin or the subscriber, deny access.
      if ($user->uid != $account->uid && !user_access('administer stripe')) {
        drupal_access_denied();
      }

      // Build subscription status table.
      $form['customer_id'] = array(
        '#type' => 'value',
        '#value' => $customer_id,
      );

      $form['uid'] = array(
        '#type' => 'value',
        '#value' => $account->uid,
      );

      $form['subscription'] = array(
        '#type' => 'fieldset',
        '#title' => 'Subscription Info'
      );

      $header = array(t('Status'), t('Current Plan'), t('Next Invoice'));
      $status = isset($subscription->status) ? ucfirst($subscription->status) : t('Inactive');
      $current = isset($subscription->plan) ? stripe_subscription_plan_name($subscription->plan) : t('None');
      $next = format_date($subscription->current_period_end + 1, 'custom', 'm/d/Y');
      $rows = array(array($status, $current, $next));

      $subscription_for = '<p><label>' . t('Subscriber:') . '</label>' . $account->name . ' (' . $account->mail . ')</p>';

      $form['subscription']['status'] = array(
        '#markup' => $subscription_for . theme('table', array('header' => $header, 'rows' => $rows))
      );

      if (isset($subscription->plan)) {
        $form['previous_plan_name'] = array(
          '#type' => 'hidden',
          '#value' => $subscription->plan->name,
        );
        $form['previous_plan_id'] = array(
          '#type' => 'value',
          '#value' => $subscription->plan->id,
        );
      }
      $form['subscription_id'] = array(
        '#type' => 'value',
        '#value' => $subscription->id,
      );

      $form['subscription']['cancel_copy'] = array(
        '#markup' => '<p>' . t('Are you sure you would like to cancel this subscription?') . '</p>'
      );

      $form['subscription']['cancel_link'] = array(
        '#markup' => l('No, Go back ', $back_path)
      );

      $form['subscription']['submit'] = array(
        '#type' => 'submit',
        '#value' => t('Yes, Cancel Subscription')
      );
      return $form;
    }
  }
  else {
    form_set_error('You do not appear to be a subscriber.');
    drupal_goto($back_path);
  }
}

function stripe_subscription_subscription_cancel_form_submit($form, &$form_state) {
  stripe_load_library();
  try {
    $cu = stripe_get_customer($form_state['values']['customer_id']);
    $cu->cancelSubscription();
    // @todo: Use subscription_id here instead (after update 7004)

    db_delete('stripe_subscriptions')
      ->condition('customer_id', $form_state['values']['customer_id'])
      ->condition('plan_id', $form_state['values']['previous_plan_id'])
      ->execute();

    drupal_set_message('Your subscription has been cancelled.');
  }
  catch(Exception $e) {
    drupal_set_message('Error cancelling subscription. Reason: ' . $e->getMessage(), 'error');
  }
  drupal_goto('subscription');
}
