<template>
  <div class="avatar">
    <span class="avatar-title">sal</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  position: absolute;
  left: 0;
  top: 0;

  width: 200px;
  height: 200px;
  background-color: #f2f6fc;
  border: 2px solid #e4e7e6;
  box-shadow: 0 0 5px 2px #e6e3e3;
  transform: rotateZ(-45deg) translateY(-145px);

  z-index: 100;
  
  &:hover {
    cursor: pointer;
  }
}
.avatar-title {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  text-align: center;

  color: #ffaaaa;
  font-size: 40px;
}
</style>


