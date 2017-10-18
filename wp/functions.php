<?php

//add_filter('default_content', create_function('', 'return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";'));

include( TEMPLATEPATH.'/classes.php' );
include( TEMPLATEPATH.'/constants.php' );
//include( TEMPLATEPATH.'/widgets.php' );

add_theme_support( 'automatic-feed-links' );

add_theme_support( 'html5', array(
	'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
) );

if ( ! isset( $content_width ) ) $content_width = 900;

remove_action( 'wp_head', 'feed_links_extra', 3 );
remove_action( 'wp_head', 'feed_links', 2 );
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wp_generator');
remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
remove_action('wp_head','qtranxf_wp_head_meta_generator');

add_action( 'after_setup_theme', 'theme_localization' );
function theme_localization () {
	load_theme_textdomain( 'base', get_template_directory() . '/languages' );
}

register_sidebar(array(
	'name' => 'Default Sidebar',
	'before_widget' => '<div class="widget %2$s" id="%1$s">',
	'after_widget' => '</div>',
	'before_title' => '<h3>',
	'after_title' => '</h3>'
));

register_nav_menus( array(
	'primary' => __( 'Primary Navigation', 'base' ),
) );

//add [email]...[/email] shortcode
function shortcode_email($atts, $content) {
	$result = '';
	for ($i=0; $i<strlen($content); $i++) {
		$result .= '&#'.ord($content{$i}).';';
	}
	return $result;
}
add_shortcode('email', 'shortcode_email');

// register tag [template_url]
function filter_template_url($text) {
	return str_replace('[template_url]',get_bloginfo('template_url'), $text);
}
add_filter('the_content', 'filter_template_url');
add_filter('get_the_content', 'filter_template_url');
add_filter('widget_text', 'filter_template_url');

// register tag [site_url]
function filter_site_url($text) {
	return str_replace('[site_url]',get_bloginfo('url'), $text);
}
add_filter('the_content', 'filter_site_url');
add_filter('get_the_content', 'filter_site_url');
add_filter('widget_text', 'filter_site_url');

//allow tags in category description
$filters = array('pre_term_description', 'pre_link_description', 'pre_link_notes', 'pre_user_description');
foreach($filters as $filter){
    remove_filter($filter, 'wp_filter_kses');
}

/* Replace Default WP Menu Classes */
function change_menu_classes($css_classes) {
	$css_classes = str_replace('current-menu-item', 'active', $css_classes);
	$css_classes = str_replace('current-menu-parent', 'active', $css_classes);
	return $css_classes;
}
add_filter('nav_menu_css_class', 'change_menu_classes');

//Add post thumbnails
if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 50, 50, true ); // Normal post thumbnails
	add_image_size( '252x169', 252, 169, true );
  add_image_size( '216x145', 216, 145, true );
  add_image_size( '300x210', 300, 210, true );
  add_image_size( '186x184', 186, 184, true );
  add_image_size( '160x106', 160, 106, true );
}

/* Добавляем блоки в основную колонку на страницах постов и пост. страниц */
function chenkobud_add_custom_box($post) {
  if($_GET['post'] == homePageID)
	add_meta_box( 'chenkobud_scheme', 'Элементы схемы', 'chenkobud_scheme_callback', 'page' );
}
add_action('add_meta_boxes', 'chenkobud_add_custom_box');

/* HTML код блока */
function chenkobud_scheme_callback($post) {
  if($post->ID == homePageID) {
    // Используем nonce для верификации
    wp_nonce_field( plugin_basename(__FILE__), 'chenkobud_scheme_noncename' );
    $image = get_post_meta($post->ID, '_chenkobud_scheme_image', true);
    $areas = get_post_meta($post->ID, '_chenkobud_scheme_areas', true);
?>
    <textarea style="width:100%;height:700px;" name="chenkobud_scheme_areas"><?php echo $areas ? $areas : ''; ?></textarea>
<?php }
}

/* Сохраняем данные, когда пост сохраняется */
function chenkobud_scheme_save_postdata( $post_id ) {
  if($post_id == homePageID) {
    // проверяем nonce нашей страницы, потому что save_post может быть вызван с другого места.
    if ( ! wp_verify_nonce( $_POST['chenkobud_scheme_noncename'], plugin_basename(__FILE__) ) )
      return $post_id;

    // проверяем, если это автосохранение ничего не делаем с данными нашей формы.
    if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) 
      return $post_id;

    // проверяем разрешено ли пользователю указывать эти данные
    if ( 'page' == $_POST['post_type'] && ! current_user_can( 'edit_page', $post_id ) ) {
        return $post_id;
    } elseif( ! current_user_can( 'edit_post', $post_id ) ) {
      return $post_id;
    }

    // Убедимся что поле установлено.
    if ( ! isset( $_POST['chenkobud_scheme_areas'] ) )
      return;

    // Обновляем данные в базе данных.
    update_post_meta( $post_id, '_chenkobud_scheme_areas', $_POST['chenkobud_scheme_areas'] );
  }
}
add_action( 'save_post', 'chenkobud_scheme_save_postdata' );

remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );

function shortcode_area( $atts ) {
  if($atts['rect']) {
    $type = 'shape="rect"';
  } else {
    $type = 'shape="poly"';
  }
  $html = '<area name="'.sanitize_title(sanitize_title_with_translit($atts['title'])).'" caption="'.$atts['title'].'" href="'.get_page_link($atts['pageid']).'" '.$type.' coords="'.$atts['coords'].'" />';
  return $html;
}
add_shortcode( 'area', 'shortcode_area' );

//Add page excerpt
add_action('init', create_function('', "return add_post_type_support( 'page', 'excerpt' );"));

/*cats_edit_meta_field*/
function cats_edit_meta_field($term) {
	$sidebar = get_term_meta( $term->term_id, 'sidebar', true );
?>
		<tr class="form-field">
		<th scope="row" valign="top" style="width:220px;"><label for="sidebar">Сайдбар</label></th>
			<td>
				<textarea cols="50" rows="5" name="sidebar" id="sidebar"><?php echo esc_attr( $sidebar ) ? esc_attr( $sidebar ) : ''; ?></textarea>
			</td>
		</tr>
<?php
}
add_action( 'category_edit_form_fields', 'cats_edit_meta_field', 10, 2 );

/*cats_save_meta_field*/
function cats_save_meta_field( $term_id ) {
	update_term_meta( $term_id, 'sidebar', $_POST['sidebar'] );
}  
add_action( 'edited_category', 'cats_save_meta_field', 10, 2 );  
add_action( 'create_category', 'cats_save_meta_field', 10, 2 );

/*function my_custom_plugins( $plugins ) {
     $plugins['visualblocks'] = TEMPLATE_URL . '/admin_editor.js';
     return $plugins;
}
add_filter( 'mce_external_plugins', 'my_custom_plugins' );*/

add_action( 'admin_init', 'my_tinymce_button' );

function my_tinymce_button() {
     if ( current_user_can( 'edit_posts' ) && current_user_can( 'edit_pages' ) ) {
          add_filter( 'mce_buttons', 'my_register_tinymce_button' );
          add_filter( 'mce_external_plugins', 'my_add_tinymce_button' );
     }
}

function my_register_tinymce_button( $buttons ) {
     array_push( $buttons, "lineHeight" );
     return $buttons;
}

function my_add_tinymce_button( $plugin_array ) {
     $plugin_array['lineHeight'] = TEMPLATE_URL . '/admin_editor.js';
     return $plugin_array;
}

//add_filter('default_hidden_meta_boxes', 'theme_default_hidden_meta_boxes');
function theme_default_hidden_meta_boxes($hidden){
  $key = array_search('revisionsdiv', $hidden);
	unset($hidden[$key]);
  return $hidden;
}

// add meta box on_front
function chenkobud_add_front_meta_box($post) {
  add_meta_box('chenkobud_metabox', 'Опции', 'chenkobud_render_metabox', array('page', 'photo', 'video'), 'normal', 'high');
}
add_action('add_meta_boxes', 'chenkobud_add_front_meta_box');

/* HTML код блока */
function chenkobud_render_metabox($post) {
?>
  <table class="form-table"><tr>
  <?php  
    wp_nonce_field( plugin_basename(__FILE__), 'chenkobud_front_noncename' );
    $val = get_post_meta($post->ID, '_on_front', true);
    $checked = ($val == '1') ? ' checked="checked"' : ''; 
  ?>
  <th><label for="chenkobud_on_front">Выводить на главной</label></th>
  <td><input type="checkbox" id="chenkobud_on_front" name="chenkobud_on_front" value="1"<?php echo $checked; ?></td>
  </tr><tr></table>
<?php
}

/* Сохраняем данные, когда пост сохраняется */
function chenkobud_metabox_save_postdata( $post_id ) {
  // проверяем nonce нашей страницы, потому что save_post может быть вызван с другого места.
  if ( ! wp_verify_nonce( $_POST['chenkobud_front_noncename'], plugin_basename(__FILE__) ) )
    return $post_id;

  // проверяем, если это автосохранение ничего не делаем с данными нашей формы.
  if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) 
    return $post_id;

  // проверяем разрешено ли пользователю указывать эти данные
  if ( 'page' == $_POST['post_type'] && ! current_user_can( 'edit_page', $post_id ) ) {
      return $post_id;
  } elseif( ! current_user_can( 'edit_post', $post_id ) ) {
    return $post_id;
  }

  // Обновляем данные в базе данных.
  update_post_meta( $post_id, '_on_front', $_POST['chenkobud_on_front'] );
}
add_action( 'save_post', 'chenkobud_metabox_save_postdata' );

// on_front column
function on_front_columns_id($defaults){
    $defaults['on_front'] = 'На главной';
    return $defaults;
}

function on_front_custom_columns_id($column_name, $id){
    if($column_name === 'on_front'){
      echo get_post_meta($id, '_on_front', true) == 1 ? '<strong>Да</strong>' : '';
    }
}
add_filter('manage_pages_columns', 'on_front_columns_id', 1);
add_action('manage_pages_custom_column', 'on_front_custom_columns_id', 1, 2);
add_filter('manage_photo_posts_columns', 'on_front_columns_id', 1);
add_action('manage_photo_posts_custom_column', 'on_front_custom_columns_id', 1, 2);
add_filter('manage_video_posts_columns', 'on_front_columns_id', 1);
add_action('manage_video_posts_custom_column', 'on_front_custom_columns_id', 1, 2);

/*function custom_rewrite_basic() {
  add_rewrite_rule('^([0-9]+)?/news/', 'index.php?year=$matches[1]&category_name=news', 'top');
}
add_action('init', 'custom_rewrite_basic');*/
add_action('generate_rewrite_rules', 'my_rewrite_rules');
function my_rewrite_rules( $wp_rewrite ) {

    // handles paged/pagination requests
    $new_rules = array('news/(.+)/page/?([2-9][0-9]*)' => 'index.php?category_name=news&year=$matches[1]&paged=$matches[2]');

    // handles standard requests
    $new_rules1 = array('news/(.+)' => 'index.php?category_name=news&year=$matches[1]');

    // Add the new rewrite rule into the top of the global rules array
    $wp_rewrite->rules = $new_rules + $new_rules1 + $wp_rewrite->rules;
}