import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>(
    $: _pi.Dictionary<_pi.Dictionary<T>>, 
    $p: { 'separator': string },
    abort: _pi.Abort<['duplicate key', null]>
): _pi.Dictionary<T> => _pinternals.dictionary.from_list(
    _pinternals.list.deprecated_build<{ 'key': string, 'value': T }>(($i) => {
        $.__d_map(($, key) => {
            $.__d_map(($, subkey) => {
                $i['add element']({
                    'key': key + $p.separator + subkey,
                    'value': $
                })
            })
        })
    }),
    ($) => $.key,
    ($) => $.value,
    () => abort(['duplicate key', null]),
)