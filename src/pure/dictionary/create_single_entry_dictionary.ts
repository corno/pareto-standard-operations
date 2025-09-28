import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Key_Value_Pair<T>): _et.Dictionary<T> => _ea.build_dictionary(($i) => {
    $i['add entry']($.key, $.value)
})