import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.integer.decimal = ($) => {
    return _ea.build_text(($i) => {
        if ($ < 0) {
            $i['add character'](45) // '-'
            $ = -$
        }
        const digits = _ea.build_list<number>(($i) => {
            do {
                const digit = $ % 10
                $i['add element'](digit)
                $ = _ea.integer_division($, 10)
            } while ($ > 0)

        })

        for (let j = digits.get_number_of_elements() - 1; j >= 0; j--) {
            $i['add character'](48 + digits.__get_element_at(j).transform(
                ($) => $,
                () => _ea.deprecated_panic(`index out of bounds`)
            ))
        }
    })
}