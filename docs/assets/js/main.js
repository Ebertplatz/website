function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function masonry() {
	var grids = document.querySelectorAll('.grid');

	for(var i = 0; i < grids.length; i++) {
		new Masonry( grids[i], {
  		// options
  		itemSelector: '.grid-item',
  		columnWidth: 216
  	});
	}
}

ready(masonry());
