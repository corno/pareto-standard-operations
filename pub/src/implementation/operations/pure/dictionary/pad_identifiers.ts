import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _et.Dictionary<T>, $p: { 'prefix': string, 'suffix': string }): _et.Dictionary<T> => _ea.deprecated_build_dictionary(($i) => {
    $.map(($, key) => {
        $i['add entry']($p.prefix + key + $p.suffix, $)
    })
})