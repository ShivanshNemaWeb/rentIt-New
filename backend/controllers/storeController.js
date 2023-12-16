const Store = require('../models/store');
const User = require('../models/user');
const Product = require('../models/product');
const path = require('path');
const { uploadImage, createFolder, getImageUrl } = require('../config/awsS3');
const {firestore} = require('../config/firebase');
const admin = require('firebase-admin');
//Create a new Store
exports.createStore = async (req, res, next) => {
  try {
    const { storeName, title, country,state,city,postalCode,street,houseNumber, accountNumber, ifsc, descreption, userId } = req.body;
    const store = await Store.findOne({userId});
    if(store){
      return res.status(401).send({message:"Store Already Exist"});
    }
    if(!storeName, !title, !country,!state,!city,!postalCode,!street,!houseNumber, !accountNumber, !ifsc, !descreption){
      return res.status(401).send({message:"Something Went Wrong"});
    }
    const user =await User.findOne({userId});
    user.hasStore= true;
    await user.save();
    // Save data to MongoDB
    const data = new Store({
      storeName,
      title,
      address:{
      country,
      state,
      city,
      postalCode,
      street,
      houseNumber
    },
      accountNumber,
      ifsc,
      descreption,
      userId,
    });
    const savedData = await data.save();

    // Get ObjectId of the created object
    const objectId = savedData._id.toString();

    // Create a folder in S3 named after the objectId
    await createFolder(objectId);

    // Construct keys for S3 upload within the folder
    const coverImgKey = `${objectId}/cover-img.jpg`;
    const profileImgKey = `${objectId}/profile-img.jpg`;

    // Upload images to S3
    await uploadImage(coverImgKey, req.files['cover-img'][0].buffer);
    await uploadImage(profileImgKey, req.files['profile-img'][0].buffer);
    
    return res.status(200).json({ message: 'Data and images uploaded successfully' });
  } catch (error) {
    console.error(error);
   return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get Store By UserId
exports.getStore = async (req, res) => {
  let { userId } = req.params;

  try {
    const store = await Store.findOne({ userId });

    if (!store) {
      return res.status(404).send({ message: "Store not found" });
    }

    // Fetch cover-img and profile-img from S3
    const storeId = store._id;
    const coverImgKey = `${storeId}/cover-img.jpg`; // Adjust the file extension if needed
    const profileImgKey = `${storeId}/profile-img.jpg`; // Adjust the file extension if needed

    const coverImgUrl = await getImageUrl(coverImgKey);
    const profileImgUrl = await getImageUrl(profileImgKey);

    // Fetch all products for the given storeId
    const products = await Product.find({ storeId, isSold: false });

    // Iterate through each product to fetch images
    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        // Fetch image URLs for each product
        const img1 = await getImageUrl(`${storeId}/${product._id}/first-img.jpg`);
        const img2 = await getImageUrl(`${storeId}/${product._id}/second-img.jpg`);
        const img3 = await getImageUrl(`${storeId}/${product._id}/thired-img.jpg`);
        const img4 = await getImageUrl(`${storeId}/${product._id}/fourth-img.jpg`);
        const img5 = await getImageUrl(`${storeId}/${product._id}/fifth-img.jpg`);

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

     // Get the number of followers for the store
     const followsDoc = await firestore.collection('follows').doc(storeId.toString()).get();
     const followersCount = followsDoc.exists ? Object.keys(followsDoc.data()?.followers || {}).length : 0;
 
     // Check if the user follows the store
     const isFollowing = userId ? followsDoc.exists && followsDoc.data()?.followers.hasOwnProperty(userId) : false;
 
    return res.status(200).send({
      data: {
        ...store.toObject(), // Convert Mongoose document to plain JavaScript object
        coverImgUrl,
        profileImgUrl,
        products: productsWithImages,
        followersCount,
        isFollowing
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

//update store
exports.updateStore = async (req,res) => {
  const {storeId} = req.params;
  const {storeName, title , country, state, city, street, houseNumber, postalCode, accountNumber, ifsc, descreption, facebook, instagram, twitter} =req.body;
try{

  let store = await Store.findById(storeId);
  if(!store){
    return res.status(401).send({message:"Store Not found"});
  }
   
  store.storeName = storeName || store.storeName;
  store.title = title || store.title;
  store.address.country = country || store.address.country;
  store.address.state = state || store.address.state;
  store.address.city = city || store.address.city;
  store.address.street = street || store.address.street;
  store.address.houseNumber = houseNumber || store.address.houseNumber;
  store.address.postalCode = postalCode || store.address.postalCode;
  store.accountNumber = accountNumber || store.accountNumber;
  store.ifsc = ifsc || store.ifsc;
  store.descreption = descreption || store.descreption;
  store.social.facebook = facebook || store.social.facebook;
  store.social.instagram = instagram || store.social.instagram;
  store.social.twitter = twitter || store.social.twitter;

  await store.save();
  // Fetch cover-img and profile-img from S3
  const coverImgKey = `${storeId}/cover-img.jpg`; // Adjust the file extension if needed
  const profileImgKey = `${storeId}/profile-img.jpg`; // Adjust the file extension if needed

  const coverImgUrl = await getImageUrl(coverImgKey);
  const profileImgUrl = await getImageUrl(profileImgKey);

  return res.status(200).send({
    data: {
      ...store.toObject(), // Convert Mongoose document to plain JavaScript object
      coverImgUrl,
      profileImgUrl,
    },
  });
}

catch(error){
 return res.status(401).send({message:"Something Went Wrong"});
}
}

//Get All Stores
exports.getAllStores = async (req,res) => {
  let {userId} = req.query;
  try{
    const stores = await Store.find();
    if (!userId) {
      userId = "123456";
    }
    // Iterate through each product to fetch images
    const storeWithImages = await Promise.all(
      stores.map(async (store) => {
        // Fetch image URLs for each store
        const storeProfile = await getImageUrl(`${store._id}/profile-img.jpg`)
        const storeCover = await getImageUrl(`${store._id}/cover-img.jpg`)
         // Get the number of followers for the store
    const followsDoc = await firestore.collection('follows').doc(store._id.toString()).get();
    const followersCount = followsDoc.exists ? Object.keys(followsDoc.data()?.followers || {}).length : 0;

    // Check if the user follows the store
    const isFollowing = userId ? followsDoc.exists && followsDoc.data()?.followers.hasOwnProperty(userId) : false;

        return {
          data: store,
          images: {
            storeProfile,
            storeCover
          },
          followersCount:followersCount,
          isFollowing : isFollowing
        };
      })
    )
    return res.status(200).send(storeWithImages);
  }
  catch(error){
    return res.status(401).send({error:error.message});
  }
}

//Get Store By Id
exports.getStoreById = async (req, res) => {
  const storeId = req.query.storeId;
  let userId = req.query.userId;

  try {
    const store = await Store.findById(storeId);

    if (!store) {
      return res.status(404).send({ message: "Store not found" });
    }

    // Fetch cover-img and profile-img from S3
    const coverImgKey = `${storeId}/cover-img.jpg`; // Adjust the file extension if needed
    const profileImgKey = `${storeId}/profile-img.jpg`; // Adjust the file extension if needed

    const coverImgUrl = await getImageUrl(coverImgKey);
    const profileImgUrl = await getImageUrl(profileImgKey);

    // Fetch all products for the given storeId
    const products = await Product.find({ storeId, isSold: false });

    // Iterate through each product to fetch images and likes info
    const productsWithImagesAndLikes = await Promise.all(
      products.map(async (product) => {
        // Fetch image URLs for each product
        const img1 = await getImageUrl(`${storeId}/${product._id}/first-img.jpg`);
        const img2 = await getImageUrl(`${storeId}/${product._id}/second-img.jpg`);
        const img3 = await getImageUrl(`${storeId}/${product._id}/thired-img.jpg`);
        const img4 = await getImageUrl(`${storeId}/${product._id}/fourth-img.jpg`);
        const img5 = await getImageUrl(`${storeId}/${product._id}/fifth-img.jpg`);

        // Fetch likes info for each product
        if (!userId) {
          userId = "123456";
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
            likesCount,
          },
        };
      })
    );

    // Get the number of followers for the store
    const followsDoc = await firestore.collection('follows').doc(storeId).get();
    const followersCount = followsDoc.exists ? Object.keys(followsDoc.data()?.followers || {}).length : 0;

    // Check if the user follows the store
    const isFollowing = userId ? followsDoc.exists && followsDoc.data()?.followers.hasOwnProperty(userId) : false;

    // Include image URLs, products, followers count, and follow status in the response
    return res.status(200).send({
      data: {
        ...store.toObject(), // Convert Mongoose document to plain JavaScript object
        coverImgUrl,
        profileImgUrl,
        products: productsWithImagesAndLikes,
        followersCount,
        isFollowing,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
};
