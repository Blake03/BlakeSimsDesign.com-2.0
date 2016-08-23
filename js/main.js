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
        
