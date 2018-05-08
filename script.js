$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#wrapperAbout").offset().top
    }, 400);
});

$("#aboutme").click(function() {
    $('html, body').animate({
        scrollTop: $("#wrapperAbout").offset().top
    }, 400);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#wrapperProjects").offset().top
    }, 400);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#wrapperContact").offset().top
    }, 400);
});
$("#stack").click(function() {
    $('html, body').animate({
        scrollTop: $("#wrapperStack").offset().top
    }, 400);
});



$("#wrapperUp").click(function() {
    $('html, body').animate({
        scrollTop: $("#menu").offset().top
    }, 400);
});



$("#email").click(function(event) {
  var copyTextarea = 'konradhyzy@gmail.com'


  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

$("#hamburger").click(function(){
    $("#menuMobile").css('top', '0%');

    $("#close").css('display', 'inline-grid');
})

$("#close").click(function(){
    $("#menuMobile").css('top', '-100%');
    $("#close").css('display', 'none');
})


$("#aboutmeMob").click(function(){
    $("#menuMobile").css('top', '-100%');
    $("#close").css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#wrapperAbout").offset().top
    }, 400);
})
$("#projectsMob").click(function(){
    $("#menuMobile").css('top', '-100%');
    $("#close").css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#wrapperProjects").offset().top
    }, 400);
})
$("#stackMob").click(function(){
    $("#menuMobile").css('top', '-100%');
    $("#close").css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#wrapperStack").offset().top
    }, 400);
})
$("#contactMob").click(function(){
    $("#menuMobile").css('top', '-100%');
    $("#close").css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#wrapperContact").offset().top
    }, 400);
})




