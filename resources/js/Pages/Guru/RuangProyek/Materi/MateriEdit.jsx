import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputTextAreaField from "@/Components/General/molecules/InputTextAreaField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import MateriCreateTemplate from "@/Components/Materi/template/MateriCreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function MateriEdit({ auth }) {
    const { mapels, materis } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        mapel_id: materis.mapel_id,
        name: materis.name,
        desc: materis.desc,
        cover: materis.cover,
        file: materis.file,
        link_video: materis.link_video,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("materi-guru.update", materis.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriCreateTemplate title="EDIT KONTEN BELAJAR">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <DropdownField
                        autoFocus
                        color="text-black"
                        label="Mata Pelajaran"
                        name="mapel_id"
                        placeholder="Mata Pelajaran"
                        value={
                            mapels.find((mapel) => mapel.id === data.mapel_id)
                                ?.name
                        }
                        error={errors.mapel_id}
                    >
                        {mapels.map((mapel) => {
                            return (
                                <DropdownItem
                                    option={mapel.name}
                                    onClick={() =>
                                        setData("mapel_id", mapel.id)
                                    }
                                />
                            );
                        })}
                    </DropdownField>
                    <InputTextField
                        color="text-black"
                        label="Nama"
                        name="name"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <InputTextAreaField
                        color="text-black"
                        label="Deskripsi"
                        name="desc"
                        placeholder="Deskripsi"
                        value={data.desc}
                        onChange={(e) => setData("desc", e.target.value)}
                        error={errors.desc}
                    />
                    <InputFileField
                        color="text-black"
                        label="Unggah E-Book"
                        name="file"
                        placeholder="Unggah E-Book"
                        fileType=".pdf"
                        value={data.file?.name ? data.file?.name : data.file}
                        onChange={(e) => setData("file", e.target.files[0])}
                        error={errors.file}
                    />
                    <InputTextField
                        color="text-black"
                        label="Link Video"
                        name="link_video"
                        placeholder="Link Video"
                        value={data.link_video}
                        onChange={(e) => setData("link_video", e.target.value)}
                        error={errors.link_video}
                    />
                    <InputFileField
                        color="text-black"
                        label="Unggah Cover"
                        name="cover"
                        placeholder="Unggah Cover"
                        fileType="image/*"
                        value={data.cover?.name ? data.cover?.name : data.cover}
                        onChange={(e) => setData("cover", e.target.files[0])}
                        error={errors.cover}
                    />
                    <div className="ml-auto w-fit">
                        <PrimaryButton type="submit" text="Simpan" />
                    </div>
                </form>
            </MateriCreateTemplate>
        </AuthenticatedLayout>
    );
}
