
const blueBtn   = document.querySelector('.blueBtn'),
      pinkBtn   = document.querySelector('.pinkBtn'),
      yellowBtn = document.querySelector('.yellowBtn'),
      orangeBtn = document.querySelector('.orangeBtn'),
      colorBtns = document.querySelectorAll('.colorButton'),
      bblCanvas = document.querySelector('.bubbleCanvas');
    
    


function getRandNum(x){
    return Math.floor(Math.random()* x);
}

function addClass(selector, className){
    selector.classList.add(className);
};

function removeNode(x, time){
    if(x){
        setTimeout(function(){
            x.remove(x);
        }, time);
     }
};


function intoArr(selector){
    var selectorArr = [].slice.call(selector);
    return selectorArr;
 }

// changing the bubble color
function changeColor(arr, arr2, arr3){
        for(let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', function(){
            arr3.unshift(arr2[i]);
            arr3.splice(1, (arr3.length-1));
        })    
   }    
}

window.onload = function(){
let     bblColor = [];

const   btnArr = intoArr(colorBtns), 
        bubbleColors = ['#fd2366', '#fce908', '#45ff00', '#0fedf7'],
        bubble = document.createElement('div');
        

function createBubble(){  

    //create 1st outer bubble 
    const bubbleWrapper = document.createElement('div');
    addClass(bubbleWrapper, 'bubble-wrapper')
    bubbleWrapper.style.left = getRandNum(90) + 'vw';
    bubbleWrapper.style.top =  (getRandNum(5) + 100) + '%';
    
    const bblWpSize = getRandNum(12);
    bubbleWrapper.style.width = bblWpSize + 'rem';
    bubbleWrapper.style.height = bblWpSize + 'rem';
    // create 2nd outer bubble
    const parentBubble = document.createElement('div');
    addClass(parentBubble, 'bubble-game');
    
    // create bubble
    const bubble = document.createElement('div');
    addClass(bubble, 'bubble');
    bubble.style.backgroundColor = bblColor[0];
    const  bblSize = bblWpSize - 0.5;
    bubble.style.width  = bblSize + 'rem';
    bubble.style.height = bblSize + 'rem';
    
    //---------------------------------------------------------------
    //bubble clolor control
    if(bblColor.length == 0){
//        bblColor.push('#0fedf7');
        bblColor.push('#0fedf7');
    } else if(bblColor.length !== 0){
        changeColor(btnArr, bubbleColors, bblColor);  
    }
    
    //---------------------------------------------------------------
    // create burst-wrapper
    const burstShell = document.createElement('div');
    addClass(burstShell,'burst-wrapper');
    const burstSize = bblSize - 0.5
    burstShell.style.width = burstSize + 'rem'; 
    burstShell.style.height = burstSize + 'rem'; 

    // create burst-wrapper's children 
    let drip = [];
    for( let i = 0;  drip.length< 8; i++){
        let particle = document.createElement('div');
        drip.push(particle)[i];
        burstShell.appendChild(drip[i]);
    }
    //---------------------------------------------------------------
    
    bubbleWrapper.appendChild(bubble);
    bubbleWrapper.appendChild(burstShell);
    parentBubble.appendChild(bubbleWrapper);
    
    
 
    // creating the bubble-game div on body
     bblCanvas.appendChild(parentBubble);
    
    //---------------------------------------------------------------
    //mouseover burst effect
    
    bubbleWrapper.addEventListener('mouseover', function(){ 

        const dripColor = ['#ffd008', '#f52a88', '#0ce5f7', '#fff', '#982ae8', '#fff'];
        let randColor   = dripColor[Math.floor(Math.random()* 6)];     
      
        drip.forEach(function(el){
            el.classList.add('ball');
            el.style.background = randColor;
            
            //burst ball size
            const dripSize = burstSize * 0.05;
            el.style.width = dripSize + 'rem';
            el.style.height = dripSize + 'rem';
        })
        
        // rotate burstWrapper randamly
        
        

//        removeParentNode(bubbleWrapper);
        bubble.remove(bubble);
 
  //        remove the parentBubble 
        removeNode(parentBubble, 650); 
        });
   
    //--------------------------------------------------------------

    // clear each bubble form DOM 
    removeNode(parentBubble, 17500);
}
    setInterval(createBubble, 200);

}
