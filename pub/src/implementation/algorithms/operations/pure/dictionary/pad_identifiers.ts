import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/pure/dictionary/pad_identifiers"


export const $$ = <T>($: _et.Dictionary<T>, $p: { 'prefix': string, 'suffix': string }): _et.Dictionary<T> => _ea.build_dictionary(($i) => {
    $.map(($, key) => {
        $i['add entry']($p.prefix + key + $p.suffix, $)
    })
})