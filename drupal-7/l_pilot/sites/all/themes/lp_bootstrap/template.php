<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

/**
 * Implements hook_bootstrap_iconize_text_alter().
 */
function lp_bootstrap_bootstrap_iconize_text_alter(&$texts) {
   $texts['contains'][t('Save')] = 'floppy-disk';
}

/**
 * Implements hook_preprocess_page().
 */
function lp_bootstrap_preprocess_page(&$vars) {
  if(arg(0) == 'form-api')
  {
    $vars['theme_hook_suggestions'][] = 'page__form';
	drupal_add_css( path_to_theme() .'/css/form.css','theme');
  }
}


