<?php

/**
 * @file
 * Stripe administration and module settings UI.
 */

/**
 * Menu callback: configure Stripe API Keys.
 */
function stripe_admin_keys() {
  $keys = array(
    'test_secret' => t('Test Secret Key'),
    'test_publishable' => t('Test Publishable Key'),
    'live_secret' => t('Live Secret Key'),
    'live_publishable' => t('Live Publishable Key'),
  );
  $secret = stripe_get_key("secret");
  $publishable = stripe_get_key("publishable");
  if ($secret && $publishable) {
    if (stripe_load_library()) {
      $info = \Stripe\Account::retrieve();

      // Currencies supported by Stripe will vary depending
      // on which country the Stripe Account was created in.
      $country_spec = \Stripe\CountrySpec::retrieve($info->country);
      $supported_currencies = $country_spec->supported_payment_currencies;

      $account_information = "<label>" . t('Business name:') . "</label> " . $info->business_name;
      $account_information .= "<br /><label>" . t('Business E-mail:') . "</label> " . $info->email;
      $account_information .= "<br /><label>" . t('Statement Descriptor:') . "</label> " . $info->statement_descriptor;
      $account_information .= "<br /><label>" . t('Details Submitted:') . "</label> " . $info->details_submitted;
      $account_information .= "<br /><label>" . t('Charges Enabled:') . "</label> " . $info->charges_enabled;
      $account_information .= "<br /><label>" . t('Transfers Enabled:') .  "</label> " . $info->transfers_enabled;
      $account_information .= "<br /><label>" . t('Currencies Supported:') . "</label> " . implode(", ", $supported_currencies);
      $account_information .= "<br /><label>" . t('Default currency:') . "</label> " . $info->default_currency;
    }
    else {
      $account_information = t("Failed to load Stripe library.");
    }
  }
  else {
    $account_information = t("Please configure the stripe keys below to see your acccount information");
  }

  $form['stripe_account_information'] = array(
    '#type' => 'fieldset',
    '#title' => t('Account Information'),
    '#collapsible' => FALSE,
  );
  $form['stripe_account_information']['info'] = array(
    '#markup' => $account_information,
  );
  $form['api_keys'] = array(
    '#type' => 'fieldset',
    '#title' => t('API Keys'),
    '#collapsible' => FALSE,
  );

  $active_key = variable_get('stripe_key_status', 'test');

  $form['api_keys']['stripe_key_status'] = array(
    '#type' => 'radios',
    '#title' => t('Stripe API Status'),
    '#default_value' => $active_key,
    '#options' => array(
      'test' => t('Test'),
      'live' => t('Live'),
    ),
    '#description' => t('This determines which set of keys you are using.'),
    '#required' => TRUE,
  );

  foreach ($keys as $machine_name => $name) {
    $form['api_keys']['stripe_' . $machine_name] = array(
      '#type' => 'textfield',
      '#title' => $name,
      '#size' => 35,
      '#default_value' => variable_get('stripe_' . $machine_name, ''),
      '#required' => TRUE,
    );
  }

  $form['api_keys']['stripe_api_version'] = array(
    '#type' => 'select',
    '#title' => t('Stripe API Version'),
    '#options' => array(
      STRIPE_API_LATEST_TESTED => 'Latest Tested (2016-07-06)',
      STRIPE_API_ACCOUNT_DEFAULT => 'Account Default',
      STRIPE_API_VERSION_CUSTOM => 'Custom',
    ),
    '#empty_option' => STRIPE_API_ACCOUNT_DEFAULT,
    '#empty_value' => 'Account Default',
    '#default_value' => variable_get('stripe_api_version', STRIPE_API_ACCOUNT_DEFAULT),
    '#description' => t('Specify the API version to use for requests.
    Defaults to the version configured in your <a href="@dash">Stripe Account</a>.',
      array('@dash' => 'http://dashboard.stripe.com/account/apikeys')),
  );

  $form['api_keys']['stripe_api_version_custom'] = array(
    '#type' => 'textfield',
    '#title' => t('Specify an API Version'),
    '#description' => t('Useful for testing API Versioning before committing to an upgrade.'),
    '#default_value' => variable_get('stripe_api_version_custom', ''),
    '#size' => 12,
    '#states' => array(
      'visible' => array(
        ':input[name="stripe_api_version"]' => array('value' => STRIPE_API_VERSION_CUSTOM),
      ),
    ),
  );

  $form['stripe_log_webhooks'] = array(
    '#type' => 'checkbox',
    '#title' => t('Log Webhooks'),
    '#description' => t('This will log all valid webhook requests with their event data to the db log.'),
    '#default_value' => variable_get('stripe_log_webhooks', 0),
  );

  return system_settings_form($form);
}
