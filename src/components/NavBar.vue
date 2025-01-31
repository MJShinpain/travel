<!-- components/NavBar.vue -->
<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style scoped>
nav {
  background-color: #42b983;
  padding: 10px;
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}
</style>
