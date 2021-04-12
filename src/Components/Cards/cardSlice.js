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
            },
            {
                cardHolder: "Harry Potter",
                cardNr: "1234 5678 9123 4567",
                vendor: "Gringotts Bank",
                expMonth: "02",
                expYear: "25",
                ccv: "123",
                isActive: false
                },
                {
                    cardHolder: "Harry Potter",
                    cardNr: "1234 5678 9123 4567",
                    vendor: "Gringotts Bank",
                    expMonth: "02",
                    expYear: "25",
                    ccv: "123",
                    isActive: false
                    },
                    {
                        cardHolder: "Harry Potter",
                        cardNr: "1234 5678 9123 4567",
                        vendor: "Gringotts Bank",
                        expMonth: "02",
                        expYear: "25",
                        ccv: "123",
                        isActive: false
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
        }
    }
});

const { actions, reducer } = cardSlice;

export const { submitForm } = actions;

export default reducer;

//När man vill använda sig utav ett värde i sin action, så är det bara att skicka med den när man dispatchar, så finns den tillgänglig i action.payload.se minut 17:30 