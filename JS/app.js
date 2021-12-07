/* DARK MODE */
const toggle = document.getElementById('toggle');
const darkmodetogglebackroung = document.querySelector('.darkmode');
const lightdarkmodeicon = document.querySelector('.lightdarkmodeicons');
const maintext = document.getElementById('maintextid')
const maincontainerfluid = document.getElementById('maincontainerfluidid');
const navcol = document.getElementById('navcolid');
const logo = document.getElementById('logoid');
const navlist = document.getElementById('navlistid');
const carcontainer = document.getElementById('carcontainerid');
/* DARK MODE HAM */
const toggleham = document.getElementById('toggleham');
const darkmodetogglebackroungham = document.querySelector('.darkmodeham');
const lightdarkmodeiconsham = document.querySelector('.lightdarkmodeiconsham');
const moblogocolid = document.getElementById('moblogocolid');
/* BOOK */
const pipopcontainer = document.querySelector('.pipopcontainer');
const booksourcecon = document.querySelector('.booksourcecon');

/* */
/* FOOTER */
const wrapper = document.querySelector('.wrapper');


/* MARKER*/
const marker = document.getElementById('marker');
const navigation2 = document.getElementById('navigatordivid');
/*Hamburger menu */
const hamurgerbutton = document.getElementById('hamurgerbutton');
const hamburgermenuiconcolid = document.querySelector('#hamburgermenuiconcolid');
const hamburgermenuactiveplace = document.querySelector('.hamburgermenuactiveplace');

/* HOBBIES TEXT */
const myhobrow = document.getElementById('myhobrowid');
const musictextrow = document.querySelector('.musictextrow');
const booktextrow = document.querySelector('.booktextrow');
const music = document.querySelector(".music");



/**/
/* PIPOP */
const bookrowid = document.getElementById('bookrowid');
const pipopbook1row = document.querySelector('.pipopbook1row');
const pipopbook2row = document.querySelector(".pipopbook2row");
const pipopbook3row = document.querySelector('.pipopbook3row');

function togglebook(){
    bookrowid.classList.toggle('active');
    pipopbook1row.classList.toggle('active');
};
function togglebook2(){
    bookrowid.classList.toggle('active');
    pipopbook2row.classList.toggle('active');
    
};
function togglebook3(){
    bookrowid.classList.toggle('active');
    pipopbook3row.classList.toggle('active');
    
};


/**/
/*BOOK SORUCE FUNCTIONS */
const booksourcecol = document.querySelector('.booksourcecol');
function booksource(){
    booksourcecol.classList.toggle('active');
}

/* */
/* MUSICCC */
const mainrowid = document.getElementById('mainrowid');
const rightid = document.getElementById('rightid');
let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.getElementById("track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create a audio Element
let track = document.createElement('audio');


// All songs list
let All_songs = [
    {
        name: "first song",
        path: "img/music/mainmusic/AURORA-Runaway.mp3",
        img: "img/music/artist/image3.jpg",
        singer: "first singer"
    },
    {
        name: "second song",
        path: "img/music/mainmusic/Alec Benjamin - Let Me Down Slowly (1).mp3",
        img: "img/music/artist/image2.jpg",
        singer: "second singer"
    },
    {
        name: "thrid song",
        path: "img/music/mainmusic/duncan-laurence_arcade.mp3",
        img: "img/music/artist/images1.png",
        singer: "thrid singer"
    }
];
// All function

// function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_songs[index_no].path;
    title.innerHTML = All_songs[index_no].name;
    track_image.src = All_songs[index_no].img;
    artist.innerHTML = All_songs[index_no].singer;
    track.load();


    total.innerHTML = All_songs.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);


// mute song
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0


}
// reset long slider
function reset_slider(){
    slider.value = 0;
}
// checking the song is playing or not
function justplay(){
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}
// play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}
// pause song
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
}

// next song
function next_song(){
    if(index_no < All_songs.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }

}
// pravious song
function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_songs.length;
        load_track(index_no);
        playsong();
    }
}
// change volume
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}
// change slider position
function change_duration(){
    slider_position = track.duration * (slider.value / 100)
    track.currentTime = slider_position;
}


// autoplay funcyion
function autoplay_switch(){
    if(autoplay ==1){
        autoplay = 0;
        auto_play.style.background = "rgba(255 , 255 , 255 , 0.2)";

    }
    else{
        autoplay =1;
        auto_play.style.background = "#FF8A65";
    }

}
function  range_slider(){
    let position = 0;

    // uptade slider
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
// function will run when the sing is over
if(track.ended){
    play.innerHTML = '<i class = "fas fa-play"></i>';
    if(auto_play==1){
        index_no +=1;
        load_track(index_no);
        playsong();
    }
}
}
/*Dark mode*/ 


toggle.addEventListener('click' , darkmode);
function darkmode(){
    booksourcecon.classList.toggle('darktheme');
    pipopcontainer.classList.toggle('darktheme');
    wrapper.classList.toggle('darktheme');
    music.classList.toggle('darktheme');
    booktextrow.classList.toggle('darktheme');
    musictextrow.classList.toggle('darktheme');
    myhobrow.classList.toggle('darktheme');
    toggle.classList.toggle('active');
    darkmodetogglebackroung.classList.toggle('active');
    lightdarkmodeicon.classList.toggle('moon');
    maintext.classList.toggle('darktheme');
    maincontainerfluid.classList.toggle('darktheme');
    navcol.classList.toggle('darktheme');
    logo.classList.toggle('darktheme');
    navlist.classList.toggle('darktheme');
    marker.classList.toggle('darktheme');
    navigation2.classList.toggle('darktheme');
    carcontainer.classList.toggle('darktheme');
    mainrowid.classList.toggle('darktheme');
    rightid.classList.toggle('darktheme');
    moblogocol.classList.toggle('darktheme');
    toggleham.classList.toggle('activeham');
    darkmodetogglebackroungham.classList.toggle('activeham');
    lightdarkmodeiconsham.classList.toggle('moonham');
    mainrowid.classList.toggle('darktheme');
    moblogocolid.classList.toggle('darktheme');

    
};

/**/
/*Dark mode hamburger*/
toggleham.addEventListener('click' , darkmodeham);
function darkmodeham(){
    booksourcecon.classList.toggle('darktheme');
    pipopcontainer.classList.toggle('darktheme');
    wrapper.classList.toggle('darktheme');
    music.classList.toggle('darktheme')
    booktextrow.classList.toggle('darktheme');
    musictextrow.classList.toggle('darktheme');
    myhobrow.classList.toggle('darktheme');
    toggleham.classList.toggle('activeham');
    darkmodetogglebackroungham.classList.toggle('activeham');
    lightdarkmodeiconsham.classList.toggle('moonham');
    maintext.classList.toggle('darktheme');
    logo.classList.toggle('darktheme');
    maincontainerfluid.classList.toggle('darktheme');
    navigation2.classList.toggle('darktheme');
    carcontainer.classList.toggle('darktheme');
    mainrowid.classList.toggle('darktheme');
    rightid.classList.toggle('darktheme');
    moblogocolid.classList.toggle('darktheme');
    navcol.classList.toggle('darktheme');
    navlist.classList.toggle('darktheme');
    toggle.classList.toggle('active');
    darkmodetogglebackroung.classList.toggle('active');
    lightdarkmodeicon.classList.toggle('moon');

    
};
/* MARKER */ 

const item = document.querySelectorAll('ul li .nava');

function indicator(e){
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
};
item.forEach(Link =>{
    Link.addEventListener("mousemove" , (e) =>{
        indicator(e.target);
    })
});

/* SERBEST UZEN MENU */


window.addEventListener('scroll' , function(){
    if(window.scrollY>100){
        document.getElementById('navigatordivid').style.display = "inline-block";
        document.getElementById('navigatordivid').style.visibility = "visible";       

    }
});
/* Habmurger menu functions */
hamurgerbutton.addEventListener('click' , hamburgermenufunctions);

function hamburgermenufunctions(){
    hamurgerbutton.classList.toggle('is-active');
    hamburgermenuiconcolid.classList.toggle('hamactive');
    hamurgerbutton.classList.toggle('hamactive');
    hamburgermenuactiveplace.classList.toggle('hamactive')
    
}
/* FOOTER */
var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });

  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });