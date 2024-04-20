import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function MataPelajaranEdit({ auth }) {
    const { mapels, classes, users } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: mapels.name,
        class_id: mapels.class_id,
        guru_id: mapels.guru_id,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("mapel-admin.update", mapels.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Edit Mata Pelajaran">
            <CreateTemplate title="EDIT MATA PELAJARAN">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <InputTextField
                        autoFocus
                        color="text-black"
                        label="Nama"
                        name="name"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
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
                        label="Guru"
                        name="guru_id"
                        placeholder="Guru"
                        value={
                            users.find((user) => user.id == data.guru_id)?.name
                        }
                        error={errors.guru_id}
                    >
                        {users.map((user) => {
                            return (
                                <DropdownItem
                                    option={user.name}
                                    onClick={() => setData("guru_id", user.id)}
                                />
                            );
                        })}
                    </DropdownField>
                    <div className="ml-auto w-fit">
                        <PrimaryButton type="submit" text="Simpan" />
                    </div>
                </form>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
