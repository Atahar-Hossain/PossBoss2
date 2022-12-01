$(document).ready(function() {


    $(window).on('scroll', function () { 
        var scroll = $(window).scrollTop(); 
        if (scroll < 10) { 
         $(".header-sticky").removeClass("sticky"); 
        } else { 
         $(".header-sticky").addClass("sticky"); 
        } 
       });


    // Variables declarations

    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');

    // Sidebar

    var Sidemenu = function() {
        this.$menuItem = $('#sidebar-menu a');
    };

    function init() {
        var $this = Sidemenu;
        $('#sidebar-menu a').on('click', function(e) {
            if ($(this).parent().hasClass('submenu')) {
                e.preventDefault();
            }
            if (!$(this).hasClass('subdrop')) {
                $('ul', $(this).parents('ul:first')).slideUp(350);
                $('a', $(this).parents('ul:first')).removeClass('subdrop');
                $(this).next('ul').slideDown(350);
                $(this).addClass('subdrop');
            } else if ($(this).hasClass('subdrop')) {
                $(this).removeClass('subdrop');
                $(this).next('ul').slideUp(350);
            }
        });
        $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }

    // Sidebar Initiate
    init();

    // Mobile menu sidebar overlay

    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
        $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        $('#task_window').removeClass('opened');
        return false;
    });

    $(".sidebar-overlay").on("click", function() {
        $('html').removeClass('menu-opened');
        $(this).removeClass('opened');
        $wrapper.removeClass('slide-nav');
        $('.sidebar-overlay').removeClass('opened');
        $('#task_window').removeClass('opened');
    });

    // Sidebar Slimscroll

    if ($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
            height: 'auto',
            width: '100%',
            position: 'right',
            size: '7px',
            color: '#ccc',
            wheelStep: 10,
            touchScrollStep: 100
        });
        var wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $('.sidebar .slimScrollDiv').height(wHeight);
        $(window).resize(function() {
            var rHeight = $(window).height() - 60;
            $slimScrolls.height(rHeight);
            $('.sidebar .slimScrollDiv').height(rHeight);
        });
    }

    // Small Sidebar

    $(document).on('click', '#toggle_btn', function() {
        if ($('body').hasClass('mini-sidebar')) {
            $('body').removeClass('mini-sidebar');
            $('.subdrop + ul').slideDown();
        } else {
            $('body').addClass('mini-sidebar');
            $('.subdrop + ul').slideUp();
        }
        return false;
    });

    // bottom button
    $(document).on('click', '.toggle-sidebar-button', function() {
        if ($('body').hasClass('mini-sidebar')) {
            $('body').removeClass('mini-sidebar');
            $('.subdrop + ul').slideDown();
        } else {
            $('body').addClass('mini-sidebar');
            $('.toggle-sidebar-button').addClass('.toggle-sidebar-button-collapse');
            $('.subdrop + ul').slideUp();
        }
        return false;
    });

    // dashboard chart active





    // increment/decrement 
 
    const decreaseNumber = (incdec, itemprice) => { 
        let itemval = document.getElementById(incdec); 
        if (itemval.value <= 1) { 
            itemval.value = 1; 
            alert('0 quantity not allowed'); 
        } else { 
            itemval.value = parseInt(itemval.value) - 1; 
        } 
        itemval.style.background = '#fff'; 
        itemval.style.color = '#000'; 
    } 

    const increaseNumber = (incdec, itemprice) => { 
        let itemval = document.getElementById(incdec); 
        if (itemval.value >= 100) { 
            itemval.value = 100; 
            alert('max 5 allowed'); 
            itemval.style.background = "red"; 
            itemval.style.color = "#fff"; 
        } else { 
            itemval.value = parseInt(itemval.value) + 1; 
        } 

    } 


    // Quantity 2
    const minus = $('.quantity__minus'); 
    const plus = $('.quantity__plus'); 
    const input = $('.quantity__input'); 
    minus.click(function(e) { 
        e.preventDefault(); 
        var value = input.val(); 
        if (value > 1) { 
            value--; 
        } 
        input.val(value); 
    }); 

    plus.click(function(e) { 
        e.preventDefault(); 
        var value = input.val(); 
        value++; 
        input.val(value);
    });


});