import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _et.Dictionary<T>): boolean => {
    let is_empty = true
    $.map(($) => {
        is_empty = false
    })
    return !is_empty
}