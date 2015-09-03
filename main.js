/**
 * Created by martynuk on 03.09.15.
 */
(function($){
	/* trigger when page is ready */
	$(document).ready(function (){

		//Tabs functionality
		//Firstly hide all content divs
		$('#generic-tabs div').hide();
		//Then show the first content div
		$('#generic-tabs div:first').show();
		//Add active class to the first tab link
		$('#generic-tabs ul#tabs li:first').addClass('active');
		//Functionality when a tab is clicked
		$('#generic-tabs ul#tabs li a').click(function(){
			//Firstly remove the current active class
			$('#generic-tabs ul#tabs li').removeClass('active');
			//Apply active class to the parent(li) of the link tag
			$(this).parent().addClass('active');
			//Set currentTab to this link
			var currentTab = $(this).attr('href');
			//Hide away all tabs
			$('#generic-tabs div').hide();
			//show the current tab
			$(currentTab).show();
			//Stop default link action from happening
			return false;
		});
	});
})(window.jQuery);