#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { PhotosStack } from '../lib/PhotosStack';
// import { CdkStarterStack } from '../lib/cdk-starter-stack';

const app = new cdk.App();
new PhotosStack(app, 'PhotosStack');
// new CdkStarterStack(app, 'CdkStarterStack');
