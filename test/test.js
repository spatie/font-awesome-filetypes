import { assert } from 'chai'
import {
    getClassNameForExtension,
    getIconForExtension,
    getExtensionForFilename,
    getClassNameForFilename,
    getIconForFilename
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
