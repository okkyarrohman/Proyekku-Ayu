import { useContext } from "react";
import { DropdownContext } from "./DropdownInput";

export default function DropdownItem({ option, onClick }) {
    const { isOpen, setIsOpen, handleOpenDropdown } =
        useContext(DropdownContext);

    const handleOptionOnClick = () => {
        onClick();
        setIsOpen(!isOpen);
    };

    return (
        <li
            onClick={handleOptionOnClick}
            className="bg-white px-4 w-full min-h-10 border flex items-center cursor-pointer"
        >
            {option}
        </li>
    );
}
