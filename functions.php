<?php
/**
 * Theme Functions
 *
 * @package Asgard
 */

if(!defined('ASGARD_DIR_PATH')) {
	define('ASGARD_DIR_PATH', untrailingslashit( get_template_directory() ));
}
if(!defined('ASGARD_DIR_URI')) {
	define('ASGARD_DIR_URI', untrailingslashit( get_template_directory_uri() ));
}

if(!defined('ASGARD_BUILD_DIR_URI')) {
	define('ASGARD_BUILD_DIR_URI', untrailingslashit( get_template_directory_uri() ).'/assets/build');
}
if(!defined('ASGARD_BUILD_JS_URI')) {
	define('ASGARD_BUILD_JS_URI', untrailingslashit( get_template_directory_uri() ).'/assets/build/js');
}
if(!defined('ASGARD_BUILD_JS_DIR_PATH')) {
	define('ASGARD_BUILD_JS_DIR_PATH', untrailingslashit( get_template_directory() ).'/assets/build/js');
}
if(!defined('ASGARD_BUILD_IMG_URI')) {
	define('ASGARD_BUILD_IMG_URI', untrailingslashit( get_template_directory_uri() ).'/assets/build/src/img');
}
if(!defined('ASGARD_BUILD_CSS_URI')) {
	define('ASGARD_BUILD_CSS_URI', untrailingslashit( get_template_directory_uri() ).'/assets/build/css');
}
if(!defined('ASGARD_BUILD_CSS_DIR_PATH')) {
	define('ASGARD_BUILD_CSS_DIR_PATH', untrailingslashit( get_template_directory() ).'/assets/build/css');
}

// Helper folder includes
require_once ASGARD_DIR_PATH .'/inc/helpers/autoloader.php';
require_once ASGARD_DIR_PATH .'/inc/helpers/template-tags.php';


function asgard_get_theme_instance(){

	\ASGARD_THEME\Inc\ASGARD_THEME::get_instance();
}
asgard_get_theme_instance();
