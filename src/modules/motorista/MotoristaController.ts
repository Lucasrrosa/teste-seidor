import { Request, Response } from "express"
import { motoristaDb } from "../../models/db"
import { IMotorista } from "../../models/interfaces"


export const MotoristaController = {
    getMotoristaList: (req: Request, res: Response<IMotorista[]>) => {
        const response = motoristaDb.getList()
        res.status(200).json(response)
    },
    getMotoristaById: (req: Request<{ id: number }>, res: Response<IMotorista>) => {
        const response = motoristaDb.findById(+req.params.id)
        res.status(200).json(response)
    },
    createMotorista: (req: Request<null, IMotorista>, res: Response<IMotorista>) => {
        const response = motoristaDb.create(req.body)
        res.status(201).json(response)
    },
    updateMotorista: (req: Request<{ id: number }, IMotorista>, res: Response<IMotorista>) => {
        const response = motoristaDb.edit(+req.params.id, req.body)
        res.status(200).json(response)
    },
    deleteMotorista: (req: Request<{ id: number }>, res: Response<string>) => {
        motoristaDb.delete(+req.params.id)
        res.status(200).send('Item removido com sucesso')
    },

}
