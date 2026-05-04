import * as cdk from 'aws-cdk-lib/core';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, 'PhotosBucket2', {
      bucketName: 'photosbucket-294kj49'
    });

    (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucket2294kj49');

    // create a new resource
    // delete the old one
  }
}
