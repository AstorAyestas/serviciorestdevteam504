
import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
const prisma = new PrismaClient({ log: ['query', 'info'] })

export const GETStudents = async (request: Request, response: Response) => {
    const students = await prisma.student.findMany()
    response.status(200).json(students)
}

export const GETStudent = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const student = await prisma.student.findUnique({
        where: { id: id }
    })
    if (student) {
        response.status(200).json(student)
    }
    else
        response.status(404).json({ message: `Student by id ${id} not found` })

}

export const POSTStudent = async (request: Request, response: Response) => {
    const { body } = request
    const student = await prisma.student.create({ data: body })
    response.status(201).json(student)
}

export const PATCHStudent = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const { body } = request
    const student = await prisma.student.update({
        where: { id },
        data: { status: body.status }
    })
    response.status(200).json(student)
}