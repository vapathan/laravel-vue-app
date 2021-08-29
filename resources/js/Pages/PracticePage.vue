<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <h5>Empty Page</h5>
        <p>Use this page to start from scratch and place your custom content.</p>
        <button @click="greet">Greet</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'vasim'
    }
  }
  ,
  methods: {
    greet(event) {
      // `this` inside methods points to the current active instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
  ,
}
</script>

<style scoped>

</style>
