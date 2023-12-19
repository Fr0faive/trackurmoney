import React from "react";

const EditPage = () => {
  return (
    <div className="flex flex-col px-5 gap-5">
      <h1 className="text-3xl font-bold">
        <a href="/admin-crud">&larr;</a> Edit Catatan
      </h1>
      <form
        action=""
        className="border flex flex-col gap-3 border-black p-4 rounded-lg"
      >
        <label htmlFor="nama">Nama Catatan</label>
        <input
          type="text"
          name="nama"
          placeholder="Masukkan Nama"
          className="py-2 px-4 border rounded-lg"
        />
        <label htmlFor="jumlah">Jumlah uang</label>
        <input
          type="number"
          name="jumlah"
          placeholder="Masukkan jumlah"
          className="py-2 px-4 border rounded-lg"
        />
        <label htmlFor="kategori">Kategori Catatan</label>
        <input
          type="text"
          name="kategori"
          placeholder="Masukkan kategori"
          className="py-2 px-4 border rounded-lg"
        />
        <label htmlFor="tanggal">Tanggal Catatan</label>
        <input
          type="date"
          name="tanggal"
          placeholder="Masukkan tanggal"
          className="py-2 px-4 border rounded-lg"
        />
        <label htmlFor="metodePembayaran">Metode Pembayaran</label>
        <input
          type="text"
          name="metodePembayaran"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
        />
        <label htmlFor="lokasi">Lokasi</label>
        <input
          type="text"
          name="lokasi"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
        />
        <label htmlFor="catatanTambahan">Catatan Tambahan</label>
        <input
          type="text"
          name="catatanTambahan"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
        />
        {/* create back button */}
        <button
          type="submit"
          className="bg-blue-500 p-2 text-white rounded-md w-full"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default EditPage;
