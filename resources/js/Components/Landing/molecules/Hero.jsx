import Description from "@/Components/General/atoms/Description";
import SecondaryLink from "@/Components/General/atoms/SecondaryLink";
import Title from "@/Components/General/atoms/Title";

export default function Hero({ desc }) {
    return (
        <div
            id="home"
            className="min-h-screen bg-primary-100 grid lg:grid-cols-2 grid-cols-1 lg:static relative"
        >
            <img
                src="/assets/hero-background.jpeg"
                alt="Hero Background"
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="space-y-6 px-6 lg:static absolute md:bg-none bg-primary-100 bg-opacity-55 h-full flex flex-col justify-center">
                <Title title="Selamat Datang!" />
                <Description desc={desc} />
                <div className="mx-auto md:mx-0">
                    <SecondaryLink text="Mulai" href={route("login")} />
                </div>
            </div>
        </div>
    );
}
