let song_left = document.getElementById("song_left");
let song_right = document.getElementById("song_right");
let song = document.getElementsByClassName("pro")[0];
song_right.addEventListener("click", function () {
    song.scrollLeft += 330;
});
song_left.addEventListener("click", function () {
    song.scrollLeft -= 330;
});
// music