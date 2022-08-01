import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addItemToCart = createAsyncThunk(
  "cart/addToCart",
  async ({userId, productId, quantity}) => {
    try {
      const response = await api.addToCart({userId, productId, quantity});
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchCart = createAsyncThunk(
  "cart/getCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getCart(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    error: "",
    loading: false
  },
  extraReducers: {
    [addItemToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addItemToCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.cart = [...state.cart, action.payload]
    },
    [addItemToCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = 'action.payload.message';
    },
    [fetchCart.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.cart = [...state.cart, action.payload]
    },
    [fetchCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  }
});

export default cartSlice.reducer;