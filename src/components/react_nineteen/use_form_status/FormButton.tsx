import {useFormStatus} from "react-dom";

const FormButton = () => {
    const {action, data, method, pending} = useFormStatus();
    console.log(action);
    console.log(data?.get("name"));
    console.log(method);
    console.log(pending);
    return (
        <div>
            <button type="submit" disabled={pending} className="border-2">
                {pending ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    )
}
export default FormButton
