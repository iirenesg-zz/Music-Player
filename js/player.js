(function(window) {

	/* Button Variables and Events */
	var btnPlay = document.getElementById('btn-play');
	btnPlay.addEventListener('click', setPlay);

	var btnPrev = document.getElementById('btn-prev');
	btnPrev.addEventListener('click', setPrev);

	var btnVol = document.getElementById('btn-volume');
	btnVol.addEventListener('click', showVolume);

	var btnNext = document.getElementById('btn-next');
	btnNext.addEventListener('click', setNext);

	var btnFav = document.getElementById('btn-fav');
	btnFav.addEventListener('click', setFav);

	/* Slider Variables and Events */
	var sliderTime = document.getElementById('slider-time');
	sliderTime.addEventListener('change', setTime);

	var sliderVol = document.getElementById('slider-vol');
	sliderVol.addEventListener('change', setVolume);

	/* Display Variables */
	var timePassedDisplay = document.getElementById('time-passed');
	var timeLeftDisplay = document.getElementById('time-left');
	var titleDisplay = document.getElementById('title-display');
	var authorDisplay = document.getElementById('author-display');
	var coverDisplay = document.getElementById('cover-display');
	var playlistDisplay = document.getElementById('playlist-display');
	var favDisplay = document.getElementById('fav-display');

	/* App variables */
	var state = {
		currentIndex: null,
		currentTime: null,
		currentVolume: null,
		format: null,
		favorites: [],
		music: null
	}

	var audio = new Audio();
	audio.addEventListener('timeupdate', updateTime);

	/**
	 * Initializes app
	 * @param Array music
	 * @public
	 */
	function init(music) {
		if (save.getData('musicData')) {
			tdata = save.getData('musicData');
			state = tdata;
			composeSongList(state.favorites, favDisplay);
		} else {
			state.format = setFormat();
			state.currentIndex = 0;
			state.currentVolume = 30;
			state.music = music;
		}
		sliderVol.value = state.currentVolume;
		composeSongList(state.music, playlistDisplay);
		startSong(state.music);
	}

	/**
	 * Sets the best format for the browser
	 * @returns String 
	 * @private
	 */
	function setFormat() {
		var test = new Audio();
		
		if (test.canPlayType('audio/mp3') !== '') {
			return 'mp3';
		} else if (test.canPlayType('audio/ogg') !== '') {
			return 'ogg';
		} else if (tets.canPlayType('audio/wav') !== '') {
			return 'wav';
		} else {
			throw new Error ('No audio support');
		}
	}

	/**
	 * Composes a list of songs
	 * @param Array array
	 * @param HTMLelement display
	 * @private
	 */
	function composeSongList(array, display) {
		display.innerHTML = '';
		for (var i=0; i<array.length; i++) {
			var li = document.createElement('li');
			var name = document.createElement('p');
			name.innerText = array[i].name;
			name.classList.add('song-title');
			var author = document.createElement('p');
			author.innerText = array[i].artist;

			var index;
			for (var j=0; j<state.music.length; j++) {
				if(array[i].name == state.music[j].name) {
					index = j;
				}
			}

			li.setAttribute('data-song', index);
			li.addEventListener('click', function() {setSong(this)});
			li.appendChild(name);
			li.appendChild(author);
			display.appendChild(li);
		}
	}

	/**
	 * Plays or pauses the song
	 * @private
	 */
	function setPlay() {
		btnPlay.classList.toggle('btn-pause');
		btnPlay.classList.toggle('btn-play');
		audio.paused ? audio.play() : audio.pause();
	}

	/**
	 * Updates the time slider as the song plays
	 * @private
	 */
	function updateTime() {
		state.currentTime = audio.currentTime;
		sliderTime.value = (audio.currentTime * 100) / audio.duration;
		timePassedDisplay.innerText = composeTime(audio.currentTime);
		timeLeftDisplay.innerText = composeTime(audio.duration - audio.currentTime);
		if(audio.currentTime == audio.duration) {
			state.currentTime = 0;
			setNext();
		}
		saveState();
	}

	/**
	 * Composes a string for the time slider ends
	 * @returns String 
	 * @private
	 */
	function composeTime(t) {
		var time = t/60;
		time = time.toFixed(2);
		time = time.toString(time);
		time = time.replace('.', ':')
		return time
	}

	/**
	 * Sets the time of the song on user input
	 * @private
	 */
	function setTime() {
		state.currentTime = sliderTime.value;
		audio.currentTime = (sliderTime.value * audio.duration) / 100;
		saveState();
	}

	/**
	 * Sets the volume of the song on user input
	 * @private
	 */
	function setVolume() {
		var vol = sliderVol.value / 100;
		audio.volume = vol;
		state.currentVolume = sliderVol.value;
		if(sliderVol.value == 0) {
			btnVol.classList.add('btn-mute');
			btnVol.classList.remove('btn-vol');
		} else {
			btnVol.classList.remove('btn-mute');
			btnVol.classList.add('btn-vol');
		}
		saveState();
	}

	/**
	 * Plays previous song
	 * @private
	 */
	function setPrev() {
		state.currentTime = 0;
		if (state.currentIndex == 0) {
			state.currentIndex = 0;
		} else {
			state.currentIndex = Number(state.currentIndex) - 1;
		}
		startSong(state.music);
	}

	/**
	 * Plays next song
	 * @private
	 */
	function setNext() {
		state.currentTime = 0;
		if (state.currentIndex == state.music.length - 1) {
			state.currentIndex = 0;
		} else {
			state.currentIndex = Number(state.currentIndex) + 1;
		}
		startSong(state.music);
	}

	/**
	 * Plays song selected by user
	 * @private
	 */
	function setSong(el) {
		state.currentTime = 0;
		var index = el.getAttribute('data-song');
		var index = Number(index);
		state.currentIndex = index;
		startSong(state.music);
	}

	/**
	 * Selects or deselects favorite song on user input
	 * @private
	 */
	function setFav() {
		btnFav.classList.toggle('btn-fav');
		btnFav.classList.toggle('btn-fav-clicked');

		if(state.music[state.currentIndex].fav) {
			state.music[state.currentIndex].fav = false;
			var index;
			for (var i=0; i<state.favorites.length; i++) {
				if(state.favorites[i].name == state.music[state.currentIndex].name) {
					index = i;
				}
			}
			state.favorites.splice(index, 1);
		} else {
			state.music[state.currentIndex].fav = true;
			state.favorites.push(state.music[state.currentIndex]);
		}
		composeSongList(state.favorites, favDisplay);
		saveState();
	}

	/**
	 * Displays or hides the volume slider
	 * @private
	 */
	function showVolume() {
		sliderVol.classList.toggle('show');
		sliderVol.classList.toggle('hidden');
	}

	/**
	 * Starts playing the current song
	 * @param Array music
	 * @private
	 */
	function startSong(music) {
		audio.src = music[state.currentIndex].src[state.format];
		audio.volume = state.currentVolume / 100;
		audio.currentTime = state.currentTime;
		audio.play();
		coverDisplay.setAttribute('style', 'background-image: url(' + music[state.currentIndex].cover + ')');
		titleDisplay.innerText = music[state.currentIndex].name;
		authorDisplay.innerText = music[state.currentIndex].artist;
		if(music[state.currentIndex].fav) {
			btnFav.classList.remove('btn-fav');
			btnFav.classList.add('btn-fav-clicked');
		} else {	
			btnFav.classList.add('btn-fav');
			btnFav.classList.remove('btn-fav-clicked');
		}
	}

	/**
	 * Sends data to save module function
	 * @private
	 */
	function saveState() {
		save.saveData('musicData', state);
	}

	window.player = {
		init: init
	}

})(window);