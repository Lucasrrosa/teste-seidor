import { automovelDb, motoristaDb, utilizacaoAutoDb } from "../../models/db"
import { IUtilizacaoAuto } from "../../models/interfaces"
import { IUtilizacaoAutoListItem } from "./IUtilizacaoAutoListItem"

export const UtilizacaoAutoService = {
    createUtilizacaoAuto: (data: IUtilizacaoAuto): IUtilizacaoAuto | false => {
        const list = utilizacaoAutoDb.getList()

        /** Verifica se existe uma utilização em conflito com o motorista ou automovel que não foi finalizada */
        const alreadyInUse = list.some(
            item => (
                (item.idAutomovel === +data.idAutomovel || item.idMotorista === +data.idMotorista)
                && !item.dataTermino)
        )

        if (!alreadyInUse) {
            const newItem = utilizacaoAutoDb.create({ ...data, dataInicio: new Date() })
            return newItem
        }
        return false
    },
    listUtilizacaoAuto: (): IUtilizacaoAutoListItem[] => {
        const utilizacaoAutoList = utilizacaoAutoDb.getList()
        const motoristaList = motoristaDb.getList()
        const automovelList = automovelDb.getList()

        return utilizacaoAutoList.map((item: IUtilizacaoAuto): IUtilizacaoAutoListItem => ({
            automovel: automovelList.find(auto => auto.id === item.idAutomovel)!,
            motorista: motoristaList.find(motorista => motorista.id === item.idMotorista)!,
            motivo: item.motivoUtilizacao,
            dataInicio: item.dataInicio,
            dataTermino: item.dataTermino,
            id: item.id!
        }))
    },
    finalizaUtilizacaoAuto: (id: number): IUtilizacaoAuto | false => {
        const utilizacaoAuto = utilizacaoAutoDb.findById(id)
        if (utilizacaoAuto) {
            utilizacaoAuto.dataTermino = new Date()
            return utilizacaoAuto
        }
        else return false
    }
}