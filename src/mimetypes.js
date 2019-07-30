import icons from './icons'

const mimeTypes = {
    'image/gif': icons.image,
    'image/jpeg': icons.image,
    'image/png': icons.image,

    'application/pdf': icons.pdf,

    'application/msword': icons.word,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': icons.word,

    'application/mspowerpoint': icons.powerpoint,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': icons.powerpoint,

    'application/msexcel': icons.excel,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': icons.excel,

    'text/csv': icons.csv,

    'audio/aac': icons.audio,
    'audio/wav': icons.audio,
    'audio/mpeg': icons.audio,
    'audio/mp4': icons.audio,
    'audio/ogg': icons.audio,

    'video/x-msvideo': icons.video,
    'video/mpeg': icons.video,
    'video/mp4': icons.video,
    'video/ogg': icons.video,
    'video/quicktime': icons.video,
    'video/webm': icons.video,

    'application/gzip': icons.archive,
    'application/zip': icons.archive,

    'text/css': icons.code,
    'text/html': icons.code,
    'text/javascript': icons.code,
    'application/javascript': icons.code,

    'text/plain': icons.text,
    'text/richtext': icons.text,
    'text/rtf': icons.text
}

export default mimeTypes
