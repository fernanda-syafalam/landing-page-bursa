import { Dot } from 'lucide-react';
import React from 'react';

const listCatatan = [
  'Data Nilai Transaksi (Rp), Volume, dan Frekuensi diperoleh dari laporan anggota IGX.',
  'Harga yang ditampilkan merupakan harga penutupan acuan harian pada pukul 23:59 WIB dan bukan harga acuan perdagangan real-time.',
  'Data hari Jumat, Sabtu, Minggu, hari libur nasional, dan hari cuti bersama akan ditampilkan pada hari kerja berikutnya.',
  'Terakhir diperbarui pada tanggal 29 Agustus 2025 pukul 08.19 WIB.',
  'Seluruh informasi yang ditampilkan semata-mata sebagai sarana penyebaran informasi perdagangan aset kripto. ',
  'Penggunaan informasi tersebut oleh pengguna sepenuhnya merupakan risiko dan tanggung jawab pengguna.'
];

const CatatanSection = () => {
  return (
    <section className="w-full text-muted-foreground text-sm my-20">
      <div className="container-custom">
        <p>Catatan:</p>
        <ul>
          {listCatatan.map((item, index) => (
            <li key={index} className="mt-2 flex items-start align-baseline">
              <Dot size={20} strokeWidth={5} absoluteStrokeWidth />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CatatanSection;
