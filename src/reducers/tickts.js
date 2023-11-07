
import {SET_TICKETS, ADD_QUANTITY } from "../acion/tickes"


export const initialState = {
    tickets:[],
    total:0,
    resume:{}

}

const getTotal = (tickets) => {
    return tickets.map((ticket) => {
        return +ticket.precio * +ticket.cantidad;
    }).reduce((prev, current) => prev + current, 0);
}


// no tiene que mutar datos y siempre tiene que retornar algo
export const ticktReducer =(state = initialState,action)=>{
    switch (action.type) {
        case SET_TICKETS:{
            return{
                tickets: action.payload.tickets,
                total:getTotal(state.tickets),
            }       
        }
        case ADD_QUANTITY: {
            const tickets = state.tickets.map((ticket)=>
            ticket.id === action.payload.id 
            ? {...ticket,cantidad: ticket.cantidad + 1}
            : ticket
            )
            // const index = tickets.findIndex((ticket)=> ticket.id === action.payload.id)
            // tickets[index].cantidad += 1
            return{
                   tickets,
                   total: getTotal(tickets)

                    
            }
        }
    
        default:{
            return state
        }
            
    }

}