import extensions from './extensions'
import icons from './icons'

/**
 * @param {string} extension
 * @returns {string}
 */
export default function getClassNameForExtension(extension) {
    return extensions[extension.toLowerCase()] || icons.file
}

/**
 * @param {string} extension
 * @returns {string}
 */
export function getIconForExtension(extension) {
    return `<i class="fa ${getClassNameForExtension(extension)}"></i>`
}
