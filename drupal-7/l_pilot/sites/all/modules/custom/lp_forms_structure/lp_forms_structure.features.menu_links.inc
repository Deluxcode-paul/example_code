<?php
/**
 * @file
 * lp_forms_structure.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function lp_forms_structure_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: user-menu_forms:forms.
  $menu_links['user-menu_forms:forms'] = array(
    'menu_name' => 'user-menu',
    'link_path' => 'forms',
    'router_path' => 'forms',
    'link_title' => 'Forms',
    'options' => array(
      'identifier' => 'user-menu_forms:forms',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Forms');

  return $menu_links;
}
