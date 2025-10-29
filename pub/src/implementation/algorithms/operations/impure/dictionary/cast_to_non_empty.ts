import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_is_empty } from "./is_empty"
import { Signature } from "../../../../../interface/algorithms/operations/impure/dictionary/cast_to_non_empty"


export const $$ = <T>($: _et.Dictionary<T>): _et.Optional_Value<_et.Dictionary<T>> => op_is_empty($)
    ? _ea.not_set()
    : _ea.set($)