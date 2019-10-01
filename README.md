# Serverless Page Crawler
Serverless API to crawl a page.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```diff
- ATTENTION! This API only works with node 8.10 versions. Take care with node version that are you running, this can cause a lot of errors.
```

## Prerequisites

A node 8.10 environment.

To install node you can use nvm. For more details access [nvm](https://github.com/nvm-sh/nvm).

Then, you need to install node version 8.10. Run in terminal:
```
nvm install 8.10
```
Finally, you need serverless package installed globally.
To install serverless, after install node, run in terminal:
```
nvm use 8.10
```
To use correct node version and then run:
```
npm i -g serverless
```

## Installing

Before you install , you need to set your ~/.aws/credentials file in your machine:
```
[default]
aws_access_key_id = set your default AWS key id !
aws_secret_access_key = set your default AWS access key !

[serverless]
aws_access_key_id = set deploy AWS key id !
aws_secret_access_key = set deploy default AWS access key !
region= Set region!
output=json

```

```diff
- ATTENTION! The profile must contain correct permissions that serverless needs.
```
For more details about serverless permissions access [Serverless IAM Guide](https://serverless.com/framework/docs/providers/aws/guide/iam/).

After clone, run in terminal (to local development):
```
npm install
```

## Running the app in localhost
After install, run:
```
serverless offline
```
You can use --noTimeout flag to avoid timeouts.

## Styleguide
Todo

# Deployment
To deploy, you need to have ~/.aws/credentials file set up.

To deploy in an environment, run:
```
serverless deploy --aws-profile ENV_PROFILE --stage ENV
```

To remove/delete all deployed stack, run (setting the environments as above):
```
serverless remove --aws-profile ENV_PROFILE --stage ENV
```
```diff
- ATTENTION! This command will destroy all deployed resources!
```

# Built With

* [Nestjs](https://nestjs.com/)
* [Serverless](https://serverless.com/)

# Contributing

Only have to fork the project and make a pull request.

# Versioning

We use [SemVer](http://semver.org/) for versioning.

# License

To do.