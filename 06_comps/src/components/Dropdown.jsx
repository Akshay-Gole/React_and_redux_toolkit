import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from 'react-icons/go'
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {

            if (!divEl.current) {
                return; // because many times it can be null so if it is null return ealry from the div
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("click", handler, true)

        return () => {
            document.removeEventListener("click", handler)
        }
    }, [])

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    const handleOptionClick = (selectedValue) => {
        setIsOpen(false)
        onChange(selectedValue);
    }

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => { handleOptionClick(option.label) }}>
                {option.label}
            </div>
        )
    })



    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value ? value : "Select..."}
                {<GoChevronDown className="text-lg" />}
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown