import { assert } from 'chai'
import { getClassNameForExtension, getIconForExtension } from '../src/index'
import icons from '../src/icons'

console.log(getClassNameForExtension);

describe('icons', () => {

    it('returns_an_object_with_all_icons', () => {
        assert.isAbove(Object.keys(icons).length, 1)
    })
})

describe('get_class_name_for_extension', () => {

    it('returns_a_default_file_icon', () => {
        assert.equal('fa-file-o', getClassNameForExtension('randomExtension'))
    })

    it('can_handle_other_cases', () => {
        assert.equal('fa-file-image-o', getClassNameForExtension('JPG'))
    })

    it('returns_the_correct_class_name_for_an_extension', () => {
        /* 
         * Just some smoke testing, going through every single extension would be madness.
         */
        let testCases = {
            jpg: 'fa-file-image-o',
            pdf: 'fa-file-pdf-o',
            doc: 'fa-file-word-o',
            ppt: 'fa-file-powerpoint-o',
            xls: 'fa-file-excel-o',
            mp3: 'fa-file-audio-o',
            mp4: 'fa-file-video-o',
            zip: 'fa-file-zip-o',
            js: 'fa-file-code-o'
        }

        Object.keys(testCases).map(extension => {
            assert.equal(testCases[extension], getClassNameForExtension(extension))
        })
    })
})

describe('get_icon_for_extension', () => {
    it('returns_the_correct_icon_for_an_extension', () => {
        assert.equal('<i class="fa fa-file-image-o"></i>', getIconForExtension('jpg'))
    })
})
