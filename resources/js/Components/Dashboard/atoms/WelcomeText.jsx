import { formatFullDate } from "@/utils/formatFullDate";

export default function WelcomeText({ user }) {
    const currentDate = new Date();

    return (
        <div className="flex lg:flex-row flex-col justify-between mb-6 lg:gap-0 gap-2">
            <p>Selamat Datang {user} di Learning Management System ProyekKu!</p>
            <p className="text-primary-100">{formatFullDate(currentDate)}</p>
        </div>
    );
}
