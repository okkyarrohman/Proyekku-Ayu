import DropdownItem from "@/Components/General/atoms/DropdownItem";
import MultipleSelectItem from "@/Components/General/atoms/MultipleSelectItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import TextInput from "@/Components/General/atoms/TextInput";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import MultipleSelectField from "@/Components/General/molecules/MultipleSelectField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function KelompokEdit({ auth }) {
    const { kelompoks, classes, users, analysts, designers, programmers } =
        usePage().props;

    console.log("analysts", analysts);
    console.log("designers", designers);
    console.log("programmers", programmers);

    // const tugasId = localStorage.getItem("TUGAS_ID");
    // const classId = localStorage.getItem("CLASS_ID");

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: kelompoks.name,
        number: kelompoks.number,
        tugas_id: kelompoks.tugas_id,
        class_id: kelompoks.class_id,
        analysts: analysts.map((analyst) => analyst.user_id),
        designers: designers.map((designer) => designer.user_id),
        programmers: programmers.map((programmer) => programmer.user_id),
    });

    console.log("dataAnalyst", data.analysts);

    const [searchTerm, setSearchTerm] = useState("");
    const [step, setStep] = useState(1);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(data.users);

    const handleUserSelection = (userId, role) => {
        const currentUsers = data[role];
        const updatedUsers = currentUsers.includes(userId)
            ? currentUsers.filter((id) => id !== userId)
            : [...currentUsers, userId];
        setData(role, updatedUsers);
    };

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
        post(route("kelompok-guru.update", kelompoks.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <CreateTemplate title="TAMBAH KELOMPOK">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    {step == 1 && (
                        <>
                            <DropdownField
                                autoFocus
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
                            <InputTextField
                                color="text-black"
                                label="Nomor Kelompok"
                                name="number"
                                placeholder="Nomor Kelompok"
                                value={data.number}
                                onChange={(e) =>
                                    setData("number", e.target.value)
                                }
                                error={errors.number}
                            />
                            <InputTextField
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
                        </>
                    )}
                    {step == 2 && (
                        <>
                            <MultipleSelectField
                                color="text-black"
                                label="Analis Kelompok"
                                name="analysts"
                                placeholder="Analis Kelompok"
                                // values={data.users}
                                values={data.analysts.map(
                                    (userId) =>
                                        users.find((user) => user.id === userId)
                                            ?.name
                                )}
                                // setValues={(value) => setData("users", value)}
                                setValues={(selectedNames) => {
                                    const selectedIds = selectedNames.map(
                                        (name) =>
                                            users.find(
                                                (user) => user.name === name
                                            )?.id
                                    );
                                    setData("analysts", selectedIds);
                                }}
                            >
                                <TextInput
                                    name="searchTerm"
                                    placeholder="Cari..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                {(filteredUsers || users).map((user) => (
                                    <MultipleSelectItem
                                        key={user.id}
                                        // value={user.id}
                                        value={user.name}
                                        option={user.name}
                                        isSelected={data.analysts.includes(
                                            user.id
                                        )}
                                        onClick={() =>
                                            handleUserSelection(user.id)
                                        }
                                    />
                                ))}
                            </MultipleSelectField>
                            <MultipleSelectField
                                color="text-black"
                                label="Designer Kelompok"
                                name="designers"
                                placeholder="Designer Kelompok"
                                values={data.designers.map(
                                    (userId) =>
                                        users.find((user) => user.id === userId)
                                            ?.name
                                )}
                                setValues={(selectedNames) => {
                                    const selectedIds = selectedNames.map(
                                        (name) =>
                                            users.find(
                                                (user) => user.name === name
                                            )?.id
                                    );
                                    setData("designers", selectedIds);
                                }}
                            >
                                <TextInput
                                    name="searchTerm"
                                    placeholder="Cari..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                {(filteredUsers || users).map((user) => (
                                    <MultipleSelectItem
                                        key={user.id}
                                        value={user.name}
                                        option={user.name}
                                        isSelected={data.designers.includes(
                                            user.id
                                        )}
                                        onClick={() =>
                                            handleUserSelection(user.id)
                                        }
                                    />
                                ))}
                            </MultipleSelectField>
                            <MultipleSelectField
                                color="text-black"
                                label="Programmer Kelompok"
                                name="programmers"
                                placeholder="Programmer Kelompok"
                                values={data.programmers.map(
                                    (userId) =>
                                        users.find((user) => user.id === userId)
                                            ?.name
                                )}
                                setValues={(selectedNames) => {
                                    const selectedIds = selectedNames.map(
                                        (name) =>
                                            users.find(
                                                (user) => user.name === name
                                            )?.id
                                    );
                                    setData("programmers", selectedIds);
                                }}
                            >
                                <TextInput
                                    name="searchTerm"
                                    placeholder="Cari..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                {(filteredUsers || users).map((user) => (
                                    <MultipleSelectItem
                                        key={user.id}
                                        value={user.name}
                                        option={user.name}
                                        isSelected={data.programmers.includes(
                                            user.id
                                        )}
                                        onClick={() =>
                                            handleUserSelection(user.id)
                                        }
                                    />
                                ))}
                            </MultipleSelectField>
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
                        {step == 2 ? (
                            <PrimaryButton type="submit" text="Simpan" />
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
