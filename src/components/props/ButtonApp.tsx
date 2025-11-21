import Button from "./Button.tsx";

const ButtonApp = () => {
    return (
        <div>
            <Button
                label="click"
                onClick={() => console.log('clicked')}
                disabled={false}
            />
        </div>
    )
}
export default ButtonApp
