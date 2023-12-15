<template>
    <div class="image-gallery">
        <div class="column">
        <div class="image-item">
            <img src="../assets/2d/compressed/embryosis.png" alt="" />
            <div class="overlay"><h4>EMBRYOSIS</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/destructivecold-min.png" alt="" />
            <div class="overlay"><h4>DESTRUCTIVE COLD</h4></div>
        </div>
        <div class="image-item" data-image-name="imageId" @click="() => emit('imageclick', { image: imageId })">
            <img src="../assets/2d/compressed/iphone1-min.png" alt="" />
            <div class="overlay"><h4>IPHONE WALLPAPER 1</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/water-min.jpg" alt="" />
            <div class="overlay"><h4>SHALLOW WATERS</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/break2-min.jpg" alt="" />
            <div class="overlay"><h4>BREAK!</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/entrance-min.png" alt="" />
            <div class="overlay"><h4>TRACK COVER 1</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/trials-min.png" alt="" />
            <div class="overlay"><h4>TRACK COVER 2</h4></div>
        </div>
        </div>
        <div class="column">
        <div class="image-item">
            <img src="../assets/2d/compressed/init-min.jpg" alt="" />
            <div class="overlay"><h4>INIT</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/offgrid-min.jpg" alt="" />
            <div class="overlay"><h4>OFF GRID!</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/spacehobbies-min.jpg" alt="" />
            <div class="overlay"><h4>SPACE HOBBIES!</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/ako-min.png" alt="" />
            <div class="overlay"><h4>SPOTIFY ARTIST BANNER</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/sc1-min.png" alt="" />
            <div class="overlay"><h4>TRIO</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/0085.png" alt="" />
            <div class="overlay"><h4>SPACE CANDY</h4></div>
        </div>
        <div class="image-item">
            <img src="../assets/2d/compressed/cubedup.png" alt="" />
            <div class="overlay"><h4>PREP</h4></div>
        </div>
        </div>
    </div>
</template>

<script>

// const urls = ["..."];

// const images = Object.fromEntries(url.map(url => [url.match(/\/(.+)\./)[1], url]));
// cubedup: "../assets/2d/compressed/cubedup.png"

</script>

<style>

.container {
  padding: 40px 5%;
  overflow: auto;
  
}

.heading-text {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.heading-text h4 {
  font-weight: 100;
}

.image-gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-gallery .column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
}

@media only screen and (min-width: 768px) {
  .image-gallery {
    flex-direction: row;
  }
}

.image-item {
  position: relative;
  cursor: pointer;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(82, 255, 96, 0.502);
  top: 0;
  left: 0;
  transition: all 0.1s 0.1s ease-in-out;
  color: #fff;
  /* center overlay content */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.image-item:hover .overlay {
  opacity: 1;
}

</style>