import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/remove_first_element"


export type Element_And_Rest<T> = {
    'element': T
    'rest': _et.Array<T>
}

export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<Element_And_Rest<T>> => {
    const arr = $
    return $.__get_element_at(0).map(
        ($) => ({
            'rest': _ea.build_list(($i) => {
                let is_first = true
                arr.__for_each(($) => {
                    if (!is_first) {
                        $i['add element']($)
                    }
                    is_first = false
                })
            }),
            'element': $,
        }),
    )
}