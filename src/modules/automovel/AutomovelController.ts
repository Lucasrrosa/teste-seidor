import { Request, Response } from "express"
import { automovelDb } from "../../models/db"
import { IAutomovel } from "../../models/interfaces"


export const AutomovelController = {
    getAutomovelList: (req: Request, res: Response<IAutomovel[]>) => {
        const response = automovelDb.getList()
        res.json(response)
    },
    getAutomovelById: (req: Request<{ id: number }>, res: Response<IAutomovel>) => {
        const response = automovelDb.findById(+req.params.id)
        res.json(response)
    },
    createAutomovel: (req: Request<undefined, IAutomovel>, res: Response<IAutomovel>) => {
        const response = automovelDb.create(req.body)
        res.status(201).json(response)
    },
    updateAutomovel: (req: Request<{ id: number }, IAutomovel>, res: Response<IAutomovel>) => {
        const response = automovelDb.edit(+req.params.id, req.body)
        res.status(200).json(response)
    },
    deleteAutomovel: (req: Request<{ id: number }>, res: Response<IAutomovel>) => {
        automovelDb.delete(+req.params.id)
        res.status(200)
    },

}
