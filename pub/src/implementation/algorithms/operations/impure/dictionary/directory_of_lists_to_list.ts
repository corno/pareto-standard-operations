import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/dictionary/directory_of_lists_to_list"


export const $$ = <T>(
    $: _et.Dictionary<_et.List<T>>,
): _et.List<T> => _ea.build_list(($i) => {
    $.map(($, key) => {
        $.__for_each(($) => {
            $i['add element']($)
        })
    })
})