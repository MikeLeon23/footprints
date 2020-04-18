$('header .nav').removeClass('wow').removeClass('fadeInDown');

$('header .btn').click(function(){
    $('header .nav').slideToggle(300, function(){
        
    });
    $(this).toggleClass('active');
    $('header .btn span').toggleClass('active');
});