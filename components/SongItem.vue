<template>
    <div class="song-item" @click="playSong" >
        <div class="song-item--img">
            <img :src="song.cover_link" alt="Song Cover" >
        </div>
        <div class="song-item--desc">
            <h3 class="song-title">{{ song.song_name }}</h3>
            <h4 class="musician">{{ song.musician }}</h4>
        </div>
        <div class="song-item--time">
            <p>02:47</p>
        </div>
    </div> 
</template>
<script setup>
import { useTrackStore } from '~/store/tracks';

const props = defineProps(['song']);
const store = useTrackStore();

const playSong = () => {
  store.loadAndPlayTrack(props.song);
};
</script>
