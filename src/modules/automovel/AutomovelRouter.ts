import { Router } from 'express'
import { AutomovelController } from './AutomovelController'

const router = Router()

router.get('/', AutomovelController.getAutomovelList)
router.post('/', AutomovelController.createAutomovel)
router.get('/:id', AutomovelController.getAutomovelById)
router.delete('/:id', AutomovelController.deleteAutomovel)
router.put('/:id', AutomovelController.updateAutomovel)



export const AutomovelRouter = router