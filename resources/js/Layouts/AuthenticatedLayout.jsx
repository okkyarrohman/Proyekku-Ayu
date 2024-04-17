import Title from "@/Components/General/atoms/Title";
import Navbar from "@/Components/General/molecules/Navbar";
import Sidebar from "@/Components/General/molecules/Sidebar";

export default function AuthenticatedLayout({ authUser, children }) {
    return (
        <main className="relative">
            <Navbar authUser={authUser} />
            <Sidebar authUser={authUser} />
            <section className="lg:ml-56 ml-0 mt-20 px-6">
                <div className="mb-6">
                    <Title
                        title="Dashboard"
                        size="text-3xl"
                        color="text-black"
                    />
                </div>
                {children}
            </section>
        </main>
    );
}
