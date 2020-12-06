
$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();


	// Fixed Header

	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {

			if(scrollOffset >= introH) {
				header.addClass("fixed");
			} else {
				header.removeClass("fixed");
			}
	}

	// Smooth Scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);

			$("#nav").removeClass("active");


	});

	// Burger menu

	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	// Collapse

	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$(this).toggleClass("active");
	});

	//slick slider

	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
  		slidesToScroll: 1
	});
})

// Mail form

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});