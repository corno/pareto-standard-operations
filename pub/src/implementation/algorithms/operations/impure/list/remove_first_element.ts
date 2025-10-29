import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/remove_first_element"


export type Array_And_Element<T> = {
    'array': _et.Array<T>
    'element': T
}

export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<Array_And_Element<T>> => $.__get_length() === 0
    ? _ea.not_set()
    : _ea.set({
        'array': _ea.build_list(($i) => {
            let is_first = true
            $.__for_each(($) => {
                if (!is_first) {
                    $i['add element']($)
                }
                is_first = false
            })
        }),
        'element': $.__get_element_at(0).transform(($) => $, () => _ea.panic("unreachable")),
    })