import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_build_dictionary_of_lists } from "exupery-standard-library/dist/implementation/operations/impure/dictionary/build_dictionary_of_lists"

export const $$ = <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Dictionary<_et.Array<T>> => op_build_dictionary_of_lists(($i) => {
    $.__for_each(($) => {
        $i['add entry']($.key, $.value)
    })
})