import { IAutomovel, IMotorista } from "../../models/interfaces"

export interface IUtilizacaoAutoListItem {
    id: number
    automovel: IAutomovel,
    motorista: IMotorista,
    dataInicio: Date,
    dataTermino?: Date,
    motivo: string
}