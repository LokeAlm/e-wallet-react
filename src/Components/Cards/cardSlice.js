import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: "card",
    initialState: {
            cardHolder: "Harry Potter",
            cardNr: "1234 5678 9123 4567",
            vendor: "Gringotts Bank",
            expMonth: "02",
            expYear: "25",
            ccv: "123"
    },
    reducers: {
        consoleLog: (state) => {
            console.log(state.cardHolder);
        }
    }
});

const { actions, reducer } = cardSlice;

export const { consoleLog } = actions;

export default reducer;