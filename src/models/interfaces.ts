export interface IAutomovel {
    id: number
    placa: string,
    cor: string,
    marca: string
}

export interface IMotorista {
    id: number
    nome: string
}

export interface IUtilizacaoAuto {
    id?: number
    dataInicio: Date,
    dataTermino?: Date,
    idMotorista: number,
    idAutomovel: number,
    motivoUtilizacao: string
}