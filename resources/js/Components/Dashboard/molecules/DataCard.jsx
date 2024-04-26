import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import { Icon } from "@iconify/react";

export default function DataCard({ icon, item, itemLength, link }) {
    return (
        <div className="rounded-xl bg-white p-16 flex justify-center items-center gap-10">
            <Icon icon={icon} width="5rem" className="text-primary-100" />
            <div className="space-y-6 w-3/5">
                <PrimaryLink text={`Add ${item}`} href={link} full />
                <p className="text-primary-100 text-xl text-center">
                    Total {item} : {itemLength}
                </p>
            </div>
        </div>
    );
}
