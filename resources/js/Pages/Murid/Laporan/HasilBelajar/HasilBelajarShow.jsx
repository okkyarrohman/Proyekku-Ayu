import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import TextInput from "@/Components/General/atoms/TextInput";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputTextAreaField from "@/Components/General/molecules/InputTextAreaField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function HasilBelajarShow({ auth }) {
    const { classes, mapels, users, hasils } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        user_id: hasils.user_id,
        mapel_id: hasils.mapel_id,
        class_id: hasils.class_id,
        grade: hasils.grade,
        grade_index: hasils.grade_index,
        meeting: hasils.meeting,
        // tugas_id: "",
        detail: hasils.detail,
    });

    const [searchTerm, setSearchTerm] = useState("");

    const usersByClass = users.filter((user) => user.class_id == data.class_id);

    const filteredUsers = usersByClass.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredMapels = mapels.filter(
        (mapel) => mapel.class_id == data.class_id
    );

    console.log(filteredMapels);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("hasil-belajar-guru.update", hasils.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Hasil Belajar">
            <CreateTemplate title="EDIT HASIL BELAJAR SISWA">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <DropdownField
                        // autoFocus
                        disabled
                        color="text-black"
                        label="Kelas"
                        name="class_id"
                        placeholder="Kelas"
                        value={
                            classes.find(
                                (classItem) => classItem.id == data.class_id
                            )?.name
                        }
                        error={errors.class_id}
                    >
                        {classes.map((classItem) => {
                            return (
                                <DropdownItem
                                    option={classItem.name}
                                    onClick={() =>
                                        setData("class_id", classItem.id)
                                    }
                                />
                            );
                        })}
                    </DropdownField>
                    <DropdownField
                        disabled
                        color="text-black"
                        label="Murid"
                        name="user_id"
                        placeholder="Murid"
                        value={
                            users.find((user) => user.id == data.user_id)?.name
                        }
                        error={errors.user_id}
                    >
                        <TextInput
                            name="searchTerm"
                            placeholder="Cari..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {(filteredUsers || usersByClass).map((user) => {
                            return (
                                <DropdownItem
                                    option={user.name}
                                    onClick={() => setData("user_id", user.id)}
                                />
                            );
                        })}
                    </DropdownField>
                    <DropdownField
                        disabled
                        color="text-black"
                        label="Mata Pelajaran"
                        name="mapel_id"
                        placeholder="Mata Pelajaran"
                        value={
                            mapels.find((mapel) => mapel.id == data.mapel_id)
                                ?.name
                        }
                        error={errors.mapel_id}
                    >
                        {filteredMapels.length != 0 ? (
                            filteredMapels.map((mapel) => {
                                return (
                                    <DropdownItem
                                        option={mapel.name}
                                        onClick={() =>
                                            setData("mapel_id", mapel.id)
                                        }
                                    />
                                );
                            })
                        ) : (
                            <DropdownItem
                                option="Tidak Ada Mata Pelajaran"
                                onClick={() => setData("mapel_id", "")}
                            />
                        )}
                    </DropdownField>
                    <InputTextField
                        disabled
                        color="text-black"
                        label="Nilai"
                        name="grade"
                        placeholder="Nilai"
                        value={data.grade}
                        onChange={(e) => setData("grade", e.target.value)}
                        error={errors.grade}
                    />
                    <InputTextField
                        disabled
                        color="text-black"
                        label="Indeks Nilai"
                        name="grade_index"
                        placeholder="Indeks Nilai"
                        value={data.grade_index}
                        onChange={(e) => setData("grade_index", e.target.value)}
                        error={errors.grade_index}
                    />
                    <InputTextField
                        disabled
                        color="text-black"
                        label="Pertemuan Ke"
                        name="meeting"
                        placeholder="Pertemuan Ke"
                        value={data.meeting}
                        onChange={(e) => setData("meeting", e.target.value)}
                        error={errors.meeting}
                    />
                    <InputTextAreaField
                        disabled
                        color="text-black"
                        label="Rincian Tugas"
                        name="detail"
                        placeholder="Rincian Tugas"
                        value={data.detail}
                        onChange={(e) => setData("detail", e.target.value)}
                        error={errors.detail}
                    />
                    {/* <div className="flex justify-end">
                        <PrimaryButton type="submit" text="Simpan" />
                    </div> */}
                </form>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
