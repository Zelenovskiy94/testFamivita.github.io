'use strict'

function setProductGallery (elem) {
    let urls = []

    let galleryImg = document.querySelectorAll(elem + " img")
    galleryImg.forEach(img => urls.push(img.src))

    $(elem).zoomy(urls, {
      });
    
}
setProductGallery ('#product__gallery')

$('.video').parent().click(function () {

  if($(this).children(".video").get(0).paused){       
    $(this).children(".video").get(0).play();   
    $(this).children(".playpause").fadeOut();
  } else {      
     $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
  }
  });