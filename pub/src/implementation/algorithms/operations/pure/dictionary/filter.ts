import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/pure/dictionary/filter"


export const $$ = <T>($: _et.Dictionary<_et.Optional_Value<T>>): _et.Dictionary<T> => _ea.build_dictionary(($i) => {
    $.map(($, key) => {
        $.map(($) => {
            $i['add entry'](key, $)
        })
    })
})