# Number to English

Number to English is a simple-to-use API endpoint that converts a number to its equivalent words in English.

Number to English accepts positive and negative integers between **-9007199254740991** and **9007199254740991**.


## Usage

### Request

```
GET /v1/num_to_english

{
  "number": "12345678"
}

```

### Response

```
{
    "status": "ok",
    "statusCode": 200,
    "num_in_english": "twelve million three hundred forty five thousand six hundred seventy eight"
}

```

## Error types

**Invalid Input**

This error is returned in the following circumstances:

- The number contains non-alphanumeric characters
- The `number` property in the JSON request body is set to an empty string or undefined

```
{
    "status": "error",
    "statusCode": 400,
    "num_in_english": "Please provide a valid integer in decimal format."
}

```

**Out of Bounds**

This error is returned in the following circustances:

- The number is less than
- The number is greater than

```
{
    "status": "error",
    "statusCode": 400,
    "num_in_english": "Please provide an integer between -9007199254740991 and 9007199254740991"
}

```

**Internal Error**

This error is returned in the case the server cannot complete the request.

```
{
    "status": "error",
    "statusCode": 500,
    "num_in_english": "Unable to complete this request."
}

```

## Installation

To install and run the endpoint locally:

`npm install && npm run dev`

The endpoint is available on port 3000 by default.

## Deployment

To run the endpoint in production:

`npm run build && npm start`

The endpoint is available in production on port 8080 by default.

## Testing

A functional testing suite is available, written using Jest and Supertest. To run the test suite:

`npm run test`

## Additional discussion

Number to English was built with the following use cases in mind:

- Support for negative and positive integers
- Support for number strings with commas (e.g. "1,234,456")
- Handling of leading zeroes
- Handling of empty input and invalid input edge cases
- Future versioning of the api using `/v*` paths
