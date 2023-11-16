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