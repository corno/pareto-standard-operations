import * as _pi from 'pareto-core-interface'
import * as _ps from 'pareto-core-serializer'

import * as d_list_of_separated_strings from "../../../interface/to_be_generated/list_of_separated_strings"

import * as signatures from "../../../interface/signatures"

export const $$: _pi.Serializer_With_Parameters<_pi.List<string>, d_list_of_separated_strings.Parameters> = ($, $p) => {
    let is_first = true
    return _ps.build_text(($i) => {
        $.__for_each(($) => {
            if (!is_first) {
                $i['add snippet']($p.separator)
            }
            $i['add snippet']($)
            is_first = false

        })
    })
}