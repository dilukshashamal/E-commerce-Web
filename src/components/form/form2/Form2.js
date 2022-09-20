import React, { useRef, useState } from 'react'
import FormInput from './FormInput'
import './form2.scss'
import { Label } from '@mui/icons-material';

const Form2 = () => {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    string1:"",
    string2:"",
  });
  // const usernameRef = useRef() --> use ref for get value in react form

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"User Name",
      label:"User Name"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"string1",
      type:"text",
      placeholder:"Do You Smoke",
      label:"Do You Smoke"
    },
    {
      id:5,
      name:"string2",
      type:"text",
      placeholder:"Occupation Class",
      label:"Occupation Class"
    }
    
  ]

  
  console.log("re-rendered")

  //make handlesubmit for work submit button
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(usernameRef)

    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries())) --> create form for get input value
  }

  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value});
  }

  console.log(values);

  return (
    <div className='demoform'>
      <form onSubmit={handleSubmit}>
        <h1>User Information</h1>
        {inputs.map((input)=>(
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
          />
        ))}
        
        
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form2


