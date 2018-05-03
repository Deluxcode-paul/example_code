<?php
/**
 * @file
 * lp_forms_structure.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function lp_forms_structure_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'form_downloads_count';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Form downloads count';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  /* Field: COUNT(Content: Nid) */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['group_type'] = 'count';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  /* Contextual filter: Content: Form ID (field_form_id) */
  $handler->display->display_options['arguments']['field_form_id_value']['id'] = 'field_form_id_value';
  $handler->display->display_options['arguments']['field_form_id_value']['table'] = 'field_data_field_form_id';
  $handler->display->display_options['arguments']['field_form_id_value']['field'] = 'field_form_id_value';
  $handler->display->display_options['arguments']['field_form_id_value']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_form_id_value']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_form_id_value']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_form_id_value']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'customer' => 'customer',
  );
  $export['form_downloads_count'] = $view;

  $view = new view();
  $view->name = 'form_report';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Form report';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Form report';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'table';
  /* Field: Content: Post date */
  $handler->display->display_options['fields']['created']['id'] = 'created';
  $handler->display->display_options['fields']['created']['table'] = 'node';
  $handler->display->display_options['fields']['created']['field'] = 'created';
  $handler->display->display_options['fields']['created']['date_format'] = 'short';
  $handler->display->display_options['fields']['created']['second_date_format'] = 'long';
  /* Field: Content: First Name */
  $handler->display->display_options['fields']['field_first_name']['id'] = 'field_first_name';
  $handler->display->display_options['fields']['field_first_name']['table'] = 'field_data_field_first_name';
  $handler->display->display_options['fields']['field_first_name']['field'] = 'field_first_name';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Last Name';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Customer Email */
  $handler->display->display_options['fields']['field_customer_email']['id'] = 'field_customer_email';
  $handler->display->display_options['fields']['field_customer_email']['table'] = 'field_data_field_customer_email';
  $handler->display->display_options['fields']['field_customer_email']['field'] = 'field_customer_email';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Form ID (field_form_id) */
  $handler->display->display_options['arguments']['field_form_id_value']['id'] = 'field_form_id_value';
  $handler->display->display_options['arguments']['field_form_id_value']['table'] = 'field_data_field_form_id';
  $handler->display->display_options['arguments']['field_form_id_value']['field'] = 'field_form_id_value';
  $handler->display->display_options['arguments']['field_form_id_value']['default_action'] = 'empty';
  $handler->display->display_options['arguments']['field_form_id_value']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_form_id_value']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_form_id_value']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_form_id_value']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'customer' => 'customer',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block_1');
  $export['form_report'] = $view;

  $view = new view();
  $view->name = 'forms';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Forms';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Forms';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-sm-12 col-md-3';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Footer: Global: Unfiltered text */
  $handler->display->display_options['footer']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['footer']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['footer']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['footer']['area_text_custom']['label'] = 'Add new Form';
  $handler->display->display_options['footer']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['footer']['area_text_custom']['content'] = '<div class="col-sm-12 col-md-3"><a href="/node/add/forms" class="btn btn-default btn-success"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create new From</a></div>';
  /* Relationship: Content: Author */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'node';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid_1']['id'] = 'nid_1';
  $handler->display->display_options['fields']['nid_1']['table'] = 'node';
  $handler->display->display_options['fields']['nid_1']['field'] = 'nid';
  $handler->display->display_options['fields']['nid_1']['label'] = '';
  $handler->display->display_options['fields']['nid_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Global: View */
  $handler->display->display_options['fields']['view']['id'] = 'view';
  $handler->display->display_options['fields']['view']['table'] = 'views';
  $handler->display->display_options['fields']['view']['field'] = 'view';
  $handler->display->display_options['fields']['view']['label'] = '';
  $handler->display->display_options['fields']['view']['exclude'] = TRUE;
  $handler->display->display_options['fields']['view']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['view']['view'] = 'form_downloads_count';
  $handler->display->display_options['fields']['view']['arguments'] = '[!nid_1]';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['nid']['alter']['text'] = '<div class="view-item thumbnail">
<div class="thumbnail-header">
  <h5>[title]</h5>
</div>
<div class="thumbnail-content>
<p><a class="btn btn-info" href="/node/[nid]/edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> edit</a>
&nbsp;<a   class="btn btn-primary" href="/report/downloads/[nid]/"><i class="fa fa-file-text" aria-hidden="true"></i> entries</a>
</p>
<p class="opens-sents><div class="pull-left">[view]</div>&nbsp;Downloads</p>
</div>
</div>';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Author uid */
  $handler->display->display_options['arguments']['uid']['id'] = 'uid';
  $handler->display->display_options['arguments']['uid']['table'] = 'node';
  $handler->display->display_options['arguments']['uid']['field'] = 'uid';
  $handler->display->display_options['arguments']['uid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['uid']['default_argument_type'] = 'current_user';
  $handler->display->display_options['arguments']['uid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['uid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['uid']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'forms' => 'forms',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'forms';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Forms';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'user-menu';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $export['forms'] = $view;

  return $export;
}
