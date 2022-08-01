import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createShop = createAsyncThunk(
  "shops/createShop",
  async ({ shopData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createShop(shopData);
      navigate("/");
      toast('Shop Added', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getShops = createAsyncThunk(
  "shops/getShops",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchShops();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getShop = createAsyncThunk(
  "shops/getShop",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.fetchShop(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchUserShops = createAsyncThunk(
  "tour/getToursByUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getUserShops(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

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

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: {},
    shops: [],
    userShops: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createShop.pending]: (state, action) => {
      state.loading = true;
    },
    [createShop.fulfilled]: (state, action) => {
      state.loading = false;
      state.shops = [...state.shops, action.payload];
    },
    [createShop.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
    },
    [getShops.pending]: (state, action) => {
      state.loading = true;
    },
    [getShops.fulfilled]: (state, action) => {
      state.loading = false;
      state.shops = action.payload;
    },
    [getShops.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
    },
    [getShop.pending]: (state, action) => {
      state.loading = true;
    },
    [getShop.fulfilled]: (state, action) => {
      state.loading = false;
      state.shop = action.payload;
    },
    [getShop.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
    },
    [fetchUserShops.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserShops.fulfilled]: (state, action) => {
      state.loading = false;
      state.userShops = action.payload;
    },
    [fetchUserShops.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
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

export default shopSlice.reducer;
