document.querySelector('.hamburger').addEventListener("click", () => {
  document.querySelector('.mobilemenu').classList.toggle('none');
})

document.querySelector('.close').addEventListener("click", () => {
  document.querySelector('.mobilemenu').classList.toggle('none');
})

let albums = {
  1: "Pokemon Theme Song",
  2: "Legends Never Die",
  3: "Shinchan Theme Song",
  4: "Doraemon Theme Song",
  5: "Doraemon Sad BGM",
  6:"Pokemon T.S. Hindi"
};
let albumsimg = {
  1: "album1.jpg",
  2: "album2.jpg",
  3: "album3.jpg",
  4: "album4.jpg",
  5: "album5.png",
  6:"album1.jpg"
};
let songs = {
  "Pokemon Theme Song": "Pokemon-Theme-Song.mp3",
  "Legends Never Die": "Legends Never Die.mp3",
  "Shinchan Theme Song": "shincha_0748496a5396808.mp3",
  "Doraemon Theme Song": "Doraemon Theme Song.mp3",
  "Doraemon Sad BGM": "Doraemon ! Sad ! BGM.mp3",
"Pokemon T.S. Hindi":"pokemon-hindi.mp3",
};
for (let i = 1; i <=Object.values(albums).length; i++) {
  let album = document.createElement('img');
  album.src = albumsimg[i];
  document.querySelector('.album' + i).appendChild(album);
  let albumname = document.createElement('h5');
  albumname.innerHTML = albums[i];
  document.querySelector('.album' + i).appendChild(albumname);
}

/* Creating Dynamic Albums */
let albumsclass = document.querySelectorAll('.album');
let albmh5;
let albmimg;
for (let album of albumsclass) {
  album.addEventListener("click", () => {
    albmh5 = album.querySelector('h5').innerHTML; /* get the 'h5' inside the 'album'. */
    albmimg = album.querySelector('img').src;

    startSong(albmh5, albmimg, songs);
  })
}

/* Function to display the songcard to play when clicked on a particular song. */
function startSong(albmh5, albmimg, songs) {
  // Remove any existing card
  let existingCard = document.querySelector('.card');
  if (existingCard) {
    let existingAudio = existingCard.querySelector('audio');
    if (existingAudio) {
      existingAudio.pause(); // Pause the audio before removing to prevent error
    }
    existingCard.remove();
  }

  let card = document.createElement('div');
  card.classList.add('card');
  document.querySelector('main').append(card);

  let cardimg = document.createElement('img');
  cardimg.src = albmimg;
  cardimg.classList.add('cardimg');
  document.querySelector('.card').append(cardimg);

  let songname = document.createElement('h4');
  songname.innerHTML = albmh5;
  songname.classList.add('songname');
  document.querySelector('.card').append(songname);

  /* Creating card close button */
  let close = document.createElement('img');
  close.src = "Screenshot_2024_0609_112407-removebg-preview.png";
  close.classList.add('cardclose');
  document.querySelector('.card').append(close);

  close.addEventListener("click", () => {
    let audio = document.querySelector('.audioplayer');
    if (audio) {
      audio.pause(); // Pause the audio before removing
    }
    card.remove();
  });

  /* Creating Audio */
  let audio = document.createElement('audio');
  audio.src = songs[albmh5];
  audio.classList.add('audioplayer');
  document.querySelector('.card').append(audio);
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
  });

  /* Creating control buttons */
  let controls = document.createElement('div');
  controls.classList.add('controls');
  card.append(controls);

  let mainctrl = document.createElement('div');
  mainctrl.classList.add('mainctrl');
  controls.append(mainctrl);

  /* Creating Previous Button */
  let prevbtn = document.createElement('img');
  prevbtn.src = "next-svg.png"; /* I have rotated this and converted it into previous button. */
  prevbtn.classList.add('prev');
  mainctrl.append(prevbtn);

  /* Creating Play & Pause Button */
  let playbtn = document.createElement('img');
  playbtn.src = "pause.svg";
  playbtn.classList.add('play');
  mainctrl.append(playbtn);

  let pausebtn = document.createElement('img');
  pausebtn.src = "play.svg";
  pausebtn.classList.add('pause');
  pausebtn.classList.add('pausehide');
  mainctrl.append(pausebtn);

  /* Play/Pause feature */
  playbtn.addEventListener("click", () => {
    pausebtn.classList.toggle('pausehide');
    playbtn.classList.toggle('playhide');
    audio.pause();
  });

  pausebtn.addEventListener("click", () => {
    pausebtn.classList.toggle('pausehide');
    playbtn.classList.toggle('playhide');
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  });

  /* Creating next button */
  let nextbtn = document.createElement('img');
  nextbtn.src = "next-svg.png";
  nextbtn.classList.add('next');
  mainctrl.append(nextbtn);

  /* Making Next & Previous Button Functional */
  nextbtn.addEventListener("click", nextSong);
prevbtn.addEventListener("click",previousSong);

  // Calling volume creater function
  volumeControls();

  // Calling seekbar creator function
  seekbar();

// Calling timeduration function
  time();
}

/* Next Song */
function nextSong() {
  let albums_arr = Object.values(albums); /* This will create an array from the values of the object 'albums'. */
  let albums_img_arr = Object.values(albumsimg);
  let current_index = albums_arr.indexOf(albmh5);

  if (current_index < albums_arr.length - 1) {
    albmh5 = albums_arr[current_index + 1];
    albmimg = albums_img_arr[current_index + 1];
  } else {
    albmh5 = albums_arr[0];
    albmimg = albums_img_arr[0];
  }

  startSong(albmh5, albmimg, songs);
}

/*Previous Song*/ 
function previousSong(){
  let albums_arr = Object.values(albums); /* This will create an array from the values of the object 'albums'. */
  let albums_img_arr = Object.values(albumsimg);
  let current_index = albums_arr.indexOf(albmh5);
  if(current_index>0){
  albmh5=albums_arr[current_index-1];
  albmimg=albums_img_arr[current_index-1];
  }
  else if(current_index==0){
    albmh5=albums_arr[albums_arr.length-1];
    albmimg=albums_img_arr[albums_img_arr.length-1];
  }
  startSong(albmh5,albmimg,songs);
}

// Creating volume controls 

function volumeControls(){

let volume_controls=document.createElement('div');
volume_controls.classList.add('volume_controls');
document.querySelector('.controls').append(volume_controls);

  let volumeSlider=document.createElement('div');
  volumeSlider.classList.add('volumeslider');
  volume_controls.append(volumeSlider);

  let volinput=document.createElement('input') ;
volinput.classList.add('volinput');
  volinput.type='range';
  volinput.min = 0;
  volinput.max = 1;
  volinput.step = 0.1;
  volinput.value = document.querySelector('.audioplayer').volume; // Set initial volume value
  
  volumeSlider.append(volinput);
 
  // Add event listener to change volume
  volinput.addEventListener('input', () => {
      document.querySelector('.audioplayer').volume = volinput.value;
  });
} 


/* Function to create a seekbar */ 
function seekbar(){
  let seekbar = document.createElement('div');
  seekbar.classList.add('seekbar');
  document.querySelector('.controls').append(seekbar);
  let circle=document.createElement('div');
  circle.classList.add('circle');
  seekbar.append(circle);

  // Update seekbar when clicked
  seekbar.addEventListener("click", e => {
    let audio = document.querySelector('.audioplayer');
    if (audio.duration) {
      let percent = (e.offsetX / seekbar.offsetWidth) * 100;
      circle.style.left = percent + "%";

      let currentTime = (percent / 100) * audio.duration;
      audio.currentTime = currentTime;
    }
  });
  // Moving the circle to left as the time updates. 
  let audio=document.querySelector('.audioplayer');
  audio.addEventListener("timeupdate",()=>{
    document.querySelector('.circle').style.left=(audio.currentTime/audio.duration)*100+"%";
  })
  
  
      
  
}

 //  Function to create current time/total time


function time(){
  let Time=document.createElement('div');
  Time.classList.add('time');
  Time.innerHTML="00:00/00:00";
  document.querySelector('.controls').append(Time);
  let audio = document.querySelector('.audioplayer');

    // Update total duration once the metadata is loaded
    audio.addEventListener('loadedmetadata', () => {
      let duration = formatTime(audio.duration);
      Time.innerHTML = `00:00/${duration}`;
    });

    // Update current time as the audio plays & also update the seekbar
    audio.addEventListener('timeupdate', () => {
      let currentTime = formatTime(audio.currentTime);
      let duration = formatTime(audio.duration);
      Time.innerHTML = `${currentTime}/${duration}`;
      
      
  
    })
                           }

// Function to format time in MM:SS
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

