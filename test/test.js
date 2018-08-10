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
        assert.isAbove(Object.keys(icons).length, 1)
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
        /*
         * Just some smoke testing, going through every single extension would be madness.
         */
        let testCases = {
            jpg: 'fa-file-image',
            pdf: 'fa-file-pdf',
            doc: 'fa-file-word',
            ppt: 'fa-file-powerpoint',
            xls: 'fa-file-excel',
            mp3: 'fa-file-audio',
            mp4: 'fa-file-video',
            zip: 'fa-file-zip',
            txt: 'fa-file-alt',
            js: 'fa-file-code'
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
            'archive.zip': 'fa-file-zip',
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
