<?php
/**
 * Theme Functions
 *
 * @package Asgard
 */
if(!function_exists('asgard_enqueue_scripts')) {
	function asgard_enqueue_scripts(){
		wp_register_style('style', get_stylesheet_uri(), [], filemtime(get_template_directory() . '/style.css'), 'all');
		wp_register_style('bootstrap', get_template_directory_uri().'/assets/src/library/css/bootstrap.min.css', [], false, 'all');
		wp_enqueue_style('style');
		wp_enqueue_style('bootstrap');

		wp_register_script('main', get_template_directory_uri().'/assets/main.js', ['jquery'], filemtime(get_template_directory().'/assets/main.js'), true);
		wp_register_script('bootstrap', get_template_directory_uri().'/assets/src/library/js/bootstrap.min.js', ['jquery'], false, true);

		wp_enqueue_script('bootstrap');
		wp_enqueue_script('main');
	}
}
add_action('wp_enqueue_scripts', 'asgard_enqueue_scripts');