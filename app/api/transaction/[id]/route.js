// url: https://example.com/api/posts/[id]
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },
    });
    if (!transaction) {
      return NextResponse.json(
        { error: "transaction not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(transaction);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when fetching", error },
      { status: 500 }
    );
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const body = await req.json();

    const {
      nama,
      jumlah,
      kategori,
      tanggal,
      metodePembayaran,
      lokasi,
      catatanTambahan,
    } = body;

    const { id } = params;

    const updateTransaction = await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        nama,
        jumlah,
        kategori,
        tanggal,
        metodePembayaran,
        lokasi,
        catatanTambahan,
      },
    });
    if (!updateTransaction) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updateTransaction);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when updating", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Task deleted successfully");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when deleting", error },
      { status: 500 }
    );
  }
};
