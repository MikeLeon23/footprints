$('header .btn').click(function(){
    $('header .nav.mobile').slideToggle(300);
    $(this).toggleClass('active');
    $('header .btn span').toggleClass('active');
});