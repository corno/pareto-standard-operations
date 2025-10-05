import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_escape_character } from "./escape_character"

export const $$ = ($: {
    'value': string
    'add delimiters': boolean
}): string => ($['add delimiters'] ? '`' : '')
    + op_escape_character(
        $.value,
        {
            'character code': 96, // `
            'escape character code': 92, // \

        }
    )
    + $['add delimiters'] ? '`' : ''