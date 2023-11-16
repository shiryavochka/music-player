<template>
    <div class="songs-list">
       <SongItem v-for="song in songs" :key="song.id" :song="song" ></SongItem>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useTrackStore } from '~/store/tracks';

const songs = ref(useTrackStore().tracks);
 
</script>
<style>
.songs-list {
    border-radius: 12px;
    background: #0000004a;
    padding: 25px;
    margin-bottom: 150px;
}
@media (max-width: 576px) {
    .songs-list {
        padding: 10px;
    }
}
</style>