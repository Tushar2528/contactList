import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import editContactSlice from "./editContactSlice";

const appStore = configureStore({
    reducer : {
        contact : contactSlice,
        editContact : editContactSlice
    }
});

export default appStore;