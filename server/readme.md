# `/users/register` Endpoint Documentation

This endpoint allows new users to register an account.

# `/users/register` Endpoint Documentation

## Endpoint

**POST** `/users/register`

## Description

This endpoint allows new users to register an account.
It validates the input, hashes the password, creates the user in the database, and returns an authentication token along with the user object if registration is successful.

## Request Body

The request must be in JSON format and include the following properties:

- **fullname**: Object
  - **firstname**: `string` (required, minimum 3 characters)
  - **lastname**: `string` (required, minimum 3 characters)
- **email**: `string` (required, must be a valid email)
- **password**: `string` (required, minimum 6 characters)

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Responses

- **201 Created**
  - Registration successful. Returns a JSON object with `token` and `user`.
- **400 Bad Request**
  - Validation failed. Returns an array of error messages.
- **500 Internal Server Error**
  - Server error. Returns an error message.

### Example Success Response

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // other user fields
  }
}
```

### Example Error Response

````json
{
  "errors": [
    {
      "msg": "invalid email",
      "param": "email",
## Endpoint

**POST** `/users/register`

## Description

The endpoint accepts a JSON payload containing user details. It validates the input, hashes the password, creates the user in the database, and returns an authentication token along with the user object if registration is successful.

## Request Body

The request must be in JSON format and include the following properties:

- **fullname**: Object
  - **firstname**: `string` (required, minimum 3 characters)
  - **lastname**: `string` (required, minimum 3 characters)
- **email**: `string` (required, must be a valid email)
- **password**: `string` (required, minimum 6 characters)

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
````
