<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <a class="logo">
        <strong>Kind of Vegan</strong>
      </a>
      <router-link to="/">Home</router-link>

      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>

      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>

      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>

      <router-link v-if="isLoggedIn()" to="/recipes">Recipes Index</router-link>

      <router-link v-if="isLoggedIn()" to="/recipe/new">New Recipe</router-link>
    </header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>

      <router-link v-if="!isLoggedIn()" to="/signup">Signup |</router-link>

      <router-link v-if="!isLoggedIn()" to="/login">Login |</router-link>

      <router-link v-if="isLoggedIn()" to="/logout">Logout |</router-link>

      <router-link v-if="isLoggedIn()" to="/recipes">Recipes Index |</router-link>

      <router-link v-if="isLoggedIn()" to="/recipe/new">New Recipe</router-link>
    </div> -->
    <router-view />

    <footer id="footer">
      <p class="copyright">
        &copy; Untitled. All rights reserved. Design:
        <a href="https://html5up.net">HTML5 UP</a>
        .
      </p>
    </footer>
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.jwt;
    },
  },
};
</script>
