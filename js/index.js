const headerTitle = document.querySelector(".header__title");
const navTitle1 = document.querySelector(".nav-first");

function changeText(event) {
  headerTitle.classList.toggle("active");
  headerTitle.innerText = "坂本龍";
}

function changeNav1(event) {
  navTitle1.classList.toggle("active1");
  navTitle1.innerText = "歌です";
}
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

const mainSong1 = document.querySelector(".main__song-1");
const mainSong2 = document.querySelector(".main__song-2");

const mainSong3 = document.querySelector(".main__song-3");

const mainSong4 = document.querySelector(".main__song-4");
const mainSong5 = document.querySelector(".main__song-5");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;
mainSong1.addEventListener("click", loadTrack1);

mainSong2.addEventListener("click", loadTrack2);

mainSong3.addEventListener("click", loadTrack3);

mainSong4.addEventListener("click", loadTrack4);

mainSong5.addEventListener("click", loadTrack5);

const music_list = [
  {
    img: "img/img1.jpg",
    name: "Amore",
    artist: "Ryuichi Sakamoto",
    music: "music/Amore.mp3",
  },
  {
    img: "img/img2.jpg",
    name: "Thousand knvies",
    artist: "Ryuichi Sakamoto",
    music: "music/Thousand Knives.mp3",
  },
  {
    img: "img/img3.jpg",
    name: "Energy flow",
    artist: "Ryuichi Sakamoto",
    music: "music/Energy flow.mp3",
  },
  {
    img: "img/img4.jpg",
    name: "Merry Christmas Mr.Lawrence",
    artist: "Ryuichi Sakamoto",
    music: "music/Merry Christmas Mr. Lawrence.mp3",
  },

  {
    img: "img/img5.jpg",
    name: "Shining Boy & Little Randy",
    artist: "Ryuichi Sakamoto",
    music: "music/Shining Boy & Little Randy.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  now_playing.textContent =
    "Playing music " + (track_index + 1) + " of " + music_list.length;

  updateTimer = setInterval(setUpdate, 1000);
  console.log(track_index);
  curr_track.addEventListener("ended", nextTrack);

  random_bg_color();
}

function loadTrack1() {
  let track_index = 0;
  count1++;

  loadTrack(track_index);
  if (count1 % 2 == 0) {
    pauseTrack();
    count1 = 0;
  } else {
    playTrack();
  }
}

function loadTrack2() {
  let track_index = 1;
  count2++;

  loadTrack(track_index);
  if (count2 % 2 == 0) {
    pauseTrack();
    count2 = 0;
  } else {
    playTrack();
  }
}

function loadTrack3() {
  let track_index = 2;
  count3++;

  loadTrack(track_index);
  if (count3 % 2 == 0) {
    pauseTrack();
    count3 = 0;
  } else {
    playTrack();
  }
}
function loadTrack4() {
  let track_index = 3;

  count4++;

  loadTrack(track_index);
  if (count4 % 2 == 0) {
    pauseTrack();
    count4 = 0;
  } else {
    playTrack();
  }
}
function loadTrack5() {
  let track_index = 4;
  count5++;

  loadTrack(track_index);
  if (count5 % 2 == 0) {
    pauseTrack();
    count5 = 0;
  } else {
    playTrack();
  }
}
function random_bg_color() {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];
  let a;

  function populate(a) {
    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14);
      let y = hex[x];
      a += y;
    }
    return a;
  }
  let Color1 = populate("#");
  let Color2 = populate("#");
  var angle = "to right";

  let gradient =
    "linear-gradient(" + angle + "," + Color1 + ", " + Color2 + ")";
  document.body.style.background = gradient;
}
function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}
function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}
function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationMinutes;
  }
}
headerTitle.addEventListener("click", changeText);
navTitle1.addEventListener("click", changeNav1);
