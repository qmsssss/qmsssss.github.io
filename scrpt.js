// List of media sources (YouTube video IDs and MP3 file URLs)
var mediaSources = [
    { type: "youtube", id: "z9e8CPULjW4" }, // Heaven/EXE
    { type: "youtube", id: "Byz94fkwf6U" }, // Chris Chan - Virgin With Rage
    { type: "youtube", id: "h6gD003cfHg" }, // breakcore/dnb mix to study/let the voices rip you apart | Vol. 2
    { type: "youtube", id: "CsZzoLV0O1w" }, // Haircuts For Men - Indian Mission DE intro v2
    { type: "youtube", id: "UNsCmf0TlEw" }, // ?
    { type: "youtube", id: "DDWAk8-leVA" }, // Joey Bada$$ - Survival tactics
    { type: "youtube", id: "xpbZQbqmdck" }, // It's just a lil' somethin' somethin'
    { type: "youtube", id: "yXffXJELeV4" }, // Life isn’t fun anymore... But I guess drum and bass will suffice!
    
    // Add your own MP3 files here
];

// Function to pick a random media source
function getRandomMediaSource() {
    var randomIndex = Math.floor(Math.random() * mediaSources.length);
    return mediaSources[randomIndex];
}

// Function to load a random media
function loadRandomMedia() {
    var playerDiv = document.getElementById("player");
    var randomMediaSource = getRandomMediaSource();

    if (randomMediaSource.type === "youtube") {
        var youtubePlayer = document.getElementById("youtubePlayer");
        youtubePlayer.src = "https://www.youtube.com/embed/" + randomMediaSource.id + "?autoplay=1";

        // Add event listener to detect when the video ends
        youtubePlayer.addEventListener("onStateChange", function(event) {
            if (event.data === 0) { // 0 indicates the video has ended
                loadRandomMedia(); // Load a new random video
            }
        });
    }
}
