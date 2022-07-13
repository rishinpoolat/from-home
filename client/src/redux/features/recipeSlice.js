import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createRecipe = createAsyncThunk(
  "recipe/createRecipe",
  async ({ recipe, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createRecipe(recipe);
      navigate("/recipe");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchRecipes();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.fetchRecipe(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getToursByUser = createAsyncThunk(
//   "tour/getToursByUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await api.getToursByUser(userId);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const deleteTour = createAsyncThunk(
//   "tour/deleteTour",
//   async ({ id, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.deleteTour(id);
//       toast.success("Tour Deleted Successfully");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const updateTour = createAsyncThunk(
//   "tour/updateTour",
//   async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await api.updateTour(updatedTourData, id);
//       toast.success("Tour Updated Successfully");
//       navigate("/");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: {},
    recipes: [],
    userRecipes: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createRecipe.pending]: (state, action) => {
      state.loading = true;
    },
    [createRecipe.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipes = [action.payload];
    },
    [createRecipe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getRecipes.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
    },
    [getRecipes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getRecipe.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecipe.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipe = action.payload;
    },
    [getRecipe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // [getToursByUser.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [getToursByUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.userTours = action.payload;
    // },
    // [getToursByUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
    // [deleteTour.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [deleteTour.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   console.log("action", action);
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userTours = state.userTours.filter((item) => item._id !== id);
    //     state.tours = state.tours.filter((item) => item._id !== id);
    //   }
    // },
    // [deleteTour.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
    // [updateTour.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [updateTour.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   console.log("action", action);
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userTours = state.userTours.map((item) =>
    //       item._id === id ? action.payload : item
    //     );
    //     state.tours = state.tours.map((item) =>
    //       item._id === id ? action.payload : item
    //     );
    //   }
    // },
    // [updateTour.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  },
});

export default recipeSlice.reducer;
