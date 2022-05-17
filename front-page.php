<?php

/**
 * Front Page Template
 *
 * @package Asgard
 */

get_header();

?>
<div id="primary">
    <div id="main">
        <div class="home-wrap">
		<?php
		if ( have_posts() ) {

			while ( have_posts() ) : the_post();
				get_template_part( 'template-parts/content', 'page' );
			endwhile;

		} else {
			get_template_part( 'template-parts/content', 'none' );
		}
		get_template_part( 'template-parts/components/posts-carousel' );
		?>

        </div>
    </div>
</div>
<?php get_footer(); ?>

