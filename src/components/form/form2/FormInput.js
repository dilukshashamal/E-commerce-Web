import React from 'react'
import './formInput.scss'

const FormInput = (props) => {

  const{label, onChange, id, ...inputProps} = props;


  return (
    <div className='demoformfield'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange}/>

    </div>
  )
}

export default FormInput
