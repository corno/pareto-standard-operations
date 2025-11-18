import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/pure/list/append_element"


export const $$ = <T>($: _et.List<T>, $p: {
    'element': T
}): _et.List<T> => _ea.build_list(($i) => {
    $.__for_each(($) => {
        $i['add element']($)
    })
    $i['add element']($p.element)
})