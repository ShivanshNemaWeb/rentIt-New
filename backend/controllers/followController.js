const { firestore } = require('../config/firebase');
const admin = require('firebase-admin');

// Follow a store
exports.follow = async (req, res) => {
  const { storeId, userId } = req.body;

  try {
    // Check if the document exists in the 'follows' collection
    const followDoc = await firestore.collection('follows').doc(storeId).get();

    if (!followDoc.exists) {
      // If the document doesn't exist, create it
      await firestore.collection('follows').doc(storeId).set({
        followers: { [userId]: true },
      });
    } else {
      // If the document exists, update it
      await firestore.collection('follows').doc(storeId).update({
        [`followers.${userId}`]: true,
      });
    }

    // Get the number of followers for the store
    const followersCount = Object.keys(followDoc.data()?.followers || {}).length;

    res.status(200).send({
      message: "Store followed successfully",
      followersCount,
      isFollowing: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

// Unfollow a store
exports.unfollow = async (req, res) => {
  const { storeId, userId } = req.body;

  try {
    // Check if the document exists in the 'follows' collection
    const followDoc = await firestore.collection('follows').doc(storeId).get();

    if (followDoc.exists) {
      // If the document exists, update it to remove the follower
      await firestore.collection('follows').doc(storeId).update({
        [`followers.${userId}`]: admin.firestore.FieldValue.delete(),
      });
    }

    // Get the updated number of followers for the store
    const updatedFollowDoc = await firestore.collection('follows').doc(storeId).get();
    const followersCount = Object.keys(updatedFollowDoc.data()?.followers || {}).length;

    res.status(200).send({
      message: "Store unfollowed successfully",
      followersCount,
      isFollowing: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};
