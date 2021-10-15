 $(document).ready(function (){
    

        // Add active to navbar link
    $('.navbar li a').on('click', function (){
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
        });


        // sync navbar with sections
    $(window).scroll(function (){
        $('.block').each(function (){
            if ($(window).scrollTop() > $(this).offset().top - 150){
                var blockId = $(this).attr('id');
                $('.navbar li a').removeClass('active')
                $('.navbar li a[data-scroll="'  + blockId + '"]').addClass('active');
            }
            });
       
        //scroll to top by button  2
        var scrollToTop = $('.scroll-to-top');
        if($(window).scrollTop() > 400){
            scrollToTop.fadeIn(50);
        } else {
            scrollToTop.fadeOut(50);
        }
    });

      
    
       // close the window popup start
        $('.close2').on('click', function (){
        $('.popup1').remove();
        });
        
        

         // change background and color of box
   var bacgrouandbox = $('.products .box-container .box, .menu .box-container .box');
  
var colortextbox = $('.products .box-container .box h3, .products .box-container .box .price, .menu .box-container .box h3, .menu .box-container .box .price');

    $(bacgrouandbox).on('click', function () {
        $(this).toggleClass("is-visible");
        if($(this).hasClass("is-visible")){
            $(this).css({background : '#2B2B2B'}, 500);
            $('.products .box-container .box .icons a').css({border: '1px solid #777'}, 500)
        } else {
            $(this).css({background : 'black'}, 500);
            $('.products .box-container .box .icons a').css({color : '#eee'}, 500);

        }
    });
   
      // remove cart item
    $('.cart-item .fa-times').on('click', function (){
$(this).parent('.cart-item').remove()
    });




    var theText = $('.typer').data('text'),
    theTextLenght = theText.length,
   
   n = 0,
   theTyper = setInterval(function (){
       $('.typer').each(function (){
           $(this).html($(this).html() + theText[n]);
   
               });
           
               n += 1;
               if (n >= theTextLenght){
                   clearInterval(theTyper);
               }
           }, 50);
   


// slider cards
$('#autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
    } 
}); 

$('#goToPrevSlide').click(function(){
    slider.goToPrevSlide(); 
});


    });

