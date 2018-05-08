var quotes = [
'I Watch Twilight Every Night',
'I Will Always Give You The Truth I Will Never Lie To You In My music If You Cant Handle My Feelings And Emotions Please Unfollow Me',
'Once You Go In You Always Come Out Alive',
'I Only Apply To The Sixth Amendment',
'Dying Is MainStream #MONEY',
'Ill Never Forget The Blogs That Believed In Me Since The Begging',
'People Tell Me To Smile I Tell Them The Lack Of Emotion In My Face Doesn\'t Mean I\'m Unhappy',
'Luke. Who Has The Trident',
'Umm Who Has The Floss',
'Most Trees Are Blue',
'You Must Not Know Fashion',
'I Hope It Doesn\'t Take For Me To Die For You To See What I Do For You'
];

var backgrounds = [
"#86A136"];
var darker = [
"#364214", ];
var lighter = [
"#CCF457"
];


function newQ() {
    var randomNumber = Math.floor(Math.random() * quotes.length);

    document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
};

function kolor() {
	var randomColor = Math.floor(Math.random() * backgrounds.length);

    document.getElementById('all').style.backgroundColor = backgrounds[randomColor];
    document.getElementById('box').style.color = darker[randomColor];
    document.getElementById('box').style.backgroundColor = lighter[randomColor];
    document.getElementById('box').style.borderColor = darker[randomColor];
    document.getElementByName('button tt').style.backgroundColor = darker[randomColor];


};

function tweetIt () {
	var phrase = document.getElementById('quotesDisplay').innerText;
	var tweetUrl = "https://twitter.com/share?text=" +
	encodeURIComponent("'" + phrase + "'" + ' #LoveJaden');

	window.open(tweetUrl);

}