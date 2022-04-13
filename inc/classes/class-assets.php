<?php
/**
 * Enqueue theme scripts
 *
 * @package Asgard
 */

namespace ASGARD_THEME\Inc;

use ASGARD_THEME\Inc\Traits\Singleton;

class Assets {
	use Singleton;
	protected function __construct(){
		$this->setup_hooks();
	}

	protected function setup_hooks() {
		// actions and filters
		add_action('wp_enqueue_scripts', [$this, 'register_styles']);
		add_action('wp_enqueue_scripts', [$this, 'register_scripts']);
	}

	public function register_styles(){
		wp_register_style('style', get_stylesheet_uri(), [], filemtime(ASGARD_DIR_PATH . '/style.css'), 'all');
		wp_register_style('bootstrap', ASGARD_DIR_URI.'/assets/src/library/css/bootstrap.min.css', [], false, 'all');
		wp_enqueue_style('style');
		wp_enqueue_style('bootstrap');
	}

	public function register_scripts(){
		wp_register_script('main', ASGARD_DIR_URI.'/assets/main.js', ['jquery'], filemtime(ASGARD_DIR_PATH.'/assets/main.js'), true);
		wp_register_script('bootstrap', ASGARD_DIR_URI.'/assets/src/library/js/bootstrap.min.js', ['jquery'], false, true);

		wp_enqueue_script('bootstrap');
		wp_enqueue_script('main');
	}
}