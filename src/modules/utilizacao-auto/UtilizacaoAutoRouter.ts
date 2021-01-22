import { Router } from "express"
import { UtilizacaoAutoController } from "./UtilizacaoAutoController"

const router = Router()

router.get('/', UtilizacaoAutoController.getUtilizacaoAutoList)
router.post('/', UtilizacaoAutoController.createUtilizacaoAuto)
router.post('/finish/:id', UtilizacaoAutoController.finishUtilizacaoAuto)

export const UtilizacaoAutoRouter = router