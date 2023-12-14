const {firestore} = require('../config/firebase');
const admin = require('firebase-admin');

// Function to like a product
exports.like = async (req, res) => {
    const { productId, userId } = req.body;
  
    try {
      // Check if the document exists in the 'likes' collection
      const likeDoc = await firestore.collection('likes').doc(productId).get();
  
      if (!likeDoc.exists) {
        // If the document doesn't exist, create it
        await firestore.collection('likes').doc(productId).set({
          [userId]: true,
        });
      } else {
        // If the document exists, update it
        await firestore.collection('likes').doc(productId).update({
          [userId]: true,
        });
      }
  
      // Check if the document exists in the 'products' collection
      const productDoc = await firestore.collection('products').doc(productId).get();
  
      if (!productDoc.exists) {
        // If the product document doesn't exist, create it
        await firestore.collection('products').doc(productId).set({
          likesCount: 1,  // Set the initial likesCount to 1
        });
      } else {
        // If the product document exists, increment the likesCount
        await firestore.collection('products').doc(productId).update({
          likesCount: admin.firestore.FieldValue.increment(1),
        });
      }
  
      res.status(200).send({ message: "Liked Successfully" });
    } catch (error) {
      console.error(error);
      res.status(401).send({ message: error.message });
    }
  };
  

  // Dislike a product (remove like)
exports.dislike = async (req, res) => {
    const { productId, userId } = req.body;
  
    try {
      // Check if the document exists in the 'likes' collection
      const likeDoc = await firestore.collection('likes').doc(productId).get();
  
      if (!likeDoc.exists || !likeDoc.data()[userId]) {
        // If the document doesn't exist or the user hasn't liked the product, send an error response
        res.status(400).send({ message: "You haven't liked this product." });
        return;
      }
  
      // Remove the like from the 'likes' collection
      await firestore.collection('likes').doc(productId).update({
        [userId]: admin.firestore.FieldValue.delete(),
      });
  
      // Decrement the likesCount in the 'products' collection
      await firestore.collection('products').doc(productId).update({
        likesCount: admin.firestore.FieldValue.increment(-1),
      });
  
      res.status(200).send({ message: "Disliked Successfully" });
    } catch (error) {
      console.error(error);
      res.status(401).send({ message: error.message });
    }
  };
  