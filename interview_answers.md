# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

Tokens are used to authorize a user. The reason for authorizing a user is to
protect data from being accessed unless the server can confirm the user
is valid and logged in.

2. What steps can you take in your web apps to keep your data secure?

The first steps I would take is creating private routes only accessable to authorized users and redirect unauthorized users to a page without sensitive data.

3. Describe how web servers work.

Web servers handle requests from a client, can be any device fetching data i.e. smartphone or a desktop, and sends back a response with the data requested.
The client now has access to the data and displays it to the user.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

CRUD stands for create, read, update, and delete, The HTTP methods used for these actions include `POST`, `GET`, `PUT` and, `DELETE`. 
`POST` allows for creating a new piece of data for example posting a new user account. 
`GET` allows for fetching data, for example fetching a users account details.
`PUT` allows for editing data, for example a user editing the profile and saving the changes made.
`DELETE` allows for deleting data, for example a user deleting their profile or an
instagram post.
