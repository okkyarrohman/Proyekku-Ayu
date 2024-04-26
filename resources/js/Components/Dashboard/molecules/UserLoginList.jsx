import { formatFullDateHour } from "@/utils/formatFullDateHour";
import LoginStatus from "../atoms/LoginStatus";

export default function UserLoginList({ user, img, isLogin }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <img
                    src={
                        img
                            ? `/storage/user/photo/${img}`
                            : "/assets/profile-icon.png"
                    }
                    alt="User Profile Picture"
                    className="size-16 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold">{user}</p>
                    <p className="w-[85%]">
                        {isLogin ? formatFullDateHour(isLogin) : "Offline"}
                    </p>
                </div>
            </div>
            <LoginStatus isLogin={isLogin} />
        </div>
    );
}
