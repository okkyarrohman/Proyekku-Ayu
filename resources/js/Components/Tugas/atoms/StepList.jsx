import { Icon } from "@iconify/react";

export default function StepList({ step }) {
    return (
        <li className="flex items-start gap-4">
            <Icon
                icon="simple-line-icons:check"
                width="1.7rem"
                className="text-green-500"
            />
            <p className="text-lg">{step}</p>
        </li>
    );
}
