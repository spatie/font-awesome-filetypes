import extensions from './extensions'
import icons from './icons'

/**
 * @param {string} extension
 * @returns {string}
 */
function getClassNameForExtension(extension) {
    return extensions[extension.toLowerCase()] || icons.file
}

export default getClassNameForExtension
