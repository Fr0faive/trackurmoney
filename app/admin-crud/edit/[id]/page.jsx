"use client";
import React, { useState, useEffect } from "react";

// const getData = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/transaction/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const EditPage = async ({ params }) => {
  // const { id } = params;

  // useEffect(() => {
  //   setFormData(getData(id));
  // }, []);
  // const [formData, setFormData] = useState({
  //   nama: "",
  //   jumlah: 0,
  //   kategori: "",
  //   tanggal: "",
  //   metodePembayaran: "",
  //   lokasi: "",
  //   catatanTambahan: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add logic to update data with formData
  //   console.log(formData);
  // };
  return (
    <div className="flex flex-col px-5 gap-5">
      <h1 className="text-3xl font-bold">
        <a href="/admin-crud">&larr;</a> Edit Catatan
      </h1>
      <form
        // onSubmit={handleSubmit}
        className="border flex flex-col gap-3 border-black p-4 rounded-lg"
      >
        <label htmlFor="nama">Nama Catatan</label>
        <input
          type="text"
          name="nama"
          placeholder="Masukkan Nama"
          className="py-2 px-4 border rounded-lg"
          // value={formData.nama}
          // onChange={handleChange}
        />
        <label htmlFor="jumlah">Jumlah uang</label>
        <input
          type="number"
          name="jumlah"
          placeholder="Masukkan jumlah"
          className="py-2 px-4 border rounded-lg"
          // value={formData.jumlah}
          // onChange={handleChange}
        />
        <label htmlFor="kategori">Kategori Catatan</label>
        <input
          type="text"
          name="kategori"
          placeholder="Masukkan kategori"
          className="py-2 px-4 border rounded-lg"
          // value={formData.kategori}
          // onChange={handleChange}
        />
        <label htmlFor="tanggal">Tanggal Catatan</label>
        <input
          type="date"
          name="tanggal"
          placeholder="Masukkan tanggal"
          className="py-2 px-4 border rounded-lg"
          // value={formData.tanggal}
          // onChange={handleChange}
        />
        <label htmlFor="metodePembayaran">Metode Pembayaran</label>
        <input
          type="text"
          name="metodePembayaran"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
          // value={formData.metodePembayaran}
          // onChange={handleChange}
        />
        <label htmlFor="lokasi">Lokasi</label>
        <input
          type="text"
          name="lokasi"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
          // value={formData.lokasi}
          // onChange={handleChange}
        />
        <label htmlFor="catatanTambahan">Catatan Tambahan</label>
        <input
          type="text"
          name="catatanTambahan"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
          // value={formData.catatanTambahan}
          // onChange={handleChange}
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
