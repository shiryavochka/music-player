<template>
  <div class="player-panel">
    <div class="container">
      <div class="player-panel--top">
        <div class="player-buttons">
          <button class="player-btn btn-shuffle"  @click="shuffleTracks">
            <svg-icon class="icon-svg" name="shuffle" />
          </button>
          <button class="player-btn" @click="prevTrack">
            <svg-icon class="icon-svg" name="previous" />
          </button>
          <button class="player-btn"  @click="togglePlay">
            <svg-icon v-if="isPlaying" class="icon-svg" name="pause"/>
            <svg-icon v-else class="icon-svg" name="play"/>
          </button>
          <button class="player-btn"   @click="nextTrack">
            <svg-icon class="icon-svg" name="next" /> 
          </button>
          <button class="player-btn btn-repeat" :class="{ 'active-btn':isLooping}"  @click="toggleLoop">
            <svg-icon class="icon-svg" name="repeat"  />
          </button>
        </div>
        <div class="player-volume">
          <input
          id="volumeSlider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="volume"
          @input="setVolume"
          />
        </div>        
      </div>
      <div class="player-panel--bottom">
        <div class="player-time">
          <span>
            {{ formatTime(currentTime) }}
          </span> 
          <div v-if="currentTrack" class="player-desc" >
            <p>
              {{  currentTrack.musician }} - {{  currentTrack.song_name }}   
            </p>
          </div>
          <span>
            {{ formatTime(duration) }}
          </span>              
        </div>
        <input  ref="progressBarRef"
          id="progressBar"
          type="range"
          min="0"
          :max="duration"
          step="1"
          v-model="currentTime"
          @input="setCurrentTime"
        /> 
      </div>
    </div>  
  </div>
</template>
 
<script setup >
import { ref, onMounted, computed } from 'vue';
import { useTrackStore } from '~/store/tracks.js';

const progressBarRef = ref(null);
const store = useTrackStore();
const isLooping = computed(() => store.isLooping);
const isPlaying = computed(() => store.isPlaying);
const volume = ref(store.volume);
const currentTime = computed(() => store.currentTime);
const duration = computed(() => store.duration);
const currentTrack = computed(() => store.currentTrack);

const togglePlay = () => {
  store.togglePlayPause();
};
const shuffleTracks = () => {
  store.shuffleTracks();
};
const toggleLoop = () => {
  store.toggleLoop();
};
const prevTrack = () => {
  store.prevTrack();
};
const nextTrack = () => {
  store.nextTrack();
};
const setVolume = () => {
  store.setVolume(volume.value);
};
const setCurrentTime = () => {
  if(progressBarRef.value){
    store.setCurrentTime();
  }
};

const formatTime = (time) => {
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60);
return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

onMounted(() => {
  if (progressBarRef.value) {
    progressBarRef.value.value = 0;
  }
});
</script>
<style scoped>
#progressBar {
width: 100%;
}
.player-desc p {   
  color: #F147A7;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
.player-panel {
  width: 100%;
  padding: 5px 0;
  background: rgb(255, 255, 255);
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100px;
}
.icon-svg {
  fill: #13A2F1;
}
.player-buttons {
  margin-right: 50px;
}
.btn-shuffle .icon-svg, .btn-repeat .icon-svg {
  fill: #88a1b7;
}
.active-btn .icon-svg { 
  fill:#F147A7;
}
.player-btn {
  background: transparent;
  border: none;
  padding: 0 10px;
  margin: 0 10px;
}
.player-btn:hover {
  background: #ebedf1;
  border-radius: 12px;
}
.btn-shuffle {
  margin-right: 40px;
}
.btn-repeat {
  margin-left: 40px;
}
.player-btn svg {
  width: 40px;
  height: 40px;
}
.player-time {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.player-panel--top { 
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
}
@media (max-width: 992px) {
  .player-panel {
    height: auto;
  }
  .player-panel--top {
    flex-wrap: wrap;
  }
  .player-buttons {
    margin-right: 20px;
  }
}
@media (max-width: 576px) {
  .player-buttons{
    margin-right: 0;
  }
  .player-desc {
    overflow: hidden;
    margin: 0 10px;
  }
  .player-desc p{
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .btn-shuffle{
    margin-right: 15px;
  }
  .btn-repeat {
  margin-left: 15px;
  }
  .player-btn{
    padding: 0px 5px;
  }
}
@media (max-width: 460px) {
  .btn-shuffle {
    margin-right: 5px;
  }
  .player-btn { 
    padding: 0;
  }
  .btn-repeat {
    margin-left: 5px;
  }
  .player-btn svg {
    width: 35px;
    height: 35px;
  }
}
</style>