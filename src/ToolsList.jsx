import React, { useState, FormEvent, useEffect } from 'react';
import {db} from '../util/firebase'
import Tools from './components/Tools';
import {
    collection,
    query,
    onSnapshot
  } from "firebase/firestore";
export default function ToolsList() {

const [tools, setTools] = useState();

    useEffect(() => {
      const q = query(collection(db, "tools"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let toolsArray = [];
        querySnapshot.forEach((doc) => {
          toolsArray.push({ ...doc.data(), id: doc.id });
        });
        setTools(toolsArray);
      });
      return () => unsub();
    }, []);

return (
  <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
         {tools?.map((tool) => (
          <Tools
            key={tool.id}
            tool={tool}
          />
        ))}
        </div>
);
}