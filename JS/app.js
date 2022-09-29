let song_left = document.getElementById("song_left");
let song_right = document.getElementById("song_right");
let song = document.getElementsByClassName("menu_pop_song")[0];
song_right.addEventListener("click", function () {
    song.scrollLeft += 550;
});
song_left.addEventListener("click", function () {
    song.scrollLeft -= 550;
});
// music