import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function AddTransaction() {
  const { user } = useAuth();
  console.log(`user id ${user?.id}`);

  const [data, setData] = useState({
    title: "",
    amount: "",
    type: "",
    date: "",
    description: "",
  });
  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function onHandleSubmit(e) {
    e.preventDefault();
    console.log(data);
    try {
      const res = await api.post("/add", data);
      // console.log("Data Added Successfully");

      if (res.status === 201 || res.data.success) {
        console.log("Data Added Successfully");
      }
    } catch {
      console.log("Data is not added");
    }
  }

  return (
    <>
      <div id="expenseForm">
        <form onSubmit={onHandleSubmit}>
          Enter the amount:
          <br />
          <input
            type="number"
            name="amount"
            id=""
            placeholder="eg : 20/30"
            onChange={handleOnChange}
          />
          Enter the Title:
          <br />
          <input
            type="text"
            name="title"
            id=""
            placeholder="eg : 20/30"
            onChange={handleOnChange}
          />
          Enter the Date:
          <br />
          <input
            type="date"
            name="date"
            id=""
            placeholder="eg : 20/30"
            onChange={handleOnChange}
          />
          Enter the Description:
          <br />
          <input
            type="text"
            name="description"
            id=""
            placeholder="eg : 20/30"
            onChange={handleOnChange}
          />
          <select name="type" id="" onChange={handleOnChange}>
            <option value="0">Select Type</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="dailyexpense">Daily Expense</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
