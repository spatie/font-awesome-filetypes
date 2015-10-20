import extensions from './extensions'
import icons from './icons'

/**
 * @param {string} extension
 * @returns {string}
 */
function getIconForExtension(extension) {
    return extensions[extension.toLowerCase()] || icons.file
}

export default getIconForExtension
