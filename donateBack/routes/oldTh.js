const express = require('express')
const { uploadProduct, getAllProducts, getSingleProduct, deleteProduct, getAlluserproduct } = require('../controller/productController')
const requireAuth = require('../middleware/requireAuth')
const { layerAuth, isAuthorizeUser } = require('../middleware/layerAuth')
const router = express.Router()

router.use(requireAuth)
router.get('/', getAllProducts)

router.get('/all', getAlluserproduct)

router.get('/:id', getSingleProduct)

router.post('/', uploadProduct)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)

// router.route('/org').get((req, res, next) => {
    // try {
        // isAuthorizeUser(req.roleFromToken, 'user'); 
        // res.status(200).json({ message: 'Request is authorized' });
    // } catch (error) {
        // res.status(400).json({ error: error.message });
    // }
// })
        module.exports = router;