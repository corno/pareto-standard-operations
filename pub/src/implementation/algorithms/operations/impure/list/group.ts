import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { Signature } from "../../../../../interface/algorithms/operations/impure/list/group"

export const $$ = <T>($: _et.List<_et.Key_Value_Pair<T>>): _et.Dictionary<_et.List<T>> => _ea.group_list($)