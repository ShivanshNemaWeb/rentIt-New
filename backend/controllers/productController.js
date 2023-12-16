const User = require('../models/user');
const Store = require('../models/store');
const Product = require('../models/product');
const {createFolder,uploadImage,getImageUrl, deletePhotosFromS3 } = require('../config/awsS3');
const {firestore} = require('../config/firebase');
const admin = require('firebase-admin');

exports.createProduct = async (req,res) => {
const {userId, storeId, title, price, size, color, category,descreption} = req.body;
try{
 const user = await User.findOne({userId});
 const store = await Store.findById(storeId);
 if(!user || !store){
    return res.status(401).send({message:"Invalid request"});
 }
 const newProduct = new Product({
    userId, storeId, title, price, size, color, category,descreption,isSold:false
 })

const savedData = await newProduct.save();
const objectId = savedData._id.toString();

await createFolder(`${storeId}/${objectId}`);

const firstImgKey = `${storeId}/${objectId}/first-img.jpg`;
const secondImgKey = `${storeId}/${objectId}/second-img.jpg`;
const thirdImgKey = `${storeId}/${objectId}/thired-img.jpg`;
const fourthImgKey = `${storeId}/${objectId}/fourth-img.jpg`;
const fifthImgKey = `${storeId}/${objectId}/fifth-img.jpg`;

const img1= await uploadImage(firstImgKey, req.files['first-img'][0].buffer);
const img2=await uploadImage(secondImgKey, req.files['second-img'][0].buffer);
const img3=await uploadImage(thirdImgKey, req.files['thired-img'][0].buffer);
const img4=await uploadImage(fourthImgKey, req.files['fourth-img'][0].buffer);
const img5=await uploadImage(fifthImgKey, req.files['fifth-img'][0].buffer);

return res.status(200).json({
   data:savedData,
   images:{
      img1,
      img2,
      img3,
      img4,
      img5
   }
});

}
catch(error){
return res.status(401).json(error.message);
}
}

exports.getProducts = async (req, res) => {
   const { storeId } = req.params;
   const {userId} = req.body;
 try {
     const store = await Store.findById(storeId);
     if (!store) {
       return res.status(404).send({ message: "Store not found" });
     }
 
     // Fetch all products for the given storeId
     const products = await Product.find({ storeId,isSold:false });
 
     // Iterate through each product to fetch images
     const productsWithImages = await Promise.all(
       products.map(async (product) => {
         // Fetch image URLs for each product
         const img1 = await getImageUrl(`${storeId}/${product._id}/first-img.jpg`);
         const img2 = await getImageUrl(`${storeId}/${product._id}/second-img.jpg`);
         const img3 = await getImageUrl(`${storeId}/${product._id}/thired-img.jpg`);
         const img4 = await getImageUrl(`${storeId}/${product._id}/fourth-img.jpg`);
         const img5 = await getImageUrl(`${storeId}/${product._id}/fifth-img.jpg`);
 
        //  return {
        //    data: product,
        //    images: {
        //      img1,
        //      img2,
        //      img3,
        //      img4,
        //      img5,
        //    },
        //  };
        if(!userId){
          userId ="123456";
        }
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
          },
          likes: {
            userLiked,
            likesCount
          },
        };
       })
     );
 
     return res.status(200).json(productsWithImages);
   } catch (error) {
     console.error(error);
     return res.status(500).send({ message: "Something went wrong" });
   }
 };

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    // Find the product by productId
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    // Delete images from S3
    const imageKeys = [
      `${product.storeId}/${productId}/first-img.jpg`,
      `${product.storeId}/${productId}/second-img.jpg`,
      `${product.storeId}/${productId}/thired-img.jpg`,
      `${product.storeId}/${productId}/fourth-img.jpg`,
      `${product.storeId}/${productId}/fifth-img.jpg`,
    ];

    await deletePhotosFromS3(imageKeys);

    // Delete the product from the database
    await Product.findByIdAndDelete(productId);

    return res.status(200).json({ message: "Product and its images deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

// Get Wedding products
exports.getWeddingProducts = async (req, res) => {
  let { userId } = req.params;
  try {
    const products = await Product.find({ category: "Wedding", isSold: false });

    // Iterate through each product to fetch images and likes information
    const productsWithImagesAndLikes = await Promise.all(
      products.map(async (product) => {
        const store = await Store.findById(product.storeId);
        // Fetch image URLs for each product
        const img1 = await getImageUrl(`${product.storeId}/${product._id}/first-img.jpg`);
        const img2 = await getImageUrl(`${product.storeId}/${product._id}/second-img.jpg`);
        const img3 = await getImageUrl(`${product.storeId}/${product._id}/thired-img.jpg`);
        const img4 = await getImageUrl(`${product.storeId}/${product._id}/fourth-img.jpg`);
        const img5 = await getImageUrl(`${product.storeId}/${product._id}/fifth-img.jpg`);
        const storeProfile = await getImageUrl(`${product.storeId}/profile-img.jpg`);

        // Check if the user has liked the product
        if(!userId){
          userId ="123456";
        }
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
            storeProfile,
          },
          store: store,
          likes: {
            userLiked,
            likesCount
          },
        };
      })
    );

    return res.status(200).send(productsWithImagesAndLikes);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};



//Get Party products
exports.getPartyProducts = async (req,res) => {
  let { userId } = req.params;
  try {
    const products = await Product.find({ category: "Party", isSold: false });

    // Iterate through each product to fetch images and likes information
    const productsWithImagesAndLikes = await Promise.all(
      products.map(async (product) => {
        const store = await Store.findById(product.storeId);
        // Fetch image URLs for each product
        const img1 = await getImageUrl(`${product.storeId}/${product._id}/first-img.jpg`);
        const img2 = await getImageUrl(`${product.storeId}/${product._id}/second-img.jpg`);
        const img3 = await getImageUrl(`${product.storeId}/${product._id}/thired-img.jpg`);
        const img4 = await getImageUrl(`${product.storeId}/${product._id}/fourth-img.jpg`);
        const img5 = await getImageUrl(`${product.storeId}/${product._id}/fifth-img.jpg`);
        const storeProfile = await getImageUrl(`${product.storeId}/profile-img.jpg`);

        // Check if the user has liked the product
        if(!userId){
          userId ="123456";
        }
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
            storeProfile,
          },
          store: store,
          likes: {
            userLiked,
            likesCount
          },
        };
      })
    );

    return res.status(200).send(productsWithImagesAndLikes);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}

//Get Traditional products
exports.getTraditionalProducts = async (req,res) => {
  let { userId } = req.params;
  try {
    const products = await Product.find({ category: "Traditional", isSold: false });

    // Iterate through each product to fetch images and likes information
    const productsWithImagesAndLikes = await Promise.all(
      products.map(async (product) => {
        const store = await Store.findById(product.storeId);
        // Fetch image URLs for each product
        const img1 = await getImageUrl(`${product.storeId}/${product._id}/first-img.jpg`);
        const img2 = await getImageUrl(`${product.storeId}/${product._id}/second-img.jpg`);
        const img3 = await getImageUrl(`${product.storeId}/${product._id}/thired-img.jpg`);
        const img4 = await getImageUrl(`${product.storeId}/${product._id}/fourth-img.jpg`);
        const img5 = await getImageUrl(`${product.storeId}/${product._id}/fifth-img.jpg`);
        const storeProfile = await getImageUrl(`${product.storeId}/profile-img.jpg`);

        // Check if the user has liked the product
        if(!userId){
          userId ="123456";
        }
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
            storeProfile,
          },
          store: store,
          likes: {
            userLiked,
            likesCount
          },
        };
      })
    );

    return res.status(200).send(productsWithImagesAndLikes);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}

// API to get products from stores followed by the user
exports.getFollowedProducts = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch all stores from the database
    const allStores = await Store.find();

    // Fetch stores followed by the user from Firebase
    const userFollowedStoresDoc = await firestore.collection('follows').doc(userId).get();
    const userFollowedStores = userFollowedStoresDoc.exists ? userFollowedStoresDoc.data().followingStores || {} : {};

    // Filter stores that the user follows
    const storesUserFollows = allStores.filter((store) => userFollowedStores[store._id.toString()]);

    // Fetch products from the stores the user follows
    const productsFromFollowedStores = await Promise.all(
      storesUserFollows.map(async (store) => {
        const products = await Product.find({ storeId: store._id, isSold: false });

        // Include additional details for each product
        const productsWithDetails = await Promise.all(
          products.map(async (product) => {
            // Fetch image URLs for each product
            const img1 = await getImageUrl(`${store._id}/${product._id}/first-img.jpg`);
            const img2 = await getImageUrl(`${store._id}/${product._id}/second-img.jpg`);
            const img3 = await getImageUrl(`${store._id}/${product._id}/thired-img.jpg`);
            const img4 = await getImageUrl(`${store._id}/${product._id}/fourth-img.jpg`);
            const img5 = await getImageUrl(`${store._id}/${product._id}/fifth-img.jpg`);
            const storeProfile = await getImageUrl(`${store._id}/profile-img.jpg`);

            return {
              data: product,
              images: {
                img1,
                img2,
                img3,
                img4,
                img5,
                storeProfile,
              },
              store: store,
            };
          })
        );

        return productsWithDetails;
      })
    );

    // Flatten the array of products from different stores
    const flattenedProducts = productsFromFollowedStores.flat();

    return res.status(200).send(flattenedProducts);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};