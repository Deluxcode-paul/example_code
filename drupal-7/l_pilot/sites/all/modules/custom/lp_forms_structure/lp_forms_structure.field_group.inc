<?php
/**
 * @file
 * lp_forms_structure.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function lp_forms_structure_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_form_details|node|forms|form';
  $field_group->group_name = 'group_form_details';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'forms';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Form Details',
    'weight' => '0',
    'children' => array(
      0 => 'field_form_title',
      1 => 'field_downloadable_content_pdf',
      2 => 'field_thank_you_message',
      3 => 'field_content_delivery_method',
      4 => 'field_form_title_color',
      5 => 'field_button_color',
      6 => 'field_button_text_color',
      7 => 'field_button_text',
      8 => 'field_custom_css',
      9 => 'field_form_font',
      10 => 'title',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Form Details',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => 'group-form-details field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $field_groups['group_form_details|node|forms|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Form Details');

  return $field_groups;
}
