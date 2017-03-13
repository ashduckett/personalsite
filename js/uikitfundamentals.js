$(document).ready(function () {
	// Hide everything initially
	$('.article').hide();

	// Display only the first article
	$('#click-counter-plan').show();

	$('#item-selection').click(function(event) {
		var itemClicked = $(event.target);
		var id = itemClicked.data('pertains-to');

		// Hide everything
		//$('.article').hide();

		// Show the article we're interested in
		//$('#' + id).show();
		console.log('click');
		$("#test").load("articles/" + id + ".html");

		
		
	});

	$("#test").load("articles/click-counter-plan.html");


	
});