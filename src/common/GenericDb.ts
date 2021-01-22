import { GenericEntity } from "./GenericEntity"

export class GenericDb<T> {

    private dbData: GenericEntity<T>[]
    private lastId: number

    constructor() {
        this.dbData = []
        this.lastId = 0
    }

    getList(): T[] {
        return this.dbData
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