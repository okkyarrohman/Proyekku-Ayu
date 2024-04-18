import DropdownItem from "@/Components/General/atoms/DropdownItem";
import FilterLabel from "@/Components/General/atoms/FilterLabel";
import DropdownField from "@/Components/General/molecules/DropdownField";
import MateriCard from "@/Components/Materi/molecules/MateriCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function MateriIndex({ auth }) {
    const { materis, mapels } = usePage().props;

    const [selectedMapel, setSelectedMapel] = useState();

    const filteredMateris = materis.filter(
        (materi) => materi.mapel_id == selectedMapel
    );

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <div className="flex items-center justify-end gap-5 mb-6">
                <FilterLabel label="Mata Pelajaran" />
                <DropdownField
                    hideLabel
                    color="text-black"
                    placeholder="Mata Pelajaran"
                    value={
                        mapels.find((mapel) => mapel.id === selectedMapel)?.name
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

            <MateriIndexTemplate>
                {filteredMateris.length != 0
                    ? filteredMateris.map((materi, index) => {
                          return (
                              <MateriCard
                                  key={index}
                                  cover={materi.cover}
                                  desc={materi.desc}
                                  link={route("materi.show", materi.id)}
                              />
                          );
                      })
                    : materis.map((materi, index) => {
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
