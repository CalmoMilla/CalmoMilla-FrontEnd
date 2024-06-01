import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, type } = req.body;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: name,
      Expires: 60,
      ContentType: type,
      ACL: 'public-read',
    };

    try {
      const url = await s3.getSignedUrlPromise('putObject', params);
      res.status(200).json({ url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error generating signed URL' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
