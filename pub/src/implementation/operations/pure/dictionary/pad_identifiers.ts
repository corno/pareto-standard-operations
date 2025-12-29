import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>(
    $: _pi.Dictionary<T>,
    $p: {
        'prefix': string,
        'suffix': string
    }
): _pi.Dictionary<T> => _pinternals.build_dictionary(
    ($i) => {
        $.map(($, key) => {
            $i['add entry']($p.prefix + key + $p.suffix, $)
        })
    },
    _pt.unreachable_code_path() // no possibility of duplicate keys
)