let arr = [
  {
    quest: "Which one of these is a fire type Pokémon?",
    opt1: "Electabuzz",
    opt2: "Meowth",
    opt3: "Infernape",
    opt4: "Gengar",
    correctAnswer: "Infernape"
  },
  {
    quest: "Which one of these is a water type Pokémon?",
    opt1: "Electivire",
    opt2: "Metagross",
    opt3: "Charmander",
    opt4: "Clauncher",
    correctAnswer: "Clauncher"
  },
  {
    quest: "Which one of these Pokémon evolves from Eevee using a Water Stone?",
    opt1: "Jolteon",
    opt2: "Flareon",
    opt3: "Vaporeon",
    opt4: "Leafeon",
    correctAnswer: "Vaporeon"
  },
  {
    quest: "Which one of these Pokémon can learn the move 'Hyper Beam'?",
    opt1: "Pikachu",
    opt2: "Gyarados",
    opt3: "Caterpie",
    opt4: "Jigglypuff",
    correctAnswer: "Gyarados"
  },
  {
    quest: "Which one of these types is super effective against Grass types?",
    opt1: "Water",
    opt2: "Electric",
    opt3: "Fire",
    opt4: "Grass",
    correctAnswer: "Fire"
  },
  {
    quest: "Which Pokémon evolves into Machamp?",
    opt1: "Machoke",
    opt2: "Machop",
    opt3: "Machina",
    opt4: "Machus",
    correctAnswer: "Machoke"
  },
  {
    quest: "Which one of these Pokémon has the ability 'Levitate'?",
    opt1: "Weezing",
    opt2: "Onix",
    opt3: "Pikachu",
    opt4: "Charmander",
    correctAnswer: "Weezing"
  },
  {
    quest: "Which one of these Pokémon is known as the 'Lava Dome' Pokémon?",
    opt1: "Slugma",
    opt2: "Magcargo",
    opt3: "Torkoal",
    opt4: "Camerupt",
    correctAnswer: "Magcargo"
  },
  {
    quest: "Which one of these is a dragon type Pokémon?",
    opt1: "Dragonite",
    opt2: "Clefairy",
    opt3: "Jigglypuff",
    opt4: "Oddish",
    correctAnswer: "Dragonite"
  },
  {
  quest: "Which Pokémon is known as the 'Mouse Pokémon'?",
    opt1: "Rattata",
    opt2: "Pikachu",
    opt3: "Sandslash",
    opt4: "Minccino",
    correctAnswer: "Pikachu"
  },
  {
    quest: "Which type is super effective against Dragon-type Pokémon?",
    opt1: "Fairy",
    opt2: "Fire",
    opt3: "Water",
    opt4: "Grass",
    correctAnswer: "Fairy"
  },
  {
    quest: "What is the evolved form of Bulbasaur?",
    opt1: "Ivysaur",
    opt2: "Venusaur",
    opt3: "Charmander",
    opt4: "Wartortle",
    correctAnswer: "Ivysaur"
  },
  {
    quest: "Which Pokémon is known for its move 'Thunderbolt'?",
    opt1: "Charmander",
    opt2: "Pikachu",
    opt3: "Bulbasaur",
    opt4: "Squirtle",
    correctAnswer: "Pikachu"
  },
  {
    quest: "Which Pokémon evolves into Charizard?",
    opt1: "Bulbasaur",
    opt2: "Squirtle",
    opt3: "Charmander",
    opt4: "Jigglypuff",
    correctAnswer: "Charmander"
  },
  {
    quest: "Which type is super effective against Water-type Pokémon?",
    opt1: "Electric",
    opt2: "Ground",
    opt3: "Fire",
    opt4: "Flying",
    correctAnswer: "Electric"
  },
  {
    quest: "Which Pokémon evolves into Machamp?",
    opt1: "Machop",
    opt2: "Machoke",
    opt3: "Machamp",
    opt4: "Magikarp",
    correctAnswer: "Machoke"
  },
  {
    quest: "Which Pokémon is known for its ability to transform into any other Pokémon?",
    opt1: "Ditto",
    opt2: "Eevee",
    opt3: "Zorua",
    opt4: "Mew",
    correctAnswer: "Ditto"
  },
  {
    quest: "Which type has the most resistances?",
    opt1: "Steel",
    opt2: "Dragon",
    opt3: "Fairy",
    opt4: "Ghost",
    correctAnswer: "Steel"
  },
  {
    quest: "Which Pokémon evolves into Gengar?",
    opt1: "Gastly",
    opt2: "Haunter",
    opt3: "Golem",
    opt4: "Geodude",
    correctAnswer: "Haunter"
  },
  {
    quest: "Which Pokémon is known as the 'Lizard Pokémon'?",
    opt1: "Charizard",
    opt2: "Ekans",
    opt3: "Charmander",
    opt4: "Sceptile",
    correctAnswer: "Charmander"
  },
  {
    quest: "Which ability allows a Pokémon to change its type to match a move?",
    opt1: "Levitate",
    opt2: "Sturdy",
    opt3: "Protean",
    opt4: "Adaptability",
    correctAnswer: "Protean"
  },
  {
    quest: "Which Pokémon evolves into Arcanine using a Fire Stone?",
    opt1: "Growlithe",
    opt2: "Vulpix",
    opt3: "Eevee",
    opt4: "Ninetales",
    correctAnswer: "Growlithe"
  },
  {
    quest: "Which Pokémon can have the ability 'Intimidate'?",
    opt1: "Pikachu",
    opt2: "Gyarados",
    opt3: "Bulbasaur",
    opt4: "Jigglypuff",
    correctAnswer: "Gyarados"
  },
  {
    quest: "Which type is super effective against Psychic-type Pokémon?",
    opt1: "Dark",
    opt2: "Fire",
    opt3: "Water",
    opt4: "Grass",
    correctAnswer: "Dark"
  },
  {
    quest: "Which Pokémon evolves into Butterfree?",
    opt1: "Weedle",
    opt2: "Caterpie",
    opt3: "Metapod",
    opt4: "Kakuna",
    correctAnswer: "Metapod"
  },
  {
    quest: "Which Pokémon is known as the 'Dragon Pokémon'?",
    opt1: "Dragonite",
    opt2: "Garchomp",
    opt3: "Salamence",
    opt4: "Hydreigon",
    correctAnswer: "Dragonite"
  },
  {
    quest: "Which type is super effective against Fairy-type Pokémon?",
    opt1: "Steel",
    opt2: "Poison",
    opt3: "Both Steel and Poison",
    opt4: "None",
    correctAnswer: "Both Steel and Poison"
  },
  {
    quest: "Which one of these Pokémon is weak against Electric type moves?",
    opt1: "Geodude",
    opt2: "Pidgey",
    opt3: "Sandshrew",
    opt4: "Onix",
    correctAnswer: "Pidgey"
  },
  {
    quest: "Which one of these Pokémon evolves into Alakazam?",
    opt1: "Abra",
    opt2: "Kadabra",
    opt3: "Machop",
    opt4: "Gengar",
    correctAnswer: "Kadabra"
  },
  {
    quest: "Which one of these moves is a Water type move?",
    opt1: "Thunderbolt",
    opt2: "Flamethrower",
    opt3: "Surf",
    opt4: "Solar Beam",
    correctAnswer: "Surf"
  },
  {
    quest: "Which Pokémon has the highest base Speed stat?",
    opt1: "Electrode",
    opt2: "Jolteon",
    opt3: "Ninjask",
    opt4: "Pidgeot",
    correctAnswer: "Ninjask"
  },
  {
    quest: "Which one of these is a steel type Pokémon?",
    opt1: "Steelix",
    opt2: "Abra",
    opt3: "Machoke",
    opt4: "Koffing",
    correctAnswer: "Steelix"
  },
  {
    quest: "Which one of these Pokémon evolves from Clefairy?",
    opt1: "Cleffa",
    opt2: "Clefable",
    opt3: "Clefairia",
    opt4: "Clef",
    correctAnswer: "Clefable"
  },
  {
    quest: "Which one of these moves is a Psychic type move?",
    opt1: "Psychic",
    opt2: "Hydro Pump",
    opt3: "Earthquake",
    opt4: "Thunder Punch",
    correctAnswer: "Psychic"
  },
  {
    quest: "Which one of these Pokémon is weak against Rock type moves?",
    opt1: "Charizard",
    opt2: "Blastoise",
    opt3: "Venusaur",
    opt4: "Pikachu",
    correctAnswer: "Charizard"
  },
  {
    quest: "Which one of these Pokémon evolves using a Moon Stone?",
    opt1: "Jigglypuff",
    opt2: "Psyduck",
    opt3: "Growlithe",
    opt4: "Rhyhorn",
    correctAnswer: "Jigglypuff"
  },
  {
    quest: "Which one of these Pokémon has the ability 'Static'?",
    opt1: "Jigglypuff",
    opt2: "Psyduck",
    opt3: "Pikachu",
    opt4: "Machop",
    correctAnswer: "Pikachu"
  },
  {
    quest: "Which one of these Pokémon evolves into Blastoise?",
    opt1: "Wartortle",
    opt2: "Squirtle",
    opt3: "Charmander",
    opt4: "Bulbasaur",
    correctAnswer: "Wartortle"
  }
];

function startQuiz() {

  let score;
  score = 0
  document.querySelector('.head').innerHTML += `<div id='scorebox'>Score : <p id='score'>${score}</p></div>`;

  let i = 0;

  document.querySelector('main').innerHTML = `<div class='quest${i}'><h4>1.${arr[i].quest}</h4>
<div class="opt" data-index=${i}>${arr[i].opt1}</div>
<div class="opt" data-index=${i}>${arr[i].opt2}</div>
<div class="opt" data-index=${i}>${arr[i].opt3}</div>
<div class="opt" data-index=${i}>${arr[i].opt4}</div>
</div>`



  function newQuest(i) {
    document.querySelector('main').innerHTML = `<div class='quest${i}'><h4>${i + 1}.${arr[i].quest}</h4>
  <div class="opt" data-index=${i}>${arr[i].opt1}</div>
  <div class="opt" data-index=${i}>${arr[i].opt2}</div>
  <div class="opt" data-index=${i}>${arr[i].opt3}</div>
  <div class="opt" data-index=${i}>${arr[i].opt4}</div>
  </div>`

    let options = document.querySelector(`.quest${i}`).querySelectorAll('.opt');
    for (let opt of options) {
      opt.addEventListener("click", () => {
        check(opt, options);
        timerSound.pause();
        clearInterval(interval);
      })
    }
    timer(options, i, newQuest);

  }
  score = 0;

  // Check Function 
  let correctAnswerSound = new Audio('rightanswer-95219.mp3');
  correctAnswerSound.preload = 'auto';
  correctAnswerSound.load();

  let wrongAnswerSound = new Audio('wrong-answer-129254.mp3');
  wrongAnswerSound.preload = 'auto';
  wrongAnswerSound.load();
  function check(opt, options) {


    let index = opt.dataset.index;
    console.log(index);
    if (arr[index].correctAnswer == opt.innerHTML) {
      opt.style.backgroundColor = "#9aeabc";
      correctAnswerSound.play();
      score += 10;
      scoreAnim('+10');


      setTimeout(() => {
        document.querySelector('#score').innerHTML = score;
      }, 1000)

    }
    else {
      score -= 5;
      scoreAnim('-5')
      wrongAnswerSound.play();
      setTimeout(() => {
        document.querySelector('#score').innerHTML = score;
      }, 1000)
      opt.style.backgroundColor = "#ff9393";
      for (let opt of options) {
        if (opt.innerHTML == arr[index].correctAnswer) {
          setTimeout(() => {
            opt.style.backgroundColor = "#9aeabc";
          }, 500)
        }
      }

    }
    for (let opt of options) {
      opt.removeEventListener("click", () => {
        check(opt, options);
      })
      opt.style.pointerEvents = 'none';//This effectively disables any mouse interactions with that element, including clicks, hover effects, and any other mouse actions. In other words, it makes the element completely unresponsive to mouse events.
    }
    i += 1;
    if (i < arr.length) {
      setTimeout(() => {
        newQuest(i);
      }, 2000)
    }
    if (i == arr.length) {

      //document.querySelector('main').innerHTML+=`<div id='score'>Your Score : ${score}/${arr.length*10}</div>`
      yourScore(score);

      if (score > localStorage.getItem("hiscore")) {
        localStorage.setItem("hiscore", score)
      }

    }
  }


  let options = document.querySelectorAll('.opt');
  timer(options, 0, newQuest);
  for (let opt of options) {
    opt.addEventListener("click", () => {
      check(opt, options);
      clearInterval(interval);
      timerSound.pause();
    })
  }


}

let timerSound;
let interval;
//Timer  Function

timerSound = new Audio('ticking-timer-65220.mp3');
timerSound.preload = 'auto';
timerSound.load();

timeupSound = new Audio('beep-warning-6387.mp3');
timeupSound.preload = 'auto';
timeupSound.load();
function timer(options, index, newQuest) {
  let time = 5;
  timerSound.play();
  document.querySelector('header').innerHTML += `<div id="timebox"></div>`
  if (document.querySelector('#timebox')) {


    interval = setInterval(() => {
      document.querySelector('#timebox').innerHTML = `<div id='timer'>Time left <span id='timeLeft'><p>${time}</p><span></div>`
      time -= 1;


      if (time < 0) {
        timerSound.pause();
        timeupSound.play();

        clearInterval(interval);
        console.log(4)
        for (let opt of options) {
          if (opt.innerHTML == arr[opt.dataset.index].correctAnswer) {
            setTimeout(() => {
              opt.style.backgroundColor = "#9aeabc";
            }, 500)
          }
        }
        for (let opt of options) {
          opt.style.pointerEvents = 'none';
        }
        index += 1;
        if (index < arr.length) {
          setTimeout(() => {
            newQuest(index);
          }, 2500)

        }
        else {
          let score = document.querySelector('#score').innerHTML;

          //document.querySelector('main').innerHTML+=`<div id='finalscore'>Your Score : ${score}/${arr.length*10}</div>`
          yourScore(score);
        }

      }



    }, 1000)
  }

}

/*
document.addEventListener("DOMContentLoaded", () => {
if(localStorage.getItem('hiscore')){
document.querySelector('body').innerHTML+=`<div>Hi Score  : ${localStorage.getItem("hiscore")}</div>`
}
else{
  document.querySelector('body').innerHTML+=`<div>Play,and make records</div>`
}
})
*/

//Start Quiz 

let pika = new Audio('pikachu_rage.mp3');
pika.preload = 'auto';
pika.load();

document.querySelector("#start").addEventListener("click", () => {
  document.querySelector('.intro').classList.toggle('no-visible');
  console.log("hey")

  document.querySelector('.loader').classList.toggle('hide');

  // background image 
  document.querySelector('body').style.backgroundImage = `url("image_search_1721549894397.jpg")`;

  load();
  pika.play();

  setTimeout(() => {
    document.querySelector('header').classList.toggle('none');
    startQuiz();
    document.querySelector('body').style.backgroundImage = ``;
    document.querySelector('.loader').classList.toggle('hide');

  }, 10000)

})

//Score update Animation
function scoreAnim(points) {
  const scoreelem = document.querySelector('#scoreAnimation');
  scoreelem.innerText = points;
  scoreelem.style.opacity = 1;
  scoreelem.style.transform = "translateY(-370px) translateX(100px)";

  setTimeout(() => {
    scoreelem.style.opacity = 0;
    setTimeout(() => {
      scoreelem.style.transform = "translateY(0px) ";
    }, 500)

  }, 1000)

}

// Loading Animation 

function load() {
  const loadimg = document.querySelector('.loader').querySelector('img');
  const yellowLoad = document.querySelector('#yellowLoad');
  setTimeout(() => {
    loadimg.style.transform = "translateX(340px)";
    yellowLoad.style.transform = "translateX(340px)";
  }, 1000)
}

// score celebration
function yourScore(score) {
  setTimeout(()=>{
    
  
  document.querySelector('.quiz').innerHTML = `<img src="pokereward.png" id='victory'> <div id='victoryScore'>Your Score:${score}</div>`
  setTimeout(() => {
    document.querySelector('.quiz').innerHTML += `<button id='restart'>Restart</button>`

    document.querySelector('#restart').addEventListener('click', () => {
      console.log('restart')

      let pika = new Audio('pikachu_rage.mp3');
      pika.preload = 'auto';
      pika.load();
      setTimeout(() => {


        document.querySelector('.quiz').innerHTML = `<div class="intro">
    <img id="begin" src="pokelogo-removebg.png" width="280px">
    <button id="start">Start Quiz</button>
  </div>`;
        document.querySelector("#start").addEventListener("click", () => {
          document.querySelector('.intro').classList.toggle('no-visible');
          console.log("hey")
          document.querySelector('.quiz').innerHTML = `<div class="loader hide">
    <div id="whiteLoad"></div>
      <div id="yellowLoad"></div>
      <img src="image_search_1721461190538.png">
    
  
    <div id='rule'>
      <h2>Rules</h2>
      
      <h4>• There are 20 questions</h4>
<h4>• You have 5 seconds for each question</h4>
      <h4>• Correct Answer will give you 10 points</h4>
      <h4>• Wrong Answer will deduct 5 points</h4>
      <h4>• No Answer will not affect your score</h4>
    
    </div>
    </div>`;
          document.querySelector('.loader').classList.remove('hide');

          // background image 
          document.querySelector('body').style.backgroundImage = `url("image_search_1721549894397.jpg")`;

          load();
          pika.play();

          setTimeout(() => {
            document.querySelector('.quiz').innerHTML = `<header class='none'>
    <div class='head'>
    <img src='pokemon-removebg.png' width="119px" height="70px">
    <h2>Quiz</h2>
      
  </div>
    <div class="line"></div>
  </header>
  <main>

  </main>
  <p id='scoreAnimation'></p>
  `;
            document.querySelector('header').classList.remove('none');
            startQuiz();
            document.querySelector('body').style.backgroundImage = ``;
            //document.querySelector('.loader').classList.add('hide');

          }, 10000)

        })

      }, 1500);
    })

  }, 3500)
  },1500)
}