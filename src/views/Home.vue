<template>
  <div class="home">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

export default {
  name: 'home',

  components: {
    HelloWorld
  }
}
</script>
