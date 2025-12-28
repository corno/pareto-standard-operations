import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.text.escaped_character = ($, $p) => _ea.build_text(($i) => {

    const characters = _ea.text_to_character_list($)

    const iter = _ea.create_iterator(characters)

    while (true) {
        const current_character = iter['get current']()
        if (!current_character.is_set()) {
            return
        }
        current_character.map(
            ($) => {
                if ($ === $p['escape character code']) { // \
                    iter.consume()
                    $i['add character']($p['escape character code'])
                    $i['add character']($p['escape character code'])
                } else if ($ === $p['character code']) {
                    iter.consume()
                    $i['add character']($p['escape character code'])
                    $i['add character']($p['character code'])
                } else {
                    iter.consume()
                    $i['add character']($)
                }
            }
        )
    }
})
