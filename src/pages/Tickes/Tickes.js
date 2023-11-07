import { Suspense, lazy } from "react"


import TicketsTableComponent from "./componets/TicketsTable"
               

// const Modal = lazy(()=>import("modal"))


const tickets = [
    {
        id:1,
        descripcion:"Descripcion del tickets",
        precio:700,
        cantidad:0
    },{
        id:2,
        descripcion:"Descripcion del tickets",
        precio:800,
        cantidad:0
    }
]

function Tickes() {
  return (
    <>
        <h2>Ticket</h2>
        <TicketsTableComponent tickets={tickets}></TicketsTableComponent>



    </>

  )
}
//
export default Tickes


{/* /       <Suspense> */}
            {/* <button onClick={Modal}></button>
        </Suspense> */}


