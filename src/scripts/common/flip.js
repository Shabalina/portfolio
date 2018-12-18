$(document).ready(function(){

   // console.log ('helloj');
    var plate = $('.flip__container');
    var flip = $('.flipper');
    var flip_btn = $('.auth_button');
    var on_main_btn = $('.button_list-welcome').find('.link_button').first();
    var deg = 0;

    flip_btn.on('click', function(e) {
        e.preventDefault();
        console.log('clicked');
        deg = deg+180;        
        flip.css({"transform": "rotateY(" + deg + "deg)"});
        flip_btn.css({"display":"none"})
        deg = 180;
     //   plate.toggleClass('flip_active_back flipper');
    });

    on_main_btn.on('click', function(e) {
        e.preventDefault();
        console.log('back clicked');
        deg = deg+180;
        flip.css({"transform": "rotateY(" + deg + "deg)"});
        flip_btn.css({"display":"initial"})
        deg = 0;
    });


})
