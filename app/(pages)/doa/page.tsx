import type { Metadata } from "next";
import { getDoaList } from "@/app/lib/quran";
import { DoaCard } from "@/app/components/DoaCard";

export const metadata: Metadata = {
  title: "Doa Harian — Al-Qur'an Digital by Faza",
  description: "Kumpulan doa harian lengkap dengan teks Arab, latin, dan terjemahan Bahasa Indonesia.",
};

export const revalidate = 86400;

export default async function DoaPage() {
  const doaList = await getDoaList();

  return (
    <div className="section-container py-10 space-y-8">
      <div className="space-y-1">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium">
          Doa Harian
        </p>
        <h1 className="text-2xl font-bold text-stone-900">Doa Sehari-hari</h1>
        <p className="text-sm text-stone-500">
          {doaList.length} doa lengkap dengan teks Arab, latin, dan terjemahan.
        </p>
      </div>

      <div className="space-y-2">
        {doaList.map((doa) => (
          <DoaCard key={doa.id} doa={doa} />
        ))}
      </div>
    </div>
  );
}
