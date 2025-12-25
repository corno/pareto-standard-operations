import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _et.List<T>): _et.Optional_Value<_et.List<T>> => $.__get_number_of_elements() < 2
    ? _ea.not_set()
    : _ea.set($)