import Description from "@/Components/General/atoms/Description";
import FileInput from "@/Components/General/atoms/FileInput";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import TextAreaInput from "@/Components/General/atoms/TextAreaInput";
import Title from "@/Components/General/atoms/Title";
import InputDateTimeField from "@/Components/General/molecules/InputDateTimeField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import StepTab from "@/Components/Tugas/atoms/StepTab";
import DetailStep from "@/Components/Tugas/molecules/DetailStep";
import DetailStep2 from "@/Components/Tugas/molecules/DetailStep2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function TugasDetail({ auth }) {
    const { tugases, answers } = usePage().props;

    const kelompokId = localStorage.getItem("KELOMPOK_ID");

    console.log(answers);

    const { data, setData, post, errors } = useForm({
        _method: answers ? "PATCH" : "POST",
        tugas_id: tugases.id,
        kelompok_id: kelompokId,
        answer_1: answers ? answers.answer_1 : "",
        answer_3: answers ? answers.answer_3 : null,
        answer_4: answers ? answers.answer_4 : null,
        answer_5: answers ? answers.answer_5 : null,
        answer_6: answers ? answers.answer_6 : null,
        date_1: answers ? answers.answer_dates.date_1 : "",
        date_2: answers ? answers.answer_dates.date_2 : "",
        date_3: answers ? answers.answer_dates.date_3 : "",
        date_4: answers ? answers.answer_dates.date_4 : "",
    });

    const [step, setStep] = useState(1);

    const handleTabOnClick = (number) => {
        setStep(number);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        answers
            ? post(route("tugas.update", answers.id))
            : post(route("tugas.store"));
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
                <form
                    onSubmit={handleOnSubmit}
                    className="bg-primary-100 p-8 rounded-e-xl rounded-bl-xl space-y-6"
                >
                    {step == 1 && (
                        <DetailStep
                            title="PERTAMA"
                            step={tugases.step_1}
                            desc={tugases.desc_1}
                        >
                            <TextAreaInput
                                name="answer_3"
                                placeholder="Unggah Jawaban"
                                value={data.answer_1}
                                onChange={(e) =>
                                    setData("answer_1", e.target.value)
                                }
                            />
                        </DetailStep>
                    )}
                    {step == 2 && (
                        <DetailStep2
                            title="Kedua"
                            step={tugases.step_2}
                            desc={tugases.desc_2}
                            startdate={tugases.created_at}
                            deadline={tugases.deadline}
                        >
                            <div className="my-3 bg-primary-500 p-4 space-y-1">
                                <InputDateTimeField
                                    color="text-primary-100"
                                    label="Analisis Basis Data"
                                    placeholder="Atur Tanggal"
                                    name="date_1"
                                    value={data.date_1}
                                    onChange={(e) =>
                                        setData("date_1", e.target.value)
                                    }
                                />
                                <hr className="bg-primary-100 h-0.5" />
                                <InputDateTimeField
                                    color="text-primary-100"
                                    label="Desain Basis Data"
                                    placeholder="Atur Tanggal"
                                    name="date_2"
                                    value={data.date_2}
                                    onChange={(e) =>
                                        setData("date_2", e.target.value)
                                    }
                                />
                                <hr className="bg-primary-100 h-0.5" />
                                <InputDateTimeField
                                    color="text-primary-100"
                                    label="Program Basis Data"
                                    placeholder="Atur Tanggal"
                                    name="date_3"
                                    value={data.date_3}
                                    onChange={(e) =>
                                        setData("date_3", e.target.value)
                                    }
                                />
                                <hr className="bg-primary-100 h-0.5" />
                                <InputDateTimeField
                                    color="text-primary-100"
                                    label="Final Proyek"
                                    placeholder="Atur Tanggal"
                                    name="date_4"
                                    value={data.date_4}
                                    onChange={(e) =>
                                        setData("date_4", e.target.value)
                                    }
                                />
                            </div>
                        </DetailStep2>
                    )}
                    {step == 3 && (
                        <DetailStep
                            title="KETIGA"
                            step={tugases.step_3}
                            desc={tugases.desc_3}
                        >
                            <FileInput
                                large
                                name="answer_3"
                                placeholder="Unggah Jawaban"
                                // value={data.answer_3?.name}
                                value={
                                    data.answer_3?.name
                                        ? data.answer_3?.name
                                        : data.answer_3
                                }
                                onChange={(e) =>
                                    setData("answer_3", e.target.files[0])
                                }
                            />
                        </DetailStep>
                    )}
                    {step == 4 && (
                        <DetailStep
                            title="KEEMPAT"
                            step={tugases.step_4}
                            desc={tugases.desc_4}
                        >
                            <FileInput
                                large
                                name="answer_4"
                                placeholder="Unggah Jawaban"
                                // value={data.answer_4?.name}
                                value={
                                    data.answer_4?.name
                                        ? data.answer_4?.name
                                        : data.answer_4
                                }
                                onChange={(e) =>
                                    setData("answer_4", e.target.files[0])
                                }
                            />
                        </DetailStep>
                    )}
                    {step == 5 && (
                        <DetailStep
                            title="KELIMA"
                            step={tugases.step_5}
                            desc={tugases.desc_5}
                        >
                            <FileInput
                                large
                                name="answer_5"
                                placeholder="Unggah Jawaban"
                                // value={data.answer_5?.name}
                                value={
                                    data.answer_5?.name
                                        ? data.answer_5?.name
                                        : data.answer_5
                                }
                                onChange={(e) =>
                                    setData("answer_5", e.target.files[0])
                                }
                            />
                        </DetailStep>
                    )}
                    {step == 6 && (
                        <DetailStep
                            title="KEENAM"
                            step={tugases.step_6}
                            desc={tugases.desc_6}
                        >
                            <FileInput
                                large
                                name="answer_6"
                                placeholder="Unggah Jawaban"
                                // value={data.answer_6?.name}
                                value={
                                    data.answer_6?.name
                                        ? data.answer_6?.name
                                        : data.answer_6
                                }
                                onChange={(e) =>
                                    setData("answer_6", e.target.files[0])
                                }
                            />
                        </DetailStep>
                    )}
                    <div className={`flex justify-end`}>
                        <SecondaryButton type="submit" text="Kirim" />
                    </div>
                </form>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
