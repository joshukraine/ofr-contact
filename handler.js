const aws = require('aws-sdk');

const ses = new aws.SES();
const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;

const generateResponse = (code, payload) => ({
  statusCode: code,
  headers: {
    'Access-Control-Allow-Origin': myDomain,
    'Access-Control-Allow-Headers': 'x-requested-with',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(payload),
});

const generateError = (code, err) => ({
  statusCode: code,
  headers: {
    'Access-Control-Allow-Origin': myDomain,
    'Access-Control-Allow-Headers': 'x-requested-with',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(err.message),
});

const generateEmailParamsFromJSON = (body) => {
  const { name, email, content } = JSON.parse(body);

  if (!(name && email && content)) {
    throw new Error('Missing parameters! Make sure to add parameters \'name\', \'email\', \'content\'.');
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `The following message was sent from ${email} by ${name}: \n\n${content}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `[OFReport.com] New message from ${name}`,
      },
    },
  };
};

module.exports.sendJSON = async (event) => {
  try {
    const emailParams = generateEmailParamsFromJSON(event.body);
    const data = await ses.sendEmail(emailParams).promise();
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};
