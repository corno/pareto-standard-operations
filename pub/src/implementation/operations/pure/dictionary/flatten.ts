import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _et.Dictionary<_et.Dictionary<T>>, $p: { 'separator': string }): _et.Dictionary<T> => _ea.deprecated_build_dictionary(($i) => {
    $.map(($, key) => {
        $.map(($, subkey) => {
            $i['add entry'](`${key}${$p.separator}${subkey}`, $)
        })
    })
})