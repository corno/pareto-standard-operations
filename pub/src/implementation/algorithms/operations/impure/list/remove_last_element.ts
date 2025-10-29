import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/remove_last_element"


export type Array_And_Element<T> = {
    'array': _et.Array<T>
    'element': T
}

export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<Array_And_Element<T>> => {
    const length = $.__get_length()
    if (length === 0) {
        return _ea.not_set()
    }
    return _ea.set({
        'array': _ea.build_list(($i) => {
            let current = 0
            $.__for_each(($) => {
                if (current !== length - 1) {
                    $i['add element']($)
                }
                current += 1
            })
        }),
        'element': $.__get_element_at(length - 1).transform(($) => $, () => _ea.panic("unreachable")),
    })
}