$(document).ready(function() {
    $(window).resize(function() {
        var maxHeight = 0;
        var contentHeight = 0;
        $('.project-card').each(function(index){
        	var height = $(this).height();

        	if(maxHeight < height){
        		maxHeight = height;
        		contentHeight = $(this).find('.card-contents').height();
        	}
        });

        if(contentHeight > maxHeight){
            contentHeight -= 40;
        }

		$('.card-contents').each(function(index){
			$(this).height(contentHeight);
        });


    }).resize();
});