import DropdownItem from "@/Components/General/atoms/DropdownItem";
import FilterLabel from "@/Components/General/atoms/FilterLabel";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import MateriCard from "@/Components/Materi/molecules/MateriCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function MateriIndex({ auth }) {
    const { materis, mapels } = usePage().props;

    const [search, setSearch] = useState({
        searchMapel: "",
    });

    const handleSearchOnClick = () => {
        router.get(
            route(route().current()),
            {
                searchMapel: search.searchMapel,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <div className="flex items-center justify-end gap-5 mb-6">
                <FilterLabel label="Mata Pelajaran" />
                <DropdownField
                    hideLabel
                    color="text-black"
                    placeholder="Mata Pelajaran"
                    value={
                        mapels.find((mapel) => mapel.id === search.searchMapel)
                            ?.name
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
                <PrimaryButton text="Search" onClick={handleSearchOnClick} />
            </div>

            <MateriIndexTemplate>
                {materis.map((materi, index) => {
                    return (
                        <MateriCard
                            key={index}
                            cover={materi.cover}
                            desc={materi.desc}
                            link={route("materi.show", materi.id)}
                        />
                    );
                })}
            </MateriIndexTemplate>
        </AuthenticatedLayout>
    );
}
