import { useState } from "react";

export default function Bettersignup() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "" });

  const handleChange = (e) => {
    const changeField = e.target.name;
    const newValue = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [changeField]: newValue,
    }));
  };

  const handleSubmit = () => {
    console.log(formData.firstname, formData.lastname);
  };

  return (
    <form>
      <label htmlFor="product">product Name</label>
      <input
        type="text"
        placeholder="product  Name"
        value={formData.product}
        onChange={handleChange}
        name="productname"
        id="productname"
      />
    </form>
   
  );
}
