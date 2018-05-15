<?php

use Drupal\block\Entity\Block;

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function cryptogf_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    $content_type  = $node->bundle();
    $suggestions[] = 'page__' . $content_type;
  }

  $path = \Drupal::request()->getpathInfo();
  $arg  = explode('/', $path);
  $arg1 = (!empty($arg[1])) ? $arg[1] : null;
  $arg2 = (!empty($arg[2])) ? $arg[2] : null;
  $arg3 = (!empty($arg[3])) ? $arg[3] : null;

  if ($arg1 == 'node' && $arg3 == 'edit') {
    $suggestions[] = 'page__node__add';
    if ($node = \Drupal::routeMatch()->getParameter('node')) {
      $content_type = $node->bundle();
      if (!empty($content_type)) {
        $suggestions[] = 'page__node__add__' . $content_type;
      }
    }
  }

  if ($arg1 == 'node' && $arg3 == 'translations') {
    $suggestions[] = 'page__node__translations';
  }

  if ($arg1 == 'ico' && $arg2 == 'register') {
    $suggestions[] = 'page__node__add';
  }

  if ($arg1 == 'welcome' || $arg1 == 'email-confirmer') {
    $suggestions[] = 'page__user__register';
  }

  $http_error_suggestions = [
    'system.401' => 'page__401',
    'system.403' => 'page__403',
    'system.404' => 'page__404',
  ];

  $route_name = \Drupal::routeMatch()->getRouteName();
  if (isset($http_error_suggestions[$route_name])) {
    $suggestions[] = $http_error_suggestions[$route_name];
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function cryptogf_theme_suggestions_node_alter(array &$suggestions, array $variables) {
  $elements = $variables['elements'];
  if (!empty($elements['#node'])) {
    $node         = $elements['#node'];
    $content_type = $node->getType();
    if ($content_type == 'token') {
      if ($node->get('field_import_id')->getValue()) {
        $suggestions[] = 'node__coin__imported';
        if ($view_mode = $elements['#view_mode']) {
          $suggestions[] = 'node__coin__imported__' . $view_mode;
        }
      }
    }
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter
 */
function cryptogf_theme_suggestions_user_alter(array &$suggestions, array $variables) {
  if (!empty($variables['elements']['#view_mode'])) {
    $suggestions[] = $variables['theme_hook_original'] . '__' . str_replace('-', '_', $variables['elements']['#view_mode']);
  }
}

/**
 * Implements hook_theme_suggestions_block_alter().
 */
function cryptogf_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  if (isset($variables['elements']['#id'])) {
    $block         = Block::load($variables['elements']['#id']);
    $suggestions[] = 'block__' . $block->getRegion() . '__region';
    $suggestions[] = 'block__' . $block->getRegion() . '__' . $variables['elements']['#id'];

    if ($variables['elements']['#id'] == 'crypto_content') {
      $current_path = \Drupal::service('path.current')->getPath();
      $result       = \Drupal::service('path.alias_manager')->getAliasByPath($current_path);

      if ($result == '/news') {
        $suggestions[] = 'block__' . $block->getRegion() . '__news_page';
      }
    }
  }
  /* Use this 'else if' only if you are using page_manager module and want to know which region is the block */
  elseif (isset($variables['elements']['#configuration']['region'])) {
    $suggestions[] = 'block__page_' . $variables['elements']['#configuration']['region'] . '__' . end(explode(':', $variables['elements']['#plugin_id']));
  }
  return $suggestions;
}

/**
 * Implements hook_theme_suggestions_views_view_alter().
 */
function cryptogf_theme_suggestions_views_view_alter(array &$suggestions, array $variables) {
  $suggestions[] = sprintf('views_view__%s__%s', $variables['view']->id(), $variables['view']->current_display);
}

/**
 * Implements hook_theme_suggestions_views_view_alter().
 */
function cryptogf_theme_suggestions_views_view_table_alter(array &$suggestions, array $variables) {
  $suggestions[] = sprintf('views_view_table__%s__%s', $variables['view']->id(), $variables['view']->current_display);
}

/**
 * Implements hook_theme_suggestions_views_view_unformatted_alter().
 */
function cryptogf_theme_suggestions_views_view_unformatted_alter(array &$suggestions, array $variables) {
  $suggestions[] = sprintf('views_view_unformatted__%s', $variables['view']->id());
}

/**
 * Implements hook_theme_suggestions_alter().
 */
function cryptogf_theme_suggestions_alter(array &$suggestions, array $variables, $hook) {
  switch ($hook) {
    case 'form';
      if (isset($variables['element']['#form_id'])) {
        $suggestions[] = 'form__' . $variables['element']['#form_id'];
      }
      break;
    case 'form_element':
      if (isset($variables['element']['#id'])) {
        if ($variables['element']['#id'] == 'edit-field-subscribe-value') {
          $suggestions[] = $hook . '__subscribe';
        }
      }
      break;
  }
}

/**
 * Implements hook_theme_suggestions_input_alter().
 */
function cryptogf_theme_suggestions_input_alter(array &$suggestions, array $variables) {
  $element = $variables['element'];
  if (isset($element['#attributes']['data-twig-suggestion'])) {
    $suggestions[] = 'input__' . $element['#type'] . '__' . $element['#attributes']['data-twig-suggestion'];
  }
}

/**
 * Implements hook_theme_suggestions_form_element_alter().
 */
function cryptogf_theme_suggestions_form_element_alter(array &$suggestions, array $variables) {
  $suggestions = ['form_element__type__' . $variables['element']['#type']];
  if (isset($variables['element']['#form_id'])) {
    $suggestions[] = 'form_element__' . $variables['element']['#form_id'];
    $suggestions[] = 'form_element__' . $variables['element']['#form_id'] . '__' . $variables['element']['#type'];
  }
}

/**
 * Implements hook_theme_suggestions_form_element_label_alter().
 */
function cryptogf_theme_suggestions_form_element_label_alter(array &$suggestions, array $variables) {
  if (isset($variables['element']['#form_element_type'])) {
    $suggestions[] = 'form_element_label__type__' . $variables['element']['#form_element_type'];
  }
  if (isset($variables['element']['#form_id'])) {
    $suggestions[] = 'form_element_label__' . $variables['element']['#form_id'];
  }
  if (isset($variables['element']['#form_element_type']) && isset($variables['element']['#form_id'])) {
    $suggestions[] = 'form_element_label__' . $variables['element']['#form_id'] . '__' . $variables['element']['#form_element_type'];
  }
}
