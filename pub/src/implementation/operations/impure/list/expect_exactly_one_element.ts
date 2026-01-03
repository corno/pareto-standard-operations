import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _pi.List<T>): _pi.Optional_Value<T> => $.get_number_of_elements() !== 1
    ? _pt.optional.not_set()
    // there is an element, so this statement will always return a 'set'
    : $.__get_possible_element_at(0)