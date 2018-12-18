$(document).ready(function() {
	$('.slide_toggle').on('click', function(e) {
    e.preventDefault();

        var $this = $(this);

        if ($this.hasClass('active_bar')){
            $('.sliding_bar').css('width', '0');
            $('.slide_post_list').hide(300);
            $this.removeClass('active_bar'); //открыли 
        }

        else {
            $('.sliding_bar').css('width', '90%');
            $('.slide_post_list').show(300);
            $this.addClass('active_bar'); //открыли 
        }	
  })
})