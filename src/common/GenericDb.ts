import { GenericEntity } from "./GenericEntity"

/** Classe responsável por gerenciar a persistencia dos dados e as opreações de crud em uma entidade generica */
export class GenericDb<T> {

    private dbData: GenericEntity<T>[]
    private lastId: number

    constructor() {
        this.dbData = []
        this.lastId = 0
    }

    getList(filter?: Partial<T>): T[] {
        /** 
         * Retorna uma lista de acordo com o filtro se ele existir,
         * caso não exista retorna todos os registros
         */
        return this.dbData.filter(item => {
            let matchFilter = true
            for (let k in filter) {
                matchFilter = matchFilter && item[k] === filter[k]
            }
            return matchFilter
        })
    }

    findById(id: number): T | undefined {
        return this.dbData.find(item => item.id === id)
    }

    edit(id: number, data: T): T {
        const itemIndex = this.dbData.findIndex(item => item.id === id)
        this.dbData[itemIndex] = { ...data, id: id }
        return data
    }

    create(data: T): T {
        const newData = { ...data, id: ++this.lastId }
        this.dbData.push(newData)
        return newData
    }

    delete(id: number): void {
        const itemIndex = this.dbData.findIndex(item => item.id === id)
        this.dbData.splice(itemIndex, 1)
    }

}