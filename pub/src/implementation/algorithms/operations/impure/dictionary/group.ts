import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'


export type Key_Value_Pair<T> = {
    key: string
    value: T
}

export const $$ = <T>($: _et.Dictionary<Key_Value_Pair<T>>): _et.Dictionary<_et.Array<T>> => _ea.deprecated_panic("IMPLEMENT!")