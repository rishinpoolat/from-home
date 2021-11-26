import express from 'express';
import { getShops, createShop, getShop } from '../controllers/shops.js';

const router = express.Router();

// import User from '../models/User.js';
// import Shops from '../models/Shops.js';


router.get('/', getShops);
router.get('/:id', getShop);

// create shop 
router.post('/shopregister', createShop);

// // update shop 
// router.put('/:id', async (req, res) => {
//   try {
//     const shop = await Shops.findById(req.params.id);
//     if(shop.email === req.body.email) {
//       try {
//         const updatedShop = await Shops.findByIdAndUpdate(req.params.id, 

//           {
//             $set: req.body,
//           },
//           { new: true }
//           );
//           res.status(200).json(updatedShop);
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     } else {
//       res.status(401).json('you can update only your shop');
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // delete shop
// router.delete('/:id', async (req, res) => {
//   try {
//     const shop = await Shops.findById(req.params.id);
//     if(shop.email === req.body.email) {
//       try{
//         await shop.delete();
//         res.status(200).json('shop has been deleted')
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     } else {
//       res.status(401).json('you can delete only your shop');
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

export default router;