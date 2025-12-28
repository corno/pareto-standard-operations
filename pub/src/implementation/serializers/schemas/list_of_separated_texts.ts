import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_list_of_separated_strings from "../../../interface/to_be_generated/list_of_separated_strings"

import * as signatures from "../../../interface/signatures"

export const $$: _et.Serializer_With_Parameters<_et.List<string>, d_list_of_separated_strings.Parameters> = ($, $p) => {
    let is_first = true
    return _ea.build_text(($i) => {
        $.__for_each(($) => {
            if (!is_first) {
                $i['add snippet']($p.separator)
            }
            $i['add snippet']($)
            is_first = false

        })
    })
}