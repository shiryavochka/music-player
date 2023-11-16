<template>
    <div class="container"> 
      <h2>All songs</h2>
      <SongList></SongList> 
      <SongPlayer></SongPlayer>
    </div>   
</template>
  
<script> 
export default {
  name: "IndexPage",
 
}
</script>
<style> 
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
* {
  font-family: Nunito;
}
.songs-list{
  background: #0000004a;
  padding: 25px
}
.song-item{
  display: flex;
  background: #00000080;
  align-items: center;
  margin-bottom: 5px;
  color: white;
  padding: 5px 20px;
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
.song-item--time{
  margin-left: auto;
}
.song-item--img {
  width: 70px;
  height: 70px;
  margin-right: 30px;
}
.song-item--img img {
  width: 100%;
}
body {
  background: #F147A7;
  background: radial-gradient(at center, #F147A7, #13A2F1);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}  
@media (min-width: 576px) {
  .container {
    max-width: 540px;
    }
}
  
@media (min-width: 769px) {
  .container {
      max-width: 720px;
  }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1210px;
    }
}

</style>
  