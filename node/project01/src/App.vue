<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/click">Click</router-link> |
    <router-link to="/change">Event</router-link> |
    <router-link to="/key">key</router-link> |
    <router-link to="/render">V-if</router-link> |
    <router-link to="/rendershow">Show</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/lifecyclehook">LifeCycleHook</router-link> |
    <router-link to="/pagetitle">Reuse</router-link> |
    <router-link to="/parents">parents</router-link> |
    <router-link to="/grid">Table</router-link> |
    <router-link to="/testgrid">TestGrid</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
