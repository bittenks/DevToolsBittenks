import {db} from '../util/firebase';
import { collection, getDocs } from "firebase/firestore";
import React, { useState, FormEvent, useEffect } from 'react';
import Inputs from './components/input';

export default function NewTools() {
    const [title, setTitle] = React.useState("");
    const [state, setState] = useState({
        "id-b02": "",
      })
    
      const handleChange = evt => {
        const value = evt.target.value
        setState({
          ...state,
          [evt.target.name]: value,
        })
        setTitle(evt.target.value)
      }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title !== "") {
        await addDoc(collection(db, "todos"), {
          title,
          completed: false,
        });
        setTitle("");
      }
    };
    return (
      <form onSubmit={handleSubmit}>
       <div className="mb-10 h-24">
        <div className="relative my-6">
          <input
            id="id-b02"
            type="text"
            name="id-b02"
            placeholder="your name"
            value={state["id-b02"]}
            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={handleChange}
          />
          <label
            htmlFor="id-b02"
            className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            Tool Title
          </label>
        </div>
      </div>
      <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Elevated base</span>
      </button>
      </form>
    );
  }
