import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
    return (
        <FormWrapper title="UserDetails">
            <label htmlFor="email">Email</label>
            <input autoFocus required type="text"></input>
            <label htmlFor="password">Password</label>
            <input required type="password"></input>
        </FormWrapper>
    )
}