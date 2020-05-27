# Font Awesome Filetypes

[![MIT Licensed](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/font-awesome-filetypes.svg?style=flat-square)](https://travis-ci.org/spatie/font-awesome-filetypes)

Helper to retrieve the Font Awesome 5 icon for a specific file extension.

## Support us

Learn how to create a package like this one, by watching our premium video course:

[![Laravel Package training](https://spatie.be/github/package-training.jpg)](https://laravelpackage.training)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Installation

```bash
npm install font-awesome-filetypes
```

> For Font Awesome 4, install v1 of this package

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

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email [freek@spatie.be](mailto:freek@spatie.be) instead of using the issue tracker.

## Postcardware

You're free to use this package, but if it makes it to your production environment we highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Samberstraat 69D, 2060 Antwerp, Belgium.

We publish all received postcards [on our company website](https://spatie.be/en/opensource/postcards).

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
