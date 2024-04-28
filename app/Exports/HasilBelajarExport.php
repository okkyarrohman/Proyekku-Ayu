<?php

namespace App\Exports;

use App\Models\HasilBelajar;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class HasilBelajarExport implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */
    protected $classId;
    protected $mapelId;

    public function __construct($classId, $mapelId)
    {
        $this->classId = $classId;
        $this->mapelId = $mapelId;
    }

    public function collection()
    {
        $query = HasilBelajar::with(['users', 'classes', 'mapels']);

        if ($this->classId !== null && $this->mapelId !== null) {
            $query = $query->where('class_id', $this->classId)->where('mapel_id', $this->mapelId);
        } else if ($this->classId !== null) {
            $query = $query->where('class_id', $this->classId);
        } else if ($this->mapelId !== null) {
            $query = $query->where('mapel_id', $this->mapelId);
        }

        $hasilBelajars = $query->get();

        $mappedDatas = $hasilBelajars->map(function ($hasil, $index) {
            return [
                'No' => $index + 1,
                'Kelas' => $hasil->classes->name,
                'Nama' => $hasil->users->name,
                'Mata Pelajaran' => $hasil->mapels->name,
                'Nilai' => $hasil->grade,
                'Indeks' => $hasil->grade_index,
            ];
        });

        return $mappedDatas;
    }

    public function headings(): array
    {
        return [
            'No',
            'Kelas',
            'Nama',
            'Mata Pelajaran',
            'Nilai',
            'Indeks'
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1    => ['font' => ['bold' => true]],
        ];
    }
}
