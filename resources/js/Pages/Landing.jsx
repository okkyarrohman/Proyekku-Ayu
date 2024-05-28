import About from "@/Components/Landing/molecules/About";
import AboutList from "@/Components/Landing/molecules/AboutList";
import FeatureCard from "@/Components/Landing/molecules/FeatureCard";
import Hero from "@/Components/Landing/molecules/Hero";
import Information from "@/Components/Landing/molecules/Information";
import Feature from "@/Components/Landing/organism/Feature";
import LandingTemplate from "@/Components/Landing/template/LandingTemplate";

import { featureItems, aboutItems } from "@/utils/landingDatas";

export default function Landing({ auth }) {
    console.log(auth);

    return (
        <LandingTemplate authUser={auth.user}>
            <Hero
                desc="Website ini menyajikan berbagai macam fitur untuk menunjang proses pembelajaran menggunakan metode Project Based Learning. Melalui website ini pembelajaran menjadi lebih interaktif dan memungkinkan untuk kolaborasi antara siswa dan pengajar secara online. Semua materi pembelajaran, tugas, dan proyek dapat diakses dan dikelola dengan mudah melalui platform ini. Kami berkomitmen untuk meningkatkan pengalaman belajar Anda melalui teknologi canggih dan pendekatan inovatif. Selamat belajar di ProyekKu Learning Management System!"
            />
            <Feature>
                {featureItems.map((item) => {
                    return (
                        <FeatureCard
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                        />
                    );
                })}
            </Feature>
            <About desc="Platform ini dirancang khusus untuk mengintegrasikan metode pembelajaran Project Based Learning, memungkinkan siswa untuk belajar melalui proyek-proyek yang relevan dan menantang.">
                {aboutItems.map((item) => {
                    return <AboutList desc={item.desc} />;
                })}
            </About>
            <Information />
        </LandingTemplate>
    );
}
