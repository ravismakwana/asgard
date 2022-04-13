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

// Helper folder includes
require_once ASGARD_DIR_PATH .'/inc/helpers/autoloader.php';
require_once ASGARD_DIR_PATH .'/inc/helpers/template-tags.php';


function asgard_get_theme_instance(){

	\ASGARD_THEME\Inc\ASGARD_THEME::get_instance();
}
asgard_get_theme_instance();
