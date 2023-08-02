import React, { createContext } from 'react'
import Mild from './Mild'
 

export default function Parent() {
    const UserContext = createContext()
  return (
    <UserContext.Provider value={"paras"}>
    <div>
      <h1>I am a parent funct.</h1>
      <Mild data={"paras"}/>
    </div>
    </UserContext.Provider>
  )
}
