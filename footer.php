<?php
/**
 * Footer Template
 *
 * @package Asgard
 */

?>

</div>
<footer>
    <div class="footer-widget">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                </div>
                <div class="col-md-4 col-sm-6">
	                <?php dynamic_sidebar('sidebar-2'); ?>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="social-links">
                        <ul class="d-flex">
                            <li class="list-unstyled">
                                <a href="https://www.facebook.com/" ><svg width="48" height="48" fill="red"><use href="#icon-facebook"></use></svg></a>
                            </li>
                            <li class="list-unstyled">
                                <a href="https://www.twitter.com/" ><svg width="48" height="48"><use href="#icon-twitter"></use></svg></a>
                            </li>
                            <li class="list-unstyled">
                                <a href="https://www.linkedin.com/" ><svg width="48" height="48"><use href="#icon-linkedin"></use></svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>

<?php
wp_footer();
get_template_part('template-parts/content','svgs');
?>
</body>
</html>
