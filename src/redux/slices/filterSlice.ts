import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type sortObjType = {
    title: string,
    sort: string
}

interface FilterSliceState {
    category: number,
    sortObj: sortObjType,
    search: string
}

const initialState: FilterSliceState = {
    category: 0,
    sortObj: {
        title: "Rating",
        sort: "rating"
    },
    search: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload
        },

        setSort: (state, action: PayloadAction<sortObjType>) => {
            state.sortObj = action.payload
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        }
    }
})

export const { setCategory, setSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer