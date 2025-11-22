import FormButton from "./FormButton.tsx";

const UseFormStatus = () => {
    const myAction = async (formData: any) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const newPost = {
            name: formData.get('name'),
            email: formData.get('email'),
        }

        console.log(newPost)
    }
    return (
        <form action={myAction}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" className="border-2" required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" className="border-2" required />
            </div>
            <FormButton />
        </form>
)
}

export default UseFormStatus
