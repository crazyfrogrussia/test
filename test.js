


"use strict";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ^^^
 * Глобальные-вспомогательные функции
 * ========================================================================== */

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';
  /**
   * определение существования элемента на странице
   */

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  var isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !(isApple && window.matchMedia('(min-width:1022px)').matches);

  // $('input[type=tel], input[name=kviz_phone_1]').mask("+7 (999) 999 - 99 - 99"); 

$("input[type=tel], input[name=kviz_phone_1]").inputmask("+7 (X99) 999 - 99 - 99", {
  definitions: {
    "X": {
      validator: "[9]"
    }
  }
});

$(document).on('click', '.product-thumbs__image', function (e) {
  $(this).addClass('loading');

  setTimeout(() => { 
    $(this).removeClass('loading');
}, 2000);

  $(this).closest('.product-thumbs').find('.product-thumbs__more a').trigger('click');
});


  $(document).on('focusout', '.size-form--type1 input[type=number]', function () {


    if($(this).val() < 200 || $(this).val() > 700) {
    
      if($(this).closest('.size-form__form').find('.error').length == 0){
    
        $(this).closest('.size-form__form').find('.size-form__title').after('<div class="error">Вы указали неверный размер. Пожалуйста, проверьте, что длина указана в сантиметрах в диапазоне от 200 до 700 см.</div>');
    
      }
    
    
    } else {
    
      $(this).closest('.size-form__form').find('.error').remove();
    
    
    }
    
    
    });
    
    
    $(document).on('focusout', '.size-form--type2 input[type=number], .size-form--type3 input[type=number]', function () {
    
    
    if($(this).val() < 80 || $(this).val() > 600) {
    
      if($(this).closest('.size-form__form').find('.error').length == 0){
    
        $(this).closest('.size-form__form').find('.size-form__title').after('<div class="error">Вы указали неверный размер. Пожалуйста, проверьте, что длина указана в сантиметрах в диапазоне от 80 до 600 см.</div>');
    
      }
    
    
    } else {
    
      $(this).closest('.size-form__form').find('.error').remove();
    
    
    }
    
    
    });
    
    
    
      $('.branch-p-form input[name^=size]').on('focusout', function () {
 
        console.log('AAAAA3');
    
    
        if($(this).val() < 80 || $(this).val() > 600) {
    
          if($('.size-kitchen__title .error').length == 0){
    
          $(this).closest('.size-kitchen').find('.size-kitchen__title').append('<div class="error"><br>Вы указали неверный размер. Пожалуйста, проверьте, что длина указана в сантиметрах в диапазоне от 80 до 600 см.</div>');
    
          }
          
    
          $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').addClass('hide');
    
    
        } else {
    
          if(current_holodos_position >= 1 && $('input[name=size_a3]').val().length >= 2 && $('input[name=size_b3]').val().length >= 2 && $('input[name=size_c3]').val().length >= 2) {
            console.log('current_holodos_position ' + current_holodos_position);
         $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide'); 
        }
    
    
          $('.size-kitchen__title .error').remove();
    
    
        }
    
    
      });
    
    
      $('.branch-straight input[name^=size]').on('focusout', function () {
    
    
    if($(this).val() < 200 || $(this).val() > 700) {
    
      if($('.size-kitchen__title .error').length == 0){
    
      $(this).closest('.size-kitchen').find('.size-kitchen__title').append('<div class="error"><br>Вы указали неверный размер. Пожалуйста, проверьте, что длина указана в сантиметрах в диапазоне от 200 до 700 см.</div>');
    
      }
    
      $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').addClass('hide');
    
    
    } else {
    
     
    
      if(current_holodos_position >= 1) {
    
        console.log('current_holodos_position ' + current_holodos_position);
    
         $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide'); 
        }
    
      $('.size-kitchen__title .error').remove();
    
    
    }
    
    
    });
    
    
    $('.branch-corner-left input[name^=size], .branch-corner-right input[name^=size]').on('focusout', function () {
    
    
    if($(this).val() < 80 || $(this).val() > 700) {
    
      if($('.size-kitchen__title .error').length == 0){
    
      $(this).closest('.size-kitchen').find('.size-kitchen__title').append('<div class="error"><br>Вы указали неверный размер. Пожалуйста, проверьте, что длина указана в сантиметрах в диапазоне от 80 до 700 см.</div>');
    
      }
    
      $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').addClass('hide');
    
    
    } else {
    
     
    
      if(current_holodos_position >= 1) {
    
        console.log('current_holodos_position ' + current_holodos_position);
    
         $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide'); 
        }
    
      $('.size-kitchen__title .error').remove();
    
    
    }
    
    
    });

    
    
 
  $('.app-footer__menu-item > a, .app-footer__menu-item > span').on('click', function (e) {
    if (window.matchMedia('(max-width:1000px)').matches) {
      e.preventDefault();
      $(this).closest('.app-footer__menu-item').toggleClass('opened');
      $(this).closest('.app-footer__menu-item').find('> ul').slideToggle();
    }
  });


  if (window.matchMedia('(min-width:768px)').matches) {
    if ($('.brand-block__list').length) {
      var tinySliderBrands = 0;
      $('.brand-block__list').each(function () {
        tinySliderBrands += 1;
        $(this).addClass('tnssliderBrands' + tinySliderBrands);
        var sliderBrands = tns({
          "container": '.tnssliderBrands' + tinySliderBrands,
          "nav": false,
          "navPosition": "bottom",
          "controls": true,
          "controlsPosition": "bottom",
          "gutter": 10,
          "items": 3,
          "autoplay": 1,
          "autoplayHoverPause": 1,
          "axis": "horizontal",
          "mouseDrag": false,
          "touch": true,
          "speed": 1000,
          "autoplayTimeout": 3000,
          "responsive": {
            "1000": {
              "items": 6
            }
          }
        });
        $(this).closest('.brand-block').find('.brand-block__more > a').on('click', function (e) {
          e.preventDefault();

          if ($(this).hasClass('update')) {
            sliderBrands = sliderBrands.rebuild();
            $(this).removeClass('update');
          } else {
            sliderBrands.destroy();
            $(this).addClass('update');
          }
        });
      });
    }
  } else {
    $('.brand-block__more > a').on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('update')) {
        $('.brand-block__list').removeClass('opened');
        $(this).removeClass('update');
      } else {
        $('.brand-block__list').addClass('opened');
        $(this).addClass('update');
      }
    });
  }


  $(document).on('click', '.product-thumbs__favorite button, .example-product-thumbs__favorite button', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
  $('.sorting__item .sorting__item-name, .sorting__item .sorting__item-body').on('click', function (e) {
    if ($(this).closest('.sorting__item').find('.sorting__item-popup').length) {
      $(this).closest('.sorting__item').find('.sorting__item-popup').slideToggle(400);
    }
  });
  $('.sorting__item-checkbox input').on('change', function (e) {
    var text = $(this).closest('.sorting__item-checkbox').find('> span').text();
    $(this).closest('.sorting__item').find('.sorting__item-body').text(text);
    $('.sorting__item-popup').slideUp(400);
  });
  $('.sorting__item.sorting__item--type input').on('change', function (e) {
    if ($(this).val() == 1) {
      $('.catalog-box__list').addClass('type2');
    } else {
      $('.catalog-box__list').removeClass('type2');
    }
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest('.sorting__item').length) {
      return;
    }

    $('.sorting__item-popup').slideUp(400);
  });


    $(document).on('click', '.material-thumbs__more:not(.video) a', function (e) {
    e.preventDefault();
    var $this = $(this),
        parrent = $this.closest('.material-thumbs').clone(),
        materialPopup = $('<div class="material-popup"><div class="material-popup__inner"><button class="material-popup__close"></button></div></div>');
    materialPopup.appendTo('body');
    parrent.appendTo('.material-popup__inner');
    $('.material-popup__inner').find('img').attr('src' ,$this.closest('.material-thumbs').find('.material-thumbs__more a').attr('href'));
    $('.app__wrapper').addClass('blur');
    $('html').addClass('is-locked');

    });
  

//   $('#catalog-materials .catalog-box__list').each(function() { 
//     $(this).magnificPopup({
//         delegate: 'a', 
//         type: 'image',
//         gallery: {
//           enabled:true,
//           tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
//         },
//         image: {
//           titleSrc: 'title' 
//       }
//     });
// });




  $(document).on('click', '.material-popup__close', function (e) {
    $('.material-popup').remove();
    $('.app__wrapper').removeClass('blur');
    $('html').removeClass('is-locked');
  });
  $(document).on('click', '.material-popup', function (e) {
    if ($(e.target).closest('.material-popup__inner').length) {
      return false;
    }

    $('.material-popup').remove();
    $('.app__wrapper').removeClass('blur');
    $('html').removeClass('is-locked');
  });
  var tinySliderMaterialPopup = 0;

  function sliderMaterialPopup(elem, slidercount) {
    var parrent = elem;
    parrent.each(function () {
      var $this = $(this);

      if ($this.find('> a').length > 1 && $this.find('.tns-item').length == 0) {
        slidercount += 1;


        var miniatures = $('<div class="slider-material-miniatures" id="slider-material-miniatures' + slidercount + '"></div>'),
            miniaturesImage = $this.html();
 
        $this.after(miniatures);
        miniatures.html(miniaturesImage);
        miniatures.find('a').attr('class', '');
        $this.addClass('tnsSliderMaterialImages' + slidercount);
        var sliderControlsMaterail = '#slider-material-miniatures' + slidercount;
 
      
        if($(window).width() > 769) {

          var sliderMaterialPopupImages = tns({
            "container": '.tnsSliderMaterialImages' + slidercount,
            "nav": true,
            "navPosition": "bottom",
            "navContainer": sliderControlsMaterail,
            "navAsThumbnails": false,
            "center": true,
            "controls": true,
            "autoHeight": false,
            "autoWidth": false,
            "controlsPosition": "bottom",
            "gutter": 2,
            "items": 1,
            "autoplay": 0,
            "autoplayHoverPause": 0,
            "axis": "horizontal",
            "mouseDrag": true,
            "speed": 400
          });


        } else {


        

        


        }

        
        var sliderMaterialPopupImagesMiniatur = tns({
          "container": sliderControlsMaterail,
          "nav": false,
          "navPosition": "bottom",
          "controls": false,
          "controlsPosition": "bottom",
          "gutter": 4,
          "items": 3,
          "autoplay": 0,
          "autoplayHoverPause": 0,
          "axis": "horizontal",
          "mouseDrag": true,
          "speed": 400
        });

        // $('.tns-outer').on('touchstart', function (e) {
        //   console.log(e.touches.length);
        //   if(e.touches.length > 1) {
        //     // ... do what you like here
        //   }
        // });

      

    //     var customizedFunction = function (info, eventName) {
    //       // direct access to info object
    //  console.log('info ' + JSON.stringify(info));

    //     }



    //     sliderMaterialPopupImages.events.on('touchStart', customizedFunction);
 


        // sliderMaterialPopupImages.events.on('transitionEnd', function () {


        //   var info = sliderMaterialPopupImages.getInfo(),
        //       slideCount = info.slideCount,
        //       indexCurrent = info.index;

           
          
        //   if (slideCount > 2) {
        //     indexCurrent = indexCurrent == 0 ? slideCount - 1 : indexCurrent > slideCount ? 0 : indexCurrent - 1;
        //   } else {
        //     indexCurrent = indexCurrent % 2 ? 1 : 0;
        //   }

        //   $('.material-thumbs-popup-info.opened .slider_counter span').text(indexCurrent+1);

        //   sliderMaterialPopupImagesMiniatur.goTo(indexCurrent);
        // });

      } 


    
    });


    if($(window).width() < 769) {


   


      // $('.material-thumbs-popup-info__images').PhotoSwipe({ link: 'a' });  


      // lightbox.init();

  
      

      // const lightbox = new PhotoSwipeLightbox({
      //   gallery: '.material-thumbs-popup-info__images',
      //   children: 'a',
      //   pswpModule: () => import('https://bigmebel-msk.ru/wp-content/themes/bigmebel/new/js/photoswipe/photoswipe.esm.min.js'),
      // });
      
      // lightbox.init();

      // lightbox.on('afterInit', () => {
      //   document.querySelectorAll(".mfp-img").forEach(element => {
  
      // });
      // });
      


    } else {

    
      $('.material-thumbs-popup-info__right a.tns-item').click(function (e) { 
        e.preventDefault();     
      });

    } 



 
  
    

  }

  

  $(document).on('click', '.catalog-box__list .product-thumbs__more, .product-list .product-thumbs__more, .popular-model-list__list .product-thumbs__more', function (e) {
    e.preventDefault();


    var product_selector = $(this).parent().parent().parent().parent().parent();

  

    var product_id = product_selector.attr('id');

    console.log(product_id);

    var fd = new FormData;

    fd.append('action', 'load_product_popup');

    

    if($('body').hasClass('home')) {

      console.log('home');

      fd.append('home', 'yes');

    }

    if($('body').attr('id') == 838) {

      fd.append('type', 'dveri');

    }

    if($('body').attr('id') == 5) {

      fd.append('type', 'shkaf');

    }

    if($('body').attr('id') == 4 || $('body').hasClass('home')) {

      fd.append('type', 'kitchen');

    }

    if($('body').attr('id') == 6 || $('body').attr('id') == 7 || $('body').attr('id') == 8 || $('body').attr('id') == 9 || $('body').attr('id') == 10 || $('body').attr('id') == 11 || $('body').attr('id') == 12 || $('body').attr('id') == 13) {

      fd.append('type', 'others');
 
    }

    if($('body').hasClass('home') && $('body').attr('id') == 4) {

      console.log('kitchen');
 
      fd.append('kitchen', 'yes');
       fd.append('home', 'no');

    }



    console.log('others');

    fd.append('product_id', product_id);

    $.ajax({
			url:ajaxurl, // обработчик
			data:fd, // данные
			type:'POST', // тип запроса
			processData: false,
        	contentType: false,
			success:function(data){

        if(product_selector.find('.material-thumbs-popup-info').length == 0) {

          product_selector.append(data);

          product_selector.find('input[type=tel]').inputmask({"mask": "+7 (999) 999 - 99 - 99"});

        }

         
				
        var example_index = product_selector.index();
    
      sliderMaterialPopup(product_selector.find('.material-thumbs-popup-info__images'), example_index);


      if(product_selector.find('.example-product-more-info__params-list').length > 0) {

        


      sliderParamsPopup(product_selector.find('.material-thumbs-popup-info__left'), example_index, quick_view_slide_index);


    

      }    
        var parrent = product_selector,
            popup = parrent.find('.material-thumbs-popup-info');
        popup.addClass('opened');

          $('.example-product-more-info__params-navigation span.active').removeClass('active');
          $('.example-product-more-info__params-price span.active').removeClass('active');

          
       
          $('.material-thumbs-popup-info.opened .example-product-more-info__params-navigation').find('span').eq(quick_view_slide_index).addClass('active');

          $('.material-thumbs-popup-info.opened .example-product-more-info__params-price').find('span').eq(quick_view_slide_index).addClass('active');
  
      
  
  
      

			}
		});
    
   
  });


  
					$(document).on('click', '.site-btn-zakazat', function (e) {


e.preventDefault();


	var product_selector = $(this).closest('.product-hero');

	var product_id = $(this).attr('attr-id');

	var fd = new FormData;

	fd.append('action', 'load_product_popup_order');

	fd.append('product_id', product_id);

	$.ajax({
	  url:ajaxurl, // обработчик
	  data:fd, // данные
	  type:'POST', // тип запроса
	  processData: false,
		  contentType: false,
	  success:function(data){

		if(product_selector.find('.material-thumbs-popup-feedback').length == 0) {

		  product_selector.append(data);

		  product_selector.find('input[type=tel]').inputmask({"mask": "+7 (999) 999 - 99 - 99"});


		  
	$('.material-thumbs-popup-feedback__example-chat-list, .material-thumbs-popup-feedback__example-projects-list, .material-thumbs-popup-feedback__visualization-example-list').each(function (e) { 
		$(this).magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});
		
	});


		}

		
		var parrent = product_selector,
			popup = parrent.find('.material-thumbs-popup-feedback');


			popup.addClass('opened');

	  

	  }
	});


}); 




  $(document).on('click', '.site-btn-rasschet', function (e) {
    e.preventDefault();

    var product_selector = $(this).closest('.product-hero');

    var product_id = $(this).attr('attr-id');

    console.log(product_id);

    var fd = new FormData;

    fd.append('action', 'load_product_popup_rasschet');

    if($('body').attr('id') == 838) {

      fd.append('type', 'dveri');

    }

    if($('body').attr('id') == 5) {

      fd.append('type', 'shkaf');

    }

    if($('body').attr('id') == 4) {

      fd.append('type', 'kitchen');

    }

    if($('body').attr('id') == 6 || $('body').attr('id') == 7 || $('body').attr('id') == 8 || $('body').attr('id') == 9 || $('body').attr('id') == 10 || $('body').attr('id') == 11 || $('body').attr('id') == 12 || $('body').attr('id') == 13) {

      fd.append('type', 'others');

    }

    console.log('others');

    fd.append('product_id', product_id);

    $.ajax({
      url:ajaxurl, // обработчик
      data:fd, // данные
      type:'POST', // тип запроса
      processData: false,
          contentType: false,
      success:function(data){

        if(product_selector.find('.material-thumbs-popup-order').length == 0) {

          product_selector.append(data);

          product_selector.find('input[type=tel]').inputmask({"mask": "+7 (999) 999 - 99 - 99"});

        }

        
        var parrent = product_selector,
            popup = parrent.find('.material-thumbs-popup-order');


            popup.addClass('opened');

 

      

      }
    });


  });




  sliderMaterialPopup($('.material-thumbs-popup-info__images'), tinySliderMaterialPopup);

  $(document).on('click', '.product-thumbs__calc-price a', function (e) {
    e.preventDefault();

    console.log('tttttttttt');

    var product_selector = $(this).closest('.catalog-box__item,.product-list__item');

    var product_id = product_selector.attr('id');

    var fd = new FormData;
 
    fd.append('action', 'load_product_popup_rasschet');

    if($('body').attr('id') == 838) {

      fd.append('type', 'dveri');

    }

    if($('body').attr('id') == 5) {

      fd.append('type', 'shkaf');

    }
    if($('body').attr('id') == 4) {

      fd.append('type', 'kitchen');

    }

    if($('body').attr('id') == 6 || $('body').attr('id') == 7 || $('body').attr('id') == 8 || $('body').attr('id') == 9 || $('body').attr('id') == 10 || $('body').attr('id') == 11 || $('body').attr('id') == 12 || $('body').attr('id') == 13) {

      fd.append('type', 'others');

    }

    console.log('others');

    fd.append('product_id', product_id);

    $.ajax({
      url:ajaxurl, // обработчик
      data:fd, // данные
      type:'POST', // тип запроса
      processData: false,
          contentType: false,
      success:function(data){

        if(product_selector.find('.material-thumbs-popup-order').length == 0) {

          product_selector.append(data);

          product_selector.find('input[type=tel]').inputmask({"mask": "+7 (999) 999 - 99 - 99"});

        }

        
        var parrent = product_selector,
            popup = parrent.find('.material-thumbs-popup-order');


            popup.addClass('opened');

 

      

      }
    });


  });


  $('.product-thumbs__calc-price-mobile').click(function (e) { 
    e.preventDefault();
    $(this).parent().parent().find('.product-thumbs__calc-price a').click();
    
  });


  $(document).on('click', '.product-thumbs__order a', function (e) {


    e.preventDefault();


        var product_selector = $(this).closest('.catalog-box__item');

        var product_id = product_selector.attr('id');
    
        var fd = new FormData;
    
        fd.append('action', 'load_product_popup_order');
    
        fd.append('product_id', product_id);

        if($('body').attr('id') == 838) {

      fd.append('type', 'dveri');

    }

    if($('body').attr('id') == 5) {

      fd.append('type', 'shkaf');

    }
    
        if($('body').attr('id') == 4) {
    
          fd.append('type', 'kitchen');
    
        }
    
        if($('body').attr('id') == 6 || $('body').attr('id') == 7 || $('body').attr('id') == 8 || $('body').attr('id') == 9 || $('body').attr('id') == 10 || $('body').attr('id') == 11 || $('body').attr('id') == 12 || $('body').attr('id') == 13 || $('body').attr('id') == 838) {
    
          fd.append('type', 'others');
    
        }
 
        console.log('others');
    
        $.ajax({
          url:ajaxurl, // обработчик
          data:fd, // данные
          type:'POST', // тип запроса
          processData: false,
              contentType: false,
          success:function(data){
    
            if(product_selector.find('.material-thumbs-popup-feedback').length == 0) {
    
              product_selector.append(data);
    
              product_selector.find('input[type=tel]').inputmask({"mask": "+7 (999) 999 - 99 - 99"});
    
            }
    
            
            var parrent = product_selector,
                popup = parrent.find('.material-thumbs-popup-feedback');


                popup.addClass('opened');


                popup.magnificPopup({
                  delegate: 'a', 
                  type: 'image',
                  gallery: {
                    enabled:true,
                    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
                  }
              });
     
    
          
    
          }
        });


  }); 


  

  $(document).on('click', '.material-thumbs-popup-info__close, .material-thumbs-popup-order__close, .material-thumbs-popup-feedback__close', function (e) {
    e.preventDefault();
    console.log(1234567);
    $('.material-thumbs-popup-info, .material-thumbs-popup-order, .material-thumbs-popup-feedback').removeClass('opened');
  });




  $(document).on('click', function (e) {

    if ($(e.target).closest('.material-thumbs-popup-order__inner, .material-thumbs-popup-info__inner, .product-thumbs__more, .product-thumbs__calc-price, .product-thumbs__image, .product-thumbs__order, .lg, .material-thumbs-popup-feedback__inner, .mfp-wrap *, .mfp-bg, .mfp-close, .pswp').length) {
      return;
    }


    $('.material-thumbs-popup-order, .material-thumbs-popup-info, .material-thumbs-popup-feedback').removeClass('opened');
  });
  
  $('.product-thumbs__one-click button').on('click', function (e) {
    var $name = $(this).closest('.product-thumbs').data('model');
    $('.buy-one-click__desc').text($name);
    $('.buy-one-click input[name="model"]').val($name);
  }); 

  $('.category-item-thumbs__image, .category-item-thumbs__close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.category-item-thumbs').toggleClass('opened');
  });


  if ($('.collection-block').length) {
    var collectionGroupSlider = window.matchMedia('(max-width:767px)').matches ? 2 : 3,
        collectionSliderCount = 1;
    $('.collection-block').each(function (e) {
      var $this = $(this),
          list = $this.find('.collection-block__list'),
          items = list.find('.collection-block__item');
      items.each(function (i, e) {
        if (i % collectionGroupSlider == 0) {
          var videoSlide = $('<div class="collection-block__slide"></div>');
          videoSlide.appendTo(list);
        }

        $(this).appendTo(list.find('.collection-block__slide:last-child'));
      });
      list.addClass('tinySliderCollection' + collectionSliderCount);
      var tinySliderCollection = tns({
        "container": ".tinySliderCollection" + collectionSliderCount,
        "items": 1,
        "nav": true,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": '10',
        "autoplay": 0,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 800,
        "autoplayTimeout": 4000
      });
      collectionSliderCount += 1;
    });
  }


  $('.compact-reviews-thumbs').magnificPopup({
    delegate: '.compact-reviews-thumbs__video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }

    
      },
    
      srcAction: 'iframe_src',
    },
    callbacks: {
      open: function() {
  
        $(this.content).parent().find('video')[0].play();
        },
      close: function() {
  
        $(this.content).parent().find('video')[0].load();
        }
      }
  });



  if ($('.compact-reviews__list').length) {
    var tinySliderCompactReviews = 0;
    $('.compact-reviews__list').each(function () {
      tinySliderCompactReviews += 1;
      $(this).addClass('tnssliderCompactReviews' + tinySliderCompactReviews);
      var sliderCompactReviews = tns({
        "container": '.tnssliderCompactReviews' + tinySliderCompactReviews,
        "nav": true,
        "navPosition": "bottom",
        "controls": false,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": 0,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 800,
        "autoplayTimeout": 4000
      });
    });
  }


  $('.constructor-info').magnificPopup({
    delegate: '.constructor-info__video-icon', 
    type: 'image',
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});


  $('.determines-cost__tab-head li a').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('li').hasClass('active')) {
      return;
    }

    var index = $(this).closest('li').index();
    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('.determines-cost__tab-box').find('.determines-cost__tab-item.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).closest('.determines-cost__tab-box').find('.determines-cost__tab-item:eq(' + index + ')').addClass('active');
  });
  $('.determines-cost__tab-item-name').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.determines-cost__tab-item').find('.determines-cost__tab-item-body').slideToggle('opened');
    $(this).closest('.determines-cost__tab-item').toggleClass('opened');
  });


  $(document).on('change', '.material-thumbs-popup-order__type-item input[type="radio"]', function (e) { 
 
    var index = $(this).closest('.material-thumbs-popup-order__type-item').index();
    $(this).closest('.material-thumbs-popup-order__left').find('.material-thumbs-popup-order__type-value-item').removeClass('show');
    $(this).closest('.material-thumbs-popup-order__left').find('.material-thumbs-popup-order__type-value-item:eq(' + index + ')').addClass('show');
  });


  var countRightKitchen = 0;
  $('.discount-block__item').each(function (e) {
    countRightKitchen += 1;
    $(this).find('.discount-block__item-count').attr('data-count', '0' + countRightKitchen);
  });
  $('.discount-block__item-preview').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.discount-block__item').toggleClass('opened');
    $(this).closest('.discount-block__item').find('.discount-block__item-in').slideToggle();
  });


  $(document).on('mouseover', '.example-product-thumbs__image-item-nav', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $(this).closest('.example-product-thumbs__image-list').find('.example-product-thumbs__image-item').removeClass('active');
    $(this).closest('.example-product-thumbs__image-list').find('.example-product-thumbs__image-item-nav').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.example-product-thumbs__image-list').find('.example-product-thumbs__image-item:eq(' + index + ')').addClass('active');
  });
  $(document).on('mouseleave', '.example-product-thumbs__image-item-nav', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $(this).closest('.example-product-thumbs__image-list').find('.example-product-thumbs__image-item').removeClass('active');
    $(this).closest('.example-product-thumbs__image-list').find('.example-product-thumbs__image-item-nav').removeClass('active');
    $(this).closest('.example-product-thumbs__image-list').find('.example-product-thumbs__image-item-nav:eq(0)').addClass('active');
  });

  var tinySliderPopup = 0;
  
  
  function sliderPopup(elem, slidercount) {


    if(sliderPopup) { sliderPopup.destroy(); }

    if(sliderPopupMiniatur) { sliderPopupMiniatur.destroy(); }


    var parrent = elem;
 
      var $this = elem;

      if ($this.find('> a').length > 1 && $this.find('.tns-item').length == 0) {
        slidercount += 1;
        var miniatures = $('<div class="slider-miniatures" id="slider-miniatures' + slidercount + '"></div>'),
            miniaturesImage = $this.html();
        $this.after(miniatures);
        miniatures.html(miniaturesImage);
        miniatures.find('a').attr('class', '');
        $this.addClass('tnssliderExampleImages' + slidercount);
        var sliderControls = '#slider-miniatures' + slidercount;
        var sliderPopup = tns({
          "container": '.tnssliderExampleImages' + slidercount,
          "nav": true,
          "navPosition": "bottom",
          "autoHeight": true,
          "navContainer": sliderControls,
          "navAsThumbnails": true,
          "controls": true,
          "controlsPosition": "bottom",
          "gutter": 2,
          "items": 1,
          "autoplay": 0,
          "autoplayHoverPause": 0,
          "axis": "horizontal",
          "mouseDrag": true,
          "speed": 400
        });
        var sliderPopupMiniatur = tns({
          "container": sliderControls,
          "nav": false,
          "navPosition": "bottom",
          "controls": false,
          "controlsPosition": "bottom",
          "gutter": 4,
          "items": 3,
          "autoplay": 0,
          "autoplayHoverPause": 0,
          "axis": "horizontal",
          "mouseDrag": true,
          "speed": 400
        });
        sliderPopup.events.on('transitionEnd', function () {
          var info = sliderPopup.getInfo(),
              slideCount = info.slideCount,
              indexCurrent = info.index;

          if (slideCount > 2) {
            indexCurrent = indexCurrent == 0 ? slideCount - 1 : indexCurrent > slideCount ? 0 : indexCurrent - 1;
          } else {
            indexCurrent = indexCurrent % 2 ? 1 : 0;
          }

          sliderPopupMiniatur.goTo(indexCurrent);
        });
      }

      $('.example-product-more-info__images').each(function() { 
        $(this).magnificPopup({
            delegate: 'a', 
            type: 'image',
            gallery: {
              enabled:true,
              tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
            }
        });
    });

  
  }



  function sliderParamsPopup(elem, slidercount, quick_view_slide_index) {


    if(sliderParamsPopup) { sliderParamsPopup.destroy(); }

    var parrent = elem;

      var $this = elem,
          prev = $this.find('.params-prev'),
          next = $this.find('.params-next'),
          slider = $this.find('.example-product-more-info__params-group');
      slidercount += 1;
      slider.addClass('tnssliderExampleParams' + slidercount);
      var sliderParamsPopup = tns({
        "container": '.tnssliderExampleParams' + slidercount,
        "nav": true,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": 0,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 1000,
        "autoplayTimeout": 3000,
        "center": false
      });

    

      sliderParamsPopup.goTo(quick_view_slide_index);

   

      sliderParamsPopup.events.on('transitionEnd', function () {
        var info = sliderParamsPopup.getInfo(),
            slideCount = info.slideCount,
            indexCurrent = info.index;

        if (slideCount > 2) {
          indexCurrent = indexCurrent == 0 ? slideCount - 1 : indexCurrent > slideCount ? 0 : indexCurrent - 1;
        } else {
          indexCurrent = indexCurrent % 2 ? 1 : 0;
        }

        $this.find('.example-product-more-info__params-navigation span, .example-product-more-info__params-price span').removeClass('active');
        $this.find('.example-product-more-info__params-navigation span:eq(' + indexCurrent + '), .example-product-more-info__params-price span:eq(' + indexCurrent + ')').addClass('active');
      });
      prev.on('click', function (e) {
        var info = sliderParamsPopup.getInfo(),
            indexPrev = info.indexCached,
            indexCurrent = info.index;
        sliderParamsPopup.goTo('prev');
      });
      next.on('click', function (e) {
        var info = sliderParamsPopup.getInfo(),
            indexPrev = info.indexCached,
            indexCurrent = info.index;
        sliderParamsPopup.goTo('next');
      });
  
  }


  var tinySliderParamsPopup = 0;
 
  $(document).on('click', '.example-product-thumbs__top', function (e) {
    e.preventDefault();


    var product_selector = $(this).closest('.example-product__item');

    var product_id = product_selector.attr('id');

    var fd = new FormData;

    fd.append('action', 'load_project_popup');

    fd.append('project_id', product_id);

    $.ajax({
			url:ajaxurl, // обработчик
			data:fd, // данные
			type:'POST', // тип запроса
			processData: false,
        	contentType: false,
			success:function(data){

        if(product_selector.find('.example-product-more-info').length == 0) {

          product_selector.append(data);

          product_selector.find('input[type=tel]').inputmask({"mask": "+7 (999) 999 - 99 - 99"});

        }

        var example_index = product_selector.index();

        sliderPopup(product_selector.find('.example-product-more-info__images'), example_index);
     
        sliderParamsPopup(product_selector.find('.example-product-more-info__left'), example_index);
        var parrent = product_selector,
            popup = parrent.find('.example-product-more-info'),
            index = parrent.find('.example-product-thumbs__status input:checked').closest('.example-product-thumbs__status-item').index() + 1; 
    
        popup.addClass('opened');


			}
		});




  });
  $(document).on('click', '.example-product-more-info__close', function (e) {
    e.preventDefault();
     console.log(88888);
    $('.example-product-more-info').removeClass('opened');
  });
  $(document).on('click', function (e) {

    
    if ($(e.target).closest('.example-product-more-info__inner, .example-product-thumbs__more, .example-product-thumbs__top, .lg, .mfp-wrap *, .mfp-bg, .mfp-close, .pswp').length) {
      console.log(99999);
      return false;
    }

  


    $('.example-product-more-info').removeClass('opened');
  });


  function inputNouislider(elem, reset) {
    elem.find('.input_range_slider').each(function (index, el) {
      var $this = $(this),
          $step = $this.closest('.range_slider_wrapper').data('step'),
          $lower = $this.closest('.range_slider_wrapper').find('.low'),
          $upper = $this.closest('.range_slider_wrapper').find('.hight'),
          inputRangeMax = $upper.data('max'),
          inputRangeMin = $lower.data('min'),
          arr = [inputRangeMin, inputRangeMax];

      if (reset == true) {
        $lower.val(inputRangeMin).trigger('change');
        $upper.val(inputRangeMax).trigger('change');
      } else {
        var slider = $this.noUiSlider({
          start: [$lower.attr('value'), $upper.attr('value')],
          connect: true,
          step: $step || 1,
          behaviour: 'drag-tap',
          format: wNumb({
            decimals: $step == 1 ? 0 : 1
          }),
          range: {
            'min': [arr[0]],
            'max': [arr[1]]
          }
        });
        slider.Link('lower').to($lower);
        slider.Link('upper').to($upper);
        slider.on('slide', function () {
          var min = $lower.val(),
              max = $upper.val();
          var $spanlower = $this.closest('.range_slider_wrapper').find('.filter-block__range-value-min span'),
              $spanupper = $this.closest('.range_slider_wrapper').find('.filter-block__range-value-max span');
          $spanlower.text(min);
          $spanupper.text(max);
        });
        slider.on('set', function () {
          var min = $lower.val(),
              max = $upper.val();
          var $spanlower = $this.closest('.range_slider_wrapper').find('.filter-block__range-value-min span'),
              $spanupper = $this.closest('.range_slider_wrapper').find('.filter-block__range-value-max span');
          $spanlower.text(min);
          $spanupper.text(max);
        });
      }
    });
    var filterInputResetValue = '';
    $('.filter-block__inputs-wr input').on('focus', function (e) {
      filterInputResetValue = $(this).val().replace(/\D+/g, '');
      $(this).val('');
    });
  }

  inputNouislider($('.filter-block'));
  $(document).on('click', '.filter-block__item .filter-block__item-title', function (e) {
    e.preventDefault();

    if (window.matchMedia('(max-width:1000px)').matches) {
      $(this).closest('.filter-block__item').find('.filter-block__item-body').slideToggle();
      $(this).closest('.filter-block__item').toggleClass('opened');
    } else if ($(this).closest('.filter-block__item').hasClass('filter-block__item--close')) {
      $(this).closest('.filter-block__item').find('.filter-block__item-body').slideToggle();
      $(this).closest('.filter-block__item').toggleClass('opened');
    }
  });
  $('.filter-block input[type="radio"], .filter-block input[type="checkbox"]').on('change', function (e) {
    var $this = $(this),
        $itemsList = $this.closest('.filter-block').find('.filter-block__selection-items'),
        $name = $this.closest('.filter-block__item-value').find('span').text(),
        $radioName = $this.attr('type') == 'radio' ? $this.attr('name') : false;

    if ($this.is(':checked')) {
      if ($radioName) {
        var checkedBalue = $('<span id="' + $radioName + '" class="filter-block__selection-item">' + $name + '</span>');
        $('.filter-block__selection-items').find('#' + $radioName).remove();
      } else {
        var checkedBalue = $('<span class="filter-block__selection-item">' + $name + '</span>');
      }

      checkedBalue.appendTo($itemsList);
    } else {
      if (!$radioName) {
        $('.filter-block__selection-item:contains("' + $name + '")').remove();
      }
    }
  });
  $(document).on('click', '.filter-block__selection-item', function (e) {
    e.preventDefault();
    var $name = $(this).text();
    $(this).closest('.filter-block').find('.filter-block__item-value span:contains("' + $name + '")').closest('label').find('input').prop('checked', false).trigger('click');
    $(this).remove();
  });
  $('.filter-block__reset-filter button, .filter-block__mobile-reset').on('click', function (e) {
    e.preventDefault();
    inputNouislider($('.filter-block'), true);
    $('.filter-block__selection-item').remove();
    $('.filter-block__item-value input[type="radio"], .filter-block__item-value input[type="checkbox"]').prop('checked', false);
  });
  $('.sorting__mobile-filter-button button, .filter-block__close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.catalog-box__inner').find('.filter-block').toggleClass('opened');
    $('html').toggleClass('is-locked');
  });
  $('.filter-block').on('click', function (e) {
    if ($(e.target).closest('.filter-block__inner').length && !$(e.target).hasClass('filter-block__close')) {

      return;
    }

    $('.filter-block').removeClass('opened');
    $('html').removeClass('is-locked');
  });

 
  $('.findings-block__popup-close').on('click', function (e) {
    e.preventDefault();
    $('.findings-block__popup-title span').text('');
    $('.findings-block__popup-body').html('');
    $('.findings-block__popup').css('minHeight', '').removeClass('opened');
  });
  $('.findings-block__item-name').on('mouseover', function (e) {
    e.preventDefault();
    var index = $(this).closest('li').index();
    $(this).closest('.findings-block').find('.findings-block__example-item:eq(' + index + ')').addClass('active');
  });
  $('.findings-block__item-name').on('mouseleave', function (e) {
    e.preventDefault();
    $('.findings-block__example-item').removeClass('active');
  });

  $('.findings-block__title').on('click', function (e) {
    if (window.matchMedia('(max-width:766px)').matches) {
      e.preventDefault();
      $(this).closest('.findings-block__inner').toggleClass('opened');
      $(this).closest('.findings-block__inner').find('.findings-block__content').slideToggle();
    }
  });
  

  $('.froze-step__feedback').magnificPopup({
    delegate: '.froze-step__feedback-video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
  });

  

  if ($('.gallery-photo-block__list').length) {
    var sliderGalleryPhoto = tns({
      "container": ".gallery-photo-block__list",
      "items": 1,
      "nav": true,
      "navPosition": "bottom",
      "controls": false,
      "controlsPosition": "bottom",
      "gutter": 0,
      "autoplay": 0,
      "autoplayHoverPause": 1,
      "axis": "horizontal",
      "mouseDrag": false,
      "touch": true,
      "speed": 800,
      "autoplayTimeout": 4000
    });
    sliderGalleryPhoto.events.on('transitionEnd', function () {
      var info = sliderGalleryPhoto.getInfo(),
          count = info.displayIndex,
          containerNav = info.navContainer;
      $(containerNav).closest('.gallery-photo-block').find('.gallery-photo-block__slider-count span').text(count);
    });

    $('.gallery-photo-block__item').magnificPopup({
      delegate: 'a.gallery-photo-block__item-thumbs', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });


    $('.gallery-photo-block__item-thumbs').on('click', function (e) {
      e.preventDefault();
      var images = $(this).data('gallery');
    });
  }

 

  if ($('.guarantee-block__awards-item-images').length) {
    var tinySliderAwards = 0;
    $('.guarantee-block__awards-item-images').each(function () {
      tinySliderAwards += 1;
      $(this).addClass('tnssliderAwards' + tinySliderAwards);
      var sliderAwards = tns({
        "container": '.tnssliderAwards' + tinySliderAwards,
        "nav": false,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": 1,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 1000,
        "autoplayTimeout": 4000
      });

      if (window.matchMedia('(max-width:1000px)').matches) {
        $('.guarantee-block__awards-item-images').on('touchend ', function () {
          sliderAwards.pause();
        });
      }
    });
  }

  $('.guarantee-block__awards-item a').on('click', function (e) {
    e.preventDefault();
    var images = $(this).closest('.guarantee-block__awards-item').find('.guarantee-block__awards-item-more a').data('gallery');
    $(this).magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });
  });

  $('.installation-thumbs__video').magnificPopup({
    delegate: '.installation-thumbs__video-link', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    

      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
  });




  $('.installation-thumbs__nav-controls .next').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.installation-step__item').removeClass('active').next('.installation-step__item').addClass('active');
  });
  $('.installation-thumbs__nav-controls .prev').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.installation-step__item').removeClass('active').prev('.installation-step__item').addClass('active');
  });
  $('.installation-step__item-preview').on('click', function (e) {
    if (window.matchMedia('(max-width:766px)').matches) {
      e.preventDefault();
      $(this).closest('.installation-step__item').toggleClass('opened');
      $(this).closest('.installation-step__item').find('.installation-thumbs').slideToggle();
    }
  });

 

  if ($('.kitchen-configurator-result-button').length) {
    $(window).on('scroll', function () {
      var windowScroll = $(window).scrollTop();
      var kwizTop = $('.kwiz-block').offset().top;
      var paramsTop = $('.product-materials-catalog').offset().top + $('.product-materials-catalog').outerHeight();

      if (windowScroll > kwizTop && windowScroll < paramsTop) {
        $('.kitchen-configurator-result-button').addClass('active');
      } else {
        $('.kitchen-configurator-result-button').removeClass('active');
      }
    });
    $('.kitchen-configurator-result-button__result-box, .kitchen-configurator-result__close button, .kitchen-configurator-result__close-bottom button').on('click', function (e) {
      e.preventDefault();
      console.log('open configurator');
      $('.kitchen-configurator-result').toggleClass('opened');
    });
  }



  $('.kwiz-block__step-item input[type="checkbox"], .kwiz-block__step-item input[type="radio"]').on('change', function (e) {
    var parrent = $(this).closest('.kwiz-block__form-column');
    parrent.find('.kwiz-block__step-button.kwiz-block__step-button--next').removeClass('hide');
  });
  $('.kwiz-block__step-button.kwiz-block__step-button--next').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('hide')) {
      return false;
    }



    var parrent = $(this).closest('.kwiz-block__form-column'),
        stepToActive = parrent.find('.kwiz-block__step.active input:checked').val();
    parrent.closest('.kwiz-block__form').addClass('branch');
    parrent.closest('.kwiz-block__form').find('.kwiz-branch-form').removeClass('active');
    parrent.closest('.kwiz-block__form').find('.kwiz-branch-form.' + stepToActive).addClass('active');

    var top = $('.kwiz-block__form').offset().top;

    if($(window).width() < 766) {
 
    $('body, html').animate({
      scrollTop: top
    }, 500);
  }

   

  });

  
  var progressBarKwiz0 = $('.kwiz-block__finished-column--left .kwiz-block__progressbar-box').html();


  $('.kwiz-block__finished-back').on('click', function (e) {
    e.preventDefault();

    console.log('вернулись назад');

    $('.kwiz-block__progressbar-box').removeClass('loading');

    $('.kwiz-block__form').removeClass('finish'); // return false;
 

    $('.kwiz-block__finished-box').removeClass('price-ready');
    // $('.kwiz-block__progressbar-box').removeClass('loading');
    $('.kwiz-block__finished-column--left .kwiz-block__progressbar-box').html(progressBarKwiz0);
    $('.kwiz-block__finished-column--right .kwiz-block__progressbar-box').html(progressBarKwiz0);


    $(this).closest('.kwiz-block__form').removeClass('finish');
    $('.kwiz-branch-form__step.active, div.kwiz-branch-form').removeClass('active');
    $('form.kwiz-block__form').removeClass('branch');
    $('div.kwiz-branch-form').each(function () { 
      $(this).find('.kwiz-branch-form__step:eq(0)').addClass('active');       
    });
   

  });
  $('.kwiz-block__form-box-file input[type="file"]').on('change', function (e) {
    var files = $(this)[0].files;

    if (files['length'] > 0) {
      $(this).closest('.kwiz-block__form-box-file').addClass('checked');
    } else {
      $(this).closest('.kwiz-block__form-box-file').removeClass('checked');
    }
  });



  if ($('.kwiz-block__complect-list').length && window.matchMedia('(max-width:766px)').matches) {
    var kwizComplectSliderCount = 0;
    $('.kwiz-block__complect-list:not(.kwiz-block__complect-list2)').each(function (e) {
      var $this = $(this),
          items = $this.find('.kwiz-block__complect-item-wr');
      $this.addClass('kwizComplectSlider' + kwizComplectSliderCount);
      items.each(function (i, e) {
        i += 1;

        if (i % 2 == 1) {
          var groupWrapper = $('<div class="kwiz-block__complect-item-group"></div>');
          groupWrapper.appendTo($this);
        }

        $(this).appendTo($this.find('.kwiz-block__complect-item-group:last-child'));
      });
      var sliderInKwiz = tns({
        "container": '.kwizComplectSlider' + kwizComplectSliderCount,
        "nav": true,
        "navPosition": "bottom",
        "controls": false,
        "gutter": 10,
        "slideBy": 1,
        "items": 1,
        "autoplay": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "speed": 800
      });
      kwizComplectSliderCount += 1;
    });
  } 

  if ($('.kwiz-block__complect-list2').length && window.matchMedia('(max-width:766px)').matches) {


      // social-reviews2 = new Swiper(".kwiz-block__complect-list2", { spaceBetween: 0,   pagination: {
      //   el: ".swiper-pagination",
      // }});



  }

  $('.size-kitchen__item-select select').styler();
  $('.size-kitchen__item-select select').on('change', function (e) {
    var $this = $(this),
        parrent = $this.closest('.size-kitchen__body'),
        index = $this.find(':selected').index();
    parrent.find('select').each(function () {
      $(this).find('option:eq(' + index + ')').prop('selected', true);
      $(this).trigger('refresh');
    });
  });
  $('.kwiz-branch-form__params-group input').on('change', function (e) {
    $(this).closest('.kwiz-branch-form__params-group').next('.kwiz-branch-form__params-group').removeClass('hide');

    if ($(this).attr('name') == 'moyka-line') {
      var holod = $(this).closest('.kwiz-branch-form__params-list').find('input[name^="holod-line"]:checked').attr('data-holod-position');

      if (holod == "in") {
        var imageBig = $(this).attr('data-bigimage2');
      } else {
        var imageBig = $(this).attr('data-bigimage1');
      }

      var nextImage = $(this).attr('data-bigimage1');
      $(this).closest('.kwiz-branch-form__step').next('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr('src', nextImage);
      $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
        "src": imageBig,
        "data-src": imageBig
    });
    } else if ($(this).closest('.kwiz-branch-form__params-list').find('input[name="moyka-line"]:checked').length) {
      var holod = $(this).closest('.kwiz-branch-form__params-list').find('input[name^="holod-line"]:checked').attr('data-holod-position');

      if (holod == "in") {
        var imageBig = $(this).closest('.kwiz-branch-form__params-list').find('input[name="moyka-line"]:checked').attr('data-bigimage2');
      } else {
        var imageBig = $(this).closest('.kwiz-branch-form__params-list').find('input[name="moyka-line"]:checked').attr('data-bigimage1');
      }

      $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
        "src": imageBig,
        "data-src": imageBig
    });
    } else {
      var imageBig = $(this).attr('data-bigimage');
      $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
        "src": imageBig,
        "data-src": imageBig
    });
    }

    var nextStep = "0";

    if (nextStep == "0") {
      $(this).closest('.kwiz-branch-form__params-list').find('.kwiz-branch-form__params-group').each(function () {
        var $this = $(this);

        if ($this.find('input:checked').length && $this.closest('.kwiz-branch-form__step').find('.error').length == 0) {
          nextStep = "1";
        } else {
          nextStep = "0";
          return;
        }
      });

      if (nextStep == "1") {
        $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
      }
    }
  });




  $('.installation-thumbs__video').magnificPopup({
    delegate: '.installation-thumbs__video-link', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
  });



  $('.kwiz-branch-form__step-right').magnificPopup({
    delegate: '.furniture-list__video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
  });


  $('.furniture-list__item-note').magnificPopup({
    delegate: '.furniture-list__item-note-video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }

    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
  });


  $('.kwiz-branch-form__next').on('click', function (e) {
    e.preventDefault();

    console.log('kwiz-branch-form__next');

    if ($(this).hasClass('hide')) {
      return;
    }



      var $this = $('.kwiz-branch-form.active .additional-list__item input[data-step]:checked'),
          id = $this.attr('data-step');
  
      if ($this.is(':checked')) {
          bar_is = true;
        $('.kwiz-branch-form__step[data-for="' + id + '"]').removeClass('spec');
      } else {
          bar_is = false;
        $('.kwiz-branch-form__step[data-for="' + id + '"]').addClass('spec');
      }




    var parrent = $(this).closest('.kwiz-branch-form'),
        stepindex = parrent.find('.kwiz-branch-form__step.active').index() + 1,
        stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + stepindex + ')');


        console.log('stepindex '+stepindex);

        // Пропускаем экраны Выбор верхних шкафов и Выбор фурнитуры верха

        var skip_top_shkaf = false;
        var skip_etaps_on_product_page = false;
        var kwiz_light = false;

      

        if($('body').hasClass('single')) {

          skip_etaps_on_product_page = true; 

        }

        if($('#kviz').hasClass('kwiz-light')) {

          kwiz_light = true;

        }

        // if(kwiz_light) { skip_top_shkaf = true; }

        console.log('stepindex ' + stepindex);


        if($('input[name=step1]:checked').val() == 'branch-corner-left') {

          if($('input[name=planirovka1]:checked').val() == 1) {

            skip_top_shkaf = true;

          } 

        }

        if($('input[name=step1]:checked').val() == 'branch-corner-right') {

          if($('input[name=planirovka2]:checked').val() == 1) {

            skip_top_shkaf = true;

          } 

        }


        if($('input[name=step1]:checked').val() == 'branch-p-form') {

          if($('input[name=planirovka3]:checked').val() == 1) {

            skip_top_shkaf = true;

          }

        }

        if($('input[name=step1]:checked').val() == 'branch-straight') {

          if($('input[name=planirovka4]:checked').val() == 2) {

            skip_top_shkaf = true;

          } 

        }


       
 
     
// пропускам 3 или 5 экраны

if(skip_top_shkaf == true) {

  if(stepindex == 2) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 3 + ')'); }
  if(stepindex == 4) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 5 + ')'); }
  
          }


          if($('#kviz').hasClass('kviz_site')) {


            if(stepindex == 1) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 2 + ')'); } 
          
            
          }


          // kwiz_light 

     if(kwiz_light == true) {
  

// if(stepindex == 3) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 6 + ')'); }

// if(stepindex == 8) { stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 9 + ')'); }

}





          // пропускаем 2,3,4 и 8 экраны - если мы находимся в карточке товара

if(skip_etaps_on_product_page == true) {

  if(stepindex == 1) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 5 + ')'); }

  if(stepindex == 7) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 7 + ')'); }
  if(stepindex == 8) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 9 + ')'); }

  if(stepindex == 15) {  

      $('.kitchen-configurator-result-button__result-box').click();
      return;

   }
  
          }

          


          // если третий сайт с квизом тогда пропускаем фурнитуру и фасады
         


          if($('#kviz').hasClass('kviz_site')) {

            console.log('111')


            if(skip_top_shkaf == true) {

              console.log('222')

              if(stepindex == 2) { 
              
                stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 6 + ')'); }

            } else {

              console.log('333')

              if(stepindex == 3) { 

                console.log('444')
              
                stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 6 + ')'); }


            }
          
           
          
          
          }


          if(stepindex == 13) {

            if(bar_is == true) {
              

          stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 13 + ')');
  
            } else {

              stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 14 + ')');

              if($('#kviz').hasClass('super_lite')) {

                $('input[name=dont_know_sizes1]').prop('checked', true);


                if(stepindex == 10) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 14 + ')'); }
                
                        }

            }


           }

           var not_class;

           if($('#kviz').hasClass('super_lite')) {

           not_class = '.spec,.final_step';

           } else {

            not_class = '.spec';

           }

           if($('#kviz').hasClass('super_lite2')) {


            if(stepindex == 3) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 7 + ')'); }


           }

        console.log('not_class ' + not_class);

    if (stepindex < parrent.find('.kwiz-branch-form__step').not(not_class).length) {
      parrent.find('.kwiz-branch-form__step.active').removeClass('active');

     
      if(stepToActive.hasClass('disabled')) {




        stepToActive.nextAll(':not(.disabled)').first().addClass('active');


      } else {

        stepToActive.addClass('active');

      }
    } else {
      $(this).closest('.kwiz-block__form').addClass('finish'); // return false;



      if($('.kwiz-block__progressbar-box').hasClass('loading')) {

  
  document.querySelector(".kwiz-block__finished-box--preloading").classList.add("price-ready");
  $('.kwiz-block__title-ready').get(0).scrollIntoView();



      } else {

        $('.kwiz-block__progressbar-box:visible [data-progress]').each(function (index,progress) {
          return new Progress(progress);
        });


      }

      

 


      
       
      
    }

    if($('#kviz').hasClass('super_lite') && stepindex == 1) {
   

      ym(window.metrika_id, 'reachGoal', 'kviz_start')



    }


    if($('#kviz').hasClass('super_lite') && stepindex == 10) {

  

      ym(window.metrika_id, 'reachGoal', 'kviz_vvod_nomera')

      console.log('super_lite finish');

      $('.kwiz-branch-form__step').removeClass('active');

      $('input[name=planirovka1][value=2]').parent().click();

      get_all_quiz_data();



    //  $('.kwiz-branch-form.active .final_step .kwiz-branch-form__next').click();

      } 



    if($('.kwiz-branch-form.active .kwiz-branch-form__step.active input[name^=size]').length > 0) {

  if($('.kwiz-branch-form.active .kwiz-branch-form__step.active input[name^=size]').val().length > 0) { 

    $('.kwiz-branch-form.active .kwiz-branch-form__step.active').find('.kwiz-branch-form__params-list').slideDown();
 

  }

}


  

    // if(!$('.kwiz-block__form').hasClass('finish')) {

      var top = $('.kwiz-block__form').offset().top;

      if ($(window).width() < 766) {

        console.log($(window).width());

 
      $('body, html').animate({
        scrollTop: top
      }, 300);

    }

      
    // } 


  });

  var progressBarKwiz = $('.kwiz-block__finished-column--left .kwiz-block__progressbar-box').html();
  $('.kwiz-block__finished-back.kwiz-block__finished-back--preload').on('click', function (e) {
    e.preventDefault();

    
    $('.kwiz-block__finished-box.kwiz-block__finished-box--preloading').removeClass('price-ready');
    // $('.kwiz-block__progressbar-box').removeClass('loading');
    $('.kwiz-block__finished-column--left .kwiz-block__progressbar-box').html(progressBarKwiz);
    $('.kwiz-block__finished-column--right .kwiz-block__progressbar-box').html(progressBarKwiz);

    if($('#kviz').hasClass('super_lite')) {


$('.kwiz-block__finished-box').removeClass('price-ready');
      $('.kwiz-branch-form__step').removeClass('active');
			$('.branch-corner-left > :nth-child(1)').addClass('active');
      $('.branch-corner-left').addClass('active');
          
                  }


  }); 

  // Создаем переменную для хранения состояния блокировки
let clickBlocked = false;

  
  $('.kwiz-branch-form__prev').on('click', function (e) {
    e.preventDefault();

    if (clickBlocked) {
      // Если клик заблокирован, прекращаем выполнение функции
      return;
  }

  clickBlocked = true;

  setTimeout(function () {
    clickBlocked = false;
}, 500);


    var parrent = $(this).closest('.kwiz-branch-form'),
        stepindex = parrent.find('.kwiz-branch-form__step.active').index() - 1,
        stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + stepindex + ')');

        // Пропускаем экраны Выбор верхних шкафов и Выбор фурнитуры верха

        var skip_top_shkaf = false;
        var skip_etaps_on_product_page = false;
        var kwiz_light = false;

        if($('body').hasClass('single')) {

          skip_etaps_on_product_page = true;

        }

        if($('#kviz').hasClass('kwiz-light')) {

          kwiz_light = true;

        }

        if($('input[name=step1]:checked').val() == 'branch-corner-left') {

          if($('input[name=planirovka1]:checked').val() == 1) {

            skip_top_shkaf = true;

          } 

        }

        if($('input[name=step1]:checked').val() == 'branch-corner-right') {

          if($('input[name=planirovka2]:checked').val() == 1) {

            skip_top_shkaf = true;

          } 

        }


        if($('input[name=step1]:checked').val() == 'branch-p-form') {

          if($('input[name=planirovka3]:checked').val() == 1) {

            skip_top_shkaf = true;

          }

        }

        if($('input[name=step1]:checked').val() == 'branch-straight') {

          if($('input[name=planirovka4]:checked').val() == 2) {

            skip_top_shkaf = true;

          } 

        }


                  // пропускаем 2,3,4 и 8 экраны - если мы находимся в карточке товара

if(skip_etaps_on_product_page == true) {

  console.log('stepindex ' + stepindex);

  if(stepindex == 4) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 0 + ')'); }

  if(stepindex == 8) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 7 + ')'); }


  
          }





// пропускам 3 или 5 экраны

        if(skip_top_shkaf == true) {

       

if(stepindex == 2) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 1 + ')') }
if(stepindex == 4) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 3 + ')') }

        }

         // kwiz_light 

         console.log('stepindex ' + stepindex);

    //  if(kwiz_light == true) {


    //   if(stepindex == 1) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 0 + ')'); }

    //   if(stepindex == 5) {  stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 2 + ')'); }
      
    //   if(stepindex == 8) { stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 7 + ')'); }
      
    //   }




        if(stepindex == 13) {

            if(bar_is == true) {


          stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 13 + ')');
  
            } else {

          

              stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 12 + ')');


            }


           }


           
          // если третий сайт с квизом тогда пропускаем фурнитуру и фасады


          if($('#kviz').hasClass('kviz_site')) {

            console.log('stepindex '+stepindex); 
          
            if(stepindex == 5) { 
              
              stepToActive = parrent.find('.kwiz-branch-form__step:eq(' + 2 + ')'); }
          
          
          }



        

    if (stepindex >= 0) {

      parrent.find('.kwiz-branch-form__step.active').removeClass('active');

      if(stepToActive.hasClass('disabled')) {




        stepToActive.prevAll(':not(.disabled)').first().addClass('active');


      } else {

        stepToActive.addClass('active');

      }


    } else {
      $(this).closest('.kwiz-branch-form').removeClass('active');
      $(this).closest('.kwiz-block__form').removeClass('branch');
    }
  }); // Technica

  var microvoln = false;
  $('.kitchen-appliances input').on('change', function (e) {
    var $this = $(this),
        parrent = $this.closest('.kitchen-appliances');

    if (parrent.find('input[data-microvolnovka="true"]:checked').length) {
      if (!$this.closest('.kitchen-appliances__item').next('.kitchen-appliances__item').hasClass('hidden')) {
        parrent.find('.kitchen-appliances__item--microvolnovka').removeClass('hidden');
      }

      microvoln = true;
    } else {
      microvoln = false;
      parrent.find('.kitchen-appliances__item--microvolnovka').addClass('hidden');
      parrent.find('.kitchen-appliances__item--microvolnovka input').prop('checked', false);
    }

    if (microvoln == false) {
      var next = $this.closest('.kitchen-appliances__item').next('.kitchen-appliances__item');

      if (next.hasClass('kitchen-appliances__item--microvolnovka')) {
        next = next.next('.kitchen-appliances__item');
      }
    } else {
      var next = $this.closest('.kitchen-appliances__item').next('.kitchen-appliances__item');
    }

    if ($this.hasClass('holod-built-in-false') || parrent.find('.holod-built-in-false').is(':checked')) {
      parrent.find('.built-in').closest('.kitchen-appliances__item-radio').addClass('hidden');
      parrent.find('.built-in').prop('checked', false);
    } else {
      parrent.find('.built-in').closest('.kitchen-appliances__item-radio').removeClass('hidden');
    }

    if (next.length && !next.hasClass('kitchen-appliances__item--information')) {
      next.removeClass('hidden');
    } else {
      $this.closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
    }

    var imageTechnica = "https://bigmebel-msk.ru/wp-content/webp-express/webp-images/doc-root/wp-content/themes/bigmebel/new/kwiz-img/technique/";
    parrent.find('.kitchen-appliances__item:not(".kitchen-appliances__item--information")').each(function (index, e) {
      var imgafter = index + 1 == parrent.find('.kitchen-appliances__item:not(".kitchen-appliances__item--information")').length ? '.png.webp' : '-';

      if (index == 0 && $(this).closest('.kitchen-appliances__item').next('.kitchen-appliances__item').find('input:checked').length) {
        imageTechnica = imageTechnica + "0" + imgafter;
      } else {
        if ($(this).find('input:checked').length) {
          imageTechnica = imageTechnica + $(this).find('input:checked').attr('data-image-index') + imgafter;
        } else {
          imageTechnica = imageTechnica + "0" + imgafter;
        }

 

        if (index + 1 == parrent.find('.kitchen-appliances__item:not(".kitchen-appliances__item--information")').length) {
          $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr('src', imageTechnica);
        }
      }
    });
  }); //Planirovka


  

  $('.planirovka-list__planirovka-item input[type=radio]').on('change', function (e) {

    console.log('planirovka-list change');
 
    var imageBig = $(this).attr('data-big-image'); 
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });

    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide').click();
  }); //Furnitura
 
  $('.furniture-list__furniture-item input[type=radio]').on('change', function (e) {

    console.log('furniture-list change');


    var imageBig = $(this).closest('.furniture-list__furniture-item').attr('data-imagebig');
    $(this).closest('.furniture-list__content').find('.furniture-list__item-note').addClass('disabled');
    $(this).closest('.furniture-list__content').find('.furniture-list__item-note input[type="checkbox"]').prop('disabled', true);
    $(this).closest('.furniture-list__content').find('.furniture-list__item-note input[type="checkbox"]').prop('checked', false);
    $(this).closest('.furniture-list__item').find('.furniture-list__item-note').removeClass('disabled');
    $(this).closest('.furniture-list__item').find('.furniture-list__item-note input[type="checkbox"]').prop('disabled', false);
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });

    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  });
  $('.furniture-list__item-note input[type="checkbox"]').on('change', function (e) {
    if ($(this).is(':checked')) {
      var imageBig = $(this).closest('label').attr('data-imagebig');
    } else {
      var imageBig = $(this).closest('.furniture-list__item').find('.furniture-list__furniture-item').attr('data-imagebig');
    }

    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
  
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  });


  if($(window).width() < 769) {

    $('.furniture-list__item-note-text').magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:false,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });

  } else {

    $('.furniture-list__item-note-text a').click(function (e) { 
  e.preventDefault();
});

  }

 

  $('.tabletop-list__tabletop-item input').on('change', function (e) {
    var imageBig = $(this).attr('data-imagebig');
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });



    $(this).closest('.kwiz-branch-form__step').next('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  }); //Fartuk

  $('.fartuk-list__fartuk-item input').on('change', function (e) {
    var thisImageBig = $(this).attr('data-imagebig'),
        tabletopIndex = $('.kwiz-branch-form.active .tabletop-list__content').find('input:checked').length ? $('.tabletop-list__content').find('input:checked').val() : 1,
        imageBig = "https://bigmebel-msk.ru/wp-content/webp-express/webp-images/doc-root/wp-content/themes/bigmebel/new/kwiz-img/fartuk/" + tabletopIndex + "/" + thisImageBig;
    $(this).closest('.kwiz-branch-form__step').next('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  }); //Handle

  $('.handle-list__handle-item input').on('change', function (e) {
    var thisImageBig = $(this).attr('data-imagebig'),
        fartukIndex = $('.fartuk-list__content').find('input:checked').length ? $('.fartuk-list__content').find('input:checked').closest('.fartuk-list__item').index() + 1 : 1,
        tabletopIndex = $('.tabletop-list__content').find('input:checked').length ? $('.tabletop-list__content').find('input:checked').closest('.tabletop-list__item').index() + 1 : 1,
        imageBig = "https://bigmebel-msk.ru/wp-content/webp-express/webp-images/doc-root/wp-content/themes/bigmebel/new/kwiz-img/handle/" + tabletopIndex + "/" + fartukIndex + "/" + thisImageBig;
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  }); //Fasad

  $('.fasad-list__fasad-item input[type=radio]').on('change', function (e) {
    var thisImageBig = $(this).attr('data-imagebig'),
        parrentFolder = "https://bigmebel-msk.ru/wp-content/webp-express/webp-images/doc-root/wp-content/themes/bigmebel/new/kwiz-img/fasad/" + $(this).attr('data-folder'),
        surface = $(this).attr('data-surface'),
        frezer = $(this).attr('data-frezer');

    if (surface == "true") {
      $(this).closest('.fasad-list').find('input[name^="fasadsurface"]').prop('disabled', false);
      $(this).closest('.fasad-list').find('input[name^="fasadsurface"]').closest('.fasad-list__dop-param-item-content').find('label:first-child input').prop('checked', true);
      parrentFolder = parrentFolder + "/" + $(this).closest('.fasad-list').find('input[name^="fasadsurface"]:checked').attr('data-folder');
    } else {
      $(this).closest('.fasad-list').find('input[name^="fasadsurface"]').prop('disabled', true);
      $(this).closest('.fasad-list').find('input[name^="fasadsurface"]').prop('checked', false);
    }

    if (frezer == "true") {
      $(this).closest('.fasad-list').find('input[name^="fasadforma"]').prop('disabled', false);
      $(this).closest('.fasad-list').find('input[name^="fasadforma"]').closest('.fasad-list__dop-param-item-content').find('label:first-child input').prop('checked', true);
      parrentFolder = parrentFolder + "/" + $(this).closest('.fasad-list').find('input[name^="fasadforma"]:checked').attr('data-folder');
    } else {
      $(this).closest('.fasad-list').find('input[name^="fasadforma"]').prop('disabled', true);
      $(this).closest('.fasad-list').find('input[name^="fasadforma"]').prop('checked', false);
    }

    var imageBig = parrentFolder + "/" + thisImageBig;
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  });
  $('.fasad-list__dop-param-item input[type=radio]').on('change', function (e) {
    var checkParrent = $(this).closest('.fasad-list').find('.fasad-list__content input:checked'),
        thisImageBig = checkParrent.attr('data-imagebig'),
        parrentFolder = "https://bigmebel-msk.ru/wp-content/webp-express/webp-images/doc-root/wp-content/themes/bigmebel/new/kwiz-img/fasad/" + checkParrent.attr('data-folder'),
        surface = checkParrent.attr('data-surface'),
        frezer = checkParrent.attr('data-frezer');

    if (surface == "true") {
      parrentFolder = parrentFolder + "/" + checkParrent.closest('.fasad-list').find('input[name^="fasadsurface"]:checked').attr('data-folder');
    }

    if (frezer == "true") {
      parrentFolder = parrentFolder + "/" + checkParrent.closest('.fasad-list').find('input[name^="fasadforma"]:checked').attr('data-folder');
    }

    var imageBig = parrentFolder + "/" + thisImageBig;
    checkParrent.closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  });
    checkParrent.closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  }); //Additional


  var bar_is = false;

  $('.additional-list__item input[data-step]').on('change', function (e) {
    var $this = $(this),
        id = $this.attr('data-step');

    if ($this.is(':checked')) {
        bar_is = true;
      $('.kwiz-branch-form__step[data-for="' + id + '"]').removeClass('spec');
    } else {
        bar_is = false;
      $('.kwiz-branch-form__step[data-for="' + id + '"]').addClass('spec');
    }
  });
 

  $('.additional-list__item').magnificPopup({
    delegate: '.additional-list__video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
  });


  $('.bar-list__bar-item input').on('change', function (e) {
    var imageBig = $(this).attr('data-imagebig');
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr({
      "src": imageBig,
      "data-src": imageBig
  }).addClass('changed');
    $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__next').removeClass('hide');
  });


  if (window.matchMedia('(max-width:766px)').matches) {
    $('.kwiz-params__title').on('click', function (e) {
      e.preventDefault();

      if ($(this).closest('.kwiz-params').hasClass('hideParams')) {
        // $(this).closest('.kwiz-params').find('.kwiz-params__item').slideDown();
        $(this).closest('.kwiz-params').removeClass('hideParams');
      } else {
        // $(this).closest('.kwiz-params').find('.kwiz-params__item').slideUp();
        $(this).closest('.kwiz-params').addClass('hideParams');
      }
    });
  }



  function pluralize(count, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]];
  }

  $('.kwiz-branch-form__next').on('click', function (e) {
    var $this = $(this),
        $parrent = $this.closest('.kwiz-branch-form__step'),
        index = $parrent.index('.kwiz-branch-form.active .kwiz-branch-form__step:not(.disabled)') + 1,
        count = 11 - index;

        console.log('ИНДЕКС '+index);




    count = count < 0 ? 0 : count;

    if ($parrent.find('input[data-step="bar"]:checked').length) {
      count = 1;
    }

    var text = pluralize(count, ['вопрос', 'вопроса', 'вопросов']);
    $parrent.closest('.kwiz-branch-form').find('.kwiz-progress [data-index="' + index + '"]').addClass('active');
    $parrent.closest('.kwiz-branch-form').find('.kwiz-progress__count').text(count);
    $parrent.closest('.kwiz-branch-form').find('.kwiz-progress__counttext').text(text);


    
  });


  if ($('.messenger-reviews__list').length) {
    var tinySliderMessenger = 0;
    $('.messenger-reviews__list').each(function () {
      tinySliderMessenger += 1;
      $(this).addClass('tnssliderMessenger' + tinySliderMessenger);
      var sliderMessenger = tns({
        "container": '.tnssliderMessenger' + tinySliderMessenger,
        "nav": true,
        "navPosition": "bottom",
        "controls": false,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": 0,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": true,
        "speed": 1000,
        "autoplayTimeout": 3000,
        "center": true,
        "responsive": {
          "1000": {
            "nav": false,
            "controls": true
          }
        }
      });
    });
  }

  $('.messenger-thumbs__gallery a').on('click', function (e) {
    e.preventDefault();
    var images = $(this).data('gallery');

    $(this).magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });

  });
  $('.messenger-thumbs__image').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.messenger-thumbs').find('.messenger-thumbs__gallery a').trigger('click');
  });
  $(document).on('mouseover', '.our-work-thumbs__image-item-nav', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $(this).closest('.our-work-thumbs__image-list').find('.our-work-thumbs__image-item').removeClass('active');
    $(this).closest('.our-work-thumbs__image-list').find('.our-work-thumbs__image-item-nav').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.our-work-thumbs__image-list').find('.our-work-thumbs__image-item:eq(' + index + ')').addClass('active');
  });
  $(document).on('mouseleave', '.our-work-thumbs__image-item-nav', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $(this).closest('.our-work-thumbs__image-list').find('.our-work-thumbs__image-item').removeClass('active');
    $(this).closest('.our-work-thumbs__image-list').find('.our-work-thumbs__image-item-nav').removeClass('active');
    $(this).closest('.our-work-thumbs__image-list').find('.our-work-thumbs__image-item-nav:eq(0)').addClass('active');
  });


  $('.our-work-thumbs').each(function() { 
    $(this).magnificPopup({
        delegate: 'a.our-work-thumbs__image-item-nav', 
        type: 'image',
        gallery: {
          enabled:true,
          tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        }
    });
});




  $(document).on('click', '.our-work-thumbs__more', function (e) {
    e.preventDefault();
    $(this).closest('.our-work-thumbs').find('.our-work-thumbs__image-item-nav.active').trigger('click');
  });

  if ($('.our-work-thumbs__image-navigation').length && window.matchMedia('(max-width:1000px)').matches) {
    var tinySliderOurWork = 0;
    $('.our-work-thumbs__image-navigation').each(function () {
      tinySliderOurWork += 1;
      $(this).addClass('tnssliderOurWork' + tinySliderOurWork);
      var sliderOurWork = tns({
        "container": '.tnssliderOurWork' + tinySliderOurWork,
        "nav": true,
        "navPosition": "bottom",
        "controls": false,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": 0,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 800,
        "autoplayTimeout": 4000
      });
    });
  }




    $('.oure-video').magnificPopup({
        delegate: '.oure-video__item', 
        type: 'iframe',
        iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
                  '</div>',
        
          patterns: {
            youtube: {
              index: 'youtube.com/',
        
              id: 'v=',
        
              src: '//www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            }
        
        
          },
        
          srcAction: 'iframe_src',
        }
    });


    if ($('.oure-video__list.for-slider').length) {
      var tinySliderOureVideo = 0;
      $('.oure-video__list.for-slider').each(function () {
        tinySliderOureVideo += 1;
        $(this).addClass('tnssliderOureVideo' + tinySliderOureVideo);
        var sliderOureVideo = tns({
          "container": '.tnssliderOureVideo' + tinySliderOureVideo,
          "nav": true,
          "navPosition": "bottom",
          "controls": false,
          "controlsPosition": "bottom",
          "gutter": 0,
          "items": 1,
          "autoplay": 0,
          "autoplayHoverPause": 1,
          "axis": "horizontal",
          "mouseDrag": false,
          "touch": true,
          "speed": 800,
          "autoplayTimeout": 4000
        });
      });
    }



    $('.price-specification__list').magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });


  if (!isMobile && $('.product-hero__image-item').length) {
    var doblicatImage = $('.product-hero__image-list').html(),
        previewImages = $('<div class="product-hero__image-preview-list"></div>');
    previewImages.appendTo('.product-hero__column-left');
    $('.product-hero__image-preview-list').html(doblicatImage);
    $('.product-hero__image-preview-list a').on('click', function (e) {
      e.preventDefault();
    });
  }

  if ($('.product-hero__image-item').length) {
     $('.product-hero__image-list').magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });


    var navContainerHeroProductImages = $('.product-hero__image-preview-list').length ? ".product-hero__image-preview-list" : false;
    var sliderProductCardImages = tns({
      "container": ".product-hero__image-list",
      "items": 1,
      "nav": false,
      "navPosition": "bottom",
      "navContainer": navContainerHeroProductImages,
      "controls": false,
      "controlsPosition": "bottom",
      "gutter": 0,
      "autoplay": 0,
      "autoplayHoverPause": 1,
      "axis": "horizontal",
      "mouseDrag": false,
      "touch": true,
      "speed": 800,
      "autoplayTimeout": 3000,
      "responsive": {
        "1022": {
          "nav": true
        }
      }
    });
    sliderProductCardImages.events.on('transitionEnd', function () {
      var info = sliderProductCardImages.getInfo(),
          count = info.displayIndex,
          containerNav = info.navContainer;
      $(containerNav).closest('.product-hero__image-box').find('.product-hero__mobile-slider-count span').text(count);
    });
  }

  if ($('.product-hero__price-option').length) {
    var priceActive = function priceActive() {
      var priceActive = $('.product-hero__price-option-name input:checked').closest('.product-hero__price-option-name').index();
      $('.product-hero__price-option-tab').removeClass('active');
      $('.product-hero__price-option-tab:eq(' + priceActive + ')').addClass('active');
    };

    priceActive();
    $('.product-hero__price-option-name input').on('change', function (e) {
      priceActive();
    });
  }

  $('.product-materials-catalog__tab-head li a').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('li').hasClass('active')) {
      return;
    }

    var index = $(this).closest('li').index();
    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('.product-materials-catalog').find('.product-materials-catalog__tab-item.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).closest('.product-materials-catalog').find('.product-materials-catalog__tab-item:eq(' + index + ')').addClass('active');
  });
  $('.product-materials-catalog__list-type li a').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('li').hasClass('active')) {
      return;
    }

    var index = $(this).closest('li').index();
    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('.product-materials-catalog__tab-item').find('.product-materials-catalog__list-wr.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).closest('.product-materials-catalog__tab-item').find('.product-materials-catalog__list-wr:eq(' + index + ')').addClass('active');
  });
  $('.material-thumbs__add input').on('change', function (e) {
    var $this = $(this);

    if ($this.is(':checked')) {
      var categor = $this.closest('.product-materials-catalog__tab-item').attr('data-categor'),
          dopCategor = $this.closest('.product-materials-catalog__tab-item').find('.product-materials-catalog__list-type'),
          dopCategorhtml = dopCategor.length ? '<div class="kitchen-configurator-result__material-dopcategor">' + dopCategor.find('li.active a').text() + '</div>' : '',
          name = $this.closest('.material-thumbs').find('.material-thumbs__name').text(),
          activeItem = $('<div class="kitchen-configurator-result__material-item"><div class="kitchen-configurator-result__material-head"><div class="kitchen-configurator-result__material-categor">' + categor + '</div>' + dopCategorhtml + '</div><div class="kitchen-configurator-result__material-body">' + name + '<button class="kitchen-configurator-result__material-remove"></button></div></div>');
      activeItem.appendTo('.kitchen-configurator-result__material-list-box');
      $('.kitchen-configurator-result__material-list-box').addClass('active');
      $this.closest('.material-thumbs').addClass('checked');
    } else {
      var categor = $this.closest('.product-materials-catalog__tab-item').attr('data-categor'),
          dopCategor = $this.closest('.product-materials-catalog__tab-item').find('.product-materials-catalog__list-type li.active a').text(),
          name = $this.closest('.material-thumbs').find('.material-thumbs__name').text();
      var activeGroup = $('.kitchen-configurator-result__material-list-box .kitchen-configurator-result__material-categor:contains(' + categor + ')').closest('.kitchen-configurator-result__material-item');

      if (dopCategor != '') {
        activeGroup = activeGroup.find('.kitchen-configurator-result__material-dopcategor:contains(' + dopCategor + ')').closest('.kitchen-configurator-result__material-item');
      }

      activeGroup = activeGroup.find('.kitchen-configurator-result__material-body:contains(' + name + ')').closest('.kitchen-configurator-result__material-item');
      activeGroup.remove();

      if ($('.kitchen-configurator-result__material-list-box .kitchen-configurator-result__material-item').length < 1) {
        $('.kitchen-configurator-result__material-list-box').removeClass('active');
      }

      $this.closest('.material-thumbs').removeClass('checked');
    }
  });
  $(document).on('click', '.kitchen-configurator-result__material-remove', function (e) {
    e.preventDefault();
    var $parrent = $(this).closest('.kitchen-configurator-result__material-item'),
        categor = $parrent.find('.kitchen-configurator-result__material-categor').text(),
        dopCategor = $parrent.find('.kitchen-configurator-result__material-dopcategor').text(),
        name = $parrent.find('.kitchen-configurator-result__material-body').text();
    var activeChecked = $('.product-materials-catalog__tab-item[data-categor="' + categor + '"]');

    if (dopCategor != '') {
      activeChecked = activeChecked.find('.product-materials-catalog__list-wr[data-categor="' + dopCategor + '"]');
    }

    activeChecked.find('.material-thumbs__name:contains(' + name + ')').closest('.material-thumbs').find('input').prop('checked', false).trigger('change');
  });
  $(document).on('click', '.kitchen-configurator-result__materail-clear a', function (e) {
    e.preventDefault();
    $('.kitchen-configurator-result__material-list-box .kitchen-configurator-result__material-item').remove();
    $('.product-materials-catalog__tab-list input').prop('checked', false).trigger('change');
    $('.kitchen-configurator-result__material-list-box').removeClass('active');
  });
  $('.product-reviews__list-title li a').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('li').hasClass('active')) {
      return;
    }

    var index = $(this).closest('li').index();
    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('.product-reviews').find('.product-reviews__tab-item.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).closest('.product-reviews').find('.product-reviews__tab-item:eq(' + index + ')').addClass('active');
  });

  if (!isMobile && $('.product-reviews .video-reviews').length) {
    var productVideoReviews = $('.product-reviews .video-reviews');
    productVideoReviews.find('.video-reviews__item').each(function (i, e) {
      if (i % 4 == 0) {
        var videoSlide = $('<div class="video-reviews__slide"></div>');
        videoSlide.appendTo($(this).closest('.video-reviews__list'));
      }

      $(this).appendTo($(this).closest('.video-reviews__list').find('.video-reviews__slide:last-child'));
    });
    $('.product-reviews .video-reviews__list').addClass('tinySliderReviesVideo');
    var sliderProductVideoReviews = tns({
      "container": ".tinySliderReviesVideo",
      "items": 1,
      "nav": false,
      "controls": true,
      "controlsPosition": "bottom",
      "gutter": 0,
      "autoplay": 0,
      "autoplayHoverPause": 1,
      "axis": "horizontal",
      "mouseDrag": false,
      "touch": true,
      "speed": 800,
      "autoplayTimeout": 500
    });



    
  }



  $('.production-step__nav-item a').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('.production-step__nav-item').hasClass('active')) {
      return;
    }

    var index = $(this).closest('.production-step__nav-item').index();
    $(this).closest('.production-step__nav').find('.production-step__nav-item.active').removeClass('active');
    $(this).closest('.production-step__nav-item').addClass('active');
    $(this).closest('.production-step').find('.production-step__tabs-item.active').removeClass('active');
    $(this).closest('.production-step').find('.production-step__tabs-item:eq(' + index + ')').addClass('active');
  });

  
  $('.production-thumbs').magnificPopup({
    delegate: '.production-thumbs__video-link', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }

    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});


  if ($('.production-thumbs__image-list').length) {
    var tinySliderProduction = 0;
    $('.production-thumbs__image-list').each(function () {
      tinySliderProduction += 1;
      $(this).addClass('tnssliderProduction' + tinySliderProduction);
      var autoplay = 1;
      var sliderProduction = tns({
        "container": '.tnssliderProduction' + tinySliderProduction,
        "nav": true,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": autoplay,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 1000,
        "autoplayTimeout": 3000,
        "center": false
      });

      if (window.matchMedia('(max-width:1000px)').matches) {
        $('.production-thumbs__image').on('touchend ', function () {
          sliderProduction.pause();
        });
      }
    });
  }


  $('.project-list__list, .related-products-block__tab-item, .thanks-team__gallery-item-list').each(function(){


    $(this).magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });


  });



  

$('.question-answer__item-name').on('click', function (e) {
  e.preventDefault();
  $(this).closest('.question-answer__item').toggleClass('opened');
  $(this).closest('.question-answer__item').find('.question-answer__item-body').slideToggle();
});

  if ($('.reconciliation-step__example-list').length) {
    var tinySliderReconcilationExample = 0;
    $('.reconciliation-step__example-list').each(function () {
      tinySliderReconcilationExample += 1;
      $(this).addClass('tnssliderReconcilationExample' + tinySliderReconcilationExample);
      var autoplay = 1;
      var sliderReconcilationExample = tns({
        "container": '.tnssliderReconcilationExample' + tinySliderReconcilationExample,
        "nav": false,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": 5,
        "items": 2,
        "autoplay": autoplay,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 1000,
        "autoplayTimeout": 3000,
        "responsive": {
          "1000": {
            "gutter": 16,
            "items": 3
          }
        }
      });

      if (window.matchMedia('(max-width:1000px)').matches) {
        $('.reconciliation-step__example').on('touchend ', function () {
          sliderReconcilationExample.pause();
        });
      }
    });
  } 
  
  
  $('.reconciliation-step__image').magnificPopup({
    delegate: '.reconciliation-step__video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/',    
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
    
      },
    
      srcAction: 'iframe_src',
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});


$('.related-products-block__tab-head li a').on('click', function (e) {
  e.preventDefault();

  if ($(this).closest('li').hasClass('active')) {
    return;
  }

  var index = $(this).closest('li').index();
  $(this).closest('ul').find('li').removeClass('active');
  $(this).closest('.related-products-block').find('.related-products-block__tab-item.active').removeClass('active');
  $(this).closest('li').addClass('active');
  $(this).closest('.related-products-block').find('.related-products-block__tab-item:eq(' + index + ')').addClass('active');
});

if ($('.related-products-block__list').length) {
  var relatedProductGroupSlider = window.matchMedia('(max-width:767px)').matches ? 6 : 8,
      relatedProductSliderCount = 1;
  $('.related-products-block__list').each(function (e) {
    var list = $(this),
        items = list.find('.related-products-block__item');
    items.each(function (i, e) {
      if (i % relatedProductGroupSlider == 0) {
        var videoSlide = $('<div class="related-products-block__slide"></div>');
        videoSlide.appendTo(list);
      }

      $(this).appendTo(list.find('.related-products-block__slide:last-child'));
    });
    list.addClass('tinySliderRelatedProduct' + relatedProductSliderCount);
    var tinySliderRelatedProduct = tns({
      "container": ".tinySliderRelatedProduct" + relatedProductSliderCount,
      "items": 1,
      "nav": true,
      "navPosition": "bottom",
      "controls": false,
      "controlsPosition": "bottom",
      "gutter": 0,
      "autoplay": 0,
      "autoplayHoverPause": 1,
      "axis": "horizontal",
      "mouseDrag": false,
      "touch": true,
      "speed": 800,
      "autoplayTimeout": 4000
    });
    relatedProductSliderCount += 1;
  });
}



$('.reconciliation-step__example-list').magnificPopup({
  delegate: '.reconciliation-step__example_a', 
  type: 'image',
  gallery: {
    enabled:true,
    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
  }
});



  
  $(document).on('opening', '.remodal', function () {
    $('.mobile-box').removeClass('opened');
  });
  var coursesName = '';
  $('[data-remodal-target="modal-submit-application"]').on('click', function () {
    if ($(this).closest('.choose-course-block__application-button').length) {
      var coursType = $(this).closest('.choose-course-block__body').find('.choose-course-block__title').text();
      coursesName = coursType + ' ' + $(this).closest('.choose-course-block__body').find('select option:checked').text();
    } else if ($(this).closest('.services-thumbs__button').length) {
      coursesName = $(this).closest('.services-thumbs__head').find('.services-thumbs__name').text();
    } else if ($(this).closest('.our-services-block__item').length) {
      coursesName = $(this).closest('.our-services-block__item').find('.our-services-block__item-name').text();
    } else {
      coursesName = '';
    }
  });
  $('.choose-course-block__application-button');
  $(document).on('opening', '.remodal.remodal--submit-application', function () {
    if (coursesName != '') {
      $('#course-name').val(coursesName);
      $('#course-name').removeClass('hidden');
    } else {
      $('#course-name').val('');
      $('#course-name').addClass('hidden');
    }
  });


  var countRightKitchen = 0;
  $('.right-kitchens__item').each(function (e) {
    countRightKitchen += 1;
    $(this).find('.right-kitchens__item-count').attr('data-count', '0' + countRightKitchen);
  });
  $('.right-kitchens__item-preview').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.right-kitchens__item').toggleClass('opened');
    $(this).closest('.right-kitchens__item').find('.right-kitchens__item-in').slideToggle();
  });

  if ($('.social-reviews__list').length) {
    var tinySliderReviews = 0;
    $('.social-reviews__list').each(function () {
      tinySliderReviews += 1;
      $(this).addClass('tnssliderReviews' + tinySliderReviews);
      var autoplay = 1;
      var sliderReviews = tns({
        "container": '.tnssliderReviews' + tinySliderReviews,
        "nav": false,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": autoplay,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 1000,
        "autoplayTimeout": 4000,
        "center": true,
        "fixedWidth": 224,
        "responsive": {
          "1000": {
            "fixedWidth": 320
          }
        }
      });

      if (window.matchMedia('(max-width:1000px)').matches) {
        $('.social-reviews__body').on('touchend ', function () {
          sliderReviews.pause();
        });
      }
    });
  }

  $('.social-reviews-thumbs__gallery a').on('click', function (e) {
    e.preventDefault();
    var images = $(this).data('gallery');
    $(this).magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled:true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      }
  });
  });
  $('.stages-of-work__step-progress ul li a').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('li').hasClass('active')) {
      return;
    }

    var index = $(this).closest('li').index();
    $(this).closest('ul').find('.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).closest('.stages-of-work').find('.stages-of-work__step-box.active').removeClass('active');
    $(this).closest('.stages-of-work').find('.stages-of-work__step-box:eq(' + index + ')').addClass('active');
  });
  $('.already-decided__form-file input[type="file"]').on('change', function (e) {
    var files = $(this)[0].files;

    if (files['length'] > 0) {
      $(this).closest('.already-decided__form-file').addClass('checked');
    } else {
      $(this).closest('.already-decided__form-file').removeClass('checked');
    }
  });

  $('.already-decided__list, .calculator-banner__list').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});


  $('.stages-of-work__step-preview').on('click', function (e) {
    if (window.matchMedia('(max-width:766px)').matches) {
      e.preventDefault();
      $(this).closest('.stages-of-work__step-box').find('.stages-of-work__step-body').slideToggle();
      $(this).closest('.stages-of-work__step-box').toggleClass('opened');
    }
  });
  


  $('.structur-closet__item-head').on('click', function (e) {
    e.preventDefault();
    var left = $(this).closest('.structur-closet__item').offset().left - $(this).closest('.structur-closet__list').offset().left,
        popup = $(this).closest('.structur-closet__item').find('.structur-closet__item-popup'),
        width = $(this).closest('.structur-closet__inner').width();
    popup.css({
      'width': width,
      'left': -left
    });
    $('.structur-closet__item').not($(this).closest('.structur-closet__item')).removeClass('opened');
    $(this).closest('.structur-closet__item').toggleClass('opened');
  });


  if (window.matchMedia('(min-width:769px)').matches) {
    if ($('.tags-block__list-in').length) {
      var tinySliderTags = 0;
      $('.tags-block__list-in').each(function () {
        tinySliderTags += 1;
        $(this).addClass('tnssliderTags' + tinySliderTags);
        var sliderTags = tns({
          "container": '.tnssliderTags' + tinySliderTags,
          "nav": false,
          "navPosition": "bottom",
          "controls": false,
          "controlsPosition": "bottom",
          "gutter": 10,
          "items": 3,
          "autoplay": 1,
          "autoplayHoverPause": 1,
          "axis": "horizontal",
          "mouseDrag": false,
          "touch": true,
          "speed": 1000,
          "autoplayTimeout": 3000,
          "responsive": {
            "1000": {
              "controls": true,
              "items": 5
            }
          }
        });
        $(this).closest('.tags-block').find('.tags-block__more > a').on('click', function (e) {
          e.preventDefault();

          if ($(this).hasClass('update')) {
            sliderTags = sliderTags.rebuild();
            $(this).removeClass('update');
          } else {
            sliderTags.destroy();
            $(this).addClass('update');
          }
        });
      });
    }
  } else {
    $('.tags-block__title').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.tags-block').toggleClass('opened');
      $(this).closest('.tags-block').find('.tags-block__list').slideToggle();
    });
  }

  

  if ($('.thanks-team__gallery-item-list').length) {
    var tinySliderTeamGallery = 0;
    $('.thanks-team__gallery-item-list').each(function () {
      tinySliderTeamGallery += 1;
      $(this).addClass('tnssliderTeamGallery' + tinySliderTeamGallery);
      var sliderTeamGallery = tns({
        "container": '.tnssliderTeamGallery' + tinySliderTeamGallery,
        "nav": false,
        "navPosition": "bottom",
        "controls": true,
        "controlsPosition": "bottom",
        "gutter": 0,
        "items": 1,
        "autoplay": 1,
        "autoplayHoverPause": 1,
        "axis": "horizontal",
        "mouseDrag": false,
        "touch": true,
        "speed": 1000,
        "autoplayTimeout": 4000
      });

      if (window.matchMedia('(max-width:1000px)').matches) {
        $('.thanks-team__gallery-item-list').on('touchend ', function () {
          sliderTeamGallery.pause();
        });
      }
    });
  }



  $('.thanks-team__gallery-item').magnificPopup({
    delegate: '.thanks-team__gallery-item-video', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
              '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
    
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
    
          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }
    
          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
        // you may add here more sources
    
      },
    
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});


$('.company-director').magnificPopup({
  delegate: '.company-director__video-button', 
  type: 'iframe',
  iframe: {
    markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
  
    patterns: {
      youtube: {
        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
  
        id: 'v=', // String that splits URL in a two parts, second part should be %id%
        // Or null - full URL will be returned
        // Or a function that should return %id%, for example:
        // id: function(url) { return 'parsed id'; }
  
        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
      },
      vimeo: {
        index: 'vimeo.com/',
        id: '/',
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
  
      // you may add here more sources
  
    },
  
    srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
  },
  gallery: {
    enabled:true,
    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
  }
});


$('.team-group').magnificPopup({
  delegate: '.team-group__video-button', 
  type: 'iframe',
  iframe: {
    markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay"></iframe>'+
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
  
    patterns: {
      youtube: {
        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
  
        id: 'v=', // String that splits URL in a two parts, second part should be %id%
        // Or null - full URL will be returned
        // Or a function that should return %id%, for example:
        // id: function(url) { return 'parsed id'; }
  
        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
      },
      vimeo: {
        index: 'vimeo.com/',
        id: '/',
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
  
      // you may add here more sources
  
    },
  
    srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
  },
  gallery: {
    enabled:true,
    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
  }
});




  $('.team-group__list-title').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $(this).closest('.team-group__list').find('.team-group__list-body').slideToggle();
  });

  if ($('.video-block__video-box, .product-determines-video__video-box').length) {
    var channelOfTop = $('.video-block__video-box, .product-determines-video__video-box').offset().top / 2;
    var channelFlag = 1;
  }

  $(window).scroll(function () {
    if ($('.video-block__video-box, .product-determines-video__video-box').length && $(this).scrollTop() > channelOfTop && channelFlag == 1) {
      var youtube_parser = function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match && match[7].length == 11 ? match[7] : false;
      };

      // Load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      $('.video-block__video-play, .product-determines-video__video-play').on('click', function (e) {
        e.preventDefault();
        var parrent = $(this).closest('.video-block__video-box, .product-determines-video__video-box'),
            videoId = parrent.data("link");
        videoId = youtube_parser(videoId);
        var iframemy = $('<div id="ytvideo"></div>');
        var ytplayer;
        iframemy.prependTo(parrent);
        parrent.addClass('play');
        var boxId = 'ytvideo';
        var ytPlayerLoad = setInterval(function () {
          if (!(typeof YT == 'undefined' || typeof YT.Player == 'undefined')) {
            var onPlayerReady = function onPlayerReady(event) {
              //event.target.mute();
              event.target.setVolume(70);
              event.target.playVideo();
            };

            ytplayer = new YT.Player(boxId, {
              height: '',
              width: '',
              videoId: videoId,
              // allowfullscreen: 'true',
              playerVars: {
                controls: 1,
                showinfo: 0,
                autoplay: 1
              },
              events: {
                onReady: onPlayerReady
              }
            });
            clearInterval(ytPlayerLoad);
          }
        }, 100);
      });
      channelFlag = 0;
    }
  });
  

  $('.video-reviews__item.external').magnificPopup({
    delegate: '.video-reviews-thumbs__more--desc, .video-reviews-thumbs__more--mobile', 
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen ontrolsList="nodownload" allow="autoplay"></iframe>'+
              '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
    
      patterns: {
        bigmebel: {
          index: '', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
    
          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }
    
          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
    
          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }
    
          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
    
        // you may add here more sources
    
      },
    
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
    gallery: {
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});



 
$('.video-reviews__item.internal, .oure-video__list').magnificPopup({
  delegate: '.video-reviews-thumbs__more--desc, .video-reviews-thumbs__more--mobile, .oure-video__item.internal', 
  type: 'inline',
  callbacks: {
    open: function() {

      $(this.content).find('video')[0].play();
      },
    close: function() {

      $(this.content).find('video')[0].load();
      }
    }
});







  $('.why-us__item-preview').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.why-us__item').toggleClass('opened');
    $(this).next('div').slideToggle();
  });  
   
  



  $('.kwiz-block__step-button.kwiz-block__step-button--next').on('click', function (e) {

    $('.kwiz-branch-form.active .kitchen-appliances input:checked').each(function() {
      

      var $this = $(this),
          parrent = $this.closest('.kitchen-appliances');

      var imageTechnica = "https://bigmebel-msk.ru/wp-content/webp-express/webp-images/doc-root/wp-content/themes/bigmebel/new/kwiz-img/technique/";
      parrent.find('.kitchen-appliances__item:not(".kitchen-appliances__item--information")').each(function (index, e) {
        var imgafter = index + 1 == parrent.find('.kitchen-appliances__item:not(".kitchen-appliances__item--information")').length ? '.png.webp' : '-';
  
        if (index == 0 && $(this).closest('.kitchen-appliances__item').next('.kitchen-appliances__item').find('input:checked').length) {
          imageTechnica = imageTechnica + "0" + imgafter;
        } else {
          if ($(this).find('input:checked').length) {
            imageTechnica = imageTechnica + $(this).find('input:checked').attr('data-image-index') + imgafter;
          } else {
            imageTechnica = imageTechnica + "0" + imgafter;
          }
          
        }
  
        $(this).closest('.kwiz-branch-form__step').find('.kwiz-branch-form__step-image img').attr('data-src', imageTechnica);


      });
  
    });
  

    

  });


  if ($('.reviews-screen__list').length) {
    var reviewsScreenSlider = tns({
      "container": '.reviews-screen__list',
      "nav": true,
      "navPosition": 'bottom',
      "controls": true,
      "controlsPosition": 'bottom',
      "gutter": 0,
      "items": 1,
      "slideBy": 1,
      "autoplay": 1,
      "axis": "horizontal",
      "mouseDrag": false,
      "mode": "carousel",
      "speed": 800,
      "responsive": {
        "480": {
          "items": 2,
          "slideBy": 2,
          "gutter": 15
        },
        "767": {
          "items": 4,
          "slideBy": 4,
          "gutter": 15
        }
      } // onInit: function() {
      //   $('.reviews-screen__list').lightGallery({
      //     selector: ".reviews-screen__item-thumbs-more a"
      //   });
      // }

    });
    $(document).on('click', '.reviews-screen__item-thumbs-more a', function (e) {
      e.preventDefault();
      var popup = $('<div class="reviews-screen__popup opened"><div class="reviews-screen__popup-inner"><button class="reviews-screen__popup-close"></button><img src="' + $(this).attr("href") + '" alt="/"></div></div>');
      popup.appendTo('.app');
    });
    $(document).on('click', '.reviews-screen__popup-close', function (e) {
      $('.reviews-screen__popup').remove();
    });
    $(document).on('click', '.reviews-screen__popup', function (e) {
      if ($(e.target).closest('.reviews-screen__popup-inner, .reviews-screen').length) {
        return;
      }

      $('.reviews-screen__popup').remove();
    });
  }

 


  $('input[name^=tabletop-type]:checked').each(function (index, element) {
    $(this).click().trigger('change');
    
  });

    


/* $('input[name^="etap"]').click(function(e) {
  console.log('click');
  $('.kwiz-branch-form__step-etap').removeClass('active');
  $('.final_step').addClass('active');
  // $('.kwiz-branch-form__step-etap.active button.kwiz-branch-form__next').trigger('click');
});


*/



});







