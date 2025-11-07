import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as build_dictionary_of_lists } from "exupery-standard-library/dist/implementation/algorithms/operations/impure/dictionary/build_dictionary_of_lists"

export const $$ = <T>(
    $: (
        $c: { 'add entry': (key: string, value: T) => void }
    ) => void
): _et.Dictionary<_et.Array<T>> => {
    return build_dictionary_of_lists<T>($)
}