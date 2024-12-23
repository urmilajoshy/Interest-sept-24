import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField,Stack,Button } from '@mui/material'


function App() {
  const [invalidPrinciple,setInvalidPrinciple]=useState(false)
  const [invalidRate,setInvalidRate]=useState(false)
  const [invalidYear,setInvalidYear]=useState(false)

  const [principle,setPrinciple]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  const [interest,setInterest]=useState(0)

  const validateInput =(input)=>{
    // console.log(typeof input);
    const {name,value} = input
    
    // console.log(name,typeof value);

    // console.log(!!value.match(/^\d+(\.d\d+)?$/));
    // console.log(!!value.match(/^[0-9]+(\.[0-9]+)?$/));
    if(name=='principle')
    {
      setPrinciple(value)
      if(!!value.match(/^\d+(\.d\d+)?$/)){
        setInvalidPrinciple(false)
      }
      else{
        setInvalidPrinciple(true)
      }
      
    }
    else if(name=='rate')
    {
      setRate(value)
      if(!!value.match(/^\d+(\.d\d+)?$/)){
        setInvalidRate(false)
      }
      else{
        setInvalidRate(true)
      }


    }else if(name=='year')
    {
      setYear(value)
      if(!!value.match(/^\d+(\.d\d+)?$/)){
        setInvalidYear(false)
      }
      else{
        setInvalidYear(true)
      }
    }
   

  }
const handleCalculate=(e)=>{
  e.preventDefault()
  if(principle &&rate&&year)
  {
      setInterest(principle*rate*year/100)
  }
  else{
    alert("please fill completely!!!")
  }
}
const handleReset =()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInvalidPrinciple(false)
  setInvalidRate(false)
  setInvalidYear(false)
}
  return (
    <>
      <div style={{width:'100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h1>Simple Interest Calculator</h1>
        <p>Calculate Your Simple Interest Easily!!!</p>
        <div className='bg-warning p-3 text-center text-light rounded'>
          <h1>₹{interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3'>
          <TextField value={principle ||"" } name='principle' onChange={(e)=>validateInput(e.target)} className="w-100"id="outlined-principle" label="Principle" variant="outlined" />
          </div>
          {/* invalid principle */}
         {
          invalidPrinciple&&  <div className='mb-3 text-danger fw-bolder'>
          Invalid principle amount!!
        </div>                         
         }
          <div className='mb-3'>
          <TextField value={rate || ""}name='rate' onChange={(e)=>validateInput(e.target)} className="w-100"id="outlined-rate" label="Rate" variant="outlined" />
          </div>
          {
          invalidRate&&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Rate
        </div>                         
         }
          <div className='mb-3'>
          <TextField value={year ||""} name='year' onChange={(e)=>validateInput(e.target)} className="w-100"id="outlined-year" label="Year" variant="outlined" />
          </div>
          {
          invalidRate&&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Year!!!
        </div>                         
         }
          <Stack direction="row" spacing={2}>
          <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate|| invalidYear} variant="contained"style={{width:'50%' ,height:'70px'}}className='bg-dark'>Calculate</Button>
          <Button onClick={handleReset} variant="outlined"style={{width:'50%' ,height:'70px'}}>Reset</Button>
</Stack>
        </form>
        </div>
        
        </div>
    </>
  )
}

export default App
