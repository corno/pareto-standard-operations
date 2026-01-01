import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>(
    $: _pi.Dictionary<_pi.Dictionary<T>>, 
    $p: { 'separator': string },
    abort: ($: ['duplicate key', null]) => never
): _pi.Dictionary<T> => _pinternals.build_dictionary(
    ($i) => {
        $.map(($, key) => {
            $.map(($, subkey) => {
                $i['add entry'](`${key}${$p.separator}${subkey}`, $)
            })
        })
    },
    () => abort(['duplicate key', null])
)