/* Gallery and conference */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
if(document.body.contains(document.getElementById('mySlides'))){
  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Recommendations tab*/
function openTest(evt, status) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(status).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if(document.body.contains(document.getElementById('defaultOpenExp'))){
    document.getElementById("defaultOpen").click();
}

/*  Experience tab */
function openExp(evt, status) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentExp");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinksExp");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(status).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if(document.body.contains(document.getElementById('defaultOpenExp'))){
    document.getElementById("defaultOpenExp").click();
}

/* Home page video slider*/
$('.play-button').on('click', function () {
    $(this).hide();
    $(this).parent().fadeOut();
    $(this).parent().siblings('.slider-video')[0].play();
 });

  $('.slider-video').on('play', function () {
      $(this).attr('controls', '1');
  });

  // Additional code for the slider
  var pos = 0,
      slides = $('.video-slide'),
      numOfSlides = slides.length;

  function nextSlide(){
      stopCurrentVideo();
      slides.eq(pos).animate({left:'-100%'},500);
      pos = pos >= numOfSlides-1 ? 0 : ++pos;
      slides.eq(pos).css({left:'100%'}).animate({left:0},500);
  }

  function previousSlide(){
      stopCurrentVideo();
      slides.eq(pos).animate({left:'100%'},500);
      pos = pos == 0 ? numOfSlides-1 : --pos;
      slides.eq(pos).css({left:'-100%'}).animate({left:0},500);
  }

  function stopCurrentVideo(){
      $('.slider-video:eq('+pos+')').load().removeAttr('controls')
      .siblings('.overlay-content').show().find('.play-button').show();
  }

  $('.left').click(previousSlide);
  $('.right').click(nextSlide);


/* contact form popup */
(function(){
  $('html').addClass('js');
  
  var contactForm = {
    container: $('#contactpopup'),
    config: {
      effect: 'slideToggle',
      speed: 200
    },
    
    init: function(config){
      $.extend(this.config, config);
      
      $('#c-btn').on('click', this.show);
    },

    show: function(){
      var cf = contactForm,
          container = cf.container,
          config = cf.config;
                    

      if(container.is(':hidden')){
        cf.close.call(container);
        container[config.effect]
        (config.speed);
      }
    },

    close: function(){
      var $this = $('#contactpopup'); 
      
      if($this.find('span.close').length) return;

      $('<span class=closepopup>&nbsp</span>')
        .prependTo(this)
        .on('click', function(){
        $this[contactForm.config.effect](contactForm.config.speed);
      })
    }
  };

contactForm.init({
  effect: 'fadeToggle',
  speed: 200
});
})();


