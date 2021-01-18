        $(document).ready(function(){
    
            $('#fullpage').fullpage({
				scrollBar:true /*fullpage 사용시 반드시 적용되는 옵션*/
			})//end fullpage
			
			$('.produt').bxSlider({auto:true,
				pager:false,
			mode:'fade'
			})// end bxslide

			$('#brand').bxSlider({auto:true,
			slideWidth:380,
			maxSlides:3,
			minSlides:3,
			slideMargin:20,
			moveSlides:1, /*특별히 지정하지 않으면 maxSlide 갯수만큼*/
			pager:false,
		
			nextSelector:'#slider-next',
			prevSelector:'#slider-prev',
			nextText:'next',
			prevText:'prev'
			})
			
            $('.bt').on('click',function(){
                $('nav').toggle();
				$('.menu,header').toggleClass('on');
				
            })// click event

			console.log($(window).height())
			console.log($('body').height())

			/*위로가기 버튼 */
			$('.quickmenu>a:first').on('click',function(event){
				$('html,body').animate({scrollTop:0},600)
				event.preventDefault()
			})

			$('.quickmenu>a:last').on('click',function(event){
				var wHeight=$(window).height();
				var iHeight=$('body').height();
				$('html,body').animate({scrollTop:iHeight-wHeight},600);
				event.preventDefault()
			})
			$('.quickmenu').hide();

			$(window).on('scroll',function(){
				var winHeight = $(window).scrollTop();
				
				if(winHeight!=0){
					$('.quickmenu').show();
				}else{
					$('.quickmenu').hide();
				}

			})
    
        })//end ready
