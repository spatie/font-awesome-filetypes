import { assert } from 'chai'
import {
    getClassNameForExtension,
    getIconForExtension,
    getExtensionForFilename,
    getClassNameForFilename,
    getIconForFilename,
    getClassNameForMimetype, getIconForMimetype
} from '../src/index'
import icons from '../src/icons'

describe('icons', () => {

    it('returns_an_object_with_all_icons', () => {
        assert.equal(Object.keys(icons).length, 11)
        assert.equal(Object.values(icons).length, 11)
    })
})

describe('get_class_name_for_extension', () => {

    it('returns_a_default_file_icon', () => {
        assert.equal('fa-file', getClassNameForExtension('randomExtension'))
    })

    it('can_handle_other_cases', () => {
        assert.equal('fa-file-image', getClassNameForExtension('JPG'))
    })

    it('returns_the_correct_class_name_for_an_extension', () => {
        let testCases = {
            gif: 'fa-file-image',
            jpeg: 'fa-file-image',
            jpg: 'fa-file-image',
            png: 'fa-file-image',
            pdf: 'fa-file-pdf',
            doc: 'fa-file-word',
            docx: 'fa-file-word',
            ppt: 'fa-file-powerpoint',
            pptx: 'fa-file-powerpoint',
            xls: 'fa-file-excel',
            xlsx: 'fa-file-excel',
            aac: 'fa-file-audio',
            mp3: 'fa-file-audio',
            ogg: 'fa-file-audio',
            avi: 'fa-file-video',
            flv: 'fa-file-video',
            mkv: 'fa-file-video',
            mp4: 'fa-file-video',
            gz: 'fa-file-archive',
            zip: 'fa-file-archive',
            css: 'fa-file-code',
            html: 'fa-file-code',
            js: 'fa-file-code',
            txt: 'fa-file-alt'
        }

        Object.keys(testCases).map(extension => {
            assert.equal(testCases[extension], getClassNameForExtension(extension))
        })
    })
})

describe('get_icon_for_extension', () => {

    it('returns_the_correct_icon_for_an_extension', () => {
        assert.equal('<i class="fa fa-file-image"></i>', getIconForExtension('jpg'))
    })
})

describe('get_extension_for_filename', () => {

    it('returns_the_correct_extension_for_a_filename', () => {
        let testCases = {
            'picture.jpg': 'jpg',
            'audio.v1.mp3': 'mp3',
            '.htaccess': ''
        }
        Object.keys(testCases).map(filename => {
            assert.equal(testCases[filename], getExtensionForFilename(filename))
        })
    })
})

describe('get_class_name_for_filename', () => {

    it('returns_a_default_file_icon', () => {
        assert.equal('fa-file', getClassNameForFilename('file.randomExtension'))
        assert.equal('fa-file', getClassNameForFilename('.htaccess'))
    })

    it('can_handle_other_cases', () => {
        assert.equal('fa-file-image', getClassNameForFilename('image.JPG'))
    })

    it('returns_the_correct_class_name_for_a_filename', () => {
        /*
         * Just some smoke testing, going through every single filename would be madness.
         */
        let testCases = {
            'image.jpg': 'fa-file-image',
            'document.pdf': 'fa-file-pdf',
            'document.doc': 'fa-file-word',
            'presentation.ppt': 'fa-file-powerpoint',
            'spreadsheet.xls': 'fa-file-excel',
            'song.mp3': 'fa-file-audio',
            'song.mp4': 'fa-file-video',
            'archive.zip': 'fa-file-archive',
            'script.js': 'fa-file-code'
        }

        Object.keys(testCases).map(filename => {
            assert.equal(testCases[filename], getClassNameForFilename(filename))
        })
    })
})

describe('get_icon_for_filename', () => {

    it('returns_the_correct_icon_for_a_filename', () => {
        assert.equal('<i class="fa fa-file-image"></i>', getIconForFilename('image.jpg'))
    })
})

describe('get_class_name_for_mimetype', () => {

    it('returns_a_default_file_icon', () => {
        assert.equal('fa-file', getClassNameForMimetype('example/mimetype'))
    })

    it('can_handle_other_cases', () => {
        assert.equal('fa-file-image', getClassNameForMimetype('IMAGE/jpeg'))
    })

    it('returns_the_correct_class_name_for_a_mimetype', () => {
        let testCases = {
            'image/gif': 'fa-file-image',
            'image/jpeg': 'fa-file-image',
            'image/png': 'fa-file-image',
            'application/pdf': 'fa-file-pdf',
            'application/msword': 'fa-file-word',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'fa-file-word',
            'application/mspowerpoint': 'fa-file-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'fa-file-powerpoint',
            'application/msexcel': 'fa-file-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'fa-file-excel',
            'audio/aac': 'fa-file-audio',
            'audio/wav': 'fa-file-audio',
            'audio/mpeg': 'fa-file-audio',
            'audio/mp4': 'fa-file-audio',
            'audio/ogg': 'fa-file-audio',
            'video/x-msvideo': 'fa-file-video',
            'video/mpeg': 'fa-file-video',
            'video/ogg': 'fa-file-video',
            'video/quicktime': 'fa-file-video',
            'video/webm': 'fa-file-video',
            'application/gzip': 'fa-file-archive',
            'application/zip': 'fa-file-archive',
            'text/css': 'fa-file-code',
            'text/html': 'fa-file-code',
            'text/javascript': 'fa-file-code',
            'application/javascript': 'fa-file-code',
            'text/plain': 'fa-file-alt',
            'text/richtext': 'fa-file-alt',
            'text/rtf': 'fa-file-alt'
        }

        Object.keys(testCases).map(mimetype => {
            assert.equal(testCases[mimetype], getClassNameForMimetype(mimetype))
        })
    })
})

describe('get_icon_for_mimetype', () => {

    it('returns_the_correct_icon_for_a_mimetype', () => {
        assert.equal('<i class="fa fa-file-image"></i>', getIconForMimetype('image/jpeg'))
    })
})
