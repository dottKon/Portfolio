$(document).ready(function(){
	

	// Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var $pane = $('#pane1');
    $('#title').click(function() {
    	location.reload();
    });


    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 500) {
            $('#searchbox').click(function(){
			$(this).css({'width': '30vw', 'border-radius': '20px', 'background-color': '#fc6468'});
			});
        } else {
        	$('#searchbox').click(function(){
				$(this).css({'width': '80vw', 'border-radius': '20px', 'background-color': '#fc6468'});
			});
        }};
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
	$('#searchbox').keypress(function (e) {
		if (e.which == 13) {
            e.preventDefault();
       }
	});


	$('#btn').click(function(){
		var curHeight = $('.box').height();
		var res = document.getElementById('searchbox').value;
		$('#results').html('');
		$.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&search=" + res + "&limit=9&origin=*&namespace=0&format=json", function(data){
			var dlug = data[1].length;

			if(res=='') {
				$('#results').append("<h2>You need to type something!</h2>");
			} else if(dlug == 0) {
				$('#results').append("<h2>No results :(</h2>")

			} else {
				var name = data[1];
				var link = data[3];
				for(x=0; x<dlug; x++) {
					$('#results').append("<div id='resu'><a href='" + link[x] +"' target=blank><h4>" + name[x]+ "</h4></a></div>");
				};
				$('.box').css('height', 'auto');
					var autoHeight = $('.box').height();
					$('.box').height(curHeight).animate({height: autoHeight}, 50);


			


			}
		})
	})

});