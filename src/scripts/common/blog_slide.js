$(document).ready(function(){

	const postList = $( '.blog__posts').find('.post');
	const postName = $( '.post_list').find('.post_list__item');	
	const slide_postName = $( '.slide_post_list').find('.slide_post_list__item');	

	postList.slice(0,2).toggleClass('activePost');
	postName.first().toggleClass('active_name');
	slide_postName.first().toggleClass('slide_active_name');

	console.log ('postList length:', postList.length)
    	
	$('.slide_article, .article').on('click', function(e) {
		e.preventDefault()   
		
		console.log ('clicked');

		var postItem = $(this).parent();
		var clicked = postItem.index();
		var activeName = $('li.post_list__item.active_name').index();	
		var slide_activeName = $('li.slide_post_list__item.slide_active_name').index();		
		var activePost = $('.blog__posts').find('.activePost');
		
		if (activeName != clicked){
			postName.eq(activeName).toggleClass('active_name');
			slide_postName.eq(slide_activeName).toggleClass('slide_active_name');

			activePost.each(function() {
				$( this ).toggleClass('activePost');
			  });

			postName.eq(clicked).toggleClass('active_name');
			slide_postName.eq(clicked).toggleClass('slide_active_name');

			postList.slice(clicked,clicked+2).toggleClass('activePost');

		}
		
	})		
})