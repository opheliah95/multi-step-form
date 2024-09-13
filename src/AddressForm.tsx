import { FormWrapper } from "./FormWrapper";

type AddressData = {
    address: string,
    postcode: string
}
export function AddressForm({address, postcode}: AddressData) {
    return (
        <FormWrapper title="Address">
        <label htmlFor="fname">Address</label>
        <input autoFocus required type="text" value={address}></input>
        <label htmlFor="lname">PostCode</label>
        <input required type="text" value={postcode}></input>
        </FormWrapper>
    )
}