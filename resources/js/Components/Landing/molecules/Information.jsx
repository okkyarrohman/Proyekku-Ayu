import Description from "@/Components/General/atoms/Description";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import Title from "@/Components/General/atoms/Title";

export default function Information() {
    return (
        <div className="py-16 lg:py-36 px-6 lg:px-36 bg-white">
            <div className="bg-primary-100 flex lg:flex-row flex-col items-center justify-between py-6 px-6 lg:px-12 rounded-xl lg:space-y-0 space-y-6">
                <div>
                    <Title
                        title="Need more information?"
                        size="text-3xl"
                        weight="font-medium"
                    />
                    <Description desc="Write your concern to us and our specialist will get back to you." />
                </div>
                <SecondaryButton text="Contact Us" />
            </div>
        </div>
    );
}
