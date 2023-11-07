import { Suspense, lazy } from "react"
// import TicketsTable from "./componets/TicketsTable"
import TicketsTable from "./componets/TicketsTable"                 

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
        <TicketsTable tickets={tickets}></TicketsTable>


    </>

  )
}

export default Tickes


{/* /       <Suspense> */}
            {/* <button onClick={Modal}></button>
        </Suspense> */}