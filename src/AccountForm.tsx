import { FormWrapper } from "./FormWrapper";

type AccountData = {
    email: string,
    password: string
}


type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({email, password, updateFields}: AccountFormProps) {
    return (
        <FormWrapper title="UserDetails">
            <label htmlFor="email">Email</label>
            <input autoFocus 
                    required 
                    type="text"
                    value={email}
                    onChange={e=>updateFields({email:e.target.value})}></input>
            <label htmlFor="password">Password</label>
            <input required 
                    type="password"
                    value={password}
                    onChange={e=>updateFields({password:e.target.value})}></input>
        </FormWrapper>
    )
}