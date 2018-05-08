$(document).ready(function() {
    // Quite active users recommendation
    var usrs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", 'comster404'];

    // Global values to be used
    var list = [];
    var url;
    var status;

    for(i=0; i<usrs.length; i++) {

        // GETTING ANOTHER CALL for STREAM value

        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/streams/' + usrs[i],
            headers: {
                'Client-ID': 'sghyuhtlglspe36ldvxdbreyq6crku'
        },
            success: function(data) {
                console.log(data);
                
                if(data.stream == null) {
                $('#status').append('<div id="stream">NO STREAM</div>')
                } else {
                $('#status').append('<div id="stream">' + data.stream.game +'</div>')
                };

                url = data._links.channel;


                $('#list').append('<div id="name"><a href="' + url + '" target=blank>' + url.substr(38) + '</a></div>');

                
            },
        
        });
    }
});