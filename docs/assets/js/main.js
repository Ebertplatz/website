// $(document).ready(function(){
// 	var grids = document.querySelectorAll('.grid');

// 	for(var i = 0; i < grids.length; i++) {
// 		grids[i] = $(grids[i]).masonry({
// 			// options
//   			itemSelector: '.grid-item',
//   			columnWidth: 286
// 		});

// 		grids[i].imagesLoaded().progress( function() {
//   			grids[i].masonry('layout');
// 		});
// 	}
// });

$(document).ready(function(){
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 286
	});
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});
});

// layout Masonry after each image loads
