import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type FetchToysArgs = {
  category: number;
  forSorting: string;
  search: string;
};

export const fetchToys = createAsyncThunk(
  "toys/fetchToys",
  async (params: FetchToysArgs) => {
    const { category, forSorting, search } = params;
    const res = await axios.get(
      `https://63d7a4e45dbd72324429e3e1.mockapi.io/toys?${
        category !== 0 ? "category=" + category : ""
      }&${forSorting !== "" ? "sortBy=" + forSorting : ""}&order=${
        forSorting === "rating" ? "desc" : "asc"
      }&${"search=" + search}`
    );
    return res.data;
  }
);

export enum Status {
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
}

export type ItemsType = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  category: number;
  rating: number;
};

interface ToysSliceState {
  items: ItemsType[];
  status: Status;
}

const initialState: ToysSliceState = {
  items: [],
  status: Status.PENDING,
};

const toysSlice = createSlice({
  name: "toys",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToys.pending, (state) => {
      state.status = Status.PENDING;
      state.items = [];
    });
    builder.addCase(fetchToys.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchToys.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default toysSlice.reducer;
