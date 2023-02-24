import React from 'react'
import {db} from '../../util/firebase'
import { collection, getDocs } from "firebase/firestore";
const querySnapshot = await getDocs(collection(db, "tools"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
export default function Tools({tool}) {
  return (
        <>
          <div className="ml-3 mt-6 overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 w-60"  >
            <div className="p-6">
              <header className="mb-4">
        <a href={tool.link} target="_blank">

                <h3 className="text-xl font-medium text-slate-700 hover:text-slate-400">
                  {tool.title}
                </h3>
                </a>
                <p className="text-sm text-slate-400">{Date(tool.createtAt*1000)}</p>
              </header>
              <p>
              {tool.body}
              </p>
            </div>
          </div>
        </>
  )
}
