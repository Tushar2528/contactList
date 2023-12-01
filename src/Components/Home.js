import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { populateContactList } from '../utils/contactSlice';
import ContactList from './ContactList';
import EditForm from './EditForm';
import AddContactForm from './AddContactForm';


const Home = () => {

    const dispatch = useDispatch();

    const {isEditContactForm, isAddContactForm} = useSelector((store) => store.contact);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[]);

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await data.json();
       
        dispatch(populateContactList(json));
    }



  return (
    <div>
        <ContactList/>
        {isEditContactForm && <EditForm/>}
        {isAddContactForm && <AddContactForm/>}
    </div>
  )
}

export default Home