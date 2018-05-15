<?php

use Drupal\Core\Field\FieldFilteredMarkup;

/**
 * Implements hook_preprocess_html().
 */
function cryptogf_preprocess_html(&$variables) {
  if (count($variables['page']['#attached']['html_head'])) {
    foreach ($variables['page']['#attached']['html_head'] as &$item) {
      if ($item[1] == 'viewport') {
        $item[0]['#attributes']['content'] = 'width=1230,  maximum-scale=1';
      }
    }
  }
}

/**
 * Implements hook_preprocess_page().
 */
function cryptogf_preprocess_page(&$variables) {
  $cryptogf_slogan = theme_get_setting('cryptogf_slogan');
  if (!empty($cryptogf_slogan['value'])) {
    $variables['cryptogf_slogan'] = $cryptogf_slogan['value'];
  }
}

/**
 * Implements hook_preprocess_page_title().
 */
function cryptogf_preprocess_page_title(&$variables) {
  // Override html title.
  $current_uri = \Drupal::request()->getRequestUri();
  if ($current_uri == '/ico/register') {
    $variables['title'] = t('Create account');
  }
}

/**
 * Implements hook_preprocess_node().
 */
function cryptogf_preprocess_node(&$variables) {
  if ($variables['view_mode'] == 'full') {
    $variables['base_path'] = base_path();
  }
  if ($variables['view_mode'] == 'teaser' && isset($variables['content']['field_image'])) {
      $variables['base_path'] = base_path();
  }
}

/**
 * Implements hook_preprocess_field_group_html_element().
 */
function cryptogf_preprocess_field_group_html_element(&$variables) {
  $variables['base_path'] = base_path();
}

/**
 * PImplements hook_preprocess_field().
 */
function cryptogf_preprocess_field(&$variables, $hook) {
  $field_name  = $variables['field_name'];
  $fields_list = array(
    'field_start_campaing',
    'field_finish_campaing',
    'field_reason_to_invest',
    'field_utility_token_text',
  );
  if (in_array($field_name, $fields_list)) {
    $variables['base_path'] = base_path();
  }
}

/**
 * Implements hook_preprocess_comment().
 */
function cryptogf_preprocess_comment(&$variables) {
  /** @var \Drupal\comment\CommentInterface $comment */
  $comment              = $variables['elements']['#comment'];
  $variables['created'] = format_date($comment->getCreatedTime(), 'page_date');
}

/**
 * Implements hook_preprocess_file_upload_help().
 */
function cryptogf_preprocess_file_upload_help(&$variables) {
  $description       = $variables['description'];
  $upload_validators = $variables['upload_validators'];
  $cardinality       = $variables['cardinality'];

  $descriptions = [];

  if (!empty($description)) {
    $descriptions[] = FieldFilteredMarkup::create($description);
  }

  if (isset($upload_validators['file_validate_size']) && isset($upload_validators['file_validate_extensions'])) {
    $descriptions[] = t('Size limit: @size, ', ['@size' => format_size($upload_validators['file_validate_size'][0])]) .
      t('@extensions allowed.', ['@extensions' => $upload_validators['file_validate_extensions'][0]]);
  }

  if (isset($upload_validators['file_validate_image_resolution'])) {
    $max = $upload_validators['file_validate_image_resolution'][0];
    $min = $upload_validators['file_validate_image_resolution'][1];
    if ($min && $max && $min == $max) {
      $descriptions[] = t('Images must be exactly <strong>@size</strong> pixels.', ['@size' => $max]);
    } elseif ($min && $max) {
      $descriptions[] = t('Images must be larger than <strong>@min</strong> pixels. Images larger than <strong>@max</strong> pixels will be resized.', ['@min' => $min, '@max' => $max]);
    } elseif ($min) {
      $descriptions[] = t('Images must be larger than <strong>@min</strong> pixels.', ['@min' => $min]);
    } elseif ($max) {
      $descriptions[] = t('Images larger than <strong>@max</strong> pixels will be resized.', ['@max' => $max]);
    }
  }

  $variables['descriptions'] = $descriptions;
}

/**
 * Implements hook_preprocess_user().
 */
function cryptogf_preprocess_user(&$variables) {
  $userCurrent = \Drupal::currentUser();
  if (!empty($userCurrent->id())) {
    $variables['session_uid'] = $userCurrent->id();
  }
}

/**
 * Implements template_preprocess_form_element().
 */
function cryptogf_preprocess_form_element(&$variables) {
  if (!isset($variables['label'])) {
    return;
  }
  if (isset($variables['element']['#form_id'])) {
    $variables['label']['#form_id'] = $variables['element']['#form_id'];
  }
  if (isset($variables['element']['#type'])) {
    $variables['label']['#form_element_type'] = $variables['element']['#type'];
  }
}
