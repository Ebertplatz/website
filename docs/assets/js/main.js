$(document).ready(function(){
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 286
	});
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});
});
