import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Array<T>): _et.Optional_Value<T> => $.__get_length() !== 1
    ? _ea.not_set()
    // there is an element, so this statement will always return a 'set'
    : $.__get_element_at(0)