import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/cast_to_non_empty"


export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<_et.Array<T>> => $.__get_length() === 0
    ? _ea.not_set()
    : _ea.set($)