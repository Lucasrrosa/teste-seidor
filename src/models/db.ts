import { GenericDb } from "../common/GenericDb"
import { IAutomovel, IMotorista, IUtilizacaoAuto } from "./interfaces"

/** Instanciação das entidades para persistencia dos dados em memoria */

const motoristaDb = new GenericDb<IMotorista>()

const automovelDb = new GenericDb<IAutomovel>()

const utilizacaoAutoDb = new GenericDb<IUtilizacaoAuto>()


export { motoristaDb, automovelDb, utilizacaoAutoDb }