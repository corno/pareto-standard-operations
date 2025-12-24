import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.integer.fractional_decimal = ($, $p) => {
    const fractionalDigits = $p['number of fractional digits']
    
    return _ea.build_text(($i) => {
        let value = $
        
        // Handle negative numbers
        if (value < 0) {
            $i['add character'](45) // '-'
            value = -value
        }
        
        // Calculate the divisor for the fractional part (10^fractionalDigits)
        let divisor = 1
        for (let i = 0; i < fractionalDigits; i++) {
            divisor *= 10
        }
        
        // Split into integer and fractional parts
        const integerPart = _ea.integer_division(value, divisor)
        const fractionalPart = value % divisor
        
        // Generate integer part digits
        const integerDigits = _ea.build_list<number>(($i) => {
            let temp = integerPart
            if (temp === 0) {
                $i['add element'](0)
            } else {
                while (temp > 0) {
                    const digit = temp % 10
                    $i['add element'](digit)
                    temp = _ea.integer_division(temp, 10)
                }
            }
        })
        
        // Add integer part (reverse order)
        for (let j = integerDigits.__get_number_of_elements() - 1; j >= 0; j--) {
            $i['add character'](48 + integerDigits.__get_element_at(j).transform(
                ($) => $,
                () => _ea.deprecated_panic(`index out of bounds`)
            ))
        }
        
        // Add decimal point
        $i['add character'](46) // '.'
        
        // Generate fractional part digits
        const fractionalDigits_list = _ea.build_list<number>(($i) => {
            let temp = fractionalPart
            for (let i = 0; i < fractionalDigits; i++) {
                const digit = temp % 10
                $i['add element'](digit)
                temp = _ea.integer_division(temp, 10)
            }
        })
        
        // Add fractional part (reverse order)
        for (let j = fractionalDigits_list.__get_number_of_elements() - 1; j >= 0; j--) {
            $i['add character'](48 + fractionalDigits_list.__get_element_at(j).transform(
                ($) => $,
                () => _ea.deprecated_panic(`index out of bounds`)
            ))
        }
    })
}