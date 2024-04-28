import Description from "@/Components/General/atoms/Description";
import Title from "@/Components/General/atoms/Title";
import { formatDate } from "@/utils/formatDate";

export default function DetailStep2({
    title,
    step,
    desc,
    startdate,
    deadline,
    children,
}) {
    return (
        <>
            <Title
                title={title}
                size="text-2xl"
                align="text-center"
                weight="font-semibold"
            />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12">
                <div>
                    <p className="text-white font-semibold text-xl">{step}</p>
                    <Description desc={desc} />
                </div>
                <div>
                    <div className="grid grid-cols-4 *:text-xl *:text-white">
                        <div className="col-span-1">
                            <p>Mulai</p>
                            <p>Tenggat</p>
                        </div>
                        <div className="col-span-3">
                            <p>: {formatDate(startdate)}</p>
                            <p>: {formatDate(deadline)}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
