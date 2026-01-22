import * as _p from 'pareto-core/dist/transformer'
import * as _ps from 'pareto-core/dist/serializer'
import * as _pi from 'pareto-core/dist/interface'
import * as _pd from 'pareto-core/dist/deserializer'

import * as d_list_of_separated_strings from "../../../interface/to_be_generated/list_of_separated_strings"

export const $$: _pi.Serializer_With_Parameters<_pi.List<string>, d_list_of_separated_strings.Parameters> = ($, $p) => {
    let is_first = true
    return _ps.text.from_list(_p.list.deprecated_build<number>(
        ($i) => {
            $.__for_each(($) => {
                if (!is_first) {
                    $i['add list'](_pd.list.from_text($p.separator, ($) => $))
                }
                $i['add list'](_pd.list.from_text($, ($) => $))
                is_first = false

            })
        }),
        ($) => $,
    )
}