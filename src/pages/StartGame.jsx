import { Link } from "react-router-dom";
import TextInputForm from "../components/button/TextInputForm/TextInputForm";

function StartGame() {

    return (
        <div>
            <h1>Start Game</h1>
            <TextInputForm/>
            <Link to='/play' className="text-blue-600">Play Game Link</Link>
        </div>
    )
}
export default StartGame;

// only single individual parent element will be return'