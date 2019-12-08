$(document).ready(function() {
  $(".js--section-main").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("fixed-nav");
      } else {
        $("nav").removeClass("fixed-nav");
      }
    },
    {
      offset: "-80px"
    }
  );

  $(".js-scroll-to-top").click(function() {
    $("html, body").animate(
      { scrollTop: $("#page-top").offset().top - 72 },
      1000
    );
  });

  $(".js-scroll-to-portfolio").click(function() {
    $("html, body").animate(
      { scrollTop: $("#portfolio").offset().top - 72 },
      1000
    );
  });

  $(".js-scroll-to-about").click(function() {
    $("html, body").animate({ scrollTop: $("#about").offset().top - 72 }, 1000);
  });

  $(".js-scroll-to-contact").click(function() {
    $("html, body").animate(
      { scrollTop: $("#contact").offset().top - 72 },
      1000
    );
  });

  let sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function() {
    let cur_pos = $(this).scrollTop();

    sections.each(function() {
      let top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active-link");
        sections.removeClass("active-link");

        $(this).addClass("active-link");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active-link");
      }
    });
  });

  $(window).on("resize", function() {
    if ($(window).width() < 1025) {
      $("#mobile-unflex").addClass("flex-column");
    } else {
      $("#mobile-unflex").removeClass("flex-column");
    }
  });

  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-nav-toggle");
  let navLink = document.querySelectorAll(".nav-link");

  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });

  navLink.forEach(function(item) {
    item.addEventListener("click", function() {
      mainNav.classList.toggle("active");
    });
  });
});