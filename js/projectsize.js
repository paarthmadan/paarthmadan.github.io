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

        $('.project-card').each(function(index){
            $(this).css("min-height", maxHeight); 
        });

    }).resize();
});