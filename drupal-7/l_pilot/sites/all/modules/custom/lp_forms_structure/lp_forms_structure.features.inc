<?php
/**
 * @file
 * lp_forms_structure.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function lp_forms_structure_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function lp_forms_structure_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function lp_forms_structure_node_info() {
  $items = array(
    'forms' => array(
      'name' => t('Form'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Form Name'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
