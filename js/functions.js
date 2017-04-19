$(window).scroll(function(){

    var w$scroll = $(this).scrollTop();
//    console.log(w$scroll)

    $('.title').css({
        'transform' : 'translate(0px, '+ w$scroll /2 +'%)'
    });
})
