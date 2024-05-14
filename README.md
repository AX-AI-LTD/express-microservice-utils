# express-microservice-utils

A collection of simple utilities written for an express microservice architecture

## Installation

You can install the package via npm:

```bash
npm install express-microservices-utils
```

## Usage

### custom axios instance

The axios instance rejects promises when errors occur, allowing for await to throw in a try catch setup

```js
const axios = require("express-microservice-utils");

// ...

try {
  const result = await axios.get("someURL");
  doStuff(result);
  return { ok: true };
} catch (err) {
  return { ok: false, reason: err.message, status: err.response?.status };
}
```

### axiosHandled instance

The axiosHandled instance resolves promises with an {ok:false} object when errors occur, meaning that await will not throw

```js
const axiosHandled = require("express-microservice-utils");

// ...

const result = await axiosHandled.get("someURL");
if (!result.ok) {
  return result;
}
doStuff(result);
return { ok: true };
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
