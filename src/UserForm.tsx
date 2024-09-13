import { FormWrapper } from "./FormWrapper";

type UserData = {
    firstName: string,
    lastName: string,
    age:string,
}


type UserFormProp = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({firstName, lastName, age, updateFields}:UserFormProp) {
    return (
        <FormWrapper title="UserDetails">
        <label htmlFor="fname">FirstName</label>
        <input autoFocus required 
            type="text" 
            value={firstName}
            onChange={e=>updateFields({firstName: e.target.value})}></input>
        <label htmlFor="lname">LastName</label>
        <input required 
            type="text" 
            value={lastName}
            onChange={e=>updateFields({lastName: e.target.value})}></input>
        <label htmlFor="age">Age</label>
        <input required min={1} 
            type="number" 
            value={age}
            onChange={e=>updateFields({age: e.target.value})}></input>
        </FormWrapper>
    )
}