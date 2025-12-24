import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

import { $$ as op_filter } from "../../pure/dictionary/filter"
import { $$ as op_expect_more_than_one_element } from "./expect_more_than_one_element"

export const $$ = <T>($: _et.List<_et.Key_Value_Pair<T>>): _et.Dictionary<_et.List<T>> => op_filter(
    _ea.group_list($).map(($) => op_expect_more_than_one_element($))
)