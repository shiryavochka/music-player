<template>
    <div class="song-item" @click="playSong" :class="{ 'active-item': isCurrentTrack }">
        <div class="song-item--img">
            <img :src="song.cover_link" alt="Song Cover" >
        </div>
        <div class="song-item--desc">
            <h3 class="song-title">{{ song.song_name }}</h3>
            <h4 class="musician">{{ song.musician }}</h4>
        </div>
        <div class="song-item--time">
            <p>{{ song.duration }}</p>
        </div>
    </div> 
</template>
<script setup>
import { useTrackStore } from '~/store/tracks';
const props = defineProps({
    song: {
    type: Object,
    required: true
  }
})

const store = useTrackStore();
const isCurrentTrack = computed(() => store.currentTrackIndex == props.song.id - 1);

const playSong = () => {
  store.loadAndPlayTrack(props.song);
};
</script>
<style>
.song-item {
    display: flex;
    border-radius: 12px;
    background: #00000080;
    align-items: center;
    margin-bottom: 5px;
    height: 109px;
    color: white;
    padding: 0;
}
.song-item--time{
    margin-right: 20px;
    margin-left: auto;
}
.song-item--img {
    width: 110px;
    height: 110px;
    margin-right: 30px;
}
.song-item:hover {
    background: #488de0;
}
.song-title{
    text-transform: uppercase;
}
.musician {
    color:#ababab;
}
.song-item--img img {
    border-radius: 12px 0 0 12px ;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.active-item {
    background-color: #F147A7;
}
@media (max-width: 576px) {
    .musician, .song-item--time {
        font-size: 12px;
    }
    .song-title {
        font-size: 10px;
    }
    .song-item--img {
        margin-right: 15px;
    }
    .song-item--time {
        margin-right: 0;
    }
}
@media (max-width: 768px) {
    .song-item {
        padding: 0 10px 0 0;
        margin-bottom: 10px;
    }
    .song-item--img {
        width: 80px;
        margin-right: 20px;
    }
    .song-item--desc {
        width: 60%;
    }
    .song-title, .musician {
        margin: 0;
    }
}
</style>