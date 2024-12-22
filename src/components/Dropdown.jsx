export default function Dropdown({ onChange }) {
    return (
        <select onChange={(event) => onChange(event.target.value)}>
            <option value="easy">Easy mode</option>
            <option value="normal">Normal mode</option>
            <option value="god">GOD mode</option>
        </select>
    );
}
