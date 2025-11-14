import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import { $$$ } from '../../../../interface/text/pad_left/serializer'

export const $$: $$$ = ($: string, $p: {
    'desired length': number,
    'pad character': number
}): string => {
    return _ea.build_text(($i) => {
        const characters = _ea.text_to_character_list($)
        const currentLength = characters.__get_number_of_elements()
        
        // Add padding characters if current length is less than desired length
        for (let i = currentLength; i < $p['desired length']; i++) {
            $i['add character']($p['pad character'])
        }
        
        // Add original characters
        for (let i = 0; i < currentLength; i++) {
            const charCode = characters.__get_element_at(i).transform(
                ($) => $,
                () => _ea.deprecated_panic(`index out of bounds`)
            )
            $i['add character'](charCode)
        }
    })
}