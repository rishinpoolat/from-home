import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addNewCake = createAsyncThunk(
  "cake/createCake",
  async ({ cakeData }, { rejectWithValue }) => {
    try {
      const response = await api.createCake(cakeData);
      // navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCakes = createAsyncThunk(
  "cake/getCakes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchCakes();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCake = createAsyncThunk(
  "cakes/getCake",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.fetchCake(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchCakesOfShop = createAsyncThunk( "cakes/getCakesOfShop", async (id, {rejectWithValue}) => {
  try {
    const res = await api.getCakesOfShop(id);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}) 

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    cake: {},
    cakes: [],
    shopCakes: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [addNewCake.pending]: (state, action) => {
      state.loading = true;
    },
    [addNewCake.fulfilled]: (state, action) => {
      state.loading = false;
      state.cakes = [action.payload];
    },
    [addNewCake.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
    },
    [getCakes.pending]: (state, action) => {
      state.loading = true;
    },
    [getCakes.fulfilled]: (state, action) => {
      state.loading = false;
      state.cakes = [...state.cakes, action.payload];
    },
    [getCakes.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
    },
    [getCake.pending]: (state, action) => {
      state.loading = true;
    },
    [getCake.fulfilled]: (state, action) => {
      state.loading = false;
      state.cake = action.payload;
    },
    [getCake.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [fetchCakesOfShop.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCakesOfShop.fulfilled]: (state, action) => {
      state.loading = false;
      state.shopCakes = action.payload;
    },
    [fetchCakesOfShop.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
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

export default cakeSlice.reducer;
