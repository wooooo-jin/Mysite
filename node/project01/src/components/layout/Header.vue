<template>
  <!-- <nav>
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
    <router-link to="/SlotModal">SlotModal</router-link> |
    <router-link to="/provide">ProVide</router-link> |
    <router-link to="/custom">Advened</router-link> |
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" @click="goToMenu('/')">Hello</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="goToMenu('/')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reuse
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="goToMenu('/pagetitle')">Reuse</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/SlotModal')">SlotModal</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/provide')">ProVide</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/testgrid')">testgrid</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            advenced
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="goToMenu('/mixin')">Reuse</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/plugin')">plugin</a></li>
            <li><a class="dropdown-item" @click="goToMenu('/todos')">todos</a></li>
          </ul>        
        </li>     

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            KakaoLogin
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="goToMenu('/auth')">Login</a></li>
          </ul>        
        </li>  


        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> 
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
        goToMenu(path) {
            this.$router.push({path : path})
        }
    }
}
</script>

<style scoped>
a{
    cursor:pointer;
}
</style>