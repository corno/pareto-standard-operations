import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/expect_more_than_one_element"


export const $$ = <T>($: _et.List<T>): _et.Optional_Value<_et.List<T>> => $.__get_number_of_elements() === 1
    ? _ea.not_set()
    : _ea.set($)