import { createSlice } from "@reduxjs/toolkit";

const mathSlice = createSlice({
    name: 'mathSlice',
    initialState: {
        first: 0,
        second: 0,
        answer: 0
    },
    reducers: {
        changeFirst: (state, action) => {
            state.first = action.payload
        },
        changeSecond: (state, action) => {
            state.second = action.payload
        },
        plus: (state, action) => {
            state.answer = Number(state.first) + Number(state.second)
        },
        minus: (state, action) => {
            state.answer = Number(state.first) - Number(state.second)
        },
        multiple: (state, action) => {
            state.answer = Number(state.first) * Number(state.second)
        },
        divide: (state, action) => {
            state.answer = Number(state.first) / Number(state.second)
        }
    }
})

export const { changeFirst, changeSecond, plus, minus, multiple, divide } = mathSlice.actions

export default mathSlice.reducer