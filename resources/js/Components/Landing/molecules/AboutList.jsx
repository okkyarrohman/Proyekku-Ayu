import Description from "@/Components/General/atoms/Description";
import { Icon } from "@iconify/react";

export default function AboutList({ desc }) {
    return (
        <li className="flex items-start gap-4">
            <div className="w-fit">
                <Icon
                    icon="simple-line-icons:check"
                    width="1.7rem"
                    className="text-green-500"
                />
            </div>
            <Description desc={desc} size="text-lg" />
        </li>
    );
}
