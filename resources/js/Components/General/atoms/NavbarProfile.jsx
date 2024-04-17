export default function NavbarProfile({ img, name }) {
    return (
        <div className="flex items-center gap-3 lg:hidden">
            <img
                src={
                    img
                        ? `/storage/user/photo/${img}`
                        : `/assets/profile-icon.png`
                }
                alt="Profile Photo"
                className="rounded-full size-9 object-cover"
            />
            <p className="w-28 line-clamp-1 text-white">{name}</p>
        </div>
    );
}
