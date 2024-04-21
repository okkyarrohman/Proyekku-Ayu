import TugasCard from "@/Components/Tugas/molecules/TugasCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TugasIndexTemplate from "@/Components/Tugas/template/TugasIndexTemplate";
import { router, usePage } from "@inertiajs/react";
import AddButton from "@/Components/General/molecules/AddButton";
import { checkDeadline } from "@/utils/checkDeadline";
import { useState } from "react";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import DropdownItem from "@/Components/General/atoms/DropdownItem";
import DropdownField from "@/Components/General/molecules/DropdownField";
import FilterLabel from "@/Components/General/atoms/FilterLabel";

export default function TugasIndex({ auth }) {
    const { tugases, classes } = usePage().props;

    const [search, setSearch] = useState({
        searchMapel: "",
        searchClass: "",
    });

    const handleSearchOnClick = () => {
        router.get(
            route(route().current()),
            {
                searchClass: search.searchClass,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    console.log("tugas", tugases);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <div className="flex justify-end gap-5 mb-6 items-center">
                <div className="flex items-center gap-5">
                    <FilterLabel label="Kelas" />
                    <DropdownField
                        hideLabel
                        color="text-black"
                        placeholder="Kelas"
                        value={
                            classes.find(
                                (classItem) =>
                                    classItem.id === search.searchClass
                            )?.name
                        }
                    >
                        {classes.map((classItem) => {
                            return (
                                <DropdownItem
                                    option={classItem.name}
                                    onClick={() =>
                                        setSearch({
                                            ...search,
                                            searchClass: classItem.id,
                                        })
                                    }
                                />
                            );
                        })}
                    </DropdownField>
                </div>
                <PrimaryButton text="Search" onClick={handleSearchOnClick} />
            </div>
            <TugasIndexTemplate>
                {tugases.map((tugas, index) => {
                    return (
                        <TugasCard
                            key={index}
                            status={
                                checkDeadline(tugas.deadline)
                                    ? "Proyek Selesai"
                                    : "Proyek Berlangsung"
                            }
                            cover={tugas.cover}
                            desc={tugas.desc}
                            link={route("tugas-guru.show", tugas.id)}
                        />
                    );
                })}
                <AddButton
                    text="Tambah Proyek"
                    link={route("tugas-guru.create")}
                />
            </TugasIndexTemplate>
        </AuthenticatedLayout>
    );
}
