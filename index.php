<?php
/**
 *  Main Index file
 *
 * @package Asgard
 */

get_header();
?>
<div id="primary">
    <div id="main">
        <?php
            if(have_posts()) {
                ?>
                <div class="container">
                    <?php
                        if(is_home() && (!is_front_page())) {
                            ?>
                            <header>
                                <h1 class="page-title mb-5"><?php single_post_title(); ?></h1>
                            </header>
                            <?php
                        }
                        ?>
                    <div class="row">
                        <?php
                        while(have_posts()) : the_post();
	                        get_template_part( 'template-parts/content', '', [ 'container_classes' => 'col-lg-4 col-md-6 col-sm-12 pb-4' ] );
                        endwhile;
                        ?>
                    </div>

                <?php
            } else {
	            get_template_part('template-parts/content', 'none');
            }
            asgard_pagination();
            ?></div><?php
        ?>
    </div>
</div>
<?php
get_footer();
