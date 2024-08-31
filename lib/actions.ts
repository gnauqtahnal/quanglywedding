'use server'

import prisma from './prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  wish: z.string(),
  join: z.string(),
  date: z.string(),
})

const CreateReservation = FormSchema.omit({ id: true, date: true })

export const createReservationForm = async (formData: FormData) => {
  const { name, wish, join } = CreateReservation.parse({
    name: formData.get('name') || '',
    wish: formData.get('wish') || '',
    join: formData.get('join') || '',
  })

  try {
    await prisma.reservation.create({
      data: {
        name: name,
        wish: wish || '',
        join: join === 'join' ? true : false,
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to create reservation.',
    }
  }

  revalidatePath('/')
  redirect('/')
}
