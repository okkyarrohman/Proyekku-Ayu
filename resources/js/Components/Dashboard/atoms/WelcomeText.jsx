import { formatFullDate } from "@/utils/formatFullDate";

export default function WelcomeText({ user }) {
    const currentDate = new Date();

    return (
        <div className="flex justify-between mb-6">
            <p>Selamat Datang {user} di Learning Management System ProyekKu!</p>
            <p className="text-primary-100">{formatFullDate(currentDate)}</p>
        </div>
    );
}
