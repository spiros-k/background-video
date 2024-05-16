
let video = document.getElementById("video");
let mp4 = document.getElementById("mp4");
let today = new Date()

mp4.src = "https://videos.pexels.com/video-files/20074004/20074004-sd_640_360_30fps.mp4" + "?time=" + today.getTime();

function playVideo() {
    video.play()
}

function pauseVideo() {
    video.pause()
}


document.addEventListener("DOMContentLoaded", () => {
    video.load()
    video.play()
    document.getElementById("play-button").classList.add("btn");
})


document.getElementById("play-button").addEventListener("click", () => {
    video.play();
    document.getElementById("play-button").classList.add("btn");
    document.getElementById("pause-button").classList.remove("btn");
});


document.getElementById("pause-button").addEventListener("click", () => {
    video.pause();
    document.getElementById("play-button").classList.remove("btn");
    document.getElementById("pause-button").classList.add("btn");
});