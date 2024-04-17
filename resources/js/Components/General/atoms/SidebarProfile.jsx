export default function SidebarProfile({ name, img }) {
    return (
        <>
            {/* Profile */}
            <img
                src={
                    img
                        ? `/storage/user/photo/${img}`
                        : `/assets/profile-icon.png`
                }
                alt="Profile Photo"
                className="rounded-full size-20 object-cover mx-auto"
            />
            <p className="text-white line-clamp-1 text-center">{name}</p>
        </>
    );
}
