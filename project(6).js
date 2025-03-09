let score=0;
let gameOver=false;
if(!localStorage.getItem('hiscore')){
localStorage.setItem('hiscore',score);
}
let alienInterval, blastInterval, borderCrossInterval;
let bgMusic;
let giantAlienSound;
function startGame() {
  console.log('start')
  let startSound=new Audio('Go Go Go.mp3');
  startSound.classList.add('startSound');
  startSound.preload;
  startSound.play();

  bgMusic=new Audio('mrboss-63899.mp3');
  bgMusic.classList.add('bgMusic');
  bgMusic.loop = true;
  bgMusic.preload;
  bgMusic.volume=0.3;
  bgMusic.play();
    const spaceship = document.getElementById('spaceship');
    const spaceshipArea = document.getElementById('spaceshipArea');
    const game=document.querySelector('.game');
  // Remove any previous event listeners to prevent conflicts
  spaceshipArea.removeEventListener('touchmove', handleTouchMove);
  spaceshipArea.removeEventListener('mousemove', handleMouseMove);
  game.removeEventListener('click', handleFire);
  // Define the functions for event listeners
  function handleTouchMove(event) {
    if (gameOver) return;
    event.preventDefault(); // Prevent scrolling
    const touch = event.touches[0];
    const x = touch.clientX - (spaceship.width / 2); // Center the spaceship at the touch point
    spaceship.style.left = `${x}px`;
  }

  function handleMouseMove(event) {
    if (gameOver) return;
    const x = event.clientX - (spaceship.width / 2); // Center the spaceship at the mouse point
    spaceship.style.left = `${x}px`;
  }
  function handleFire() {
      if (gameOver) return;
      fire();
      
      console.log('fire');
    }
  
    // Attach event listeners again
    spaceshipArea.addEventListener('touchmove', handleTouchMove);
    spaceshipArea.addEventListener('mousemove', handleMouseMove);
    game.addEventListener('click', handleFire);

    // Start the game logic
    Aliens();
    blast();
    borderCross();
    Score();
  quadraAliens();
 hp();
  hpHit();
    triBulletspawn();
  tribulletHit();
      setInterval(()=>{
         giantAlien();
      },12000)
    giantAlienBlast();
      

 }

function fire() {
  if(gameOver) return;
  let fireSound=new Audio('Shotgun Fire.mp3');
  fireSound.classList.add('fireSound');
  fireSound.preload;
  fireSound.play();
  
  let bullet = document.createElement('img');
  bullet.src = "bullet.png";
  bullet.classList.add('bullet');
  let game = document.querySelector('.game')
  let spaceship = document.querySelector('#spaceship');
  bullet.onload = () => {
    let spaceshipRect = spaceship.getBoundingClientRect();
    let gameRect = game.getBoundingClientRect();

    // Calculate the position relative to the game container
    //  let topPosition = (spaceshipRect.top - gameRect.top - bullet.height)+250;
    //  let leftPosition = .left - gameRect.left + (spaceshipRect.width / 2) - (bullet.width / 2);
    let topPosition = spaceshipRect.bottom - spaceship.height - 30;
    let leftPosition = spaceshipRect.left + 15;
    bullet.style.top = `${topPosition}px`; // Position it just above the spaceship
    bullet.style.left = `${leftPosition}px`; // Center it horizontally
    game.appendChild(bullet); // Append to the game area

    var bulletRect = bullet.getBoundingClientRect();

    // removing bullets after 4 seconds
    setTimeout(() => {
      if (game.contains(bullet)) {
        game.removeChild(bullet);
        
      }
    }, 4000)

  };
}

//Aliens Coming Function
function Aliens() {
  if(gameOver) return;
let  duration=10
  let randomNumber;
 alienInterval= setInterval(() => {
    if(score<40){
       randomNumber = getRandomNumber(30, 40);
      //decreaseAnimationDuration(randomNumber)
      }
     else if(score>=40 && score<90){ 
         randomNumber = getRandomNumber(20, 30);
 //      decreaseAnimationDuration(randomNumber);
      }
      else if(score>=90){
        randomNumber=getRandomNumber(20, 25);
        //decreaseAnimationDuration(randomNumber)
      }
    if(gameOver) return;
    console.log(randomNumber);
    let alien = document.createElement('img');
    alien.classList.add('alien');
   alien.classList.add('alien-animation'); 
    alien.classList.add('alien-blast');
   alien.classList.add('alienRemove');
    alien.src = 'alien.png';
    document.querySelector('.game').appendChild(alien);
    let Left = generateMultipleOfTen(10, 320);
    alien.style.left = Left.toString() + 'px';
    var alienRect = alien.getBoundingClientRect()

    setTimeout(() => {
      if(document.querySelector('.game').contains(alien)){
      document.querySelector('.game').removeChild(alien);
      }
    }, 2800)
  },duration *100)
}


// Random number generator
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Random Alien left position
function generateMultipleOfTen(min, max) {
  const randomMultiple = Math.floor(Math.random() * ((max - min) / 10 + 1)) * 10;
  return randomMultiple;
}

// When bullet hits the alien 

function blast() {
  
blastInterval=  setInterval(() => {
    if(gameOver) return;
    let bullets = document.querySelectorAll('.bullet');
    let aliens = document.querySelectorAll('.alien-blast');

    bullets.forEach(bullet => {
      let bulletRect = bullet.getBoundingClientRect();
      aliens.forEach(alien => {
        let alienRect = alien.getBoundingClientRect();
        // Check if bullet and alien intersect
        if (
          bulletRect.top <= alienRect.bottom &&
          bulletRect.bottom >= alienRect.top &&
          bulletRect.left <= alienRect.right &&
          bulletRect.right >= alienRect.left
        ) {
          setTimeout(() => {
            alien.style.opacity = 0;
          }, 50);
          
          
          alien.classList.add('stopped');
          setTimeout(()=>{
            alien.remove();
          },900)
         
          bullet.remove();
          score+=1;
        scoreUpdate(score);
 if(score<=10 && score<=16){
   increaseAlienSpeed();
 }
         else if(score<=20 && score<=27){
             increaseAlienSpeed();
           }
         else if(score<=30 && score<=40){
             increaseAlienSpeed();
           }
          else if(score>40){
             increaseAlienSpeed();
           }

       }
      })
    })

  }, 40)

}


//  When alien entered SpaceShip Area

function borderCross(){
  
 borderCrossInterval= setInterval(()=>{
    if(gameOver) return;
    let aliens=document.querySelectorAll('.alienRemove');
    let  spaceshipArea=document.querySelector('#spaceshipArea');
  let spaceshipAreaRect=spaceshipArea.getBoundingClientRect();
    aliens.forEach(alien=>{
      
      let alienRect=alien.getBoundingClientRect();
      
      if(alienRect.bottom>=spaceshipAreaRect.top){
        
        let damagedSound=new Audio('Watch Alert.mp3');
  damagedSound.classList.add('damagedSound');
  damagedSound.preload;
  damagedSound.play();
        setTimeout(()=>{
          damagedSound.pause();
        },1000)
        console.log('damaged');
        spaceshipArea.classList.add('damaged');
        let hpSliderRect=document.querySelector('#hpSlider').getBoundingClientRect();
        let newWidth;
        if(alien.classList.contains('giantAlien')){
          
        
         newWidth = hpSliderRect.width - 25;
        }
        else{
           newWidth = hpSliderRect.width - 10;
        }
        if(newWidth<0){
          
          let gameOverSound=new Audio('Game Over - Sad Music.mp3');
  gameOverSound.classList.add('gameOverSound');
  gameOverSound.preload;
  gameOverSound.play();
         bgMusic.pause();       document.querySelector('.game').innerHTML+=`<div id="gameover">GAME OVER</div><button id='restart'>Restart</button`;
                     
 if(score>localStorage.getItem('hiscore')){
   localStorage.setItem('hiscore',score);
 }
          // Stop animations:
          const aliens = document.querySelectorAll('.alien');
          aliens.forEach((alien) => {
            alien.classList.add('stopped'); // Add the 'stopped' class
          });
        
          restart();
          gameOver=true;
        }
        else{
        document.querySelector('#hpSlider').style.width=newWidth+"px";
        }
        setTimeout(() => {
          spaceshipArea.classList.remove('damaged');
        }, 500); 
        alien.classList.remove('alienRemove');
        
      }
    })
  },100)
}


// Score
function Score(){
  
  //  Create scoreCard ONLY if it doesn't exist
  let scoreCard = document.querySelector('.scoreCard');
  if (!scoreCard) {
  let scoreCard=document.createElement('div');
  scoreCard.classList.add('scoreCard');
  document.querySelector('.game').append(scoreCard);
  }
document.querySelector('.scoreCard').innerHTML=`<div id='score'>Score : <p>${score}</p></div>`

  
}
function decreaseAnimationDuration(time) {
  const aliens = document.querySelectorAll('.alien-animation');
  aliens.forEach(alien => {
    alien.style.animationDuration = (time/10) + 's'; // Set the new duration (2 seconds)
  });
}
function scoreUpdate(newscore){
document.querySelector('#score').querySelector('p').innerHTML=newscore;
}
function stopIntervals() {
  clearInterval(alienInterval);
  clearInterval(blastInterval);
  clearInterval(borderCrossInterval);
}
function restart(){
 /* score=0;
  gameOver=false;*/
  let restart=document.querySelector('#restart');
  restart.addEventListener("click",()=>{
    //stopIntervals();
    
    location.reload();//Refreshing the page.
    /* 
    document.querySelector('.game').innerHTML='';
    
    setTimeout(()=>{
      document.querySelector('.game').innerHTML=`<div id='hp'></span><span id="char"><img src="rocketIcon.png"></span><span id="hpbar"><span id="hpSlider"></span></span></div>
        <div id='spaceshipArea'>
          <img src='spaceShip.png' width='70px' id='spaceship'>
        </div>`;
      setTimeout(()=>{
        startGame();
      },1000);
    },1000);*/
  })
}

function increaseAlienSpeed() {
    const aliens = document.querySelectorAll('.alien');
    aliens.forEach(alien => {
        let currentDuration = parseFloat(window.getComputedStyle(alien).animationDuration);
        let newDuration = currentDuration - 0.1; // Decrease duration by 0.1s
        if (newDuration > 0.5) { // Ensure the animation duration doesn't get too fast
            alien.style.animationDuration = newDuration + 's';
        }
    });
}

function quadraAliens(){
  setInterval(()=>{
    for(let i=0;i<2;i++){
      setTimeout(()=>{
        

    let alien = document.createElement('img');
    alien.classList.add('alien');
        alien.classList.add('alien-blast')
    alien.classList.add('alien-animation'); 
    alien.classList.add('alienRemove');
    alien.src = 'alien.png';
    document.querySelector('.game').appendChild(alien);
    let Left = generateMultipleOfTen(10, 300);
    alien.style.left = Left.toString() + 'px';
    var alienRect = alien.getBoundingClientRect()

    setTimeout(() => {
      if(document.querySelector('.game').contains(alien)){
      document.querySelector('.game').removeChild(alien);
      }
    }, 2800)
        },i*400)
    }
  },15000)
}

function giantAlien(){
  let intervalTime=getRandomNumber(15000,18000);
  let interval =setInterval(()=>{
         let alien = document.createElement('img');
    alien.classList.add('alien');
    alien.classList.add('giantAlien');
   alien.classList.add('alien-animation'); 
    alien.classList.add('alienRemove');
    alien.src = 'alien.png';
    document.querySelector('.game').appendChild(alien);
    
    giantAlienSound=new Audio('Danger Hooter.mp3');
  giantAlienSound.classList.add('giantAlienSound');
  giantAlienSound.preload;
  giantAlienSound.play();
    
    let Left = generateMultipleOfTen(10, 300);
    alien.style.left = Left.toString() + 'px';
    var alienRect = alien.getBoundingClientRect()

    setTimeout(() => {
      if(document.querySelector('.game').contains(alien)){
      document.querySelector('.game').removeChild(alien);
      }
    }, 2800)
    setTimeout(()=>{
      clearInterval(interval);
      
    },3400)

  },intervalTime)
}

//giantAlien Blast Function
function giantAlienBlast() {
  let blastInterval = setInterval(() => {
    if (gameOver) {
      clearInterval(blastInterval); // Stop the interval if the game is over
      return;
    }

    let bullets = document.querySelectorAll('.bullet');
    let aliens = document.querySelectorAll('.giantAlien');

    aliens.forEach(alien => {
      let alienHit = alien.dataset.hitCount ? parseInt(alien.dataset.hitCount) : 0; // Store hit count using dataset

      bullets.forEach(bullet => {
        let bulletRect = bullet.getBoundingClientRect();
        let alienRect = alien.getBoundingClientRect();

        // Check if bullet and alien intersect
        if (
          bulletRect.top <= alienRect.bottom &&
          bulletRect.bottom >= alienRect.top &&
          bulletRect.left <= alienRect.right &&
          bulletRect.right >= alienRect.left
        ) {
          alienHit += 1; // Increment hit count

          if (alienHit >= 3) { // When alien is hit 3 times
            alien.style.opacity = 0;
            alien.classList.add('stopped');
            setTimeout(() => {
              alien.remove();
            }, 200);
            giantAlienSound.pause();
            score += 2;
            scoreUpdate(score);

            // Adjust alien speed based on score ranges
          /*  if (score > 10 && score <= 16) {
              increaseAlienSpeed();
            } else if (score > 16 && score <= 27) {
              increaseAlienSpeed();
            } else if (score > 27 && score <= 40) {
              increaseAlienSpeed();
            }
            */
          } 
          else {
            alien.dataset.hitCount = alienHit; // Update hit count for this alien
          }

          bullet.remove(); // Remove the bullet after hitting the alien
        }
      });
    });
  }, 100);
}

// health Pack Function
function hp(){
  if(gameOver){
    return;
  }
  setInterval(()=>{
    let hp=document.createElement('img'); 
      hp.src='healthpack.png';
    hp.classList.add('hp');
document.querySelector('.game').appendChild(hp);
    let Left = generateMultipleOfTen(10, 320);
    hp.style.left = Left.toString() + 'px';
   setTimeout(()=>{
     if(hp){
       hp.remove();
     }
   },3000)
  },20000)
  
}

function hpHit() {

hpInterval= setInterval(() => {
    if(gameOver) return;
    let bullets = document.querySelectorAll('.bullet');
    let hps= document.querySelectorAll('.hp');

    bullets.forEach(bullet => {
      let bulletRect = bullet.getBoundingClientRect();
      hps.forEach(hp => {
        let hpRect = hp.getBoundingClientRect();
        // Check if bullet and alien intersect
        if (
          bulletRect.top <= hpRect.bottom &&
          bulletRect.bottom >= hpRect.top &&
          bulletRect.left <= hpRect.right &&
          bulletRect.right >= hpRect.left
        ) {
          setTimeout(() => {
            hp.style.opacity = 0;
          }, 50);

let hpSound=new Audio('game-bonus-144751.mp3');
  hpSound.classList.add('hpSound');
  hpSound.preload;
  hpSound.play();
          hp.classList.add('stopped');
          setTimeout(()=>{
            hp.remove();
          },900)

          bullet.remove();
          // width increase of hp
          let hpSliderRect=document.querySelector('#hpSlider').getBoundingClientRect();
          if(hpSliderRect.width<150){
          let newWidth = hpSliderRect.width+30;
            if(newWidth>150){
              newWidth=150;
            }
            document.querySelector('#hpSlider').style.transitionDuration='0.9s';
            document.querySelector('#hpSlider').style.width=newWidth+"px";

            setTimeout(()=>{
              document.querySelector('#hpSlider').style.transitionDuration='0.4s';

            },1000)
          }
       }
      })
    })

  }, 40)

}

// Tribullet 
function triBullet(){
  for(let i=0;i<2;i++){
    
      if(gameOver) return;
      let bullet = document.createElement('img');
      bullet.src = "bullet.png";
      bullet.classList.add('bullet');
      bullet.classList.add(`triBullet${i}`);
      let game = document.querySelector('.game')
      let spaceship = document.querySelector('#spaceship');
      bullet.onload = () => {
        let spaceshipRect = spaceship.getBoundingClientRect();
        let gameRect = game.getBoundingClientRect();

        // Calculate the position relative to the game container
        //  let topPosition = (spaceshipRect.top - gameRect.top - bullet.height)+250;
        //  let leftPosition = .left - gameRect.left + (spaceshipRect.width / 2) - (bullet.width / 2);
        let topPosition = spaceshipRect.bottom - spaceship.height - 30;
        let leftPosition;

        if(i==0){
         leftPosition = spaceshipRect.left + 40;
        }
        if(i==1){
        leftPosition = spaceshipRect.left + -10;
        }
        bullet.style.top = `${topPosition}px`; // Position it just above the spaceship
        bullet.style.left = `${leftPosition}px`; // Center it horizontally
        game.appendChild(bullet); // Append to the game area

        var bulletRect = bullet.getBoundingClientRect();

        // removing bullets after 4 seconds
        setTimeout(() => {
          if (game.contains(bullet)) {
            game.removeChild(bullet);

          }
        }, 4000)

      };
    
  }
}
function triBulletspawn(){
  if(gameOver){
    return;
  }
  setInterval(()=>{
    let triBullet=document.createElement('img'); 
      triBullet.src='tribullet.png';
    triBullet.classList.add('tribulleticon');
  document.querySelector('.game').appendChild(triBullet);
    let Left = generateMultipleOfTen(10, 310);
    triBullet.style.left = Left.toString() + 'px';
   setTimeout(()=>{
     if(triBullet){
       triBullet.remove();
     }
   },3000)
  },15000)

}


function tribulletHit() {

tribulletInterval= setInterval(() => {
    if(gameOver) return;
    let bullets = document.querySelectorAll('.bullet');
    let tribulleticon= document.querySelectorAll('.tribulleticon');

    bullets.forEach(bullet => {
      let bulletRect = bullet.getBoundingClientRect();
      tribulleticon.forEach(tribullet => {
        let tribulletRect = tribullet.getBoundingClientRect();
        // Check if bullet and alien intersect
        if (
          bulletRect.top <= tribulletRect.bottom &&
          bulletRect.bottom >= tribulletRect.top &&
          bulletRect.left <= tribulletRect.right &&
          bulletRect.right >= tribulletRect.left
        ) {
          setTimeout(() => {
            tribullet.style.opacity = 0;
          }, 50);


          tribullet.classList.add('stopped');
          setTimeout(()=>{
            tribullet.remove();
          },900)

          bullet.remove();
          //if trivulleet already exist in event lsiterner then remove it

          function handleTriFire() {
            if (gameOver) return;
            triBullet();
            
          }
          
        
         
          
          
          document.querySelector('.game').addEventListener('click',handleTriFire);
        
          setTimeout(()=>{
            document.querySelector('.game').removeEventListener('click',handleTriFire)
          },8000)
            
       }
      })
    })

  }, 40)

}
//Home Page
if(parseInt(localStorage.getItem('hiscore'))<=0){
  document.querySelector('.hiscore').innerText='Play And Create Records';
}
else{
  document.querySelector('.hiscore').innerText=`Hi Score: ${localStorage.getItem('hiscore')}`;
}
let start=document.querySelector('.start').querySelector('button');
start.addEventListener('click',()=>{
  document.querySelector('.game').classList.toggle('gameHide');
  document.querySelector('.start').classList.add('startHide');

  setTimeout(()=>{
    startGame();
  },1000);
})
  