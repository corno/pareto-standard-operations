import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/pure/dictionary/create_single_entry_dictionary"


export const $$ = <T>($: _et.Key_Value_Pair<T>): _et.Dictionary<T> => _ea.deprecated_build_dictionary(($i) => {
    $i['add entry']($.key, $.value)
})