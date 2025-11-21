const FormAction = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-gray-300 rounded"
            />
            
            <br />
            
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-gray-300 rounded"
            />
            
            <br />
            
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                className="border-2 border-gray-300 rounded"
            />
            
            <br />
            <button
                type="submit"
                className="bg-black text-white px-4 py-2 mt-3"
            >Submit</button>
        </form>
    )
}
export default FormAction
