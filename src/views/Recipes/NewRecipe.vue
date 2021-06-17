<template>
  <div class="recipes-new">
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <br />
    <hr />
    Name:
    <input type="text" v-model="newRecipeName" />
    <br />
    Ingredients:
    <input type="text" v-model="newRecipeIngredients" />
    <br />
    Directions:
    <input type="text" v-model="newRecipeDirections" />
    <br />
    Image:
    <input type="text" v-model="newRecipeImage" />
    <br />
    Best Eaten:
    <br />
    Breakfast
    <input value="1" type="radio" id="Breakfast" name="Breakfast" v-model="newRecipeCategory" />
    <br />
    Lunch
    <input value="2" type="radio" id="Lunch" name="Lunch" v-model="newRecipeCategory" />
    <br />
    Dinner
    <input value="3" type="radio" id="Dinner" name="Dinner" v-model="newRecipeCategory" />
    <br />
    Snack
    <input value="4" type="radio" id="Snack" name="Snack" v-model="newRecipeCategory" />
    <br />
    <!-- <select name="category" v-model="newRecipeCategory">
      <option value="1">Breakfast</option>
      <option value="2">Lunch</option>
      <option value="3">Dinner</option>
      <option value="4">Snack</option>
    </select> -->
    <br />
    <button v-on:click="createRecipe()">Create</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Let's create a delicious new recipe!",
      newRecipeName: "",
      newRecipeIngredients: "",
      newRecipeDirections: "",
      newRecipeImage: "",
      newRecipeCategory: "",
      errors: [],
    };
  },
  created: function () {
    console.log("DOM loaded");
  },
  methods: {
    createRecipe: function () {
      var params = {
        name: this.newRecipeName,
        ingredients: this.newRecipeIngredients,
        directions: this.newRecipeDirections,
        image: this.newRecipeImage,
        category_id: this.newRecipeCategory,
      };
      axios
        .post("http://localhost:3000/recipes", params)
        .then((response) => {
          console.log("created", response.data);
          this.$router.push("/recipes");
        })
        .catch((error) => {
          console.log("recipe create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
