import * as _ps from 'pareto-core-serializer'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.text.escaped_character = ($, $p) => _ps.build_text(($i) => {

    const characters = _pinternals.text_to_character_list($)

    const iter = _pinternals.create_iterator(characters)

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
