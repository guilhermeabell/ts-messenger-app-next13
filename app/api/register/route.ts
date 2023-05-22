import bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,

) {
  const body = await request.json()
  const { email, name, password } = body

  if (!email || !name || !password) {
    return new NextResponse('Missing info', { status: 400 })
  }
}
