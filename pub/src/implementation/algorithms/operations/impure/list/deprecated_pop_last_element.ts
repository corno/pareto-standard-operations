import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/remove_last_element"


export type Element_And_Rest<T> = {
    'element': T
    'rest': _et.List<T>
}

export const $$ = <T>($: _et.List<T>): _et.Optional_Value<Element_And_Rest<T>> => {
    const length = $.__get_number_of_elements()
    const arr = $
    return $.__get_element_at(length - 1).map(
        ($) => ({
            'rest': _ea.build_list(($i) => {
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