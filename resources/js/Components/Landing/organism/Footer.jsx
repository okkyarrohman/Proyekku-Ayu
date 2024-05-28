import {
    guestLinkItems,
    muridLinkItems,
    guruLinkItems,
    adminLinkItems,
} from "@/utils/footerLinks";
import { Link } from "@inertiajs/react";
import SocialMedia from "../atoms/SocialMedia";
import FooterLinkItem from "../atoms/FooterLinkItem";
import FooterLink from "../molecules/FooterLink";
import Description from "@/Components/General/atoms/Description";

export default function Footer({ authUser }) {
    let footerLinkItems = guestLinkItems;

    if (authUser) {
        if (authUser.role == "murid") {
            footerLinkItems = muridLinkItems;
        } else if (authUser.role == "guru") {
            footerLinkItems = guruLinkItems;
        } else if (authUser.role == "admin") {
            footerLinkItems = adminLinkItems;
        } else {
            footerLinkItems = guestLinkItems;
        }
    }

    return (
        <footer className="bg-primary-100 px-6 py-20 flex lg:flex-row flex-col items-center lg:space-y-0 space-y-10 justify-between">
            <div>
                <img
                    src="/assets/app-bg-logo.png"
                    alt="Proyekku"
                    className="size-20 object-cover lg:mx-0 mx-auto mb-4"
                />
                {/* <p className="text-primary-600 w-60 mt-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sintelit officia consequat
                </p> */}
                <div className="w-60">
                    <Description
                        desc="Telusuri lebih banyak tentang Learning Management ProyekKu!"
                        color="text-primary-600"
                        size="text-base"
                        align="lg:text-left text-center"
                    />
                </div>
            </div>
            <FooterLink links={footerLinkItems} />
            <SocialMedia />
        </footer>
    );
}
