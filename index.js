// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" }, 
    { title: "Lose Ends", artist: "Loyle Carner", genre: "Hip-Hop/Rap" },
    { title: "Chill Out", artist: "RAY BLK", genre: "R&B" },
    { title: "I'm Not OK", artist: "H.E.R.", genre: "R&B" },
    { title: "One Unread", artist: "Amber Olivier", genre: "R&B" },
    { title: "1 Thing", artist: "Amerie", genre: "Pop" },
    { title: "Wo Wo Wo", artist: "Krept & Konan", genre: "Hip-Hop/Rap" },
    { title: "Self Love", artist: "Metro Boomin", genre: "Hip-Hop/Rap" },
    { title: "21 Questions", artist: "50 Cent", genre: "Hip-Hop/Rap" },
    { title: "ZULU", artist: "Pushkin RSA", genre: "Dance" },
    { title: "Conceited", artist: "Flo Milli", genre: "Hip-Hop/Rap" },
    { title: "Amazwe", artist: "Kabza De Small", genre: "Dance" },
    { title: "Take It All", artist: "Da Capo", genre: "Dance" },
    { title: "Shooting Stars", artist: "Bag Raiders", genre: "Dance" },
    { title: "Zanzibar", artist: "DJ Maphorisa", genre: "Dance" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = [
    {guardianName:"Star-Lord", genre:"Rock"},
    {guardianName:"Gamora", genre:"Pop"},
    {guardianName:"Drax", genre:"R&B"},
    {guardianName:"Rocket", genre:"Dance"},
    {guardianName:"Groot", genre:"Hip-Hop/Rap"},
    // Add preferences for Drax, Rocket, and Groot
];

// Function to generate playlist based on preferred genre
function generatePlaylist() {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const parentEL = document.getElementById("playlists");

    guardians.forEach(guardian => {
        const playlistContainer = document.createElement('div');
        playlistContainer.classList.add('playlist');

        const playTitle = document.createElement('h2');
        playTitle.textContent = `${guardian.guardianName}'s Playlist`;
        playlistContainer.appendChild(playTitle);

        const playlistItems = songs.filter(song => song.genre === guardian.genre).map(song => {
            
            
            const songInfo = document.createElement('span');
            songInfo.classList.add('song-info');
            
            const songArtist = document.createElement('p');
            songArtist.classList.add('song-title');
            songArtist.textContent = `${song.title} `;
            songInfo.appendChild(songArtist);

            const songTitle = document.createElement('p');
            songTitle.classList.add('song');
            songTitle.textContent = ` by ${song.artist}`;
            songInfo.appendChild(songTitle);

        
            playlistContainer.appendChild(songInfo);
        });
    

    parentEL.appendChild(playlistContainer);

    });
    
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist();

