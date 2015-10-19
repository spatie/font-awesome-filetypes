# Font Awesome Filetypes

*Work in progress.*

Helper to retrieve the Font Awesome icon for a specific file extension.

## Installation

```bash
npm install font-awesome-filtypes
```

## Usage

### Basic Example

```es6
import getIconForExtension from 'font-awesome-filtypes'

let filename = foobar.jpg
let extension = foobar.split('.').pop()

let icon = `<i class="fa ${getIconForExtension(extension)}"></i>`

// => <i class="fa fa-file-image-o"></i>
```

## Testing

You can run the tests with:

```bash
npm run test
```

## About Spatie

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

