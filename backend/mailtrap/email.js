//Import mailtrap functions
import { mailtrapClient, sender } from "./mailtrap.config.js";

//Email Template
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending email: `, error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "8398a3a0-0bc7-46ff-8d7f-237b09f9f5a7",
      template_variables: {
        company_info_name: "Auth Company",
        name: name,
      },
    });

    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending email: `, error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    console.log("Password Reset Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending email: `, error);
    throw new Error(`Error sending email: ${error.message}`);
    
  }
};
