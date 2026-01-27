import * as _pi from 'pareto-core/dist/interface'
import * as _pinternals from 'pareto-core/dist/transformer'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>(
    $: _pi.Dictionary<_pi.Dictionary<T>>, 
    $p: { 'separator': string },
    abort: _pi.Abort<['duplicate id', null]>
): _pi.Dictionary<T> => _pinternals.dictionary.from_list(
    _pinternals.list.deprecated_build<{ 'id': string, 'value': T }>(($i) => {
        $.__d_map(($, id) => {
            $.__d_map(($, sub_id) => {
                $i['add item']({
                    'id': id + $p.separator + sub_id,
                    'value': $
                })
            })
        })
    }),
    ($) => $.id,
    ($) => $.value,
    () => abort(['duplicate id', null]),
)