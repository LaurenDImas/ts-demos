import {useState, useTransition} from "react";
import Home from "./Home.tsx";
import Posts from "./Posts.tsx";
import Contact from "./Contact.tsx";

const TransitionHookApp = () => {
    const [activeTab, setActiveTab] = useState<string>("home");
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (tab: string) => {
        startTransition(() => {
            setActiveTab(tab);
        })
    }

    const renderContent = () => {
        switch (activeTab) {
            case  "home":
                return <Home />;
            case  "posts":
                return <Posts />;
            case  "contact":
                return <Contact />
            default:
                return <Home />;
        }
    }
    return (
        <div>
            <div className="tabs">
                <button className="border-2 p-2" onClick={() => handleTabChange("home")}>Home</button>
                <button className="border-2 p-2" onClick={() => handleTabChange("posts")}>Posts</button>
                <button className="border-2 p-2" onClick={() => handleTabChange("contact")}>Contact</button>
            </div>

            {isPending && <p>Loading...</p>}

            <div className="content">{renderContent()}</div>
        </div>
    )
}
export default TransitionHookApp
