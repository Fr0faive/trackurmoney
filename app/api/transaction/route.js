// url: https://example.com/api/posts

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description } = body;

    const newTransaction = await prisma.transaction.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(newTransaction);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const transactions = await prisma.transaction.findMany();
    return NextResponse.json(transactions);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", error },
      { status: 500 }
    );
  }
};
