import { FormWrapper } from "./FormWrapper";

type AddressData = {
    address: string,
    postcode: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}
export function AddressForm({address, postcode, updateFields}: AddressFormProps) {
    return (
        <FormWrapper title="Address">
        <label htmlFor="fname">Address</label>
        <input autoFocus required 
            type="text" 
            value={address}
            onChange={e=>updateFields({address :e.target.value})}></input>
        <label htmlFor="lname">PostCode</label>
        <input required 
            type="text" 
            value={postcode}
            onChange={e=>updateFields({postcode :e.target.value})}
            ></input>
        </FormWrapper>
    )
}