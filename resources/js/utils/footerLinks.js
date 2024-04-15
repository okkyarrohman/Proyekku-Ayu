export const guestLinkItems = [
    {
        title: "Beranda",
        sub: [
            { subtitle: "Home", link: "#home" },
            { subtitle: "Feature", link: "#feature" },
            { subtitle: "About", link: "#about" },
        ],
    },
    {
        title: "Bergabung",
        sub: [
            { subtitle: "Login", link: route("login") },
            { subtitle: "Register", link: route("register") },
        ],
    },
];

export const muridLinkItems = [
    {
        title: "Dashboard",
        sub: [{ subtitle: "Dashboard", link: route("dashboard.murid") }],
    },
    {
        title: "Ruang Proyek",
        sub: [
            { subtitle: "Materi", link: route("materi.index") },
            { subtitle: "Proyek", link: route("tugas.index") },
        ],
    },
    {
        title: "Laporan Belajar",
        sub: [{ subtitle: "Laporan", link: "#" }],
    },
];

export const guruLinkItems = [
    {
        title: "Dashboard",
        sub: [{ subtitle: "Dashboard", link: route("dashboard.guru") }],
    },
    {
        title: "Ruang Proyek",
        sub: [
            { subtitle: "Materi", link: route("materi-guru.index") },
            { subtitle: "Proyek", link: route("tugas-guru.index") },
        ],
    },
    {
        title: "Laporan Belajar",
        sub: [{ subtitle: "Laporan", link: "#" }],
    },
];

export const adminLinkItems = [
    {
        title: "Dashboard",
        sub: [{ subtitle: "Dashboard", link: "#" }],
    },
    {
        title: "Data Master",
        sub: [
            { subtitle: "Data Siswa", link: "#" },
            { subtitle: "Data Guru", link: "#" },
            { subtitle: "Data Mapel", link: "#" },
        ],
    },
];
