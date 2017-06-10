$(document).ready(function () {
	$(".nav-button").on("click", openMenu);

	function openMenu() {
		$(".navi-bar ul").toggleClass("open");
	}
});
