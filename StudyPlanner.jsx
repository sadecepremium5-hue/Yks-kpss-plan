
import { useState } from "react";

export default function StudyPlanner() {
  const [progress, setProgress] = useState({
    matematik: 30,
    tarih: 15,
    biyoloji: 50,
    turkce: 20,
  });

  const program = [
    {
      gun: "Pazartesi",
      ders: "Matematik (YKS)",
      konu: "Fonksiyonlar",
      ilerleme: progress.matematik,
      test: "20 Soru Fonksiyonlar Testi",
      deneme: "TYT Matematik Mini Deneme"
    },
    {
      gun: "Salı",
      ders: "Tarih (KPSS)",
      konu: "Mondros Ateşkes Antlaşması",
      ilerleme: progress.tarih,
      test: "15 Soru Mondros Testi",
      deneme: "KPSS Genel Kültür Denemesi 1"
    },
    {
      gun: "Çarşamba",
      ders: "Biyoloji (YKS)",
      konu: "Mitoz ve Mayoz",
      ilerleme: progress.biyoloji,
      test: "25 Soru Hücre Bölünmeleri Testi",
      deneme: "AYT Biyoloji Deneme 1"
    },
    {
      gun: "Perşembe",
      ders: "Türkçe (KPSS)",
      konu: "Paragraf",
      ilerleme: progress.turkce,
      test: "20 Soru Paragraf Testi",
      deneme: "KPSS Türkçe Denemesi 1"
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📅 Haftalık Program</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Gün</th>
            <th className="border p-2">Ders</th>
            <th className="border p-2">Konu</th>
            <th className="border p-2">İlerleme</th>
            <th className="border p-2">Test</th>
            <th className="border p-2">Deneme</th>
          </tr>
        </thead>
        <tbody>
          {program.map((p, i) => (
            <tr key={i}>
              <td className="border p-2">{p.gun}</td>
              <td className="border p-2">{p.ders}</td>
              <td className="border p-2">{p.konu}</td>
              <td className="border p-2">
                <div className="w-full bg-gray-200 rounded">
                  <div
                    className="bg-green-500 text-xs text-white p-1 rounded"
                    style={{ width: `${p.ilerleme}%` }}
                  >
                    {p.ilerleme}%
                  </div>
                </div>
              </td>
              <td className="border p-2">{p.test}</td>
              <td className="border p-2">{p.deneme}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
