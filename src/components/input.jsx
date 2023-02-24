import React, { useState } from "react"

export default function Inputs() {
  const [state, setState] = useState({
    "id-b02": "",
  })

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  return (
    <>
     
      {/*    <!-- End Plain basic input  --> */}
    </>
  )
}
