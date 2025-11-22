import {useTheme} from "./Theme.tsx";

const Card = () => {
    // const context = useContext(ThemeContext);
    // const context = use(ThemeContext);
    const context = useTheme();
    if (!context) throw new Error("useTheme: useTheme must be used within ThemeProvider");
    const {theme, toggleTheme} = context;
    
    
    return (
        <div className={`w-[20rem] p-[2rem] ${
            theme === "light" ? "bg-white" : "bg-teal-900"
        }`}>
            <h1 className={`text-teal-300 ${
                theme === "light" ? "text-dark" : "text-white"
            }`}>
                Theme Card
            </h1>
            
            <p className={`${
                theme === "light" ? "text-dark" : "text-white"
            }`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
            <button className="bg-teal-300 p-2 rounded-full text-white mt-[2rem]"
            onClick={toggleTheme}>
                {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            </button>
        </div>
    )
}
export default Card
