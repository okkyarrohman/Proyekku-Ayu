import Title from "@/Components/General/atoms/Title";
import Navbar from "@/Components/General/molecules/Navbar";
import Sidebar from "@/Components/General/molecules/Sidebar";

export default function AuthenticatedLayout({ authUser, children }) {
    return (
        <main className="relative">
            <Navbar />
            <Sidebar authUser={authUser} />
            <section className="ml-64 mt-20">
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
