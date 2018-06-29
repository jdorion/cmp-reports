/* Contains all global configuration options for JS libraries */

;(function( $ ) {

    //jQuery UI workaround so the Today button selects the current date and populates the input field
    jQuery.datepicker._gotoToday = function(id) {
        var today = new Date();
        var dateRef = jQuery("<td><a>" + today.getDate() + "</a></td>");
        this._selectDay(id, today.getMonth(), today.getFullYear(), dateRef);
    };

    // Function used by Select2 to add hover text to the OPTION tags within a SELECT dropdown list
    window.addTitleHover = function (item) {
        var originalOption = item.element;
        var originalText = item.text;
        var title = $(originalOption).attr("title");
        if (typeof title !== typeof undefined && title !== false)
            return "<span title='" + title + "'>" + originalText + "</span>";
        else
            return originalText;
    }

    $(document).ready(function() {

        //If an error is displayed on-screen, and the error exists on a tab that isn't in view, simulate a click on the item to switch tabs
        if  (($(".cn-error-msg").length) && ($("div[role='tabpanel']").length) && ($("div[role='tabpanel']:first:hidden"))) {
            $(".cn-error-msg ol li a:first-child")[0].click();
        }

        //Switches to the correct tab for each field error generated
       $(".cn-error-msg ol li a").on("click", function (event) {
            event.preventDefault();
            var url = $(this).attr('href');
            var matches = url.match(/#.*$/);

            if (matches) {
                fieldInError = matches[0];
            }

            if ($(fieldInError).closest("div[role='tabpanel']").length) {
                var innerTabToSelect = "#"
                    + $(fieldInError).closest("div[role='tabpanel']").attr(
                        'id');
                var innerTabContainer = $(innerTabToSelect).closest(
                    ".wet-boew-tabbedinterface");
                var outerTabToSelect = "#"
                    + $(innerTabContainer).closest("div[role='tabpanel']")
                        .attr('id');
                var outerTabContainer = $(outerTabToSelect).closest(
                    ".wet-boew-tabbedinterface");

                $(outerTabContainer).easytabs('select', outerTabToSelect);
                $(innerTabContainer).easytabs('select', innerTabToSelect).bind(
                    'easytabs:after', function () {
                        $(fieldInError).focus();
                    });
                $(fieldInError).focus();
            }
            else {
                $(fieldInError).focus();
            }
        });

		// Tablesaw - close menu on click outside menu.
		$("div.dialog-table-coltoggle.tablesaw-columntoggle-popup").on("click", function(e) { 
			e.stopPropagation(); 
		});


    });
})( jQuery );
