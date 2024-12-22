import Dropdown from "./Dropdown.jsx";

export default function Header({ onChange, score, bestScore }) {
    return (
        <>
            <Dropdown onChange={onChange} />
            <div>
                Score = {score}, Best score = {bestScore}
            </div>
        </>
    );
}
