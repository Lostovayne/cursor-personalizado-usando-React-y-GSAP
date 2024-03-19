"use client"
import Cursor from "./Cursor"
import { useState } from "react"

const Scene1 = () => {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex justify-center items-center h-full" > 
      <h1 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-20 max-w-[80vw] font-extrabold text-[4.5vw] text-center text-pretty text-white" >
        The quick brown fox jumps over the lazy dog
      </h1>
      <Cursor isHovered={isHovered} />
    </div>
  )
}
export default Scene1