# Font Awesome Filetypes

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/blender/font-awesome-filetypes.svg?style=flat-square)](https://travis-ci.org/spatie/font-awesome-filetypes)

*Work in progress.*

Helper to retrieve the Font Awesome icon for a specific file extension.

## Installation

```bash
npm install font-awesome-filtypes
```

## Usage

### Basic Example

```es6
import getIconForExtension from 'font-awesome-filetypes'

let filename = 'foobar.jpg'
let extension = filename.split('.').pop()

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

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
