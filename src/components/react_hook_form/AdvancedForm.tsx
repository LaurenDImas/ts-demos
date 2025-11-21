import {type SubmitHandler, useForm} from "react-hook-form";
// import "./form.css";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    completeLocation: string;
};

const AdvancedForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<FormData>();
    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }
    
    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        {...register('firstName', {
                            required: "First Name is required"
                        })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        {...register('lastName', {
                            required: 'Last name is required'
                        })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        {...register('email', {
                            required: 'Email address is required',
                            pattern: {
                                value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="City Address"
                        {...register('city', {
                            required: 'City is required'
                        })}
                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        placeholder="State Address"
                        {...register('state', {
                            required: 'State is required'
                        })}
                    />
                    {errors.state && <p>{errors.state.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="zip">ZIP</label>
                    <input
                        type="text"
                        id="zip"
                        placeholder="ZIP"
                        {...register('zip', {
                            required: 'ZIP is required'
                        })}
                    />
                    {errors.zip && <p>{errors.zip.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Country"
                        {...register('country', {
                            required: 'Country is required'
                        })}
                    />
                    {errors.country && <p>{errors.country.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="completeLocation">Complete Location</label>
                    <input
                        type="text"
                        id="completeLocation"
                        placeholder="Complete Locatio"
                        {...register('completeLocation', {
                            required: 'Complete Location is required'
                        })}
                    />
                    {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
                </div>
                
                <button disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
            </form>
        </div>
    )
}
export default AdvancedForm
