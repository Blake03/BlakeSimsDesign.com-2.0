//nav-menue-toggle
$(".navbar-toggle").click(function(){
  $(".navbar-menue").toggle();
});

//navbar-fade-in
$(window).on('scroll', function() {
  if ($(window).scrollTop() >= 340) {
      $('.navbar').fadeIn('slow');
   } else {
      $('.navbar').fadeOut('slow');
  }
});
     
//smooth-scroll-effect   
$("a").on("click", function(b) {
    if ("" !== this.hash) {
        b.preventDefault();
        var a = this.hash;
        $("html, body").animate({
            scrollTop: $(a).offset().top
        }, 800, function() {
            window.location.hash = a
        })
    }
});