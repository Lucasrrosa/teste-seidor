import { Router } from 'express'
import { MotoristaController } from './MotoristaController'

const router = Router()

router.get('/', MotoristaController.getMotoristaList)
router.post('/', MotoristaController.createMotorista)
router.get('/:id', MotoristaController.getMotoristaById)
router.delete('/:id', MotoristaController.deleteMotorista)
router.put('/:id', MotoristaController.updateMotorista)



export const MotoristaRouter = router