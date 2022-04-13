<?php
/**
 * Gets the thumbnail with Lazy Load.
 * Should be called in the WordPress Loop.
 *
 * @param int|null $post_id Post ID.
 * @param string $size The registered image size.
 * @param array $additional_attributes Additional attributes.
 *
 * @return string
 */
function get_the_post_custom_thumbnail( $post_id, $size = 'featured-thumbnail', $additional_attributes = [] ) {
	$custom_thumbnail = '';

	if ( null === $post_id ) {
		$post_id = get_the_ID();
	}

	if ( has_post_thumbnail( $post_id ) ) {
		$default_attributes = [
			'loading' => 'lazy'
		];

		$attributes = array_merge( $additional_attributes, $default_attributes );

		$custom_thumbnail = wp_get_attachment_image(
			get_post_thumbnail_id( $post_id ),
			$size,
			false,
			$attributes
		);
	}

	return $custom_thumbnail;
}

/**
 * Renders Custom Thumbnail with Lazy Load.
 *
 * @param int $post_id Post ID.
 * @param string $size The registered image size.
 * @param array $additional_attributes Additional attributes.
 */
function the_post_custom_thumbnail( $post_id, $size = 'featured-thumbnail', $additional_attributes = [] ) {
	echo get_the_post_custom_thumbnail( $post_id, $size, $additional_attributes );
}

/**
 * Shows the published date and modified date of posts
 */
function asgard_posted_on(){
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	// Post is modified
	if(get_the_time( 'U') !== get_the_modified_time( 'U')) {
		$time_string = '<time class="entry-date updated" datetime="%1$s">%2$s</time>';
	}
	$time_string = sprintf($time_string,
		esc_attr(get_the_modified_date( DATE_W3C)),
		esc_attr(get_the_modified_date()),
	);
	$posted_on = sprintf(
		esc_html_x('Posted on %s', 'post date', 'asgard'),
		'<a href="'.esc_url( get_permalink() ).'" rel="bookmark">'. $time_string .'</a>'
	);
	echo '<span class="posted-on text-secondary">'. $posted_on .'</span>';
}
/**
 * Show Author of post
 */
function asgard_posted_by(){
	$byline = sprintf(
		esc_html_x(' by %s', 'post author', 'asgard'),
		'<span class="author vcard"><a href="'.esc_url( get_author_posts_url( get_the_author_meta( 'ID') ) ).'">'. esc_html(get_the_author()) .'</a></span>'
	);
	echo '<span class="byline text-secondary">'. $byline .'</span>';
}

/**
 * Get the trimmed version of post excerpt.
 *
 * This is for modifing manually entered excerpts,
 * NOT automatic ones WordPress will grab from the content.
 *
 * It will display the first given characters ( e.g. 100 ) characters of a manually entered excerpt,
 * but instead of ending on the nth( e.g. 100th ) character,
 * it will truncate after the closest word.
 *
 * @param int $trim_character_count Charter count to be trimmed
 *
 * @return bool|string
 */
function asgard_the_excerpt( $trim_character_count = 0 ) {
	$post_ID = get_the_ID();

	if ( empty( $post_ID ) ) {
		return null;
	}
	if ( has_excerpt() || 0 === $trim_character_count ) {
		the_excerpt();

		return;
	}
	$excerpt = wp_html_excerpt( get_the_excerpt( $post_ID ), $trim_character_count, '[...]' );
	echo $excerpt;
}

function asgard_excerpt_more() {
	if ( ! is_single() ) {
		$more = sprintf( '<a class="asgard-read-more text-white mt-3 btn btn-info" href="%1$s">%2$s</a>',
			get_permalink( get_the_ID() ),
			__( 'Read more', 'asgard' )
		);
	}

	return $more;
}

function asgard_pagination(){
	$allowed_tags = [
		'span' => [
			'class' => []
		],
		'ul'    =>[
			'class' => [],
		],
		'li'    =>[
			'class' => [],
		],
		'a'    => [
			'class' => [],
			'href'  => [],
		],
	];
	$args  =   [
		'type'      => 'array',
		'prev_next' => true,
		'prev_text' => __('« Prev'),
		'next_text' => __('Next »'),
	];
	$pages = paginate_links($args);
	if (is_array($pages)) {
		$pagination = '<ul class="pagination justify-content-center">';
		foreach ($pages as $page) {
			$current_class = strpos($page, 'current') ? 'active' : '';
			$pagination .= '<li class="page-item '.$current_class.'">' . str_replace('page-numbers', 'page-link', $page) . '</li>';
		}
		$pagination .= '</ul>';
	}
	printf('<nav class="asgard-pagination">%s</nav>', wp_kses($pagination, $allowed_tags));
}