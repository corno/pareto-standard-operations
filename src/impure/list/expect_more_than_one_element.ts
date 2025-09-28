import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<_et.Array<T>> => $.__get_length() === 1
    ? _ea.not_set()
    : _ea.set($)