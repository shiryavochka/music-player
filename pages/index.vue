<template>
    <div class="container"> 
      <h1>All songs</h1>
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
h1 {
  color: white;
  text-transform: uppercase;
}
body {
  margin: 0;
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
@media (max-width: 576px) {
  .container {
    padding: 0 10px;
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