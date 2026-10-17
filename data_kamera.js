const SNAPSHOT_BASE_URL = "https://cctv-kanwil.tailfc814d.ts.net/snapshot";
const STREAM_BASE_URL = "https://cctv-kanwil.tailfc814d.ts.net";

const INITIAL_CCTV_DATA = [
    // =========================================================
    // 1. KANWIL DITJENPAS KALSEL — 8 KAMERA
    // =========================================================
    { id: "cctv-1", nama: "Lorong Utama", path: "kamera_banjar", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-2", nama: "Lobby", path: "kamera_banjar2", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-3", nama: "Lorong Belakang", path: "kamera_banjar3", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-4", nama: "Lapangan Utama", path: "kamera_banjar4", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-5", nama: "Ruang Aula", path: "kamera_banjar5", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-6", nama: "Ruang Arsip", path: "kamera_banjar6", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-7", nama: "Parkiran Kanan", path: "kamera_banjar7", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },
    { id: "cctv-8", nama: "Parkiran Kiri", path: "kamera_banjar8", grup: "Kanwil Ditjenpas Kalsel", kota: "Banjarmasin" },

    // =========================================================
    // 2. LPP KELAS IIA MARTAPURA — 10 KAMERA
    // =========================================================
    { id: "cctv-9", nama: "LPP Martapura Kamera 1", path: "kamera_lppmartapura1", snapshot: "kamera_martapura1", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-10", nama: "LPP Martapura Kamera 2", path: "kamera_lppmartapura2", snapshot: "kamera_martapura2", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-11", nama: "LPP Martapura Kamera 3", path: "kamera_lppmartapura3", snapshot: "kamera_martapura3", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-12", nama: "LPP Martapura Kamera 4", path: "kamera_lppmartapura4", snapshot: "kamera_martapura4", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-13", nama: "LPP Martapura Kamera 5", path: "kamera_lppmartapura5", snapshot: "kamera_martapura5", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-14", nama: "LPP Martapura Kamera 6", path: "kamera_lppmartapura6", snapshot: "kamera_martapura6", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-15", nama: "LPP Martapura Kamera 7", path: "kamera_lppmartapura7", snapshot: "kamera_martapura7", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-16", nama: "LPP Martapura Kamera 8", path: "kamera_lppmartapura8", snapshot: "kamera_martapura8", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-17", nama: "LPP Martapura Kamera 9", path: "kamera_lppmartapura9", snapshot: "kamera_martapura9", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },
    { id: "cctv-18", nama: "LPP Martapura Kamera 10", path: "kamera_lppmartapura10", snapshot: "kamera_martapura10", grup: "LPP Kelas IIA Martapura", kota: "Martapura" },

    // =========================================================
    // 3. RUTAN KELAS IIB MARABAHAN — 10 KAMERA
    // =========================================================
    { id: "cctv-19", nama: "Rutan Marabahan Kamera 1", path: "kamera_marabahan1", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-20", nama: "Rutan Marabahan Kamera 2", path: "kamera_marabahan2", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-21", nama: "Rutan Marabahan Kamera 3", path: "kamera_marabahan3", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-22", nama: "Rutan Marabahan Kamera 4", path: "kamera_marabahan4", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-23", nama: "Rutan Marabahan Kamera 5", path: "kamera_marabahan5", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-24", nama: "Rutan Marabahan Kamera 6", path: "kamera_marabahan6", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-25", nama: "Rutan Marabahan Kamera 7", path: "kamera_marabahan7", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-26", nama: "Rutan Marabahan Kamera 8", path: "kamera_marabahan8", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-27", nama: "Rutan Marabahan Kamera 9", path: "kamera_marabahan9", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },
    { id: "cctv-28", nama: "Rutan Marabahan Kamera 10", path: "kamera_marabahan10", grup: "Rutan Kelas IIB Marabahan", kota: "Marabahan" },

    // =========================================================
    // 4. LAPAS KELAS IIA BANJARMASIN — 10 KAMERA
    // =========================================================
    { id: "cctv-29", nama: "Kamera 1 Lapas Banjarmasin", path: "kamera_lapasbanjar1", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-30", nama: "Kamera 2 Lapas Banjarmasin", path: "kamera_lapasbanjar2", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-31", nama: "Kamera 3 Lapas Banjarmasin", path: "kamera_lapasbanjar3", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-32", nama: "Kamera 4 Lapas Banjarmasin", path: "kamera_lapasbanjar4", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-33", nama: "Kamera 5 Lapas Banjarmasin", path: "kamera_lapasbanjar5", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-34", nama: "Kamera 6 Lapas Banjarmasin", path: "kamera_lapasbanjar6", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-35", nama: "Kamera 7 Lapas Banjarmasin", path: "kamera_lapasbanjar7", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-36", nama: "Kamera 8 Lapas Banjarmasin", path: "kamera_lapasbanjar8", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-37", nama: "Kamera 9 Lapas Banjarmasin", path: "kamera_lapasbanjar9", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-38", nama: "Kamera 10 Lapas Banjarmasin", path: "kamera_lapasbanjar10", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-29-11", nama: "Kamera 11 Lapas Banjarmasin", path: "kamera_lapasbanjar11", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-29-12", nama: "Kamera 12 Lapas Banjarmasin", path: "kamera_lapasbanjar12", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-29-13", nama: "Kamera 13 Lapas Banjarmasin", path: "kamera_lapasbanjar13", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },
    { id: "cctv-29-14", nama: "Kamera 14 Lapas Banjarmasin", path: "kamera_lapasbanjar14", grup: "Lapas Kelas IIA Banjarmasin", kota: "Banjarmasin" },

    // =========================================================
    // 5. RUTAN KELAS IIB RANTAU — 16 KAMERA
    // =========================================================
    { id: "cctv-39", nama: "Kamera 1 Rutan Rantau", path: "kamera_rutanrantau1", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-40", nama: "Kamera 2 Rutan Rantau", path: "kamera_rutanrantau2", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-41", nama: "Kamera 3 Rutan Rantau", path: "kamera_rutanrantau3", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-42", nama: "Kamera 4 Rutan Rantau", path: "kamera_rutanrantau4", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-43", nama: "Kamera 5 Rutan Rantau", path: "kamera_rutanrantau5", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-44", nama: "Kamera 6 Rutan Rantau", path: "kamera_rutanrantau6", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-45", nama: "Kamera 7 Rutan Rantau", path: "kamera_rutanrantau7", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-46", nama: "Kamera 8 Rutan Rantau", path: "kamera_rutanrantau8", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-47", nama: "Kamera 9 Rutan Rantau", path: "kamera_rutanrantau9", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-48", nama: "Kamera 10 Rutan Rantau", path: "kamera_rutanrantau10", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-49", nama: "Kamera 11 Rutan Rantau", path: "kamera_rutanrantau11", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-50", nama: "Kamera 12 Rutan Rantau", path: "kamera_rutanrantau12", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-51", nama: "Kamera 13 Rutan Rantau", path: "kamera_rutanrantau13", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-52", nama: "Kamera 14 Rutan Rantau", path: "kamera_rutanrantau14", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-53", nama: "Kamera 15 Rutan Rantau", path: "kamera_rutanrantau15", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },
    { id: "cctv-54", nama: "Kamera 16 Rutan Rantau", path: "kamera_rutanrantau16", grup: "Rutan Kelas IIB Rantau", kota: "Rantau" },

    // =========================================================
    // 6. LAPAS KELAS IIB AMUNTAI — 10 KAMERA
    // =========================================================
    { id: "cctv-55-1", nama: "Kamera 1 Lapas Amuntai", path: "kamera_amuntai1", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-2", nama: "Kamera 2 Lapas Amuntai", path: "kamera_amuntai2", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-3", nama: "Kamera 3 Lapas Amuntai", path: "kamera_amuntai3", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-4", nama: "Kamera 4 Lapas Amuntai", path: "kamera_amuntai4", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-5", nama: "Kamera 5 Lapas Amuntai", path: "kamera_amuntai5", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-6", nama: "Kamera 6 Lapas Amuntai", path: "kamera_amuntai6", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-7", nama: "Kamera 7 Lapas Amuntai", path: "kamera_amuntai7", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-8", nama: "Kamera 8 Lapas Amuntai", path: "kamera_amuntai8", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-9", nama: "Kamera 9 Lapas Amuntai", path: "kamera_amuntai9", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },
    { id: "cctv-55-10", nama: "Kamera 10 Lapas Amuntai", path: "kamera_amuntai10", grup: "Lapas Kelas IIB Amuntai", kota: "Amuntai" },

    // =========================================================
    // 7. LPKA KELAS I MARTAPURA — 8 KAMERA
    // =========================================================
    { id: "cctv-56", nama: "Kamera 1 LPKA Martapura", path: "kamera_lpkamartapura1", grup: "LPKA Kelas I Martapura", kota: "Martapura" },
    { id: "cctv-57", nama: "Kamera 2 LPKA Martapura", path: "kamera_lpkamartapura2", grup: "LPKA Kelas I Martapura", kota: "Martapura" },
    { id: "cctv-58", nama: "Kamera 3 LPKA Martapura", path: "kamera_lpkamartapura3", grup: "LPKA Kelas I Martapura", kota: "Martapura" },
    { id: "cctv-59", nama: "Kamera 4 LPKA Martapura", path: "kamera_lpkamartapura4", grup: "LPKA Kelas I Martapura", kota: "Martapura" },
    
    // =========================================================
    // 8. RUTAN KELAS IIB PELAIHARI — 16 KAMERA
    // =========================================================
    { id: "cctv-64", nama: "Kamera 1 Rutan Pelaihari", path: "kamera_pelaihari1", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-65", nama: "Kamera 2 Rutan Pelaihari", path: "kamera_pelaihari2", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-66", nama: "Kamera 3 Rutan Pelaihari", path: "kamera_pelaihari3", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-67", nama: "Kamera 4 Rutan Pelaihari", path: "kamera_pelaihari4", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-68", nama: "Kamera 5 Rutan Pelaihari", path: "kamera_pelaihari5", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-69", nama: "Kamera 6 Rutan Pelaihari", path: "kamera_pelaihari6", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-70", nama: "Kamera 7 Rutan Pelaihari", path: "kamera_pelaihari7", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-71", nama: "Kamera 8 Rutan Pelaihari", path: "kamera_pelaihari8", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-72", nama: "Kamera 9 Rutan Pelaihari", path: "kamera_pelaihari9", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-73", nama: "Kamera 10 Rutan Pelaihari", path: "kamera_pelaihari10", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-74", nama: "Kamera 11 Rutan Pelaihari", path: "kamera_pelaihari11", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-75", nama: "Kamera 12 Rutan Pelaihari", path: "kamera_pelaihari12", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-76", nama: "Kamera 13 Rutan Pelaihari", path: "kamera_pelaihari13", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-77", nama: "Kamera 14 Rutan Pelaihari", path: "kamera_pelaihari14", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-78", nama: "Kamera 15 Rutan Pelaihari", path: "kamera_pelaihari15", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },
    { id: "cctv-79", nama: "Kamera 16 Rutan Pelaihari", path: "kamera_pelaihari16", grup: "Rutan Kelas IIB Pelaihari", kota: "Pelaihari" },

    // =========================================================
    // 9. RUTAN KELAS IIB TANJUNG — 20 KAMERA
    // =========================================================
    { id: "cctv-80", nama: "Kamera 1 Rutan Tanjung", path: "kamera_rutantanjung1", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-81", nama: "Kamera 2 Rutan Tanjung", path: "kamera_rutantanjung2", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-82", nama: "Kamera 3 Rutan Tanjung", path: "kamera_rutantanjung3", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-83", nama: "Kamera 4 Rutan Tanjung", path: "kamera_rutantanjung4", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-84", nama: "Kamera 5 Rutan Tanjung", path: "kamera_rutantanjung5", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-85", nama: "Kamera 6 Rutan Tanjung", path: "kamera_rutantanjung6", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-86", nama: "Kamera 7 Rutan Tanjung", path: "kamera_rutantanjung7", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-87", nama: "Kamera 8 Rutan Tanjung", path: "kamera_rutantanjung8", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-88", nama: "Kamera 9 Rutan Tanjung", path: "kamera_rutantanjung9", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-89", nama: "Kamera 10 Rutan Tanjung", path: "kamera_rutantanjung10", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-90", nama: "Kamera 11 Rutan Tanjung", path: "kamera_rutantanjung11", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-91", nama: "Kamera 12 Rutan Tanjung", path: "kamera_rutantanjung12", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-92", nama: "Kamera 13 Rutan Tanjung", path: "kamera_rutantanjung13", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-93", nama: "Kamera 14 Rutan Tanjung", path: "kamera_rutantanjung14", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-94", nama: "Kamera 15 Rutan Tanjung", path: "kamera_rutantanjung15", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-95", nama: "Kamera 16 Rutan Tanjung", path: "kamera_rutantanjung16", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-80-17", nama: "Kamera 17 Rutan Tanjung", path: "kamera_rutantanjung17", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-80-18", nama: "Kamera 18 Rutan Tanjung", path: "kamera_rutantanjung18", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-80-19", nama: "Kamera 19 Rutan Tanjung", path: "kamera_rutantanjung19", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },
    { id: "cctv-80-20", nama: "Kamera 20 Rutan Tanjung", path: "kamera_rutantanjung20", grup: "Rutan Kelas IIB Tanjung", kota: "Tanjung" },

    // =========================================================
    // 10. LAPAS KELAS III BATULICIN — 8 KAMERA
    // =========================================================
    { id: "cctv-96", nama: "Kamera 1 Lapas Batulicin", path: "kamera_lapasbatulicin1", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-97", nama: "Kamera 2 Lapas Batulicin", path: "kamera_lapasbatulicin2", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-98", nama: "Kamera 3 Lapas Batulicin", path: "kamera_lapasbatulicin3", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-99", nama: "Kamera 4 Lapas Batulicin", path: "kamera_lapasbatulicin4", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-100", nama: "Kamera 5 Lapas Batulicin", path: "kamera_lapasbatulicin5", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-101", nama: "Kamera 6 Lapas Batulicin", path: "kamera_lapasbatulicin6", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-102", nama: "Kamera 7 Lapas Batulicin", path: "kamera_lapasbatulicin7", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },
    { id: "cctv-103", nama: "Kamera 8 Lapas Batulicin", path: "kamera_lapasbatulicin8", grup: "Lapas Kelas III Batulicin", kota: "Batulicin" },

    // =========================================================
    // 11. RUTAN KELAS IIB BARABAI — 8 KAMERA
    // =========================================================
    { id: "cctv-104", nama: "Kamera 1 Rutan Barabai", path: "kamera_barabai1", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-105", nama: "Kamera 2 Rutan Barabai", path: "kamera_barabai2", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-106", nama: "Kamera 3 Rutan Barabai", path: "kamera_barabai3", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-107", nama: "Kamera 4 Rutan Barabai", path: "kamera_barabai4", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-108", nama: "Kamera 5 Rutan Barabai", path: "kamera_barabai5", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-109", nama: "Kamera 6 Rutan Barabai", path: "kamera_barabai6", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-110", nama: "Kamera 7 Rutan Barabai", path: "kamera_barabai7", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },
    { id: "cctv-111", nama: "Kamera 8 Rutan Barabai", path: "kamera_barabai8", grup: "Rutan Kelas IIB Barabai", kota: "Barabai" },

    // =========================================================
    // 12. LAPAS KELAS IIB BANJARBARU — 8 KAMERA
    // =========================================================
    { id: "cctv-112", nama: "Kamera 1 Lapas Banjarbaru", path: "kamera_banjarbaru1", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-113", nama: "Kamera 2 Lapas Banjarbaru", path: "kamera_banjarbaru2", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-114", nama: "Kamera 3 Lapas Banjarbaru", path: "kamera_banjarbaru3", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-115", nama: "Kamera 4 Lapas Banjarbaru", path: "kamera_banjarbaru4", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-116", nama: "Kamera 5 Lapas Banjarbaru", path: "kamera_banjarbaru5", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-117", nama: "Kamera 6 Lapas Banjarbaru", path: "kamera_banjarbaru6", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-118", nama: "Kamera 7 Lapas Banjarbaru", path: "kamera_banjarbaru7", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" },
    { id: "cctv-119", nama: "Kamera 8 Lapas Banjarbaru", path: "kamera_banjarbaru8", grup: "Lapas Kelas IIB Banjarbaru", kota: "Banjarbaru" }
];

// Normalisasi otomatis streamUrl, snapshotUrl, dan status
INITIAL_CCTV_DATA.forEach(c => {
    if (!c.streamUrl && c.path) {
        c.streamUrl = `${STREAM_BASE_URL}/${c.path}/index.m3u8`;
    }
    if (!c.snapshotUrl) {
        const snapName = c.snapshot || c.path;
        if (snapName) c.snapshotUrl = `${SNAPSHOT_BASE_URL}/${snapName}.jpg`;
    }
    if (!c.status) c.status = "connecting";
});

// Label pemilih "semua UPT"
const ALL_UPT = "Semua UPT";

// Urutan tampilan UPT pada pemilih dashboard
const GROUP_LIST = [
    "Kanwil Ditjenpas Kalsel",
    "LPP Kelas IIA Martapura",
    "Rutan Kelas IIB Marabahan",
    "Lapas Kelas IIA Banjarmasin",
    "Rutan Kelas IIB Rantau",
    "Lapas Kelas IIB Amuntai",
    "LPKA Kelas I Martapura",
    "Rutan Kelas IIB Pelaihari",
    "Rutan Kelas IIB Tanjung",
    "Lapas Kelas IIB Tanjung",
    "Lapas Kelas III Batulicin",
    "Lapas Narkotika Kelas IIA Karang Intan",
    "Rutan Kelas IIB Kandangan",
    "Rutan Kelas IIB Barabai",
    "Lapas Kelas IIA Kotabaru",
    "Lapas Kelas IIB Banjarbaru",
    "Bapas Kelas II Amuntai",
    "Bapas Kelas II Batulicin"
];