import extensions from './extensions'
import icons from './icons'

/**
 * @param {string} extension
 * @returns {string}
 */
export function getClassNameForExtension(extension) {
    return extensions[extension.toLowerCase()] || icons.file
}

/**
 * @param {string} extension
 * @returns {string}
 */
export function getIconForExtension(extension) {
    return `<i class="fa ${getClassNameForExtension(extension)}"></i>`
}

/**
 * @param {string} extension
 * @returns {string}
 */
export function getExtensionForFilename(filename) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

/**
 * @param {string} extension
 * @returns {string}
 */
export function getClassNameForFilename(filename) {
    return getClassNameForExtension(getExtensionForFilename(filename))
}

/**
 * @param {string} extension
 * @returns {string}
 */
export function getIconForFilename(filename) {
    return getIconForExtension(getExtensionForFilename(filename))
}

export default getClassNameForExtension
