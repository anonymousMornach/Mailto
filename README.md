# Email Sending API with Email Validation

This is a Node.js application that provides an API endpoint for sending emails with email validation using the ZeroBounce API. The application utilizes the Express framework for handling HTTP requests, Nodemailer for sending emails, and Axios for making HTTP requests to the ZeroBounce API.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Node.js: The runtime environment for running the application.
- NPM (Node Package Manager): Used to install the required dependencies.
- ZeroBounce API Key: Obtain an API key from ZeroBounce to validate email addresses.
- Gmail Account: You need a Gmail account to send emails using the Gmail SMTP server.

## Installation

1. Clone the repository or download the source code:

```bash
git clone https://github.com/anonymousMornach/Mailto
```

2. Navigate to the project directory:

```bash
cd email-sending-api
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and provide the following environment variables:

```
ZEROBOUNCE_API_KEY=<your-zerobounce-api-key>
GMAIL_EMAIL=<your-gmail-email>
GMAIL_PASSWORD=<your-gmail-password>
```

5. Start the application:

```bash
node index.js
```

The server will start running on port 3000.

## API Endpoint

### Send Email

Endpoint: `POST /send-email`

#### Request

The request body should include the following parameters:

- `email`: The email address of the recipient.
- `title`: The subject line of the email.
- `message`: The content of the email.

Example:

```json
{
  "email": "recipient@example.com",
  "title": "Hello",
  "message": "This is the email content."
}
```

#### Response

- If the email is valid, the API will send the email and respond with a success message:

```json
{
  "message": "Email sent successfully!"
}
```

- If the email is invalid, the API will respond with an error message:

```json
{
  "message": "Invalid email address."
}
```

- If an error occurs while sending or validating the email, the API will respond with an error message:

```json
{
  "error": "An error occurred while sending the email."
}
```

```json
{
  "error": "An error occurred while validating the email."
}
```

## Usage

To send an email using the API, make a POST request to the `/send-email` endpoint with the required parameters in the request body.

Example using cURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "recipient@example.com",
  "title": "Hello",
  "message": "This is the email content."
}' http://localhost:3000/send-email
```

Make sure to replace `http://localhost:3000` with the appropriate URL if the server is running on a different host.

## Using the API with HTML Forms

To integrate the Email Sending API with an HTML form, you can use JavaScript to make an HTTP request to the API endpoint when the form is submitted. Here's an example of how you can achieve this:

1. Create an HTML form in your web page:

```html
<form id="emailForm">
  <input type="email" id="recipientEmail" placeholder="Recipient Email" required>
  <input type="text" id="emailTitle" placeholder="Email Title" required>
  <textarea id="emailMessage" placeholder="Email Message" required></textarea>
  <button type=""submit">Send Email</button>
</form>
```

2. Add JavaScript code to handle the form submission and make an HTTP request to the API endpoint:

```html
<script>
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the form values
      var recipientEmail = document.getElementById("recipientEmail").value;
      var emailTitle = document.getElementById("emailTitle").value;
      var emailMessage = document.getElementById("emailMessage").value;

      // Create an object with the request body
      var requestBody = {
        email: recipientEmail,
        title: emailTitle,
        message: emailMessage,
      };

      // Make an HTTP POST request to the API endpoint
      fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // Handle the API response
          if (data.message) {
            alert("Email sent successfully!");
          } else if (data.error) {
            alert("An error occurred while sending the email: " + data.error);
          } else {
            alert("An unknown error occurred.");
          }
        })
        .catch(function (error) {
          alert("An error occurred: " + error);
        });
    });
</script>
```

Make sure to place the JavaScript code within the `<script>` tags in your HTML file. This code listens for the form submission event, prevents the default form submission behavior, retrieves the form values, creates an object with the request body, and sends an HTTP POST request to the API endpoint. The API response is then handled, and an appropriate message is displayed to the user.

## Hosting the Application

To host the Email Sending API, you can follow these general steps:

1. Choose a hosting provider: Select a hosting provider that supports Node.js applications. Some popular options include Heroku, AWS Elastic Beanstalk, and DigitalOcean.

2. Set up your hosting environment: Sign up for an account and create a new Node.js application. Configure any necessary environment variables, such as the ZeroBounce API key, Gmail email, and password.

3. Deploy your code: Deploy your code to the hosting environment. This can be done by connecting your hosting provider to your remote repository (e.g., GitHub) and triggering a deployment, or by using the hosting provider's deployment tools or command-line interface.

4. Start the application: Once deployed, start the application on your hosting environment. This can usually be done through the hosting provider's management interface or by running a specific command.

5. Test the deployed API: Use tools like cURL or Postman to send requests to the API endpoint on your deployed server. Make sure to use the correct URL provided by your hosting provider.

6. Monitor and maintain: Set up logging and monitoring to track the application's performance and identify any potential issues. Regularly check for updates to the application and its dependencies to ensure security and stability.

Remember to refer to your hosting provider's documentation for specific instructions on deploying and managing Node.js applications.

## Dependencies

The following dependencies are used in this application:

- `express`: A fast and minimalist web framework for Node.js.
- `nodemailer`: A module for sending emails using Node.js.
- `axios`: A promise-based HTTP client for Node.js.

You can find the details of these dependencies in the `package.json` file.

## Conclusion

This readme documentation provides an overview of the Node.js application that enables email sending with email validation using the ZeroBounce API. Follow the installation instructions to set up the
