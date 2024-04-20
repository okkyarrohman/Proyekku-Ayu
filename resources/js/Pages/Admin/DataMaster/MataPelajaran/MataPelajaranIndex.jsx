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
import InputTextField from "@/Components/General/molecules/InputTextField";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { formatLoginTime } from "@/utils/formatLoginTime";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function UserIndexMurid({ auth }) {
    const { mapels, users, classes } = usePage().props;

    const [search, setSearch] = useState({
        searchName: "",
        searchClass: "",
    });

    const handleSearchOnClick = () => {
        router.get(
            route(route().current()),
            {
                searchName: search.searchName,
                searchClass: search.searchClass,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const handleSearchInputEnter = (e) => {
        if (e.key === "Enter") {
            router.get(
                route(route().current()),
                {
                    searchName: search.searchName,
                    searchClass: search.searchClass,
                },
                {
                    preserveState: true,
                    replace: true,
                }
            );
        }
    };

    const tableHeads = ["No", "Nama", "Kelas", "Guru", "Aksi"];

    return (
        <AuthenticatedLayout
            authUser={auth.user}
            title="Data Master Mata Pelajaran"
        >
            <div className="flex items-center justify-between mb-6">
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
                    <FilterLabel label="Nama" />
                    <InputTextField
                        hideLabel
                        color="text-black"
                        label="Search"
                        name="searchName"
                        placeholder="Cari Data"
                        value={search.searchName}
                        onChange={(e) =>
                            setSearch({ ...search, searchName: e.target.value })
                        }
                        onKeyDown={handleSearchInputEnter}
                    />
                </div>
                <PrimaryButton text="Search" onClick={handleSearchOnClick} />
            </div>
            <div className="mb-6 ml-auto w-fit">
                <PrimaryLink
                    text="Tambah Mata Pelajaran"
                    href={route("mapel-admin.create")}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {mapels.map((mapel, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={mapel.name} nowrap />
                                <TableData
                                    children={
                                        classes.find(
                                            (classItem) =>
                                                classItem.id == mapel.class_id
                                        )?.name
                                    }
                                />
                                <TableData
                                    children={
                                        users.find(
                                            (user) => user.id == mapel.guru_id
                                        )?.name
                                    }
                                />
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route(
                                                "mapel-admin.edit",
                                                mapel.id
                                            )}
                                            linkDelete={route(
                                                "mapel-admin.destroy",
                                                mapel.id
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
