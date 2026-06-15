// ─── Prayer Times ───────────────────────────────────────────────────────────
export interface PrayerTimings {
  Fajr:    string;
  Sunrise: string;
  Dhuhr:   string;
  Asr:     string;
  Maghrib: string;
  Isha:    string;
  Imsak:   string;
  Midnight: string;
}

export interface PrayerDate {
  readable: string;
  timestamp: string;
  hijri: {
    date: string;
    day: string;
    month: { number: number; en: string; ar: string };
    year: string;
    weekday: { en: string; ar: string };
  };
  gregorian: {
    date: string;
    day: string;
    month: { number: number; en: string };
    year: string;
    weekday: { en: string };
  };
}

export interface PrayerData {
  timings: PrayerTimings;
  date: PrayerDate;
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: { id: number; name: string };
  };
}

// ─── Surah ───────────────────────────────────────────────────────────────────
export interface SurahListItem {
  nomor:           number;
  nama:            string;
  namaLatin:       string;
  jumlahAyat:      number;
  tempatTurun:     string;
  arti:            string;
  deskripsi:       string;
  audioFull:       Record<string, string>;
}

export interface Ayah {
  nomorAyat:   number;
  teksArab:    string;
  teksLatin:   string;
  teksIndonesia: string;
  audio:       Record<string, string>;
}

export interface SurahDetail extends SurahListItem {
  ayat: Ayah[];
  suratSelanjutnya: { nomor: number; namaLatin: string; nama: string } | false;
  suratSebelumnya:  { nomor: number; namaLatin: string; nama: string } | false;
}

// ─── Doa ─────────────────────────────────────────────────────────────────────
export interface DoaItem {
  id:          number;
  doa:         string;
  ayat:        string;
  latin:       string;
  artinya:     string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export type NavItem = {
  label: string;
  href:  string;
};
