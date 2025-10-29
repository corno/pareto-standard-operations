import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/to_dictionary_if_no_clashes"


export const $$ = <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Optional_Value<_et.Dictionary<T>> => {
    const seenKeys: { [key: string]: null } = {}
    let foundClash: boolean = false
    const result = _ea.build_dictionary<T>(($i) => {
        $.__for_each(($) => {
            if (seenKeys[$.key] !== undefined) {
                foundClash = true
            }
            seenKeys[$.key] = null
            $i['add entry']($.key, $.value)
        })
    })
    return foundClash ? _ea.not_set() : _ea.set(result)
}