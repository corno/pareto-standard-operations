import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_filter } from "../../pure/dictionary/filter"
import { $$ as op_expect_more_than_one_element } from "./expect_more_than_one_element"
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/select_clashing_keys"


export const $$ = <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Dictionary<_et.Array<T>> => op_filter(
    _ea.group_list($).map(($) => op_expect_more_than_one_element($))
)