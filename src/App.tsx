import { FormEvent, useState } from 'react'
import { useMultiStepForm } from './useMultistepForm'
import './App.css'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { AccountForm } from './AccountForm'

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const updateFields =(fields: Partial<FormData>) => {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const [data, setData] = useState(INITIAL_DATA)
  const [count, setCount] = useState(0)
  const {steps, currentStepIndex, step, isFirstStep, back, next, isLastStep} = useMultiStepForm([
    <UserForm {...data} updateFields = {updateFields} />,
    <AddressForm {...data}/>,
    <AccountForm {...data}/>
  ])
  const handleSubmit = () => {

  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    // Check if the form is valid
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    next();
  }
  return (
    <div className="card">
      <form onSubmit={onSubmit} className='myForm'>
        <div className="step-count">{currentStepIndex+1}/{steps.length}</div>
        <div className="step">{step}</div>
        {
          !isFirstStep && <button type="submit" onClick={onSubmit}>Previous</button>
        }
        {
          !isLastStep && <button  type="submit" onClick={onSubmit}>Next</button>
        }
       {
        isLastStep && (
          <div className="submit">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )
       }
      </form>
    </div>
  )
}

export default App
