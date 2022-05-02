(function($){

  // 객체(Object)
  // 스크립트 내부에서 변수 출동 및
  // 프로그램 제작 영역의 구분 등을 객체를 이용한다
  // 자바스크립트는 객체지향이다.
  // 객체 => 클래스 

  const gangwon = {

    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },

    header:function(){

      $('.main-btn').on({
        mouseenter: function(){
          $('.sub').stop().fadeOut(0);
          $(this).next().stop().fadeIn(300);
      
          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        },
        focusin: function(){
          $('.sub').stop().fadeOut(0);
          $(this).next().stop().fadeIn(300);
      
          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        }
      });
    
      $('#nav').on({
        mouseleave:function(){
          $('.sub').stop().fadeOut(300);
          $('.main-btn').removeClass('on');
        }
      });
    },

    section1:function(){
        let cnt=0;
        
        // 1. 메인슬라이드함수
        function mainSlide(){
          $('.slide-wrap').animate({top:-300*cnt}, 600, function(){
            cnt>2?cnt=0:cnt;
            cnt<0?cnt=2:cnt;
            $('.slide-wrap').animate({top:-300*cnt},0);
          });
        }
        
        // 2. 다음카운트함수
        function nextCount(){
          cnt++;
          mainSlide();
        }
  
        // 2-1. 이전카운트함수
        function prevCount(){
          cnt--;
          mainSlide();
        }
        
        // 3. 자동타이머함수
        function autoTimer(){
          setInterval(nextCount, 3000);
          //setInterval(prevCount, 3000);
        }
        autoTimer();
      },
  
    section2:function(){
      $('.gallery-btn').on({
        click:function(){
        $('.notice-btn').addClass('on'); 
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');
        }
      });
    
      $('.notice-btn').on({
         click:function(){
           $('.notice-btn').removeClass('on');
           $('.gallery-btn').removeClass('on');
           $('.notice-box').removeClass('on');
           $('.gallery-box').removeClass('on');      
         }
      });
    
      $('.link-btn').on({
       click:function(){
          $('#modal').stop().fadeIn(300);
       } 
      });
    
      $('.close-btn').on({
        click:function(){
          $('#modal').stop().fadeOut(300);
        }
      });
    },

    footer:function(){}

  }
  gangwon.init();
  
})(jQuery);