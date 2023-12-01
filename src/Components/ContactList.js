import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Contact from './Contact';
import { toggleAddContactForm } from '../utils/contactSlice';

const ContactList = () => {

    const contacts = useSelector((store) => store.contact.contacts);

    const {isContactList} = useSelector((store) => store.contact);

    const dispatch = useDispatch();
 


  return isContactList &&  (
    <div className='w-[100%]'>
      
      <div className='flex justify-between mx-2 p-4 absolute left-[20%] top-[2%] w-[60%]'>
        <p className=' text-slate-700 font-bold text-2xl'>Contact List</p>
        <button 
          className='text-white bg-slate-600 rounded-lg p-2 mb-4'
          onClick={() => dispatch(toggleAddContactForm())}
          
        >Add Contact</button>
      </div>

      
      
      <div className='absolute left-[20%] top-[10%] w-[60%]'>
        {contacts.map((contact, index) => <Contact key={index} contact ={contact} index={index}/>)}
      </div>
    </div>
  )
}

export default ContactList