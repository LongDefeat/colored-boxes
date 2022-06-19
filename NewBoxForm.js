import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import boxForm from "./boxForm.css";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput} className="boxForm">
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            id="height"
            type="text"
            name="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            id="width"
            type="text"
            name="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
