import {db} from '../util/firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";
import React, { useState, FormEvent, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function NewTools() {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [body, setBody] = useState("");
    const MySwal = withReactContent(Swal)
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title !== "") {
        await addDoc(collection(db, "tools"), {
        title,
        body,
        link,
        createdAt: Date.now()
        });
        setTitle("");
        MySwal.fire({
            toast: true,
            position: 'top-right',
            iconColor: 'black',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            icon: 'success',
            title: 'Success'
          })
      }
    };
    return (
        <>
      <form className="m-5 flex">
            <div className="ml-5" >
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Tool title' onChange={(e)=> setTitle(e.target.value)}></input>
        </div>
        <div className="ml-5" >
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Tool Body' onChange={(e)=> setBody(e.target.value)}></input>
        </div>
        <div className="ml-5" >
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Tool Link' onChange={(e)=> setLink(e.target.value)}></input>
        </div>
<button className="mt-7 ml-5 inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" onClick={handleSubmit}>
  <span >Add</span>
</button>
      </form>
    
      </>
    );
  }
