$(document).ready(function () {
	$(function () {
		$("a[rel]").overlay({

			mask: 'darkred',
			effect: 'apple',

			onBeforeLoad: function () {

				// grab wrapper element inside content
				var wrap = this.getOverlay().find(".contentWrap");

				// load the page specified in the trigger
				wrap.load(this.getTrigger().attr("href"));
			}

		});
	});
});
