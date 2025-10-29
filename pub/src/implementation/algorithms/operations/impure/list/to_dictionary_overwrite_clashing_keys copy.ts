import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/to_dictionary_overwrite_clashing_keys copy"


export const $$ = <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Dictionary<T> => _ea.build_dictionary(($i) => {
    $.__for_each(($) => {
        $i['add entry']($.key, $.value)
    })
})