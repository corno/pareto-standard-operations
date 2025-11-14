import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$$ } from '../../../../interface/integer/octal/serializer'

export const $$: $$$ = ($: number): string => {
    return _ea.build_text(($i) => {
        if ($ < 0) {
            $i['add character'](45) // '-'
            $ = -$
        }
        
        // Add "0o" prefix
        $i['add character'](48) // '0'
        $i['add character'](111) // 'o'
        
        const digits = _ea.build_list<number>(($i) => {
            do {
                const digit = $ % 8
                $i['add element'](digit)
                $ = _ea.integer_division($, 8)
            } while ($ > 0)

        })

        for (let j = digits.__get_number_of_elements() - 1; j >= 0; j--) {
            const digit = digits.__get_element_at(j).transform(
                ($) => $,
                () => _ea.deprecated_panic(`index out of bounds`)
            )
            $i['add character'](48 + digit) // '0'-'7'
        }
    })
}