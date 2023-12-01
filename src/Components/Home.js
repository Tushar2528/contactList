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
        // postData();
       
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await data.json();
        console.log("Get method",json);
        dispatch(populateContactList(json));
    }

    // const postData= async () => {
    //   const data = await fetch("https://jsonplaceholder.typicode.com/users",
    //   {
    //     method : 'POST',
    //     body : JSON.stringify({
    //       name : "ABC",
    //       email : "ABC@gmail.com",
    //       phone : 3456789
    //     })
    //   })

      

    //   const json = await data.json();
    //   console.log("from post", json); 
    // }

  return (
    <div>
        <ContactList/>
        {isEditContactForm && <EditForm/>}
        {isAddContactForm && <AddContactForm/>}
    </div>
  )
}

export default Home