import * as cdk from 'aws-cdk-lib/core';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { Fn } from 'aws-cdk-lib/core';

export class PhotosStack extends cdk.Stack {
  private stackSufix: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    new Bucket(this, 'PhotosBucket2', {
      bucketName: `photos-bucket-${this.stackSufix}`
    });
  }

  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId));
    this.stackSufix = Fn.select(4, Fn.split('-', shortStackId));
  }
}
