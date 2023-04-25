import { useState } from "react"
function FormInput(props) {
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState("")
    const [date,setDate]=useState("")


    const titleChangeHandler=(e)=>{
        setTitle(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        const date = new Date(e.target.value)
        setDate(date)
    }
    const formSubmitHandler=(e)=>{
        e.preventDefault()
        const inputData={title,amount,date}
        props.dataGetter(inputData)
    }

return (
    <div>
        <form onSubmit={formSubmitHandler}  >
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} name="title" />
            <label>Amount</label>
            <input type="text" onChange={amountChangeHandler} name="amount" />
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} name="date" />
            <button type="submit">Submit Data</button>
        </form>
    </div>

   )
}
export default FormInput;