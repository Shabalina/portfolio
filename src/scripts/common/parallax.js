var parallax = (function(){
    var bg = document.querySelector('.hero__bg')
    var section = document.querySelector('.hero__sections')
    var user = document.querySelector('hero__user')

    return{
        move: function (block, windowScroll, strafeAmount){
            var strafe = windowScroll/-strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe+ ',0)';
            var style = block.style;

            style.top = strafe;
            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        
        init: function (wScroll){
            this.move(bg, wScroll, 45);
            this.move(section, wScroll, 20);
            this.move(user, wScroll, 3);
        }
    }  
    
}())

window.onscroll = function() {
    var wScroll = window.pageYOffset;

  //  console.log(wScroll);

    parallax.init(wScroll);

}