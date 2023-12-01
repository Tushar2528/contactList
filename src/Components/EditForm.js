import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setName, setPhone } from '../utils/editContactSlice';
import { toggle, updateContact } from '../utils/contactSlice';
import { toast } from 'react-toastify';

const EditForm = () => {
  const dispatch = useDispatch();

  const {id, name, email, phone } = useSelector((store) => store.editContact);

  

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };

  const handleUpdate = (id, name, email, phone) => {

    
    dispatch(updateContact({id, name, email, phone}));
    dispatch(toggle());
    toast.success("Contact updated !");
  }

  return (
    <div className='text-white bg-slate-500 w-[30%] p-10 ml-[30%] mt-20 rounded-lg shadow-2xl'>
      <h1 className='font-bold text-3xl my-4'>Edit Contact</h1>
      <div>
        <form className='text-black' onSubmit={(e) => e.preventDefault()}>
          <p className='my-4'>Name</p>
          <input
            className='w-[70%] p-2 rounded-lg'
            type='text'
            value={name}
            onChange={handleNameChange}
          ></input>

          <p className='my-4'>Email</p>
          <input
            className='w-[70%] p-2 rounded-lg'
            type='email'
            value={email}
            onChange={handleEmailChange}
          ></input>

          <p className='my-4'>Phone</p>
          <input
            className='w-[70%] p-2 rounded-lg'
            type='tel'
            value={phone}
            onChange={handlePhoneChange}
          ></input>

          <div className='my-8'>
            <button className='p-2 bg-black rounded-md text-white' type='submit' onClick={() =>handleUpdate(id,name, email,phone)}>
              Update
            </button>
            <button className='mx-6 p-2 bg-red-600 rounded-md text-white'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
