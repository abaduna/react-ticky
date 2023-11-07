
import {Table} from "react-bootstrap"
import TicktRow from "./TicktRow"


function TicketsTable({tickets}) {
  return (
    <Table>
        <thead>
            <tr>
                <th>Tickets</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Precio</th>
            </tr>
        </thead>
        <tbody>
            {tickets.map((ticket)=>(
                <TicktRow key={ticket.id} ticket={ticket}></TicktRow>
            ))}
            <tr>
                <td>Tickets prueba</td>
                <td> + 1 - </td>
                <td>700</td>
            </tr>


        </tbody>

    </Table>

  )
}

export default TicketsTable