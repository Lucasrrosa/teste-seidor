import { Router } from "express"
import { UtilizacaoAutoController } from "./UtilizacaoAutoController"

const router = Router()

router.get('/', UtilizacaoAutoController.getUtilizacaoAutoList)
router.post('/', UtilizacaoAutoController.createUtilizacaoAuto)
router.post('/finaliza/:id', UtilizacaoAutoController.finalizaUtilizacaoAuto)

export const UtilizacaoAutoRouter = router