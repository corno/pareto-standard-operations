import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/transformer'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _pi.List<T>): _pi.Optional_Value<T> => _pt.natural.amount_of_list_items($) !== 1
    ? _pt.optional.not_set()
    // there is an element, so this statement will always return a 'set'
    : $.__deprecated_get_possible_item_at(0)