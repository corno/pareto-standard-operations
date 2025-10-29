import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/dictionary/expect_exactly_one_entry"


export const $$ = <T>($: _et.Dictionary<T>): _et.Optional_Value<_et.Key_Value_Pair<T>> => {
    let found: null | _et.Key_Value_Pair<T> = null
    let found_too_many = false
    $.map(($, key) => {
        if (found !== null) {
            found_too_many = true
        }
        found = {
            'key': key,
            'value': $,
        }
    })
    if (found_too_many) {
        //more than one entry
        return _ea.not_set()
    }
    if (found === null) {
        //not found
        return _ea.not_set()
    }
    return _ea.set(found)
}