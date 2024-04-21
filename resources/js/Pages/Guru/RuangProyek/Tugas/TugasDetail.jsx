import Description from "@/Components/General/atoms/Description";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import Title from "@/Components/General/atoms/Title";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import StepTab from "@/Components/Tugas/atoms/StepTab";
import DetailStep from "@/Components/Tugas/molecules/DetailStep";
import DetailStep2 from "@/Components/Tugas/molecules/DetailStep2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function TugasDetail({ auth }) {
    const { tugases } = usePage().props;

    const [step, setStep] = useState(1);

    const handleTabOnClick = (number) => {
        setStep(number);
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <CreateTemplate title="DETAIL PROYEK">
                <div className="rounded-t-xl flex w-fit">
                    {[1, 2, 3, 4, 5, 6].map((stepNumber) => {
                        return (
                            <StepTab
                                step={stepNumber}
                                active={step == stepNumber}
                                onClick={() => handleTabOnClick(stepNumber)}
                            />
                        );
                    })}
                </div>
                <div className="bg-primary-100 p-8 rounded-e-xl rounded-bl-xl space-y-6">
                    {step == 1 && (
                        <DetailStep
                            title="PERTAMA"
                            step={tugases.step_1}
                            desc={tugases.desc_1}
                        />
                    )}
                    {step == 2 && (
                        <DetailStep2
                            title="Kedua"
                            step={tugases.step_2}
                            desc={tugases.desc_2}
                            startdate={tugases.created_at}
                            deadline={tugases.deadline}
                        />
                    )}
                    {step == 3 && (
                        <DetailStep
                            title="KETIGA"
                            step={tugases.step_3}
                            desc={tugases.desc_3}
                        />
                    )}
                    {step == 4 && (
                        <DetailStep
                            title="KEEMPAT"
                            step={tugases.step_4}
                            desc={tugases.desc_4}
                        />
                    )}
                    {step == 5 && (
                        <DetailStep
                            title="KELIMA"
                            step={tugases.step_5}
                            desc={tugases.desc_5}
                        />
                    )}
                    {step == 6 && (
                        <DetailStep
                            title="KEENAM"
                            step={tugases.step_6}
                            desc={tugases.desc_6}
                        />
                    )}
                    <div
                        className={`flex ${
                            step == 1 ? "justify-end" : "justify-between"
                        }`}
                    >
                        {step != 1 && (
                            <SecondaryButton
                                text="Kembali"
                                onClick={handlePrevStep}
                            />
                        )}
                        {step != 6 && (
                            <SecondaryButton
                                text="Selanjutnya"
                                onClick={handleNextStep}
                            />
                        )}
                    </div>
                </div>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
