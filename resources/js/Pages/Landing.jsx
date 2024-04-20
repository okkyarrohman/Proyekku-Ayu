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
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam harum necessitatibus consectetur, ad minima animi
                    perspiciatis doloribus molestias rem ullam eos autem magni!
                    Inventore eius laudantium dicta deserunt quas doloremque
                    facilis perspiciatis debitis"
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
            <About desc="Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id. Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapien.">
                {aboutItems.map((item) => {
                    return <AboutList desc={item.desc} />;
                })}
            </About>
            <Information />
        </LandingTemplate>
    );
}
