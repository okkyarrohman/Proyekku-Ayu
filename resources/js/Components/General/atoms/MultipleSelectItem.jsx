import { useContext } from "react";
import { MultipleContext } from "./MultipleSelectInput";

export default function MultipleSelectItem({ option, value, isSelected }) {
    const { isOpen, setIsOpen, handleSelectItem } = useContext(MultipleContext);

    const handleOptionOnClick = (e) => {
        handleSelectItem(value); // Pass the value of the item
        e.stopPropagation(); // Prevent event from bubbling up to close the dropdown
    };

    const itemClass = isSelected
        ? "bg-blue-100 px-4 w-full min-h-10 border flex items-center cursor-pointer"
        : "bg-white px-4 w-full min-h-10 border flex items-center cursor-pointer";

    return (
        <li onClick={handleOptionOnClick} className={itemClass}>
            {option}
        </li>
    );
}
