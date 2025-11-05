import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/remove_last_element"


export type Array_And_Element<T> = {
    'array': _et.Array<T>
    'element': T
}

export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<Array_And_Element<T>> => {
    const length = $.__get_length()
    const arr = $
    return $.__get_element_at(length - 1).map(
        ($) => ({
            'array': _ea.build_list(($i) => {
                let current = 0
                arr.__for_each(($) => {
                    if (current !== length - 1) {
                        $i['add element']($)
                    }
                    current += 1
                })
            }),
            'element': $,
        }),
    )
}