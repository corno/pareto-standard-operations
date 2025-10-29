import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/impure/dictionary/is_not_empty"


export const $$ = <T>($: _et.Dictionary<T>): boolean => {
    let is_empty = true
    $.map(($) => {
        is_empty = false
    })
    return !is_empty
}