<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Markdown Redactor</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Documents</a>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" to="signIn" v-if="!user.authenticated">Sign In</router-link></li>
          <li class="nav-item"><a class="nav-link disabled" href="#" v-if="!user.authenticated">or</a></li>
          <li class="nav-item"><router-link class="nav-link" to="signUp" v-if="!user.authenticated">Sign Up</router-link></li>
          <li class="nav-item"><a class="nav-link" href="#" v-if="user.authenticated" v-on:click="signOut">Sign Out</a></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import auth from './auth'
export default {
  name: 'app',
  data() {
    return {
      user: auth.user
    }
  },
  methods: {
    signOut() {
      auth.signOut()
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
