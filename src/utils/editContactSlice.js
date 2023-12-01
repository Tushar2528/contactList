import { createSlice } from "@reduxjs/toolkit";

const editContactSlice = createSlice({
    name : "edit contact",
    initialState : {
        name : '',
        email : '',
        phone : 0,
        id: 0
    },
    reducers : {
        setEditForm : (state, action) => {
            const {id,name, email, phone} = action.payload
            state.name = name;
            state.email = email;
            state.phone = phone;
            state.id = id;
        },
        setName : (state, action) => {
            state.name = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload;

        },
        setPhone : (state, action) => {
            state.phone = action.payload
        }
    }
})

export default editContactSlice.reducer;

export const {setEditForm, setName, setEmail, setPhone} = editContactSlice.actions;