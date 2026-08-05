(function($) {
    "use strict";

    function blogRecentPost() {
        $(".popup-image").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });
    }

    function galleryPost() {
        if ($(".grid").length > 0) {

            // Initialize each grid
            $(".grid").imagesLoaded(function() {
                $(this).isotope({
                    itemSelector: ".grid-item",
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".grid-item",
                    },
                });
            });

            // Filter click handler
            $(document).on("click", ".filter-tab button", function(event) {
                event.preventDefault();
                var filterValue = $(this).attr("data-filter");
                var filterIndex = $(this).closest("[data-filter-index]").attr("data-filter-index");
                var $grid;

                if (typeof filterIndex !== "undefined") {
                    $grid = $(".tab-pane").eq(filterIndex).find(".grid");
                } else {
                    $grid = $(this).closest("section").find(".grid");
                }

                // active class update
                $(this).closest(".filter-tab").find("button").removeClass("active");
                $(this).addClass("active");

                if ($grid.length > 0) {
                    $grid.isotope({
                        filter: filterValue
                    });
                }
            });

            $(document).on("shown.bs.tab", "[data-bs-toggle='tab']", function() {
                var index = $(this).closest(".nav").find("button").index(this);

                // filter-wrapper show/hide
                $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                    .find(".filter-wrapper")
                    .addClass("d-none")
                    .removeClass("filter-active");

                $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                    .find(".filter-wrapper[data-filter-index='" + index + "']")
                    .removeClass("d-none")
                    .addClass("filter-active");

                var $grid = $(".tab-pane").eq(index).find(".grid");
                if ($grid.length > 0) {
                    $grid.isotope({
                        filter: "*"
                    });
                    $grid.isotope("layout");
                }

                // filter button reset to All
                $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                    .find(".filter-wrapper[data-filter-index='" + index + "'] .filter-tab button")
                    .removeClass("active");
                $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                    .find(".filter-wrapper[data-filter-index='" + index + "'] .filter-tab button[data-filter='*']")
                    .addClass("active");
            });
        }
    }

    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/ebuzz_blog_recent_post.default", blogRecentPost, );
        elementorFrontend.hooks.addAction("frontend/element_ready/ebuzz_gallery_post.default", galleryPost, );
    });
})(jQuery);