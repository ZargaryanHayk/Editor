import { useState } from "react"

export default function Move(){

    const [move, setMove] = useState({x:0, y:0})

    const mouseMove = (e) =>{
        setMove({
            x: e.clientX,
            y: e.clientY,

        })
    }


    console.log(move)
    return(
        <div>
            <div 
                            onMouseMove={mouseMove}                

            className="w-96 h-96  bg-slate-950 relative" >

                <div 
                
                className={`w-12 h-12  bg-red-800 absolute `}
                style={{ left: `${move.x}px`, top: `${move.y}px` }}>
                    
                </div>
            </div>
            
        </div>
    )


    
}