const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});


// Upload Images to S3 and return the image URL
exports.uploadImage = async (key, buffer) => {
  const params = {
    Bucket: 'rentitweb',
    Key: key,
    Body: buffer,
  };

  const uploadResponse = await s3.upload(params).promise();

  // Extract the image URL from the upload response
  const imageUrl = uploadResponse.Location;

  return imageUrl;
};
//creating a folder
exports.createFolder = async (folderKey) => {
  const params = {
    Bucket: 'rentitweb',
    Key: `${folderKey}/`, // Note the trailing slash to denote a folder
    Body: '', // Empty body for creating a folder
  };

  await s3.upload(params).promise();
};

//Get images from s3
exports.getImageUrl = async(key) => {
  const params = {
    Bucket: 'rentitweb',
    Key: key,
  };

  const url = await s3.getSignedUrlPromise('getObject', params);
  return url;
}

//Delete product images-
exports.deletePhotosFromS3 = async(keys) => {
  const deleteObjectsParams = {
    Bucket: 'rentitweb', // Replace with your bucket name
    Delete: {
      Objects: keys.map(Key => ({ Key })),
      Quiet: false,
    },
  };

  try {
    await s3.deleteObjects(deleteObjectsParams).promise();
  } catch (error) {
    throw error;
  }
}