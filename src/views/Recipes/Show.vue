<template>
  <div class="recipes-show">
    <h1>{{ recipe.name }}</h1>
    <h3>{{ recipe.ingredients }}</h3>
    <h3>{{ recipe.directions }}</h3>
    <h3>Chef: {{ recipe.chef }}</h3>
    <h3>Best Eaten: {{ recipe.best_eaten }}</h3>
    <h3>{{ recipe.created }}</h3>
    <router-link :to="`/recipes/${recipe.id}/edit`"><button>Edit</button></router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Recipe Show",
      recipe: {},
    };
  },
  created: function () {
    axios.get(`/recipes/${this.$route.params.id}`).then((response) => {
      console.log("recipes show", response);
      this.recipe = response.data;
    });
  },
  methods: {},
};
</script>
