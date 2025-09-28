import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_dictionary_to_list } from "exupery-standard-library/dist/dictionary/to_list"

export const $$ = <T>(
    $: _et.Dictionary<T>,
): _et.Array<_et.Key_Value_Pair<T>> => op_dictionary_to_list(
    $,
    {
        'compare': (a, b) => {
            return a < b
                ? 'left is before right'
                : a > b
                    ? 'right is before left'
                    : 'both are equal'
        }
    }
)