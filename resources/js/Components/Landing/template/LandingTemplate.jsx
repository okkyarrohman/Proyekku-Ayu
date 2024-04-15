import Footer from "../organism/Footer";
import Navbar from "../organism/Navbar";

export default function LandingTemplate({ authUser, children }) {
    return (
        <>
            <Navbar authUser={authUser} />
            <main>{children}</main>
            <Footer authUser={authUser} />
        </>
    );
}
