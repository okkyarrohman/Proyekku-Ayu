import FooterLinkItem from "../atoms/FooterLinkItem";

export default function FooterLink({ links }) {
    return (
        <div className="flex lg:flex-row flex-col lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
            {links.map((footerItem, itemIndex) => {
                return (
                    <div>
                        <p
                            key={itemIndex}
                            className="text-white font-medium text-xl mb-4 text-center lg:text-left"
                        >
                            {footerItem.title}
                        </p>
                        <ul className="space-y-3 flex flex-col">
                            {footerItem.sub.map((footerLink, linkIndex) => {
                                return (
                                    <FooterLinkItem
                                        index={linkIndex}
                                        title={footerLink.subtitle}
                                        href={footerLink.link}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
