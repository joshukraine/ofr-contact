# OFR Contact Form

This is the serverless contact form used on [OFReport.com](https://github.com/joshukraine/ofreport.com).

![Contact Form][screenshot]

## Technologies

* [Serverless Framework](https://serverless.com/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [AWS API Gateway](https://aws.amazon.com/api-gateway/)
* [AWS Simple Email Service](https://aws.amazon.com/ses/)

## Usage

Install Serverless.

```bash
$ npm install -g serverless
```

Login to Serverless.

```bash
$ serverless login
```

Deploy.

```bash
$ serverless deploy
```

If needed, remove the service.

```bash
$ serverless remove
```

## Alias

The `serverless` command is aliased as `sls`. For example:

```bash
$ sls deploy
```

## Acknowledgements

The following blog post was very helpful in building this app.

* https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0

## License

Copyright © 2019 Joshua Steele. [MIT License](https://github.com/joshukraine/ofr-contact/blob/master/LICENSE)

[screenshot]: https://res.cloudinary.com/dnkvsijzu/image/upload/bo_1px_solid_rgb:e2e8f0,f_auto,q_auto/v1573635153/OFReport/assets/contact-form_spzgmk.png
