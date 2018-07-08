<template>
<div class="test-container">
  <button @click="show = !show">toggle</button>
  <transition name="fade">
    <p class="test-trans" v-if="show">hello</p>
  </transition>
  <transition name="bounce">
    <p v-if="show">lsdkfjosldflkjmxcoliksdmlfksdolkialkdmlcjfoadlfj</p>
  </transition>
  <button @click="velocityShow = !velocityShow">toggle</button>
  <transition
   v-on:before-enter="beforeEnter"
   v-on:enter="enter"
   v-on:leave="leave"
   >
    <p class="p-velocity" v-if="velocityShow">使用的js</p>
   </transition>
   <transition name="btn">
     <button style="position: absolute" @click="isOn = !isOn" v-bind:key="isOn">{{isOn ? 'ON' : 'OFF'}}</button>
   </transition>
</div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true,
      velocityShow: true,
      isOn: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test-container {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.fade-enter-active {
  transition: all .3s ease
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, .5, .8, 1.0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .8s ease;
}
.bounce-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }
}

.p-velocity {
  width: 100px;
  height: 50px;
}

.btn-enter-active {
  transition: all 1s ease
}
.btn-leave-active {
  transition: all 1s ease;
}
.btn-enter {
  transform: translateX(30px);
  opacity: 0;
}
.btn-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
