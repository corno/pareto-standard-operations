import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>(
    $: _pi.Dictionary<_pi.Dictionary<T>>, 
    $p: { 'separator': string },
    abort: ($: ['duplicate key', null]) => never
): _pi.Dictionary<T> => _pdev.implement_me("flatten dictionary")
//     _pinternals.dictionary.build(
//     ($i) => {
//         $.map(($, key) => {
//             $.map(($, subkey) => {
//                 $i['add entry'](`${key}${$p.separator}${subkey}`, $)
//             })
//         })
//     },
//     () => abort(['duplicate key', null])
// )