import extensions from './extensions'
import icons from './icons'

function getIconForExtension(extension) {
    return extensions[extension.toLowerCase()] || icons.file
}

export default getIconForExtension
