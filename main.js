$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $('#myBtn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    $('#overlayNav').css('display','');
    return false;
  });

  $('#overlayNav a').click(function (e) {
    $('#overlayNav').css('display','none');
  });
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
