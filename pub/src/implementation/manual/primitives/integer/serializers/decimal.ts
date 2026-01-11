import * as _p from 'pareto-core-serializer'

import * as signatures from "../../../../../interface/signatures"

export const $$: signatures.serializers.primitives.integer.decimal = ($) => _p.text.deprecated_build(($i) => {
    if ($ < 0) {
        $i['add character'](45) // '-'
        $ = -$
    }
    const digits = _p.list.deprecated_build<number>(($i) => {
        do {
            const digit = $ % 10
            $i['add element'](digit)
            $ = _p.integer.divide($, 10, () => _p.unreachable_code_path())
        } while ($ > 0)

    })

    for (let j = digits.__get_number_of_elements() - 1; j >= 0; j--) {
        $i['add character'](48 + digits.__get_possible_element_at(j).__decide(
            ($) => $,
            () => _p.unreachable_code_path() // index cannot be out of bounds
        ))
    }
})