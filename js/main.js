var musicList = [];

// musicList = [
// 	{
// 		name: 'Bukowski',
// 		artist: 'Modest Mouse',
// 		cover: 'img/covers/modest_mouse.jpg',
// 		src: {
// 			mp3: 'audio/mp3/bukowski.mp3',
// 			ogg: 'audio/ogg/bukowski.ogg',
// 			wav: 'audio/wav/bukowski.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Bedroom Hyms',
// 		artist: 'Florence and the Machine',
// 		cover: 'img/covers/florence.jpg',
// 		src: {
// 			mp3: 'audio/mp3/bedroom_hyms.mp3',
// 			ogg: 'audio/ogg/bedroom_hyms.ogg',
// 			wav: 'audio/wav/bedroom_hyms.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Black Balloon',
// 		artist: 'The Kills',
// 		cover: 'img/covers/the_kills.jpg',
// 		src: {
// 			mp3: 'audio/mp3/black_balloon.mp3',
// 			ogg: 'audio/ogg/black_balloon.ogg',
// 			wav: 'audio/wav/black_balloon.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Feels like we only go backwards',
// 		artist: 'Tame Impala',
// 		cover: 'img/covers/tame_impala.jpg',
// 		src: {
// 			mp3: 'audio/mp3/feels_like_we_only_go_backwards.mp3',
// 			ogg: 'audio/ogg/feels_like_we_only_go_backwards.ogg',
// 			wav: 'audio/wav/feels_like_we_only_go_backwards.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Jerk it out',
// 		artist: 'The Caesars',
// 		cover: 'img/covers/the_caesars.jpg',
// 		src: {
// 			mp3: 'audio/mp3/jerk_it_out.mp3',
// 			ogg: 'audio/ogg/jerk_it_out.ogg',
// 			wav: 'audio/wav/jerk_it_out.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Idioteque',
// 		artist: 'Radiohead',
// 		cover: 'img/covers/radiohead.jpg',
// 		src: {
// 			mp3: 'audio/mp3/Idioteque.mp3',
// 			ogg: 'audio/ogg/Idioteque.ogg',
// 			wav: 'audio/wav/Idioteque.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'You and me',
// 		artist: 'SOJA',
// 		cover: 'img/covers/soja.jpg',
// 		src: {
// 			mp3: 'audio/mp3/you_and_me.mp3',
// 			ogg: 'audio/ogg/you_and_me.ogg',
// 			wav: 'audio/wav/you_and_me.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Howlin for you',
// 		artist: 'The black keys',
// 		cover: 'img/covers/the_black_keys.jpg',
// 		src: {
// 			mp3: 'audio/mp3/howlin_for_you.mp3',
// 			ogg: 'audio/ogg/howlin_for_you.ogg',
// 			wav: 'audio/wav/howlin_for_you.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Naive',
// 		artist: 'The Kooks',
// 		cover: 'img/covers/the_kooks.jpg',
// 		src: {
// 			mp3: 'audio/mp3/naive.mp3',
// 			ogg: 'audio/ogg/naive.ogg',
// 			wav: 'audio/wav/naive.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Your woman',
// 		artist: 'White town',
// 		cover: 'img/covers/white_town.jpg',
// 		src: {
// 			mp3: 'audio/mp3/your_woman.mp3',
// 			ogg: 'audio/ogg/your_woman.ogg',
// 			wav: 'audio/wav/your_woman.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Good Song',
// 		artist: 'Blur',
// 		cover: 'img/covers/blur.jpg',
// 		src: {
// 			mp3: 'audio/mp3/good_song.mp3',
// 			ogg: 'audio/ogg/good_song.ogg',
// 			wav: 'audio/wav/good_song.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Supersoaker',
// 		artist: 'Kings of Leon',
// 		cover: 'img/covers/kings_of_leon.jpg',
// 		src: {
// 			mp3: 'audio/mp3/supersoaker.mp3',
// 			ogg: 'audio/ogg/supersoaker.ogg',
// 			wav: 'audio/wav/supersoaker.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Hang me up to dry',
// 		artist: 'Cold War Kids',
// 		cover: 'img/covers/cold_war_kids.jpg',
// 		src: {
// 			mp3: 'audio/mp3/hang_me_up_to_dry.mp3',
// 			ogg: 'audio/ogg/hang_me_up_to_dry.ogg',
// 			wav: 'audio/wav/hang_me_up_to_dry.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Fall back down',
// 		artist: 'Rancid',
// 		cover: 'img/covers/rancid.jpg',
// 		src: {
// 			mp3: 'audio/mp3/fall_back_down.mp3',
// 			ogg: 'audio/ogg/fall_back_down.ogg',
// 			wav: 'audio/wav/fall_back_down.wav'
// 		},
// 		fav: false
// 	},
// 	{
// 		name: 'Someday',
// 		artist: 'The Strokes',
// 		cover: 'img/covers/the_strokes.jpg',
// 		src: {
// 			mp3: 'audio/mp3/someday.mp3',
// 			ogg: 'audio/ogg/someday.ogg',
// 			wav: 'audio/wav/someday.wav'
// 		},
// 		fav: false
// 	}
// ];

player.init(musicList);