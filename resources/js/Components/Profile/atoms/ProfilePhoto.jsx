export default function ProfilePhoto({ photo, name }) {
    return (
        <div className="w-fit mx-auto space-y-5 mb-6">
            <img
                src={
                    photo
                        ? `/storage/user/photo/${photo}`
                        : `/assets/profile-icon.png`
                }
                alt="Profile Photo"
                className="rounded-full object-cover size-28 mx-auto"
            />
            <p className="text-primary-100 font-bold text-xl text-center capitalize">
                {name}
            </p>
        </div>
    );
}
