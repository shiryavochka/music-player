<template>
    <div class="player-panel">
      <div class="container">
        <div>
          <button class="player-btn" @click="prevTrack"><svg-icon name="previous" /></button>
          <button class="player-btn"  @click="togglePlay">
            <svg-icon v-if="isPlaying" name="pause"/>
            <svg-icon v-else name="play"/>
          </button>
          <button class="player-btn"   @click="nextTrack">
            <svg-icon name="next" /> 
          </button>
          <button class="player-btn"  @click="shuffleTracks">
            <svg-icon name="shuffle" />
          </button>
          <button class="player-btn"  @click="toggleLoop">
  <!-- {{ isLooping ? 'Disable Loop' : 'Enable Loop' }} -->
            <svg-icon name="repeat" />
          </button>
          <label for="volumeSlider">Volume:</label>
          <input
            id="volumeSlider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            v-model="volume"
            @input="setVolume"
          />
          <div>
            <label for="progressBar">Progress:</label>
            <input  ref="progressBarRef"
              id="progressBar"
              type="range"
              min="0"
              :max="duration"
              step="1"
              v-model="currentTime"
              @input="setCurrentTime"
              />
              <div>
                {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
              </div>
            </div>
          </div> 

      </div>
      
   </div>
</template>
 
<script setup >
import { ref, onMounted, computed } from 'vue';
import { useTrackStore } from '~/store/tracks.js';

const progressBarRef = ref(null);
const store = useTrackStore();

const isPlaying= computed(() => store.isPlaying);
const volume=  store.volume;
const currentTime= computed(() => store.currentTime);
const duration = computed(() => store.duration);

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
  store.setVolume();
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
.player-panel {
  width: 100%;
    background: gainsboro;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 180px;
}
.player-btn {background: transparent;
border: none;
padding: 0;
margin: 0;
}
.player-btn svg{
  width: 50px;
    height: 50px;
}
</style>