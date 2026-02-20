console.log("Lets write js code")
let currentsong = new Audio();
let songs;
let currfolder;

function convertSecondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedminutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedminutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currfolder = folder;
    try {
        let a = await fetch(`/${folder}/`)
        let response = await a.text();
        let div = document.createElement("div")
        div.innerHTML = response;
        let as = div.getElementsByTagName("a")
        songs = []
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            // FIX: Decode URL-encoded href and extract filename
            let decodedHref = decodeURIComponent(element.href);
            // Handle both forward slash (/) and backslash (\) - Windows and Unix paths
            let filename = decodedHref.split(/[\/\\]/).pop();

            if (filename && filename.endsWith(".mp3")) {
                songs.push(filename)
            }
            else if (filename && filename.endsWith(".m4a")) {
                songs.push(filename)
            }
        }

        console.log("Songs loaded:", songs); // Debug

        //Show all the songs in the playlist
        let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
        songUL.innerHTML = ""
        for (const song of songs) {
            if (song) { // Check if song exists
                // FIX: Extract just the filename (remove path and extension)
                let displayName = song.split(/[\/\\]/).pop().replace(/\.[^/.]+$/, "").replaceAll("%20", " ");
                songUL.innerHTML = songUL.innerHTML + `<li data-song="${song}">
                   <img class="invert" src="music.svg" alt="">
                  <div class="info">
                      <div>${displayName}</div>
                      <div>Artist</div>
                  </div>
                  <div class="playnow">
                      <span>Play now</span>
                      <img class="invert" src="play.svg" alt="">
                  </div>        
                  </li>`;
            }
        }

        //Attach the event listener to each songs
        Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
            e.addEventListener("click", element => {
                // FIX: Use actual filename from data attribute
                let actualSongName = e.getAttribute("data-song");
                console.log("Playing:", actualSongName);
                playMusic(actualSongName)
            })
        })

        // IMPORTANT: Return the songs array
        return songs;

    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
}

const playMusic = (track, pause = false) => {
    // FIX: Extract just filename (in case path is included) and encode properly
    let filename = track.split(/[\/\\]/).pop();
    currentsong.src = `/${currfolder}/` + encodeURIComponent(filename);

    console.log("Playing song from:", currentsong.src);

    if (!pause) {
        currentsong.play().catch(error => {
            console.error("Playback error:", error);
        });
        play.src = "pause.svg"
    }
    // Display decoded track name without extension and path
    let displayName = filename.replace(/\.[^/.]+$/, "").replaceAll("%20", " ");
    document.querySelector(".songinfo").innerHTML = displayName
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums() {
    try {
        // For single folder structure, create a simple album card
        let cardContainer = document.querySelector(".cardContainer")

        // Try to fetch info.json from songs folder
        try {
            let infoResponse = await fetch(`/songs/info.json`)
            if (infoResponse.ok) {
                let response = await infoResponse.json();
                cardContainer.innerHTML = `<div data-folder="songs" class="card">
                            <div class="play">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    color="#000000" fill="none">
                                    <path
                                        d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                                        stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="black" />
                                </svg>
                            </div>
                            <img src="/songs/cover.jpeg" onerror="this.src='music.svg'">
                            <h2>${response.title}</h2>
                            <P>${response.description}</P>
                        </div>`
            }
        } catch (error) {
            // No info.json, create default card
            cardContainer.innerHTML = `<div data-folder="songs" class="card">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                color="#000000" fill="none">
                                <path
                                    d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                                    stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="black" />
                            </svg>
                        </div>
                        <img src="/songs/cover.jpeg" onerror="this.src='music.svg'">
                        <h2>My Music</h2>
                        <P>All your favorite songs</P>
                    </div>`
        }

        //Load the folder whenever card is clicked
        Array.from(document.getElementsByClassName("card")).forEach(e => {
            e.addEventListener("click", async item => {
                try {
                    let folder = item.currentTarget.dataset.folder;
                    console.log("Loading folder:", folder);
                    let loadedSongs = await getSongs(folder);
                    console.log("Loaded songs:", loadedSongs);

                    if (loadedSongs && loadedSongs.length > 0) {
                        playMusic(loadedSongs[0])
                    } else {
                        console.warn("No songs found in folder:", folder);
                    }
                } catch (error) {
                    console.error("Error loading songs:", error);
                }
            })
        })
    } catch (error) {
        console.error("Error displaying albums:", error);
    }
}

async function main() {
    try {
        //Get the list of all songs from songs folder
        let loadedSongs = await getSongs("songs");
        if (loadedSongs && loadedSongs.length > 0) {
            playMusic(loadedSongs[0], true)
        }

        //display all the albums on the page
        displayAlbums();

        //Attach an eventlistner to play, next and previous
        play.addEventListener("click", () => {
            if (currentsong.paused) {
                currentsong.play().catch(error => {
                    console.error("Playback error:", error);
                });
                play.src = "pause.svg"
            }
            else {
                currentsong.pause()
                play.src = "play.svg"
            }
        });

        // Add error event listener
        currentsong.addEventListener("error", (e) => {
            console.error("Audio error:", e);
            console.error("Error code:", currentsong.error?.code);
        });

        // Add canplay event to handle duration
        currentsong.addEventListener("canplay", () => {
            console.log("Song can play, duration:", currentsong.duration);
        });

        //Listen for time update event
        currentsong.addEventListener("timeupdate", () => {
            if (currentsong.duration && !isNaN(currentsong.duration)) {
                document.querySelector(".songtime").innerHTML = `${convertSecondsToTime(currentsong.currentTime)} / ${convertSecondsToTime(currentsong.duration)}`
                document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
            }
        })

        //Add an eventlistener in seekbar
        document.querySelector(".seekbar").addEventListener("click", (e) => {
            if (currentsong.duration && !isNaN(currentsong.duration)) {
                let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
                document.querySelector(".circle").style.left = percent + "%";
                currentsong.currentTime = ((currentsong.duration) * percent) / 100;
            }
        })

        const seekbar = document.querySelector(".seekbar")
        currentsong.addEventListener("timeupdate", () => {
            if (currentsong.duration && !isNaN(currentsong.duration)) {
                let percentPlayed = (currentsong.currentTime / currentsong.duration) * 100;
                seekbar.style.background = `linear-gradient(to right, red ${percentPlayed}%, #ccc ${percentPlayed}%)`;
            }
        })

        //Add eventlistner for hamburger
        document.querySelector(".hamburger").addEventListener("click", () => {
            document.querySelector(".left").style.left = "0";
        })

        //Add eventlistner for cross
        document.querySelector(".cross").addEventListener("click", () => {
            document.querySelector(".left").style.left = "-120%";
        })

        //Add eventlistner to next or previous 
        previous.addEventListener("click", () => {
            if (!songs || songs.length === 0) return;
            currentsong.pause()
            // FIX: Get current filename properly
            let currentSrc = currentsong.src;
            let currentSongFile = decodeURIComponent(currentSrc.split("/").pop());
            let index = songs.indexOf(currentSongFile);

            // If not found, try to find by matching just the filename
            if (index === -1) {
                let currentFilename = currentSongFile.split(/[\/\\]/).pop();
                index = songs.findIndex(s => s.split(/[\/\\]/).pop() === currentFilename);
            }

            if (index > 0) {
                playMusic(songs[index - 1])
            }
        })

        next.addEventListener("click", () => {
            if (!songs || songs.length === 0) return;
            currentsong.pause()
            // FIX: Get current filename properly
            let currentSrc = currentsong.src;
            let currentSongFile = decodeURIComponent(currentSrc.split("/").pop());
            let index = songs.indexOf(currentSongFile);

            // If not found, try to find by matching just the filename
            if (index === -1) {
                let currentFilename = currentSongFile.split(/[\/\\]/).pop();
                index = songs.findIndex(s => s.split(/[\/\\]/).pop() === currentFilename);
            }

            if (index !== -1 && (index + 1) < songs.length) {
                playMusic(songs[index + 1])
            }
        })

        //Add an event to volume
        document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
            currentsong.volume = parseInt(e.target.value) / 100
        })

        //Add an event listner to mute the volume
        document.querySelector(".volume>img").addEventListener("click", e => {
            if (e.target.src.includes("volume.svg")) {
                e.target.src = e.target.src.replace("volume.svg", "mute.svg")
                currentsong.volume = 0;
            }
            else {
                e.target.src = e.target.src.replace("mute.svg", "volume.svg")
                currentsong.volume = 0.5;
            }
        })
    } catch (error) {
        console.error("Error in main:", error);
    }
}

main();
