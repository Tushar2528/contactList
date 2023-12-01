import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, toggleAddContactForm } from '../utils/contactSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddContactForm = () => {

    const contacts = useSelector((store) => store.contact.contacts);

    const dispatch = useDispatch();

    const localName = useRef();
    const localEmail = useRef();
    const localPhone = useRef();

    

    const handleAdd = () => {
        const n = localName.current.value;
        const e= localEmail.current.value;
        const p = localPhone.current.value;

        const postData= async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users",
        {
            method : 'POST',
            body : JSON.stringify({
            name : n,
            email : e,
            phone : p
            })
        })

        

        const json = await data.json();
        console.log("from post", json.id); 
        
        dispatch(addContact({id : contacts.length+1,n, e, p}));
        dispatch(toggleAddContactForm());
        toast.success("Contact added !")
        
        }

        postData();
        

    }


    return (
        <div className='text-white bg-slate-500 w-[30%] p-10 ml-[30%] mt-20 rounded-lg shadow-2xl'>
          <h1 className='font-bold text-3xl my-4'>Add Contact</h1>
          <div>
            <form className='text-black' onSubmit={(e) => e.preventDefault()}>
              <p className='my-4'>Name</p>
              <input
                ref={localName}
                className='w-[70%] p-2 rounded-lg'
                type='text'
                
              ></input>
    
              <p className='my-4'>Email</p>
              <input
                ref={localEmail}
                className='w-[70%] p-2 rounded-lg'
                type='email'
               
              ></input>
    
              <p className='my-4'>Phone</p>
              <input
                ref={localPhone}
                className='w-[70%] p-2 rounded-lg'
                type='tel'
                
              ></input>
    
              <div className='my-8'>
                <button className='p-2 bg-black rounded-md text-white' type='submit' onClick={handleAdd} >
                  Add
                </button>
                <button className='mx-6 p-2 bg-red-600 rounded-md text-white'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default AddContactForm