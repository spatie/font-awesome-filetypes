import assert from 'assert'
import getIconForExtension from '../src/index'
import icons from '../src/icons'

/* 
 * Just some smoke testing, going through every single extension would be madness.
 */

describe('icons', () => {

    it('returns_an_object_with_all_icons', () => {
        assert.equal(Object.keys(icons).length, 10)
    })
})

describe('get_icon_for_extension', () => {
    
    it('returns_a_default_file_icon', () => {
        assert.equal('fa-file-o', getIconForExtension('randomExtension'))
    })

    it('can_handle_random_cases', () => {
        assert.equal('fa-file-image-o', getIconForExtension('JPG'))
    })

    it('returns_an_image_icon', () => {
        assert.equal('fa-file-image-o', getIconForExtension('jpg'))
    })

    it('returns_a_pdf_icon', () => {
        assert.equal('fa-file-pdf-o', getIconForExtension('pdf'))
    })

    it('returns_a_word_icon', () => {
        assert.equal('fa-file-word-o', getIconForExtension('doc'))
    })

    it('returns_a_powerpoint_icon', () => {
        assert.equal('fa-file-powerpoint-o', getIconForExtension('ppt'))
    })

    it('returns_a_excel_icon', () => {
        assert.equal('fa-file-excel-o', getIconForExtension('xls'))
    })

    it('returns_an_audio_icon', () => {
        assert.equal('fa-file-audio-o', getIconForExtension('mp3'))
    })

    it('returns_a_video_icon', () => {
        assert.equal('fa-file-video-o', getIconForExtension('mp4'))
    })

    it('returns_a_zip_icon', () => {
        assert.equal('fa-file-zip-o', getIconForExtension('zip'))
    })

    it('returns_a_code_icon', () => {
        assert.equal('fa-file-code-o', getIconForExtension('js'))
    })
})
