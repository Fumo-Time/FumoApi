# fumo-api

## Introduction

This is the API for the Fumo bot. It is a simple API that returns a random fumo. It is a RESTful API that is built on top of the express framework. It is written in Typescript.

## Installation

To install the API, you need to have NodeJS and NPM installed. You can get them from [here](https://nodejs.org/en/download/).

Once you have NodeJS and yarn installed, you can install the dependencies by running the following command:

```bash
# enable corepack for yarn
corepack enable

# install dependencies
yarn install

# start the server
yarn start
```

## Configuration

The API uses environment variables to configure itself. The following environment variables are used:

- `PORT`: The port on which the API will listen for requests. Defaults to `3000`.

## API Documentation

This API has only one endpoint, which is used to get the current weather for a given location. The endpoint is `/random` and it accepts a `GET` request. for browsers, you can simply visit the URL `http://localhost:3000/random` to get a random fumo.

If you are using a REST client, you can use the `Content-Type: application/json` header to get a JSON response.

```bash
curl -H "Content-Type: application/json" http://localhost:3000/random
```

The response will be a JSON object with the following structure:

```json
{
  "url": "http://localhost:3000/fumos/0001.jpg"
}
```

## Contributing

If you want to contribute to this project, you can do so by forking the repository and submitting a pull request.

- For Images, please submit a pull request with the image in the `fumos` folder.

- For code, please submit a pull request with the code changes. Please make sure that the code is properly formatted and that the tests pass.

## License

This project is licensed under the BSD 3-Clause License. See the [LICENSE](LICENSE) file for details.
