import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { data: null, message: 'Email já está em uso' },
        { status: 409 },
      );
    }

    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        { data: null, message: 'Nome de usuário já está em uso' },
        { status: 409 },
      );
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });

    return NextResponse.json(
      { data: newUser, message: 'Usuário criado com sucesso' },
      { status: 201 },
    );
  } catch (e) {}
}
