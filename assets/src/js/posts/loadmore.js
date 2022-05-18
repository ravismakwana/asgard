(function( $ ){
    class LoadMore {
        constructor() {
            this.ajaxUrl = ajax_object?.ajax_url ?? '';
            this.ajaxNonce = ajax_object?.ajax_nonce ?? '';
            this.loadMoreBtn = $("#load-more");
            this.init();
        }
        init() {
            if( ! this.loadMoreBtn.length ) {
                return null;
            }

            this.loadMoreBtn.on('click', () => {
                this.handleLoadMorePosts();
            });
        }

        handleLoadMorePosts() {
            const page = this.loadMoreBtn.data('page');
            if( !page ) {
                return null;
            }
            const newPage = parseInt( page ) + 1;

            $.ajax({
                url: this.ajaxUrl,
                type: 'POST',
                data: {
                    page: page,
                    action: 'loadmore_posts',
                    ajax_nonce: this.ajaxNonce,
                },
                success: ( response ) => {
                    // console.log( response );
                    if( 0 === parseInt( response )) {
                        this.loadMoreBtn.remove();
                    } else {
                        this.loadMoreBtn.data('page', newPage);
                        $('#load-more-content').append( response );
                    }
                },
                error: ( response ) => {
                    console.log( response );
                },
            });
        }
    }
    new LoadMore();
})( jQuery );