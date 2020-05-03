$(function () {
    $('#homeCarousel').carousel({
        interval: 5000,
        pause: "false"
    });
    $('#slowButton').click(function () {
        c = $('#homeCarousel')
        opt = c.data()['bs.carousel'].options
        opt.interval = 10000;
        c.data({ options: opt })
        
    });
    $('#fastButton').click(function () {
        c = $('#homeCarousel')
        opt = c.data()['bs.carousel'].options
        opt.interval = 1000;
        c.data({ options: opt })
    });
   
    
});
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 60.8) {
            $("#trub").removeClass("D");
        } else {
            $("#trub").addClass("D");
        }
    });
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
   
    $(".sld").click(function () {

        var c = parseInt( $(this).attr("data-slide-to"));
        $('#homeCarousel').carousel(c);
    });
   
    $("#firstc").addClass("active");
    $(".collapseManager").click(function () {
      
        var cc = $(this).attr("data-target");
        if ($(this).attr("aria-expanded") == "true") {
            return;
        }
      
        var elements = document.getElementsByClassName("collapseManager");
        elements.forEach(element => {
            if (element.getAttribute("data-target") != cc) {
               
                var c = element.getAttribute("data-target");
                $(c + "z").removeClass("arrw2");
               
                $(c).collapse("hide");
                element.setAttribute("aria-expanded", "false");
               
            }
           

        }
        );
        
        $(cc).collapse("show");
        $(cc).attr("aria-expanded", "true");
        var e = cc + "z";
        $(e).addClass("arrw2");
    });
    
});
