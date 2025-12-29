import * as _pi from 'pareto-core-interface'
import * as _ps from 'pareto-core-serializer'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.integer.octal = ($) => {
    return _ps.build_text(($i) => {
        if ($ < 0) {
            $i['add character'](45) // '-'
            $ = -$
        }
        
        // Add "0o" prefix
        $i['add character'](48) // '0'
        $i['add character'](111) // 'o'
        
        const digits = _ps.build_list<number>(($i) => {
            do {
                const digit = $ % 8
                $i['add element'](digit)
                $ = _ps.integer_division($, 8, () => _ps.unreachable_code_path())
            } while ($ > 0)

        })

        for (let j = digits.get_number_of_elements() - 1; j >= 0; j--) {
            const digit = digits.__get_element_at(j).transform(
                ($) => $,
                () => _ps.unreachable_code_path() // index cannot be out of bounds
            )
            $i['add character'](48 + digit) // '0'-'7'
        }
    })
}