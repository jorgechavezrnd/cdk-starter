# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Commands explained by the instructor

* `cdk init app --language typescript`  initialize a new CDK project for a given language
* `cdk bootstrap`                        prepare the AWS environment before the first deploy (creates S3 bucket, IAM roles, etc.)
* `cdk synth`                            generate the CloudFormation template for each stack
* `cdk deploy`                           deploy the stack to AWS (use stack name when multiple stacks exist)
* `cdk deploy StackName`                 deploy a specific stack by name
* `cdk list`                             list all stacks defined in the app (runs locally, no AWS call)
* `cdk diff`                             compare local stack definition with the currently deployed stack in AWS
* `cdk doctor`                           check CDK dependencies and configuration for potential issues
* `cdk destroy StackName`                delete a deployed stack from AWS (equivalent to deleting from CloudFormation console)

## Deploy with parameters

* `npx cdk deploy --parameters duration=9`  pass a parameter value at deploy time

## Course resources

* [Original course repository](https://github.com/alexhddev/CDK-course-resources)
* [Udemy course — AWS TypeScript CDK, Serverless & React](https://www.udemy.com/course/aws-typescript-cdk-serverless-react/)

## CloudFormation best practices

* [AWS CloudFormation Best Practices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html)

## Good references for CDK

* [AWS CDK v2 API Reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
* [AWS CDK GitHub Repository](https://github.com/aws/aws-cdk)
