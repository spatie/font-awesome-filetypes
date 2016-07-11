# Font Awesome Filetypes

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/font-awesome-filetypes.svg?style=flat-square)](https://travis-ci.org/spatie/font-awesome-filetypes)

Helper to retrieve the Font Awesome icon for a specific file extension.

## Installation

```bash
npm install font-awesome-filetypes
```

## Usage

### Basic Examples

By default, the module exports the function to retrieve an icon's class name:

```es6
import getClassNameForExtension from 'font-awesome-filetypes'

const filename = 'foobar.jpg'
const extension = filename.split('.').pop()

const className = getClassNameForExtension(extension)

// className = 'fa-file-image-o'
```

You could also explicitely import the function:

```es6
import { getClassNameForExtension } from 'font-awesome-filetypes'
```

Ths module also exposes a function to retrieve an html string of the icon (as per the Font Awesome docs):

```es6
import { getIconForExtension } from 'font-awesome-filetypes'

const filename = 'foobar.jpg'
const extension = filename.split('.').pop()

const icon = getIconForExtension(extension)

// icon = '<i class="fa fa-file-image-o"></i>'
```

### Other Exposed Objects

Retrieve the object containing all icon classnames:

```es6
import icons from 'font-awesome-filetypes/lib/icons'

// icons = { image: 'fa-file-image-o', pdf: 'fa-file-pdf-o', ... }
```

Retrieve the object containing all supported extensions:

```es6
import extensions from 'font-awesome-filetypes/lib/extensions'

// extensions = { gif: 'fa-file-image-o', jpeg: 'fa-file-image-o', ... }
```

## Testing

You can run the tests (ESLint & Mocha) with:

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email [freek@spatie.be](mailto:freek@spatie.be) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
