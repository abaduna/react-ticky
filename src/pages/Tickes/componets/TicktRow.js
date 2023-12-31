//
import { Button } from "react-bootstrap";
const TicktRowComponet = ({id,descripcion,precio,cantidad, addTicktsQuantity, substractTicktsQuantity,restTicktsQuantity}) => {
  return (
<>
    <tr>
        <td>{descripcion}</td>
        <td>
            <Button className="btn m-3" onClick={()=>{restTicktsQuantity(id)}}  >-</Button>
             <span>{cantidad}</span>
            <Button className="btn m-3" onClick={()=>{addTicktsQuantity(id)}} >+</Button>
        </td>        
        <td>${precio}</td>


    </tr>

</>
  )
}
export default TicktRowComponet;

