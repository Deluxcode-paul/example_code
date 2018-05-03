<?php
/**
 * @file
 * lp_forms_structure.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function lp_forms_structure_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create forms content'.
  $permissions['create forms content'] = array(
    'name' => 'create forms content',
    'roles' => array(
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any forms content'.
  $permissions['delete any forms content'] = array(
    'name' => 'delete any forms content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own forms content'.
  $permissions['delete own forms content'] = array(
    'name' => 'delete own forms content',
    'roles' => array(
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any forms content'.
  $permissions['edit any forms content'] = array(
    'name' => 'edit any forms content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own forms content'.
  $permissions['edit own forms content'] = array(
    'name' => 'edit own forms content',
    'roles' => array(
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: 'fill loyalpilot forms'.
  $permissions['fill loyalpilot forms'] = array(
    'name' => 'fill loyalpilot forms',
    'roles' => array(
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'lp_forms',
  );

  return $permissions;
}
