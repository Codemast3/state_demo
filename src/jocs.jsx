
import "./jocs.css"
import { useState } from "react"
export default function Jocs() {
    const [isactive,onhold] = useState(false)
    const  handleStart =  () => {
        onhold(true)
    }

    return (
        <div 
        onClick={handleStart}
        className="jocs"
            style={{backgroundColor: isactive ? "red" : "black"}}
           >
        </div>
    )
}