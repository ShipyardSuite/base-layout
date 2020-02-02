# base-layout
Shared components for Shipyard GCDN Microservices

# Installation
install base-layout with `npm install @shipyardsuite/base-layout`.

# Usage
call base-layout with 
```javascript
const { [COMPONENT_NAME] } = require('@shipyardsuite/base-layout');
```

# Components

## DBFetcher
DBFetcher tests the database connection with a simple test-fetch command to an API endpoint.

### Example
```jsx
<DBFetcher route="/api/test"/>
```

### Options

| Name  | Type    | Required | Default | Description                                         |
| ----- | ------- | -------- | ------- | --------------------------------------------------- |
| route | `String`| `true`   |         | The route to an API endpoint for connection checks. |

## License
This project is released under the [Apache version 2](LICENSE) license.