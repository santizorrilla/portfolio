document.addEventListener('DOMContentLoaded', function() {

    const playlist = [
        {
        title: "Me lo dicen seguido",
        artist: "Artista 1",
        src: "/audio/me-lo-dicen-seguido-santiago-zorrilla.mp3"
        },
        {
        title: "Pelotero",
        artist: "Artista 2",
        src: "/audio/pelotero-santiago-zorrilla.mp3"
        },
        {
        title: "Quiero calor",
        artist: "Artista 3",
        src: "/audio/quiero-calor-santiago-zorrilla.mp3"
        }
    ];

    let currentSongIndex = 0;

    function loadSong(index) {
        const song = playlist[index];
        audioPlayer.src = song.src;
        audioPlayer.load();
        audioPlayer.play();
        isPlaying = true;
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        currentSongIndex = index;
    }

    const nextButton = document.querySelector('.next');

nextButton.addEventListener('click', function() {
let nextIndex = currentSongIndex + 1;
if (nextIndex >= playlist.length) {
    nextIndex = 0;
}
loadSong(nextIndex);


});

    document.addEventListener('DOMContentLoaded', function() {

    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.querySelector('.play');
    const progressBar = document.querySelector('.progress-bar');
    const playlistButtons = document.querySelectorAll('.play-song');
    const songTitle = document.querySelector('.song-title');
    const artistName = document.querySelector('.artist-name');
    
    let isPlaying = false;
    let songDuration;
    
    // Función para reproducir o pausar la canción
    function togglePlay() {
    if (!isPlaying) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
    isPlaying = !isPlaying;
    }
    
    // Función para actualizar la barra de progreso
    function updateProgressBar() {
      const currentProgress = (audioPlayer.currentTime / songDuration) * 100;
    progressBar.style.width = `${currentProgress}%`;
    }
    
    // Función para cargar la canción seleccionada
    function loadSong(event) {
    const songSrc = event.target.dataset.src;
    const title = event.target.dataset.title;
    const artist = event.target.dataset.artist;
    audioPlayer.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    songTitle.textContent = title;
    artistName.textContent = artist;
    }
    
    // Agregar evento de click al botón de play
    playButton.addEventListener('click', togglePlay);
    
    // Agregar evento de loadedmetadata para obtener la duración de la canción
    audioPlayer.addEventListener('loadedmetadata', function() {
    songDuration = audioPlayer.duration;
    });
    
    // Agregar evento de timeupdate para actualizar la barra de progreso
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    
    // Agregar eventos de click a los botones de la playlist
    for (let i = 0; i < playlistButtons.length; i++) {
    playlistButtons[i].addEventListener('click', loadSong);
    }
});

    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.querySelector('.play');
    const progressBar = document.querySelector('.progress-bar');
    const playlistButtons = document.querySelectorAll('.play-song');
    const songTitle = document.querySelector('.song-title');
    const artistName = document.querySelector('.artist-name');
    
    let isPlaying = false;
    let songDuration;
    
    // Función para reproducir o pausar la canción
    function togglePlay() {
    if (!isPlaying) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
    isPlaying = !isPlaying;
    }
    
    // Función para actualizar la barra de progreso
    function updateProgressBar() {
      const currentProgress = (audioPlayer.currentTime / songDuration) * 100;
    progressBar.style.width = `${currentProgress}%`;
    }
    
    // Función para cargar la canción seleccionada
    function loadSong(event) {
    const songSrc = event.target.dataset.src;
    const title = event.target.dataset.title;
    const artist = event.target.dataset.artist;
    audioPlayer.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    songTitle.textContent = title;
    artistName.textContent = artist;
    }
    
    // Agregar evento de click al botón de play
    playButton.addEventListener('click', togglePlay);
    
    // Agregar evento de loadedmetadata para obtener la duración de la canción
    audioPlayer.addEventListener('loadedmetadata', function() {
    songDuration = audioPlayer.duration;
    });
    
    // Agregar evento de timeupdate para actualizar la barra de progreso
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    
    // Agregar eventos de click a los botones de la playlist
    for (let i = 0; i < playlistButtons.length; i++) {
    playlistButtons[i].addEventListener('click', loadSong);
    }
});