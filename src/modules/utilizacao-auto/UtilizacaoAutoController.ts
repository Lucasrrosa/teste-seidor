import { Request, Response } from "express"
import { IUtilizacaoAuto } from "../../models/interfaces"
import { IUtilizacaoAutoListItem } from "./IUtilizacaoAutoListItem"
import { UtilizacaoAutoService } from "./UtilizacaoAutoService"

export const UtilizacaoAutoController = {
    getUtilizacaoAutoList: (req: Request, res: Response<IUtilizacaoAutoListItem[]>) => {
        const list = UtilizacaoAutoService.listUtilizacaoAuto()
        res.status(200).json(list)
    },
    finalizaUtilizacaoAuto: (req: Request<{ id: number }>, res: Response<IUtilizacaoAuto | string>) => {
        const newItem = UtilizacaoAutoService.finalizaUtilizacaoAuto(+req.params.id)

        if (newItem)
            res.status(200).json(newItem)
        else
            res.status(404).send('Registro não existente')

    },
    createUtilizacaoAuto: (req: Request<undefined, IUtilizacaoAuto>, res: Response<IUtilizacaoAuto | string>) => {
        const newItem = UtilizacaoAutoService.createUtilizacaoAuto(req.body)

        if (newItem)
            res.status(200).json(newItem)
        else
            res.status(403).send('Não foi possivel registrar utilizacao do automovel, motorista e/ou automovel ocupados')
    }
}