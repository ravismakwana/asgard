<?php
/**
 * Blog Template
 *
 * @package Asgard
 */
$responsiveClasses = (!is_single()) ? ' col-md-4 col-sm-6 ': '';
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('mb-5'. $responsiveClasses ); ?>>

    <?php
        get_template_part('template-parts/components/blog/entry-header');
        get_template_part('template-parts/components/blog/entry-meta');
        get_template_part('template-parts/components/blog/entry-content');
        get_template_part('template-parts/components/blog/entry-footer');
    ?>
</article>