let Index=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');
let masterSongName=document.getElementById('masterSongName');
let sectionPlaylist= Array.from(document.getElementsByClassName('section-playlist'));
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        audioElement.pause();
    }

})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;

})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})
let songs=[
    {songName: "mere desh ki dharti", filpath: "song/1.mp3"},
    {songName: "jahan dal dal pe", filpath: "song/2.mp3"},
    {songName: "kesariya", filpath: "song/3.mp3"},
    {songName: "mere desh ki dharti", filpath: "song/1.mp3"},
    {songName: "jahan dal dal pe", filpath: "song/2.mp3"},
    {songName: "kesariya", filpath: "song/3.mp3"},
    {songName: "mere desh ki dharti", filpath: "song/1.mp3"},
    {songName: "jahan dal dal pe", filpath: "song/2.mp3"},
    {songName: "kesariya", filpath: "song/3.mp3"},
    {songName: "mere desh ki dharti", filpath: "song/1.mp3"}
];
sectionPlaylist.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;

})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       Index=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=songs[Index].filpath;
       masterSongName.innerText=songs[Index].songName;

       audioElement.currentTime=0;
       audioElement.play();
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(Index>=9){
        Index=0;
    }
    else{
        Index += 1;
    }
    // masterSongName.innerText=songs[Index].songName;
    audioElement.src =songs[Index].filpath;
    masterSongName.innerText=songs[Index].songName;
    audioElement.currentTime=0;
    audioElement.play();
})
document.getElementById('previous').addEventListener('click',()=>{
    if(Index<=0){
        Index=0;
    }
    else{
        Index -= 1;
    }
    // masterSongName.innerText=songs[Index].songName;
    audioElement.src =songs[Index].filpath;
    masterSongName.innerText=songs[Index].songName;
    audioElement.currentTime=0;
    audioElement.play();
})