import DropdownItem from "@/Components/General/atoms/DropdownItem";
import FilterLabel from "@/Components/General/atoms/FilterLabel";
import AddButton from "@/Components/General/molecules/AddButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import MateriCard from "@/Components/Materi/molecules/MateriCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function MateriIndex({ auth }) {
    const { materis, classes, mapels } = usePage().props;

    const [selectedMapel, setSelectedMapel] = useState();
    const [selectedClass, setSelectedClass] = useState();

    let filteredMateris = [];
    if (selectedClass && selectedMapel) {
        filteredMateris = materis.filter(
            (materi) =>
                materi.mapel_id == selectedMapel &&
                materi.mapels.class_id == selectedClass
        );
    } else if (selectedClass) {
        filteredMateris = materis.filter(
            (materi) => materi.mapels.class_id == selectedClass
        );
    } else {
        filteredMateris = materis.filter(
            (materi) => materi.mapel_id == selectedMapel
        );
    }

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <div className="flex justify-between">
                <div className="flex items-center gap-5 mb-6">
                    <FilterLabel label="Kelas" />
                    <DropdownField
                        hideLabel
                        color="text-black"
                        placeholder="Kelas"
                        value={
                            classes.find(
                                (classItem) => classItem.id === selectedClass
                            )?.name
                        }
                    >
                        {classes.map((classItem) => {
                            return (
                                <DropdownItem
                                    option={classItem.name}
                                    onClick={() =>
                                        setSelectedClass(classItem.id)
                                    }
                                />
                            );
                        })}
                    </DropdownField>
                </div>
                <div className="flex items-center gap-5 mb-6">
                    <FilterLabel label="Mata Pelajaran" />
                    <DropdownField
                        hideLabel
                        color="text-black"
                        placeholder="Mata Pelajaran"
                        value={
                            mapels.find((mapel) => mapel.id === selectedMapel)
                                ?.name
                        }
                    >
                        {mapels.map((mapel) => {
                            return (
                                <DropdownItem
                                    option={mapel.name}
                                    onClick={() => setSelectedMapel(mapel.id)}
                                />
                            );
                        })}
                    </DropdownField>
                </div>
            </div>

            <MateriIndexTemplate>
                {filteredMateris.length != 0
                    ? filteredMateris.map((materi, index) => {
                          return (
                              <MateriCard
                                  key={index}
                                  cover={materi.cover}
                                  desc={materi.desc}
                                  link={route("materi-guru.show", materi.id)}
                              />
                          );
                      })
                    : materis.map((materi, index) => {
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
