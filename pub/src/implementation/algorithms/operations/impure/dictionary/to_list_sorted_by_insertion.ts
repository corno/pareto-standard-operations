import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { Signature } from "../../../../../interface/algorithms/operations/impure/dictionary/to_list_sorted_by_code_point"


export const $$ = <T>(
    $: _et.Dictionary<T>,
): _et.List<_et.Key_Value_Pair<T>> => $.deprecated_to_array(
    (a, b) => {
        return 0
    }
)