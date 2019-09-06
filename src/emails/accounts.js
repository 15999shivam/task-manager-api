const sgMail = require("@sendgrid/mail");

const sendgridAPIKEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shivamgarg260@gmail.com",
    subject: "thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shivamgarg260@gmail.com",
    subject: "You Account have been Sucessfuly deleted",
    text: `Dear, ${name} we are unhappy to see you go, We hope you will Come back one day, Good Bye`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
