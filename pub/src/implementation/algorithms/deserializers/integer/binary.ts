import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: string): number => {
    const characters = _ea.text_to_character_list($)
    let result = 0
    let isNegative = false
    let startIndex = 0
    
    const get_character_at = (index: number): number => {
        return characters.__get_element_at(index).transform(
            ($) => $,
            () => _ea.deprecated_panic(`index out of bounds`)
        )
    }
    
    // Check for negative sign
    if (characters.__get_number_of_elements() > 0 && get_character_at(0) === 45) { // '-'
        isNegative = true
        startIndex = 1
    }
    
    // Check for "0b" prefix
    if (characters.__get_number_of_elements() > startIndex + 1 && 
        get_character_at(startIndex) === 48 && // '0'
        get_character_at(startIndex + 1) === 98) { // 'b'
        startIndex += 2
    }
    
    // Parse binary digits from left to right
    for (let i = startIndex; i < characters.__get_number_of_elements(); i++) {
        const charCode = get_character_at(i)
        
        // Check if character is a binary digit (48-49 for '0'-'1')
        if (charCode >= 48 && charCode <= 49) { // '0'-'1'
            const digit = charCode - 48
            result = result * 2 + digit
        } else {
            // Invalid character
            _ea.deprecated_panic(`Invalid character in binary string`)
        }
    }
    
    return isNegative ? -result : result
}