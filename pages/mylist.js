import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'

function mylist() {
    const[list,setList]=useState()

    useEffect(()=>{
        setList(JSON.parse(localStorage.getItem('list')))
    },[list])

    // console.log(list);
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default mylist