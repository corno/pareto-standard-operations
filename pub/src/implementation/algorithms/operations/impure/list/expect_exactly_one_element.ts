import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/expect_exactly_one_element"


export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<T> => $.__get_number_of_elements() !== 1
    ? _ea.not_set()
    // there is an element, so this statement will always return a 'set'
    : $.__get_element_at(0)