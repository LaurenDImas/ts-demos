import {type ChangeEvent, type FormEvent, useState} from 'react'


interface ContactFormState {
    name: string,
    email: string,
}

const ContactForm = () => {
    
    const [formData, setFormData] = useState<ContactFormState>({
        name: "",
        email: "",
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("Successfully submitted contact "+ formData.name)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            
            <button type="submit">Submit</button>
        </form>
    )
}
export default ContactForm
