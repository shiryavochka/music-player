import { defineStore } from 'pinia';
import { Howl } from 'howler';

export const useTrackStore = defineStore( "TrackStore",{
    state: () => ({
        tracks: [ 
            {
                id: 1,
                song_name : 'Darla',
                musician: 'Vundabar',
                cover_link: 'https://lastfm.freetls.fastly.net/i/u/300x300/586e3ee3df316bac1b684eeed671955f.jpg',
                src: 'Vundabar.mp3' ,
                duration: '3:51',
            },
            {
                id: 2,
                song_name : 'Resonance',
                musician: 'Home',
                cover_link: 'https://i1.sndcdn.com/artworks-8mL9Qz3xBcPqmPud-chaDPg-t500x500.jpg',
                src:   '/home.mp3',
                duration: '3:32',
            },
            {
                id: 3,
                song_name : 'Not Allowed',
                musician: 'TV Girl',
                cover_link: 'https://i.scdn.co/image/ab67616d00001e0232f5fec7a879ed6ef28f0dfd',
                src: '/TV-Gir.mp3',
                duration: '2:47',
            },
            {
                id: 4,
                song_name : 'The Longest Wave',
                musician: 'Red Hot Chilli Peppers',
                cover_link: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Thegetawayalbum.jpg',
                src: 'Red-Hot-Chili-Peppers.mp3',
                duration: '3:31',
            },
            {
                id: 5,
                song_name : 'Why’d You Only Call Me When You’re High?',
                musician: 'Arctic Monkeys',
                cover_link: 'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163',
                src: 'Arctic-Monkeys.mp3',
                duration: '2:41',
            },
            {
                id: 6,
                song_name : 'Judas Effect',
                musician: 'Vestron Vulture',
                cover_link: 'https://i.mycdn.me/getMusicImage?photoId=11792656&type=1&plc=MOBILE',
                src: '/Vestron-Vulture.mp3' ,
                duration: '3:12',
            },
        ],
        isPlaying: false,
        currentTrackIndex: 0,
        volume: 0.5,
        currentTime: 0,
        sound: null,
        duration: 0,
        isLooping: false,
    }),
    actions: {
        loadAndPlayTrack(selectedTrack){
            if (this.sound) {
                this.sound.stop();
            }
            if (selectedTrack) {
                const index = this.tracks.findIndex((track) => track.src === selectedTrack.src);

                if (index !== -1) {
                  this.currentTrackIndex = index;
                }
            }
            this.sound = new Howl({
                src: [this.tracks[this.currentTrackIndex].src],
                loop: this.isLooping,
                volume: this.volume,

                onplay: () => {
                    this.duration = this.sound.duration();
                    this.startProgressBar();
                    this.isPlaying = true;
                },
                onend: () => {
                    this.isPlaying = false;
                    if (this.isLooping) {
                        // если включен режим зацикливания, воспроизводим текущий трек снова
                        this.sound.play();
                    } else {
                        // переключаемся на следующий трек
                        this.nextTrack();
                    }
                },
                onseek: () => {
                    this.currentTime = this.sound.seek();
                }
            });
            this.isPlaying = true;
            this.sound.play();
        },
        togglePlayPause() {
            if (this.sound) {
                if (this.isPlaying) {
                    this.sound.pause();
                } else {
                    this.sound.play();
                }
            } else {
                this.loadAndPlayTrack();
            }
            this.isPlaying = !this.isPlaying;
        },
        nextTrack() {
            if (this.isLooping) {
                this.currentTrackIndex =this.currentTrackIndex;
            } else {
                this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
            } 
            if (this.sound) {
                this.sound.stop();
            }
            this.loadAndPlayTrack();
        },
        prevTrack() {
            if (this.isLooping) {
                this.currentTrackIndex =this.currentTrackIndex;
            } else {
            this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;}
            if (this.sound) {
                this.sound.stop();
            }
            this.loadAndPlayTrack();
        },
        setVolume(volume){
            if (this.sound) {
                this.sound.volume(volume);
            }  
        },
        shuffleTracks() {
            this.tracks.sort(()=> Math.random()-0.5);
            if (this.sound) {
                this.sound.stop();
                this.loadAndPlayTrack();
            }
            this.isPlaying = true;
        },
        toggleLoop(){
            this.isLooping = !this.isLooping;
        },
        setCurrentTime() {
            if (this.sound) {
                this.sound.seek(this.currentTime.value);
            }
        },
        startProgressBar() {
            const interval = setInterval(() => {
              this.currentTime = this.sound.seek();
              if (this.sound.playing() === false) {
                clearInterval(interval);
              }
            }, 1000);
        },
        
    },
    getters: {
        currentTrack() {
          return this.tracks[this.currentTrackIndex] || null;
        },
      },
});