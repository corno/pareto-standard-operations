import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: number, $p: { 'digits': number }): string => {
    return _ea.build_text(($i) => {
        // Handle special cases
        if ($ === 0) {
            $i['add character'](48) // '0'
            return
        }
        
        // Handle negative numbers
        if ($ < 0) {
            $i['add character'](45) // '-'
            $ = -$
        }
        
        // Calculate exponent and mantissa for scientific notation
        let exponent = 0
        let mantissa = $
        
        // Normalize to range [1, 10)
        if (mantissa >= 10) {
            while (mantissa >= 10) {
                mantissa = mantissa / 10
                exponent++
            }
        } else if (mantissa < 1) {
            while (mantissa < 1) {
                mantissa = mantissa * 10
                exponent--
            }
        }
        
        // Create scale factor by multiplying
        let scale_factor = 1
        for (let i = 0; i < $p.digits - 1; i++) {
            scale_factor = scale_factor * 10
        }
        
        // Simple rounding using integer operations
        const mantissa_scaled = _ea.integer_division(mantissa * scale_factor + 0.5, 1)
        
        // Convert mantissa to string
        const digits = _ea.build_list<number>(($i) => {
            let temp = mantissa_scaled
            if (temp === 0) {
                $i['add element'](0)
            } else {
                do {
                    const digit = temp % 10
                    $i['add element'](digit)
                    temp = _ea.integer_division(temp, 10)
                } while (temp > 0)
            }
        })
        
        // Add leading digit
        const first_digit = digits.__get_element_at(digits.__get_number_of_elements() - 1).transform(
            ($) => $,
            () => _ea.deprecated_panic(`index out of bounds`)
        )
        $i['add character'](48 + first_digit) // First digit
        
        // Add decimal point if we have more digits
        if ($p.digits > 1 && digits.__get_number_of_elements() > 1) {
            $i['add character'](46) // '.'
            
            // Add remaining digits in reverse order
            for (let j = digits.__get_number_of_elements() - 2; j >= 0; j--) {
                const digit = digits.__get_element_at(j).transform(
                    ($) => $,
                    () => _ea.deprecated_panic(`index out of bounds`)
                )
                $i['add character'](48 + digit)
            }
        }
        
        // Add exponent part
        $i['add character'](101) // 'e'
        if (exponent < 0) {
            $i['add character'](45) // '-'
            exponent = -exponent
        } else {
            $i['add character'](43) // '+'
        }
        
        // Convert exponent to string
        const exp_digits = _ea.build_list<number>(($i) => {
            if (exponent === 0) {
                $i['add element'](0)
            } else {
                do {
                    const digit = exponent % 10
                    $i['add element'](digit)
                    exponent = _ea.integer_division(exponent, 10)
                } while (exponent > 0)
            }
        })
        
        // Add exponent digits in reverse order
        for (let j = exp_digits.__get_number_of_elements() - 1; j >= 0; j--) {
            const digit = exp_digits.__get_element_at(j).transform(
                ($) => $,
                () => _ea.deprecated_panic(`index out of bounds`)
            )
            $i['add character'](48 + digit)
        }
    })
}