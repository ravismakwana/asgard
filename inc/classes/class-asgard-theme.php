<?php
/**
 * Bootstrap supported theme
 *
 * @package Asgard
 */

namespace ASGARD_THEME\Inc;
use ASGARD_THEME\Inc\Traits\Singleton;

class ASGARD_THEME {
	use Singleton;

	protected function __construct(){
		// Load class
		Assets::get_instance(); // it calls the Assets class methods
		Menus::get_instance();
		MetaBox::get_instance();
		$this->setup_hooks();
	}

	protected function setup_hooks() {
		// actions and filters
		add_action('after_setup_theme', [$this, 'setup_theme']);
	}

	public function setup_theme(){


		add_theme_support('title-tag');

		add_theme_support( 'custom-logo', [
			'height'      => 26,
			'width'       => 130,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => [ 'site-title', 'site-description' ],
		] );
		/** custom background **/
		$bg_defaults = array(
			'default-color'          => 'ff0000',
			'default-image'          => '',
			'default-preset'         => 'default',
			'default-size'           => 'cover',
			'default-repeat'         => 'no-repeat',
			'default-attachment'     => 'scroll',
		);
		add_theme_support( 'custom-background', $bg_defaults );

		/** post thumbnail **/
		add_theme_support( 'post-thumbnails' );
		add_image_size('featured-thumbnail', 350, 233, true);

		/** Feed Links **/
		add_theme_support( 'automatic-feed-links' );

		/** HTML5 **/
		add_theme_support( 'html5', [ 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ] );

		add_editor_style();

		add_theme_support('wp-block-styles');

		add_theme_support('align-wide');

		global $content_width;
		if(!isset($content_width)) {
			$content_width = 1240;
		}

	}

}