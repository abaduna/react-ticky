
import {Table} from "react-bootstrap"
import TicktRowComponet from "./TicktRow"
import { useEffect, useReducer } from "react"
import { ticktReducer,initialState } from "../../../reducers/tickts"
import { SET_TICKETS ,ADD_QUANTITY,REST_QUANTITY} from "../../../acion/tickes"
//
const TicketsTableComponent =({tickets})=> {
    const [state,dispach] = useReducer(ticktReducer,initialState)


    const addTicktsQuantity=(id)=>{
        console.log(`Se ejecuta`);
        dispach({type:ADD_QUANTITY, payload:{id}})
    }
    const restTicktsQuantity=(id)=>{
        console.log(`click en ticketsTable`);

        dispach({type:REST_QUANTITY, payload:{id}})
    }
    useEffect(()=>{
        dispach({type: SET_TICKETS, payload:{tickets}})        
    },[tickets])

  return (
  <>
    <Table>
        <thead>
            <tr>
                <th>Tickets</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Precio</th>
            </tr>
        </thead>
        <tbody>
            { state.tickets?.length > 0 &&
          state.tickets.map((tickes)=>(
                <TicktRowComponet key={tickes.id}  {...tickes} addTicktsQuantity={addTicktsQuantity} restTicktsQuantity={restTicktsQuantity}></TicktRowComponet>
            ))}



        </tbody>

    </Table>  
    ${state.total}
  </>


  )
}

export default TicketsTableComponent;

