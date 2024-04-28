import DropdownItem from "@/Components/General/atoms/DropdownItem";
import FilterLabel from "@/Components/General/atoms/FilterLabel";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import TableActionButton from "@/Components/General/atoms/TableActionButton";
import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import TableShowButton from "@/Components/General/atoms/TableShowButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function HasilBelajarIndex({ auth }) {
    const { hasils, mapels, classes } = usePage().props;

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

    console.log(hasils);

    const tableHeads = [
        "No",
        "Kelas",
        "Nama",
        "Mata Pelajaran",
        "Nilai",
        "Indeks",
        "Opsi",
        "",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Hasil Belajar">
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
            <div className="mb-6 ml-auto w-fit flex items-center gap-4">
                <a
                    href={
                        search.searchClass && search.searchMapel
                            ? route("hasil-belajar-guru.exportExcel", [
                                  search.searchClass,
                                  search.searchMapel,
                              ])
                            : "#"
                    }
                    className={`w-fit rounded-full ${
                        search.searchClass && search.searchMapel
                            ? "bg-primary-100 hover:bg-primary-200"
                            : "bg-primary-400 cursor-default"
                    }  py-2 px-6 font-semibold text-white text-base block text-center`}
                >
                    Download Excel
                </a>
                <a
                    href={
                        search.searchClass && search.searchMapel
                            ? route("hasil-belajar-guru.exportPdf", [
                                  search.searchClass,
                                  search.searchMapel,
                              ])
                            : "#"
                    }
                    className={`w-fit rounded-full ${
                        search.searchClass && search.searchMapel
                            ? "bg-primary-100 hover:bg-primary-200"
                            : "bg-primary-400 cursor-default"
                    }  py-2 px-6 font-semibold text-white text-base block text-center`}
                >
                    Download Pdf
                </a>
                <PrimaryLink
                    text="Tambah Data"
                    href={route("hasil-belajar-guru.create")}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {hasils.map((hasil, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={hasil.classes.name} />
                                <TableData children={hasil.users.name} />
                                <TableData children={hasil.mapels.name} />
                                <TableData children={hasil.grade} />
                                <TableData children={hasil.grade_index} />
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route(
                                                "hasil-belajar-guru.edit",
                                                hasil.id
                                            )}
                                            linkDelete={route(
                                                "hasil-belajar-guru.destroy",
                                                hasil.id
                                            )}
                                        />
                                    }
                                />
                                <TableData
                                    children={
                                        <TableShowButton
                                            linkShow={route(
                                                "hasil-belajar-guru.show",
                                                hasil.id
                                            )}
                                        />
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </TableContainer>
        </AuthenticatedLayout>
    );
}
