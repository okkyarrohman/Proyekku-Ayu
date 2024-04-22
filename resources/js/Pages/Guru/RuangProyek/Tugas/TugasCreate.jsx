import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputDateTimeField from "@/Components/General/molecules/InputDateTimeField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputTextAreaField from "@/Components/General/molecules/InputTextAreaField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function TugasCreate({ auth }) {
    const { classes } = usePage().props;

    const [step, setStep] = useState(1);

    const { data, setData, post, errors } = useForm({
        name: "",
        desc: "",
        cover: null,
        deadline: "",
        class_id: "",
        step_1: "",
        desc_1: "",
        step_2: "",
        desc_2: "",
        step_3: "",
        desc_3: "",
        step_4: "",
        desc_4: "",
        step_5: "",
        desc_5: "",
        step_6: "",
        desc_6: "",
    });

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("tugas-guru.store"));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <CreateTemplate title="TAMBAH PROYEK">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    {step == 1 && (
                        <>
                            <InputTextField
                                autoFocus
                                color="text-black"
                                label="Nama"
                                name="name"
                                placeholder="Nama"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                error={errors.name}
                            />
                            <InputTextAreaField
                                color="text-black"
                                label="Deskripsi"
                                name="desc"
                                placeholder="Deskripsi"
                                value={data.desc}
                                onChange={(e) =>
                                    setData("desc", e.target.value)
                                }
                                error={errors.desc}
                            />
                            <InputDateTimeField
                                color="text-black"
                                label="Deadline"
                                name="deadline"
                                placeholder="Deadline"
                                value={data.deadline}
                                onChange={(e) =>
                                    setData("deadline", e.target.value)
                                }
                                error={errors.deadline}
                            />
                            <DropdownField
                                color="text-black"
                                label="Kelas"
                                name="class_id"
                                placeholder="Kelas"
                                value={
                                    classes.find(
                                        (classItem) =>
                                            classItem.id == data.class_id
                                    )?.name
                                }
                                error={errors.class_id}
                            >
                                {classes.map((classItem) => {
                                    return (
                                        <DropdownItem
                                            option={classItem.name}
                                            onClick={() =>
                                                setData(
                                                    "class_id",
                                                    classItem.id
                                                )
                                            }
                                        />
                                    );
                                })}
                            </DropdownField>
                            <InputFileField
                                color="text-black"
                                label="Unggah Cover"
                                name="cover"
                                placeholder="Unggah Cover"
                                fileType="image/*"
                                value={data.cover?.name}
                                onChange={(e) =>
                                    setData("cover", e.target.files[0])
                                }
                                error={errors.cover}
                            />
                        </>
                    )}
                    {step == 2 && (
                        <>
                            <InputTextField
                                autoFocus
                                color="text-black"
                                label="Langkah Pertama"
                                name="step_1"
                                placeholder="Soal"
                                value={data.step_1}
                                onChange={(e) =>
                                    setData("step_1", e.target.value)
                                }
                                error={errors.step_1}
                            />
                            <InputTextAreaField
                                color="text-black"
                                name="desc_1"
                                placeholder="Deskripsi"
                                value={data.desc_1}
                                onChange={(e) =>
                                    setData("desc_1", e.target.value)
                                }
                                error={errors.desc_1}
                            />
                            <InputTextField
                                color="text-black"
                                label="Langkah Kedua"
                                name="step_2"
                                placeholder="Soal"
                                value={data.step_2}
                                onChange={(e) =>
                                    setData("step_2", e.target.value)
                                }
                                error={errors.step_2}
                            />
                            <InputTextAreaField
                                color="text-black"
                                name="desc_2"
                                placeholder="Deskripsi"
                                value={data.desc_2}
                                onChange={(e) =>
                                    setData("desc_2", e.target.value)
                                }
                                error={errors.desc_2}
                            />
                            <InputTextField
                                color="text-black"
                                label="Langkah Ketiga"
                                name="step_3"
                                placeholder="Soal"
                                value={data.step_3}
                                onChange={(e) =>
                                    setData("step_3", e.target.value)
                                }
                                error={errors.step_3}
                            />
                            <InputTextAreaField
                                color="text-black"
                                name="desc_3"
                                placeholder="Deskripsi"
                                value={data.desc_3}
                                onChange={(e) =>
                                    setData("desc_3", e.target.value)
                                }
                                error={errors.desc_3}
                            />
                        </>
                    )}
                    {step == 3 && (
                        <>
                            <InputTextField
                                autoFocus
                                color="text-black"
                                label="Langkah Keempat"
                                name="step_4"
                                placeholder="Soal"
                                value={data.step_4}
                                onChange={(e) =>
                                    setData("step_4", e.target.value)
                                }
                                error={errors.step_4}
                            />
                            <InputTextAreaField
                                color="text-black"
                                name="desc_4"
                                placeholder="Deskripsi"
                                value={data.desc_4}
                                onChange={(e) =>
                                    setData("desc_4", e.target.value)
                                }
                                error={errors.desc_4}
                            />
                            <InputTextField
                                color="text-black"
                                label="Langkah Kelima"
                                name="step_5"
                                placeholder="Soal"
                                value={data.step_5}
                                onChange={(e) =>
                                    setData("step_5", e.target.value)
                                }
                                error={errors.step_5}
                            />
                            <InputTextAreaField
                                color="text-black"
                                name="desc_5"
                                placeholder="Deskripsi"
                                value={data.desc_5}
                                onChange={(e) =>
                                    setData("desc_5", e.target.value)
                                }
                                error={errors.desc_5}
                            />
                            <InputTextField
                                color="text-black"
                                label="Langkah Keenam"
                                name="step_6"
                                placeholder="Soal"
                                value={data.step_6}
                                onChange={(e) =>
                                    setData("step_6", e.target.value)
                                }
                                error={errors.step_6}
                            />
                            <InputTextAreaField
                                color="text-black"
                                name="desc_6"
                                placeholder="Deskripsi"
                                value={data.desc_6}
                                onChange={(e) =>
                                    setData("desc_6", e.target.value)
                                }
                                error={errors.desc_6}
                            />
                        </>
                    )}
                    <div
                        className={`flex ${
                            step == 1 ? "justify-end" : "justify-between"
                        } items-center`}
                    >
                        {step != 1 && (
                            <SecondaryButton
                                type="button"
                                text="Kembali"
                                onClick={handlePrevStep}
                            />
                        )}
                        {step == 3 ? (
                            <PrimaryButton
                                type="submit"
                                text="Simpan"
                                onClick={undefined}
                            />
                        ) : (
                            <PrimaryButton
                                type="button"
                                text="Selanjutnya"
                                onClick={handleNextStep}
                            />
                        )}
                    </div>
                </form>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
