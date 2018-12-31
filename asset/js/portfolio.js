var respMenu   = document.querySelector('#burg-menu'),
    navTarget  = document.querySelectorAll('.nav li a'),
    close      = document.querySelector('.nav li ion-icon'),
//    slideButton = document.querySelectorAll('.slider-menu button'),
    slideMenu  = document.querySelectorAll('.slide-dot'),
    clickMeBtn = document.querySelectorAll('.js--dot'),
    metitles   = document.querySelectorAll('.meTitle'),
    slideOne   = document.querySelectorAll('.mobSlide'),
//    current    = document.querySelector('.current'),
//    activeDot = document.querySelector('.btn-outline-danger:not(:disabled):not(.disabled).active'),
    slideTWo   = document.querySelectorAll('.contSlide'),
   
    popup      = document.querySelector('.nav'),
    teamAnim   = document.querySelectorAll('.inner-person'),
    personInfo = document.querySelector('.p-info'),
    closeBtn   = document.querySelectorAll('.close-btn'),
    memberInfo = document.querySelectorAll('.member-info'),
    people     = document.querySelectorAll('.people'),
    mail       = document.querySelector('.sixth .section-e form'),
    submitBtn  = document.querySelector('.sixth .submit-btn'),
    answer     = document.querySelector('#sent'),
    contactForm  = document.querySelector('#contactUs');

    
/* disapear function*/
function disapear(any, selector){
    any.addEventListener('click', function(){
    setTimeout(function(){
        
        selector.style.display= 'none';
        
    }, 300);
})
}

/* appear function*/
function appear(any, selector){
    any.addEventListener('click', function(){
    /*popup.style.marginTop = window.visualViewport.pageTop + 'px';*/
        setTimeout(function(){
            selector.style.display= 'flex';

        }, 300)
    });
}

///* popup menu*/
appear(respMenu, popup);
disapear(close, popup);
const navArr = Array.from(navTarget);
/* popup menu disapear on click*/
for (let i = 0; i < navArr.length; i++){
    disapear(navArr[i], popup);
    
 }

/*slider section-C*/
function intoArr(selector){
    /*add click event */
    var selectorArr = [].slice.call(selector);
    return selectorArr;
 }

//var index = Array.prototype.slice.call(el.parentElement.children).indexOf(el)
    var dotArr      = intoArr(slideMenu);
    var slideOneArr = intoArr(slideOne);
    var slideTwoArr = intoArr(slideTWo);
    var originalIndex = 0;

  
// create a coly of original arr each time then cut/take out only the "clicked" item" 
function notIndex(arr, index){
    var copyArr = [...arr];
    copyArr.splice(index, 1);
//    console.log(copyArr);
    return copyArr;
    
}
// create a copy of copyarr from above each time then remove class from each object
function removingClass(arr, className){
    var copyArr = [...arr];
    return copyArr.forEach(function(el){
        el.classList.remove(className)
    })
}
//add class to the [n] 
function addingClass(arr, n, className){
    
    arr[n].classList.add(className);
}
// clear arr
function clearArr(arr){
    arr.length =  0;
}
// the first slider
function originalSlide(arr1, arr2){
    arr1[0].classList.add('slide-both');
    arr2[0].classList.add('slide-both');
} 
originalSlide(slideOneArr, slideTwoArr);



// function to get the clicked id 
  // make a copy of arrays to deal with the class add/remove then clear []s each time
function getId(arr, arr1, arr2){
    var newArr1, newArr2;
    for (let i = 0, len = arr.length; i < len; i++){
        arr[i].addEventListener('click', function(){
//            alert(i);
//            arr1[i].classList.add('slide-both');
            addingClass(arr1, i, 'slide-both');
            addingClass(arr1, i, 'current');
//            arr2[i].classList.add('slide-both');
            addingClass(arr2, i, 'slide-both');
            addingClass(arr2, i, 'current');
            arr[i].classList.add('now');
            newArr1 = notIndex(arr1, i);    
            newArr2 = notIndex(arr2, i);
            newArr3 = notIndex(arr, i);
            removingClass(newArr1, 'slide-both');
            removingClass(newArr1, 'current');
            removingClass(newArr2, 'slide-both');
            removingClass(newArr2, 'current');
            removingClass(newArr3 , 'now');
            
            clearArr(newArr1);
            clearArr(newArr2);
            clearArr(newArr3 );
        })    
    }     
}

getId(dotArr, slideOneArr, slideTwoArr);


// Section-D
for (var i = 0; i < closeBtn.length; i++){
        disapear(closeBtn[i], memberInfo[i]);
};

for(let i = 0; i < people.length; i++){
    appear(people[i], memberInfo[i]);
}
//
//// Section-E
//submitBtn.addEventListener('click', function(event){
//    let validated = contactForm.checkValidity();
//    if(validated == true){
//         mail.classList.add('animated', 'flipOutX');
//            setTimeout(function(){
//        answer.style.display= 'flex';
//    }, 600);   
//        
//    } else {
//       console.log('error')
//    }
//
//}, false);



$(document).ready(function() {
    

    /* For the sticky navigtion */
    $('.js--temp').waypoint(function(direction){
        if (direction == "down"){
            $('#logo').addClass('sticky');   
        } else {
            $('#logo').removeClass('sticky');
        }
    }, {
      offset: '60px'/*no";" at the end*/
    });
    
    $('.js--footer').waypoint(function(direction){
            $('#logo').toggleClass('sticky', direction === 'up');
            $('#logo').toggleClass('unstuck', direction === 'down');
            $(respMenu).toggleClass('sticky', direction === 'up');
            $(respMenu).toggleClass('unstuck', direction === 'down');
        },{
            offset: function(){
            return $('.js--footer').outerHeight();
        }
        });
    
//    $('.js--link--one').click(function () {
//        $('html, body').animate({scrollTop: $('.js--template').offset().top}, 1000);
//    });
//    
    /*template section*/
    const slideLeft   = document.querySelectorAll('.js--slide--left'),
          leftArr     = Array.from(slideLeft),
          slideRight  = document.querySelectorAll('.js--slide--right'),
          rightArr    = Array.from(slideRight),
          tempBubble1 = document.querySelectorAll('.js--tmB--1'),
          tempBubArr1 = Array.from(tempBubble1),
          tempBubble2 = document.querySelectorAll('.js--tmB--2'),
          tempBubArr2 = Array.from(tempBubble2),
          tempImg1    = document.querySelectorAll('.js--tmI--1'),
          tempImgArr1 = Array.from(tempImg1),
          tempImg2    = document.querySelectorAll('.js--tmI--2'),
          tempImgArr2 = Array.from(tempImg2),
          secTitles   = document.querySelectorAll('.js--typing'), 
          secTitArr   = Array.from(secTitles);  
    
    
    for( let i = 0; i < secTitArr.length; i++){
       $(secTitles[i]).waypoint(function(direction){
           $(secTitles[i]).toggleClass('text');
       },{
           offset: '90%'
       }) 
        };
    
    for( let i = 0; i < leftArr.length; i++){
        $(leftArr[i]).waypoint(function(direction){
            $(leftArr[i]).toggleClass('animated slideInLeft');
            $(tempBubArr1[i]).toggleClass('animated zoomIn');
            $(tempImg1[i]).toggleClass('animated slideInRight');
          
        }, {
            offset: '60%'
        });
    };
    
    for(let i = 0; i <rightArr.length; i++){
       $(rightArr[i]).waypoint(function(direction){
           $(rightArr[i]).toggleClass('animated slideInRight');
           $(tempBubArr2[i]).toggleClass('animated zoomIn');
           $(tempImg2[i]).toggleClass('animated slideInLeft');
       }, {
           offset: '60%'
       }); 
    }
    /*Skill section*/
    
    $('.js--skill').waypoint(function(direction){
        $('.js--skills').toggleClass('show');
        $('.js--skill--3').toggleClass('animated slideInLeft');
        $('.js--skill--1').toggleClass('animated slideInLeft2');
        $('.js--skill--2').toggleClass('animated slideInRight2');
        $('.js--skill--4').toggleClass('animated slideInRight');
    },{
        offset: '60%'
    });

    
    $('#js--me').waypoint(function(direction){ 
            $('.js--animated--one').toggleClass('animated rotateInUpLeft', direction === 'down');
//            $('.current .text-1').toggleClass('animated zoomInDown');
//            $('.current .text-2').toggleClass('animated zoomInDown');
//            $('.current .text-3').toggleClass('animated zoomInDown');
//            $('.current .text-4').toggleClass('animated zoomInDown');
//            $('.current .text-5').toggleClass('animated zoomInDown');
            let   meText  = document.querySelectorAll('.current .meText');
            let meTexts = Array.from(meText);
        
            for(let i = 0; i < meTexts.length; i++){
                
                $(meTexts[i]).toggleClass('animated zoomInDown');
                
            }   
        
        
        // add click event listener
    }, {
        offset: '50%'
    })
    
});

const meBtns   = Array.from(clickMeBtn),
      meTitles = Array.from(metitles),
      meImage  = document.querySelectorAll('.meImg'),
      meImgs   = Array.from(meImage);
 
/* about me on click function*/
for (let i = 0; i < meBtns.length; i++){
    
    meBtns[i].addEventListener('click', function(){
         
       
        
        /*typing animation start*/   
        if(meTitles[i].className.includes('text')){
            meTitles[i].classList.remove('text');
            setTimeout (function(){
                meTitles[i].classList.add('text');
        }, 400)
        
        }
        let  meText  = document.querySelectorAll('.current .meText');
        let meTextsClick = Array.from(meText);
        console.log(meTextsClick);
          for(let i = 0; i < meTextsClick.length; i++){
              if(meTextsClick[i].className.includes('zoomInDown')){
                meTextsClick[i].classList.add('non-show')  
                meTextsClick[i].classList.remove('zoomInDown');
                  setTimeout(function(){
                      meTextsClick[i].classList.toggle('non-show');
                      meTextsClick[i].classList.add('zoomInDown');
                  }, 500)
              }
              else {
                meTextsClick[i].classList.add('animated', 'zoomInDown');
          } 
        }
        
        console.log(meImgs);
            
        if(meImgs[i].className.includes('rotateInUpLeft')){
            meImgs[i].classList.add('non-show');  
            meImgs[i].classList.remove('rotateInUpLeft');
            setTimeout (function(){
                meImgs[i].classList.toggle('non-show'); 
                meImgs[i].classList.add('rotateInUpLeft');
            }, 500)
        } else {
                meImgs[i].classList.add('animated', 'rotateInUpLeft');
        }
        
            
        })

    
    }
    



