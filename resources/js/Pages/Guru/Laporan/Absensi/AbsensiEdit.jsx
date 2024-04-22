import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputDateTimeField from "@/Components/General/molecules/InputDateTimeField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function AbsensiEdit({ auth }) {
    const { absens, mapels, classes } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        date: absens.date,
        mapel_id: absens.mapel_id,
        class_id: absens.class_id,
        meeting: absens.meeting,
    });

    const filteredMapels = mapels.filter(
        (mapel) => mapel.class_id == data.class_id
    );

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("absensi-guru.update", absens.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Jurnal Kehadiran">
            <CreateTemplate title="TAMBAH PRESENSI">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <InputDateTimeField
                        autoFocus
                        color="text-black"
                        label="Tanggal"
                        name="date"
                        placeholder="Tanggal"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                        error={errors.date}
                    />
                    <DropdownField
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
                        color="text-black"
                        label="Pertemuan Ke"
                        name="meeting"
                        placeholder="Pertemuan Ke"
                        value={data.meeting}
                        onChange={(e) => setData("meeting", e.target.value)}
                        error={errors.meeting}
                    />
                    <div className="flex justify-end">
                        <PrimaryButton type="submit" text="Simpan" />
                    </div>
                </form>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
