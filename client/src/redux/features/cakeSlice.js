import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createCake = createAsyncThunk(
  "cake/createCake",
  async ({ cake, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createCake(cake);
      navigate("/");
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

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    cake: {},
    cakes: [],
    userCakes: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createCake.pending]: (state, action) => {
      state.loading = true;
    },
    [createCake.fulfilled]: (state, action) => {
      state.loading = false;
      state.cakes = [action.payload];
    },
    [createCake.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCakes.pending]: (state, action) => {
      state.loading = true;
    },
    [getCakes.fulfilled]: (state, action) => {
      state.loading = false;
      state.cakes = action.payload;
    },
    [getCakes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
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

export default cakeSlice.reducer;
