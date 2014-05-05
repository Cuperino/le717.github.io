/*
 * Created 2014 Triangle717
 * <http://Triangle717.WordPress.com/>
 *
 * Licensed under The MIT License
 * <http://opensource.org/licenses/MIT/>
 */


(function() {
  "use strict";
  /* Show sidebar once button is clicked/tapped */
  $(".sidebar-btn").on("click", function() {
    $(".sidebar").toggleClass("sidebar-hidden");
    $(".sidebar-btn").toggleClass("sidebar-btn-rotate");
  });

  /*$(window).resize(function() {
    if (($(window).width() >= 320 || $(window).width() <= 320) && $(window).width() <= 720) {
      $("#sidebar-btn").addClass("sidebar-btn-visible");
      $("#sidebar").addClass("sidebar-hidden");

    } else {
      $("#sidebar-btn").removeClass("sidebar-btn-visible");
      $("#sidebar").removeClass("sidebar-hidden");
    }
  });*/
})();

function shrinkImages() {
  "use strict";
  /* Resize images on mobile devices */

  $("body").find("img").each(function() {
    var $this = $(this),
    $imgWidth = $this.width();

    // If this is a mobile browser, scale down non-exempt image sizes
//    if ($.browser.mobile || $.browser.desktop) {
    if ($.browser.mobile) {
      if (!$this.hasClass("no-mobile-resize") && !$this.hasClass("emoji")) {

        // However, do it only if the image is wider than the screen
//        console.log("Image width: " + $imgWidth);
//        console.log("Image src: " + $this.attr("src"));
//        console.log("Window Width: " + $(window).width());
//        console.log($(window).width() % $imgWidth >= 100);

        if ($(window).width() % $imgWidth >= 50) {
          $this.width($imgWidth - ($(window).width() / 2));
        }
      }
    }
  });
}


$(function() {
  "use strict";

  shrinkImages();

  // Replace the SVG with a PNG on IE (IE HATES SVGs)
  if ($.browser.msie) {
    var $imgSrc = $(".ie-svg").attr("src");
    $(".ie-svg").attr("src", $imgSrc.substring(0, $imgSrc.length - 3) + "png");
  }

  // Hide non-mobile-ready elements
  if ($.browser.mobile) {
    $(".no-mobile").css("display", "none");
  }

  // Fully center the items that need centering
  var $centered = $(".fully-centered");
  $centered.css("margin-left", -$centered.width() / 2);
  $centered.css("margin-top", -$centered.height() / 2);
  
  $.ajax({
    dataType: "json",
    url: "http://le717.github.io/json/featured.json",
    success: function(data) {
      $("#featured-code-box").css("display", "block");
      $("#featured-code-box").html(data.featuredCode[0].snippet);
      $("#featured-code-desc").html(data.featuredCode[0].description);
    }
  });

//  // Get date of last commit using GitHub Pages API
//  $.getJSON("https://api.github.com/repos/le717/le717.github.io", function(data) {
//      var lastUpdate = data.updated_at.replace(/(T(.*))$/g, "");
//      //var lastUpdate = "Right now";
//      $("#last-update").text("Last update: {0}".format(lastUpdate));
//    });
});
