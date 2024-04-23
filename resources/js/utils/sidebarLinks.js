export const muridSidebarItems = [
    {
        name: "Dashboard",
        link: route("dashboard.murid"),
        icon: "clarity:dashboard-solid",
        url: "/murid/dashboard",
    },
    {
        name: "Ruang Proyek",
        link: route("ruangProyek.murid"),
        icon: "ic:baseline-task",
        url: "/murid/ruang-proyek",
    },
    {
        name: "Laporan",
        link: route("laporan.murid"),
        icon: "streamline:graph-bar-increase-solid",
        url: "/murid/laporan",
    },
    {
        name: "Pengaturan",
        link: route("pengaturan.index"),
        icon: "fa6-solid:gear",
        url: "/pengaturan",
    },
];

export const guruSidebarItems = [
    {
        name: "Dashboard",
        link: route("dashboard.guru"),
        icon: "clarity:dashboard-solid",
        url: "/guru/dashboard",
    },
    {
        name: "Ruang Proyek",
        link: route("ruangProyek.guru"),
        icon: "ic:baseline-task",
        url: "/guru/ruang-proyek",
    },
    {
        name: "Laporan",
        link: route("laporan.guru"),
        icon: "streamline:graph-bar-increase-solid",
        url: "/guru/laporan",
    },
    {
        name: "Pengaturan",
        link: route("pengaturan.index"),
        icon: "fa6-solid:gear",
        url: "/pengaturan",
    },
];

export const adminSidebarItems = [
    {
        name: "Dashboard",
        link: route("dashboard.admin"),
        icon: "clarity:dashboard-solid",
        url: "/admin/dashboard",
    },
    {
        name: "Data Master",
        link: route("dataMaster.admin"),
        icon: "gravity-ui:database-fill",
        url: "/admin/data-master",
    },
    {
        name: "Pengaturan",
        link: route("pengaturan.index"),
        icon: "fa6-solid:gear",
        url: "/pengaturan",
    },
];
