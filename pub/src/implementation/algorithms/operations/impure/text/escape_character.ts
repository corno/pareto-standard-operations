import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_to_character_list } from "exupery-standard-library/dist/implementation/operations/impure/text/to_character_list"
import { Signature } from "../../../../../interface/algorithms/operations/impure/text/escape_character"


export const $$ = (
    $: string,
    $p: {
        'character code': number
        'escape character code': number
    }
): string => {
    return _ea.build_text(($i) => {
        const characters = op_to_character_list($)
        const length = characters.__get_length()

        let position = 0

        const consume_character = () => {
            position += 1
        }

        const get_current_character = (): null | number => {
            return characters.__get_element_at(position).transform(
                ($) => $,
                () => null,
            )
        }

        while (true) {
            const current_character = get_current_character()
            if (current_character === null) {
                return
            }
            if (current_character === $p['escape character code']) { // \
                consume_character()
                $i['add character']($p['escape character code'])
                $i['add character']($p['escape character code'])
            } else if (current_character === $p['character code']) {
                consume_character()
                $i['add character']($p['escape character code'])
                $i['add character']($p['character code'])
            } else {
                consume_character()
                $i['add character'](current_character)
            }
        }
    })
}