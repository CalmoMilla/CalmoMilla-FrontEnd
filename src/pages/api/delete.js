import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { filename } = req.body;

    try {
      const data = await s3.listObjectsV2({ Bucket: process.env.AWS_BUCKET_NAME }).promise();
      const objects = data.Contents;

      const objectToDelete = objects.find(obj => obj.Key.includes(filename));

      if (objectToDelete) {
        await s3.deleteObject({ Bucket: process.env.AWS_BUCKET_NAME, Key: objectToDelete.Key }).promise();
        res.status(200).json({ message: 'Image deleted successfully' });
      } else {
        res.status(404).json({ error: 'Image not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error deleting image' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
