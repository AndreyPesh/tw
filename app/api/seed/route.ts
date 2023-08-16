import { main } from "@/prisma/seed"
import { NextResponse } from "next/server"

const seedHandler = async () => {
  try {
    // await main()
    return NextResponse.json('data added')
  } catch(error) {
    return NextResponse.json({error})
  }
}

export {seedHandler as GET}