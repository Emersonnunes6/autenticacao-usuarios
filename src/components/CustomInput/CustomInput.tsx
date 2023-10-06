import { Input } from "../components"

interface InputParameters {
    label?: string;
    placeholder?: string;
    id?: string;
    register?: any;
    className?: string;
    type?: string;
    onFocus?: any;
    onChange?: any;
    value?: string;
}

export default function CustomInput({ label, placeholder, id, register, type, onFocus, value, onChange }: InputParameters) {
    return (
        <>
            <div className="input-label" id={id}>
                <label className="label-text">{label}</label>
                <Input
                    onFocus={e => onFocus}
                    value={value}
                    onChange={onChange}
                    type={type}
                    {...register}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}