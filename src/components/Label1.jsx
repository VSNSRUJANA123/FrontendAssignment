import { useState } from "react";
import "../index.css";
import Select from "react-dropdown-select";

const Label1 = () => {
  const options = [
    {
      id: 1,
      name: "Option1",
    },
    {
      id: 2,
      name: "Option2",
    },
    {
      id: 3,
      name: "Option3",
    },
    {
      id: 4,
      name: "Option4",
    },
    {
      id: 5,
      name: "Option5",
    },
  ];

  const [select, setValues] = useState([]);
  // console.log("label1", select);
  return (
    <div className="bg-white p-3 w-1/2 shadow-black rounded max-md:w-full">
      <h1 className="text-3xl font-bold">Label1</h1>

      <Select
        placeholder="select options..."
        className="mt-3 p-3 text-xl"
        options={options}
        labelField="name"
        valueField="id"
        clearable="true"
        closeOnSelect="true"
        onChange={(values) => setValues(values)}
      />
      <p className="pt-3 text-xl">
        Selected Option :
        <span className="text-green-600"> {select[0]?.name}</span>
      </p>
    </div>
  );
};

export default Label1;
