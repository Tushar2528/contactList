import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact, toggle } from '../utils/contactSlice';
import { setEditForm } from '../utils/editContactSlice';
import { toast } from 'react-toastify';

const Contact = ({contact,index}) => {


  const dispatch = useDispatch();

  const editContact = (id,name, email, phone) => {
    dispatch(toggle()); 
    dispatch(setEditForm({index,id,name,email,phone}));
    
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    toast.error("Contact Deleted !")
  }
  return (
    <div className='flex m-2 justify-between bg-gray-500 p-4 text-white text-md rounded-lg hover:bg-gray-400 '>
        <h2 className='mr-[5%]'>{contact.name}</h2>
        <h2 className='mr-[5%]'>{contact.email}</h2>
        <h2>{contact.phone}</h2>
        <div>
          <button 
            className='bg-black px-4 py-2 mx-4 rounded-lg'
            onClick={() => editContact(contact.id,contact.name, contact.email, contact.phone)}
          >Edit
          </button>
          <button 
            className='bg-red-700 px-4 py-2 mx-4 rounded-lg'
            onClick={()=>handleDelete(contact.id)}  
          >Delete
            </button>
        </div>
    </div>
  )
}

export default Contact