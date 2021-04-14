import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: "card",
    initialState: {
        allCards: [
            {
            cardHolder: "Harry Potter",
            cardNr: "1234 5678 9123 4567",
            vendor: "Gringotts Bank",
            expMonth: "02",
            expYear: "25",
            ccv: "123",
            isActive: true
            }
        ]
    },
    reducers: {
        submitForm: (state, action) => { // makes new array and adds formData to state
            if(state.allCards.length < 4){
                let newCards = state.allCards.concat(action.payload);
                return {...state, allCards: newCards}
            } else {
                alert("You can have maximum 4 cards saved"); 
            }
        },
        toggleActive: (state, action) => {
            state.allCards.map((card) => {
                if(card.isActive === true) {
                    card.isActive = false;
                }
                if(card.cardNr === action.payload){
                    card.isActive = true;
                }
                return null;
            })
        },
        deleteCard: (state, action) => {
            state.allCards.map((card, i) => {
                if(card.cardNr === action.payload){
                    state.allCards.splice(i, 1)
                }
                return null;
            })
        }
    }
})
const { actions, reducer } = cardSlice;
export const { submitForm , toggleActive, deleteCard } = actions;

export default reducer;

