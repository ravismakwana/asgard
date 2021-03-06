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
		add_action('enqueue_block_assets', [$this, 'enqueue_editor_assets']);
	}

	public function register_styles(){
		wp_register_style('bootstrap', ASGARD_BUILD_LIB_URI.'/css/bootstrap.min.css', [], false, 'all');
		wp_register_style('main-css', ASGARD_BUILD_CSS_URI.'/main.css', ['bootstrap'], filemtime(ASGARD_BUILD_CSS_DIR_PATH.'/main.css'), 'all');
		wp_register_style('slick-css', ASGARD_BUILD_LIB_URI.'/css/slick/slick.css', [], false, 'all');
		wp_register_style('slick-theme-css', ASGARD_BUILD_LIB_URI.'/css/slick/slick-theme.css', ['slick-css'], false, 'all');

		wp_enqueue_style('bootstrap');
		wp_enqueue_style('main-css');
		wp_enqueue_style('slick-css');
		wp_enqueue_style('slick-theme-css');
	}

	public function register_scripts(){
		wp_register_script('main', ASGARD_BUILD_JS_URI.'/main.js', ['jquery', 'slick-slider'], filemtime(ASGARD_BUILD_JS_DIR_PATH.'/main.js'), true);
		wp_register_script('author-js', ASGARD_BUILD_JS_URI.'/author.js', ['jquery'], filemtime(ASGARD_BUILD_JS_DIR_PATH.'/author.js'), true);
		wp_register_script('bootstrap', ASGARD_BUILD_LIB_URI.'/js/bootstrap.min.js', ['jquery'], false, true);
		wp_register_script('slick-slider', ASGARD_BUILD_LIB_URI.'/js/slick.min.js', ['jquery'], false, true);

		wp_enqueue_script('bootstrap');
		wp_enqueue_script('main');
		wp_enqueue_script('slick-slider');

		if( is_author() ) {
			wp_enqueue_script('author-js');
		}


		wp_localize_script( 'main', 'ajax_object',
			[
				'ajax_url' => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce('loadmore_posts_nonce')
			]
		);
	}
	/**
	 * Enqueue editor scripts and styles.
	 */
	public function enqueue_editor_assets() {

		$asset_config_file = sprintf( '%s/assets.php', ASGARD_BUILD_DIR_PATH );

		if ( ! file_exists( $asset_config_file ) ) {
			return;
		}

		$asset_config = require_once $asset_config_file;

		if ( empty( $asset_config['js/editor.js'] ) ) {
			return;
		}

		$editor_asset    = $asset_config['js/editor.js'];
		$js_dependencies = ( ! empty( $editor_asset['dependencies'] ) ) ? $editor_asset['dependencies'] : [];
		$version         = ( ! empty( $editor_asset['version'] ) ) ? $editor_asset['version'] : filemtime( $asset_config_file );

		// Theme Gutenberg blocks JS.
		if ( is_admin() ) {
			wp_enqueue_script(
				'asgard-blocks-js',
				ASGARD_BUILD_JS_URI . '/blocks.js',
				$js_dependencies,
				$version,
				true
			);
		}

		// Theme Gutenberg blocks CSS.
		$css_dependencies = [
			'wp-block-library-theme',
			'wp-block-library',
		];

		wp_enqueue_style(
			'asgard-blocks-css',
			ASGARD_BUILD_CSS_URI . '/blocks.css',
			$css_dependencies,
			filemtime( ASGARD_BUILD_CSS_DIR_PATH . '/blocks.css' ),
			'all'
		);

	}
}