const Cart = require('../models/cart');
const Product = require('../models/product');
const {createFolder,uploadImage,getImageUrl, deletePhotosFromS3 } = require('../config/awsS3');
const Store = require('../models/store');
const {firestore} = require('../config/firebase');
const admin = require('firebase-admin');
//Add item to cart
exports.addItem = async(req,res) => {
    const {productId,userId} = req.body;
    try{
        const product = await Cart.findOne({productId,userId});
        if(product){
            return res.status(401).send({message:"Already added"});
        }
        const newItem = await new Cart({productId,userId});
        await newItem.save();
        return res.status(200).send({productId});
    }
    catch(error){
        return res.status(401).send({message:"Something Went Wrong"});
    }
}

//Get All items by user id
exports.getItems = async(req,res) => {
    let {userId}= req.params;
    try{
      const items = await Cart.find({userId});
      const productsWithImages = await Promise.all(
        items.map(async (item) => {
            const product = await Product.findById(item.productId);
            const store = await Store.findById(product.storeId);
          // Fetch image URLs for each product
          const img1 = await getImageUrl(`${product.storeId}/${product._id}/first-img.jpg`);
          const img2 = await getImageUrl(`${product.storeId}/${product._id}/second-img.jpg`);
          const img3 = await getImageUrl(`${product.storeId}/${product._id}/thired-img.jpg`);
          const img4 = await getImageUrl(`${product.storeId}/${product._id}/fourth-img.jpg`);
          const img5 = await getImageUrl(`${product.storeId}/${product._id}/fifth-img.jpg`);
          const storeProfile = await getImageUrl(`${product.storeId}/profile-img.jpg`)
          const likesSnapshot = await firestore.collection('likes').doc(product._id.toString()).get();
          const userLiked = likesSnapshot.exists && likesSnapshot.data().hasOwnProperty(userId) && likesSnapshot.data()[userId] === true;
  
          // Get the number of likes for the product
          const likesCount = likesSnapshot.exists ? Object.keys(likesSnapshot.data()).length : 0;
  
          return {
            data: product,
            images: {
              img1,
              img2,
              img3,
              img4,
              img5,
              storeProfile
            },
            store:store,
            likes:{
              userLiked,
              likesCount
            }
          };
        })
      );
    return res.status(200).send(productsWithImages);
    }
    catch(error){
        return res.status(401).send({message:error.message});
    }
}

//Delete Item
 exports.deleteItem = async(req,res) => {
  const {productId,userId} = req.body;
  try{
    const item = await Cart.findOneAndDelete({productId,userId});
    return res.status(200).send(productId);
  }
  catch(error){
    return res.status(401).send({message:"Something Went Wrong"}); 
  }
}