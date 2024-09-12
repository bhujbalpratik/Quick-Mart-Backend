import { Request, Response } from "express"

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(`User : `, req.body)
  } catch (error) {
    console.log("Error while create User : ", error)
  }
}
