import { Meteors } from "../components/ui/meteors.tsx";
import { BackgroundRippleEffect } from "../components/ui/BackgroundRipple.jsx";

function CreateRoom() {
  return (
    <div className="relative">
      <Meteors number={50} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#51146c] p-6">
      <div className="bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-warning">
          Buat Game Baru
        </h1>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Nama Quiz</legend>
              <input type="text" placeholder="Nama Quiz" className="input input-bordered w-full" />
            </fieldset>

            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Pilih Jenjang</legend>
              <select className="select select-bordered w-full">
                <option disabled selected>Pilih jenjang</option>
                <option>SMA</option>
                <option>SMP</option>
                <option>SD</option>
              </select>
            </fieldset>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Pilih Modul</legend>
              <select className="select select-bordered w-full">
                <option disabled selected>Pilih modul</option>
                <option>IPA</option>
                <option>IPS</option>
                <option>MTK</option>
              </select>
            </fieldset>

            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Jumlah Soal</legend>
              <input type="number" placeholder="Jumlah Soal" className="input input-bordered w-full" />
            </fieldset>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Poin Jawaban Benar</legend>
              <select className="select select-bordered w-full">
                <option disabled selected>Pilih poin</option>
                <option>+5</option>
                <option>+10</option>
                <option>+15</option>
              </select>
            </fieldset>

            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Poin Jawaban Salah</legend>
              <select className="select select-bordered w-full">
                <option disabled selected>Pilih poin</option>
                <option>-5</option>
                <option>-10</option>
                <option>-15</option>
              </select>
            </fieldset>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Durasi Quiz (menit)</legend>
              <input type="number" placeholder="Durasi Quiz" className="input input-bordered w-full" />
            </fieldset>

            <button className="btn btn-info px-10 mb-1">Buat</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateRoom;
