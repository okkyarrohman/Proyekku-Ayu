import DropdownItem from "@/Components/General/atoms/DropdownItem";
import FilterLabel from "@/Components/General/atoms/FilterLabel";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
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

export default function DataMasterMuridIndex({ auth }) {
    const { users, classes } = usePage().props;

    const [search, setSearch] = useState({
        searchName: "",
        searchClass: "",
    });

    const handleSearchOnClick = () => {
        router.get(route("user-admin.index", "murid"), {
            searchName: search.searchName,
            searchClass: search.searchClass,
        });
    };

    const handleSearchInputEnter = (e) => {
        if (e.key === "Enter") {
            router.get(route("user-admin.index", "murid"), {
                searchName: search.searchName,
                searchClass: search.searchClass,
            });
        }
    };

    console.log("users", users);
    console.log("searchName", search.searchName);
    console.log("searchClass", search.searchClass);

    const tableHeads = [
        "No",
        "Kelas",
        "Nama",
        "Akun Dibuat",
        "Email",
        "Screen Time",
        "Aksi",
        "",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Data Master Murid">
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
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {users.map((user, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData
                                    children={
                                        classes.find(
                                            (classItem) =>
                                                classItem.id == user.class_id
                                        )?.name
                                    }
                                    nowrap
                                />
                                <TableData children={user.name} nowrap />
                                <TableData
                                    children={formatDate(user.created_at)}
                                />
                                <TableData children={user.email} />
                                <TableData
                                    children={
                                        user.total_login_time
                                            ? formatLoginTime(
                                                  user.total_login_time
                                              )
                                            : formatLoginTime(0)
                                    }
                                />
                                <TableData children={<TableActionButton />} />
                                <TableData children={<TableShowButton />} />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </TableContainer>
        </AuthenticatedLayout>
    );
}
