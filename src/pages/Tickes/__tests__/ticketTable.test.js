import {fireEvent, getByText, render} from "@testing-library/react"
import TicketsTableComponent from "../componets/TicketsTable"
import { tickets } from "../../../mocks/ticket"



describe("ticketTable",()=>{
    test("TicketTable should render propely for initialState",()=>{
        const {getByText} = render(<TicketsTableComponent tickets={tickets}/>)
        getByText(/Ticket/i)
        getByText(/Tickets/i)
        getByText(/Cantidad/i)
        getByText(/Precio/i)
        getByText(/Descripcion del tickets/i)
        getByText(/0/i)
        getByText(/$700/i)
        getByText(/$0/i)

    })
    test("Should incremet ticket quantity and modify total",()=>{
        const { getByRole,getByText} = render(<TicketsTableComponent tickets={tickets}/>)
        fireEvent.click(getByRole("button",{name: "+"}))
        getByText(/$700/i)
        etByText(/1/i)


    })
})
