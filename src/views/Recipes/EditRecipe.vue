<template>
  <div class="recipes-edit">
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <br />
    <hr />
    <form v-on:submit.prevent="updateRecipe()">
      Name:
      <input type="text" v-model="recipe.name" />
      <br />
      Ingredients:
      <input type="text" v-model="recipe.ingredients" />
      <br />
      Directions:
      <input type="text" v-model="recipe.directions" />
      <br />
      Image:
      <input type="text" v-model="recipe.image" />
      <br />
      Best Eaten:
      <select name="category" v-model="recipe.time_of_day">
        <option value="1">Breakfast</option>
        <option value="2">Lunch</option>
        <option value="3">Dinner</option>
        <option value="4">Snack</option>
      </select>
      <br />
      <input type="submit" class="btn btn-primary" value="Update" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
      message: "Edit Recipe",
    };
  },
  created: function () {
    console.log("DOM loaded");
  },
  methods: {
    updateRecipe: function () {
      var params = {
        name: this.recipe.name,
        ingredients: this.recipe.ingredients,
        directions: this.recipe.directions,
        image: this.recipe.image,
        time_of_day: this.recipe.time_of_day,
      };
      axios
        .patch(`/recipes/${this.recipe.id}`, params)
        .then((response) => {
          console.log("recipe updated", response);
          this.$router.push(`/recipes/${this.recipe.id}`);
        })
        .catch((error) => {
          console.log("recipe update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
