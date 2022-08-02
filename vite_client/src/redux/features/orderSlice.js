import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const cartCheckout = createAsyncThunk(
  "order/checkout",
  async (id, address) => {
    try {
      console.log(address);
      const response = await api.checkout(id, address);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "cart/getCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getOrders(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [cartCheckout.pending]: (state, action) => {
      state.loading = true;
    },
    [cartCheckout.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = [...state.orders, action.payload];
    },
    [cartCheckout.rejected]: (state, action) => {
      state.loading = false;
      state.error = "action.payload.message";
    },
    [fetchOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = [...state.orders, action.payload];
    },
    [fetchOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default orderSlice.reducer;
