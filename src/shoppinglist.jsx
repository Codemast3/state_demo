import { useState } from "react";
import { v4 as uuid } from "uuid";
import Shoppinglistform from "./shoopinglistform";
function Shoppinglist() {
    const [items, setItems] = useState([
        { id:uuid(),productname: "milk", quantity: 2 },
        { id:uuid(),productname: "bread", quantity: 1 },
    ]);
    const addItem = (item) => {
        

        setItems((curritems) => {
            return [...curritems, {...item, id: uuid() }];
    });
    }
    const handlesubmit = (productname, quantity) => {
        addItem({ id: items.length + 1, productname, quantity });
    }


    return (
        <form>
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.productname}: {item.quantity}
                    </li>
                ))}
            </ul>
            <Shoppinglistform addItem={addItem}/>
        </div>
        </form>
    );

}
export default Shoppinglist;