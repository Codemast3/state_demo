import { useState } from "react";
function Shoppinglistform({addItem}) {
    const [formData, setFormData] = useState({ productname: "", quantity: "" });
    const [productIsvaild, setProductIsvaild] = useState(false);
    const validate = () => {
      if (formData.productname === "") {
        setProductIsvaild(false);
        return false;
      }
      setProductIsvaild(true);
      return true;
    }
    
    const handleChange = (evt) => {
      if(evt.target.name === "productname"){
        validate(evt.target.value);
      }


        setFormData((currData) => {
          return {
            ...currData, 
            [evt.target.name]: evt.target.value,
          };
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if(productIsvaild){
          addItem(formData);
          setFormData({ product: "", quantity: 0 });
        }
       
      };
    
    return (
        <form>
        <label htmlFor="product">product Name</label>
        <input
            type="text"
            placeholder="product  Name"
            value={formData.productname}
            onChange={handleChange}
            name="productname"
            id="productname"
        />
        {!productIsvaild && <p style={{color:"red"}}>Product cannot be empty</p>}
        <label htmlFor="quantity">quantity</label>
        <input
            type="text"
            placeholder="quantity"
            value={formData.quantity}
            onChange={handleChange}
            name="quantity"
            id="quantity"
        />
        <button disabled={!productIsvaild} type="button" onClick={handleSubmit}>
            Submit
        </button>
        </form>
    );
    }
    export default Shoppinglistform;