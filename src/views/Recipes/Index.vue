<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <h3>Search Recipes by Name or Ingredients:</h3>
    <input ype="text" v-model="filter" placeholder="ie garlic, pasta, tomato" />
    <div v-for="recipe in filterBy(recipes, filter, 'name', 'ingredients')" v-bind:key="recipe.id">
      <router-link :to="`/recipes/${recipe.id}`">
        <h4>Title: {{ recipe.name }}</h4>
      </router-link>
      <h4>Chef: {{ recipe.chef }}</h4>
      <h4>Ingredients: {{ recipe.ingredients }}</h4>
      <h4>Directions: {{ recipe.directions }}</h4>
      <h4>Best Eaten: {{ recipe.best_eaten }}</h4>

      <h1>__</h1>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Recipes Index",
      recipes: [],
      filter: "",
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
