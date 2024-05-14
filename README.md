# express-microservice-utils

A collection of simple utilities written for an express microservice architecture

## Installation

You can install the package via npm:

```bash
npm install express-microservices-utils
```

## Usage

### Manual fetching

```js
const { fetch, fetchConfig } = require("express-microservice-utils");

// Create the options object
const options = fetchConfig({ method: "POST", body: {} });

// Make a fetch request
fetch("https://api.example.com/upload/cats", options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Handled Fetch

```js
const { handledFetch } = require("express-microservice-utils");

// Make a fetch request with response handling, rejecting non 2xx statuses and calling .json() on ok responses
const catData = await handledFetch({
  url: "https://api.example.com/data/cats",
  method: "GET",
  errMessage: "Could not GET cats data",
});

console.log(catData.furColour);
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
