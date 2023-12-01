import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name : "contact",
    initialState : {
        contacts : [],
        isContactList : true,
        isEditContactForm : false,
        isAddContactForm : false,

    },
    reducers : {
        populateContactList : (state,action) => {
            state.contacts = action.payload;
        },
        deleteContact : (state, action) => {
            const index = state.contacts.findIndex((contact) => contact.id === action.payload);

            if(index !== -1){
                state.contacts.splice(index,1);
            }
        },
        toggle : (state, action) => {
            state.isContactList = !state.isContactList;
            state.isEditContactForm = !state.isEditContactForm;
        },
        toggleAddContactForm : (state, action) => {
            state.isAddContactForm = !state.isAddContactForm;
            state.isContactList = !state.isContactList;
        },
        updateContact : (state, action) => {


            const {id, name, email, phone} = action.payload;

            

            const index = state.contacts.findIndex((contact) => contact.id === id);

            

            if(index !== -1) {
                state.contacts[index].name = name;
                state.contacts[index].email= email;
                state.contacts[index].phone = phone;
            }
        },
        addContact : (state,action) => {
            const {id, n, e, p} = action.payload;
            // state.contacts.push({id :id, name : name, email : email, phone : phone})
            state.contacts = [...state.contacts, {id :id, name : n, email : e, phone : p}]
        }

    }
});

export default contactSlice.reducer;

export const {populateContactList, deleteContact, toggle, updateContact, toggleAddContactForm, addContact} = contactSlice.actions;