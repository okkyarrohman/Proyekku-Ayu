<?php

namespace App\Exports;

use App\Models\Absensi;
use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\BeforeSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class AbsensiExport implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles, WithEvents
{
    /**
    * @return \Illuminate\Support\Collection
    */
    protected $classId;
    protected $absenId;

    public function __construct($classId, $absenId)
    {
        $this->classId = $classId;
        $this->absenId = $absenId;
    }

    public function collection()
    {
        $users = User::where('role', 'murid')
                    ->where('class_id', $this->classId)
                    ->with(['absen_users' => function($query) {
                        $query->where('absen_id', $this->absenId);
                    }])
                    ->get();

        $absens = Absensi::where('id', $this->absenId)->with(['classes', 'mapels', 'user_presents.users'])->first();

        $mappedDatas = $users->map(function ($user, $index) use ($absens) {
            $keterangan = $user->absen_users->isNotEmpty() ? "Hadir" : "Tidak Hadir";

            return [
                'No' => $index + 1,
                'Tanggal' => $absens->date,
                'Kelas' => $absens->classes->name,
                'Nama' => $user->name,
                'Mata Pelajaran' => $absens->mapels->name,
                'Pertemuan Ke' => $absens->meeting,
                'Keterangan' => $keterangan
            ];
        });

        return $mappedDatas;
    }

    public function headings(): array
    {
        return [
            'No',
            'Tanggal',
            'Kelas',
            'Nama',
            'Mata Pelajaran',
            'Pertemuan Ke',
            'Keterangan'
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1    => ['font' => ['bold' => true]],
        ];
    }

    public function registerEvents(): array {
        return [
            BeforeSheet::class => function (BeforeSheet $event) {
                $event->sheet
                    ->getPageSetup()
                    ->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);
            },
        ];
    }
}
