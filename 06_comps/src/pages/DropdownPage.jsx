import { useState } from "react"
import Dropdown from "../components/Dropdown"

function DropdownPage() {
    // "null" because if some other component needs the value for the very firt time, and eventually it should be null because nothing is selected till now
    const [selected, setSelected] = useState(null)

    const handleSelect = (selectedValue) => {
        setSelected(selectedValue)
    }

    const options = [
        {
            label: "Red",
            value: "red"
        },
        {
            label: "Green",
            value: "green"
        },
        {
            label: "Blue",
            value: "blue"
        }
    ]

    return <div>
        <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
}

export default DropdownPage
