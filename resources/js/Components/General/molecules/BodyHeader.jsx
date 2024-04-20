import { Icon } from "@iconify/react";
import Title from "../atoms/Title";

export default function BodyHeader({ title }) {
    return (
        <div className="bg-primary-100 p-3 flex items-center gap-3">
            <Icon
                icon="fluent:task-list-24-filled"
                width="1.5rem"
                className="text-white"
            />
            <Title title={title} size="text-sm" />
        </div>
    );
}
