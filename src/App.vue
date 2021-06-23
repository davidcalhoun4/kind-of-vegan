<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Kind of Vegan</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isLoggedIn()" to="/signup" class="nav-link active">Signup</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isLoggedIn()" to="/login" class="nav-link active">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isLoggedIn()" to="/logout" class="nav-link active">Logout</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isLoggedIn()" to="/recipes" class="nav-link active">Recipes Index</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isLoggedIn()" to="/recipe/new" class="nav-link active">New Recipe</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
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
