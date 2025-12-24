import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export type Key_Value_Pair<T> = {
    key: string
    value: T
}

export const $$: signatures.operations.impure.dictionary.group = <T>($: _et.Dictionary<Key_Value_Pair<T>>): _et.Dictionary<_et.List<T>> => _ea.deprecated_panic("IMPLEMENT!")