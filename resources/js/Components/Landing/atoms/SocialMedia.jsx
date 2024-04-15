export default function SocialMedia() {
    const socialItems = [
        {
            link: "#",
            img: "",
        },
        {
            link: "#",
            img: "",
        },
        {
            link: "#",
            img: "",
        },
        {
            link: "#",
            img: "",
        },
    ];

    return (
        <div>
            <p className="text-white text-xl font-medium lg:text-left text-center mb-3">
                Connect With Us!
            </p>
            <div className="flex space-x-4">
                {socialItems.map((item) => {
                    return (
                        <a href={item.link} target="_blank">
                            <img
                                src={item.img}
                                alt="Social Media"
                                className="bg-gray-500 rounded-full size-10"
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
