import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'


import { $$ as to_list } from "exupery-standard-library/dist/implementation/algorithms/operations/impure/dictionary/to_list"



export type Key_Value_Pair<T> = {
    'key': string
    'value': T
}

export type Compare_Result =
    | 'left is before right'
    | 'both are equal'
    | 'right is before left'

export const $$ = <T>(
    $: _et.Dictionary<T>,
    $c: {
        'compare': (left: string, right: string) => Compare_Result
    }
): _et.Array<Key_Value_Pair<T>> => {
    return to_list(
        $,
        $c,
    )
}