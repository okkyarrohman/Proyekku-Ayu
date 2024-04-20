import FilterLabel from "@/Components/General/atoms/FilterLabel";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import TableActionButton from "@/Components/General/atoms/TableActionButton";
import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import TableShowButton from "@/Components/General/atoms/TableShowButton";
import InputTextField from "@/Components/General/molecules/InputTextField";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { formatLoginTime } from "@/utils/formatLoginTime";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function UserIndexGuru({ auth }) {
    const { users } = usePage().props;

    const [search, setSearch] = useState({
        searchName: "",
    });

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            router.get(
                route("user-admin.index", "guru"),
                { searchName: search.searchName },
                {
                    preserveState: true,
                    replace: true,
                }
            );
        }
    };

    console.log(users);

    const tableHeads = [
        "No",
        "NIP",
        "Nama",
        "Akun Dibuat",
        "Email",
        "Screen Time",
        "Aksi",
        "",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Data Master Guru">
            <div className="flex items-center justify-end gap-5 mb-6">
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
                    onKeyDown={handleSearch}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {users.map((user, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={user.nip} />
                                <TableData children={user.name} />
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
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route("user-admin.edit", [
                                                "guru",
                                                user.id,
                                            ])}
                                            linkDelete={route(
                                                "user-admin.destroy",
                                                ["guru", user.id]
                                            )}
                                        />
                                    }
                                />
                                <TableData
                                    children={
                                        <TableShowButton
                                            linkShow={route("user-admin.show", [
                                                "guru",
                                                user.id,
                                            ])}
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
