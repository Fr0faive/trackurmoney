"use client";
import { useState } from "react";
import Modal from "./Modal";

const AddTransaction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Tambah Catatan
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" action="">
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Masukkan Nama Transaksi"
            className="w-full p-2 my-5"
          />
          <input
            type="number"
            name="jumlah"
            id="jumlah"
            placeholder="Rp. 0"
            className="w-full p-2 my-5"
          />
          <input
            type="text"
            name="kategori"
            id="kategori"
            placeholder="Rp. 0"
            className="w-full p-2 my-5"
          />
          <input
            type="date"
            name="tanggal"
            id="tanggal"
            placeholder="Rp. 0"
            className="w-full p-2 my-5"
          />
          <input
            type="text"
            name="metodePembayaran"
            id="metodePembayaran"
            placeholder="Rp. 0"
            className="w-full p-2 my-5"
          />
          <input
            type="text"
            name="lokasi"
            id="lokasi"
            placeholder="Rp. 0"
            className="w-full p-2 my-5"
          />
        </form>
      </Modal>
    </div>
  );
};

export default AddTransaction;
