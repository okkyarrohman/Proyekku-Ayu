import DropdownItem from "@/Components/General/atoms/DropdownItem";
import FilterLabel from "@/Components/General/atoms/FilterLabel";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import AddButton from "@/Components/General/molecules/AddButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import MateriCard from "@/Components/Materi/molecules/MateriCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function MateriIndex({ auth }) {
    const { materis, classes, mapels } = usePage().props;

    const [search, setSearch] = useState({
        searchMapel: "",
        searchClass: "",
    });

    const handleSearchOnClick = () => {
        router.get(
            route(route().current()),
            {
                searchMapel: search.searchMapel,
                searchClass: search.searchClass,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    console.log(materis);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <div className="flex justify-between mb-6 items-center">
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
                <div className="flex items-center gap-5">
                    <FilterLabel label="Mata Pelajaran" />
                    <DropdownField
                        hideLabel
                        color="text-black"
                        placeholder="Mata Pelajaran"
                        value={
                            mapels.find(
                                (mapel) => mapel.id === search.searchMapel
                            )?.name
                        }
                    >
                        {mapels.map((mapel) => {
                            return (
                                <DropdownItem
                                    option={mapel.name}
                                    onClick={() =>
                                        setSearch({
                                            ...search,
                                            searchMapel: mapel.id,
                                        })
                                    }
                                />
                            );
                        })}
                    </DropdownField>
                </div>
                <PrimaryButton text="Search" onClick={handleSearchOnClick} />
            </div>

            <MateriIndexTemplate>
                {materis.map((materi, index) => {
                    return (
                        <MateriCard
                            key={index}
                            cover={materi.cover}
                            desc={materi.desc}
                            link={route("materi-guru.show", materi.id)}
                        />
                    );
                })}
                <AddButton
                    text="Tambah Konten Belajar"
                    link={route("materi-guru.create")}
                />
            </MateriIndexTemplate>
        </AuthenticatedLayout>
    );
}
