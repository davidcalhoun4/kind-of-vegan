<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <div v-for="recipe in recipes" v-bind:key="recipe.id">
      <h4>Title: {{ recipe.name }}</h4>
      <h4>Chef: {{ recipe.chef }}</h4>
      <h4>Ingredients: {{ recipe.ingredients }}</h4>
      <h4>Directions: {{ recipe.directions }}</h4>
      <h4>Cateogry: {{ recipe.category_id }}</h4>
      <h1>__</h1>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js! Now, lets get cookin on creating kind-of-vegan!",
      recipes: [],
    };
  },
  created: function () {
    console.log("Dom has been loaded");
    this.indexRecipes();
  },
  methods: {
    indexRecipes: function () {
      axios.get("http://localhost:3000/recipes").then((response) => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
  },
};
</script>
