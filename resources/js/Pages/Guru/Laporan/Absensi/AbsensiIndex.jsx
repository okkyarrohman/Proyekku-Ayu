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
import { formatDate } from "@/utils/formatDate";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AbsensiIndex({ auth }) {
    const { absens, classes, mapels } = usePage().props;

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

    console.log(absens);

    const tableHeads = [
        "No",
        "Tanggal",
        "Kelas",
        "Mata Pelajaran",
        "Pertemuan Ke",
        "Opsi",
        "",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Jurnal Kehadiran">
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
            <div className="mb-6 ml-auto w-fit">
                <PrimaryLink
                    text="Tambah Data"
                    href={route("absensi-guru.create")}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {absens.map((absen, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={formatDate(absen.date)} />
                                <TableData children={absen.classes.name} />
                                <TableData children={absen.mapels.name} />
                                <TableData children={absen.meeting} />
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route(
                                                "absensi-guru.edit",
                                                absen.id
                                            )}
                                            linkDelete={route(
                                                "absensi-guru.destroy",
                                                absen.id
                                            )}
                                        />
                                    }
                                />
                                <TableData
                                    children={
                                        <TableShowButton
                                            linkShow={route(
                                                "absensi-guru.show",
                                                absen.id
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
