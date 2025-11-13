import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: string): number => {
    const characters = _ea.text_to_character_list($)
    let result = 0
    let isNegative = false
    let startIndex = 0
    
    // Check for empty string
    if (characters.__get_number_of_elements() === 0) {
        _ea.deprecated_panic(`Empty string is not a valid octal number`)
    }
    
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
    
    // Check for "0o" prefix - REQUIRE it for octal
    if (characters.__get_number_of_elements() <= startIndex + 1 ||
        get_character_at(startIndex) !== 48 || // '0'
        get_character_at(startIndex + 1) !== 111) { // 'o'
        _ea.deprecated_panic(`Octal number must have '0o' prefix`)
    }
    startIndex += 2
    
    // Check if there are digits after the prefix
    if (startIndex >= characters.__get_number_of_elements()) {
        _ea.deprecated_panic(`Octal number must have digits after '0o' prefix`)
    }
    
    // Parse octal digits from left to right
    for (let i = startIndex; i < characters.__get_number_of_elements(); i++) {
        const charCode = get_character_at(i)
        
        // Check if character is an octal digit (48-55 for '0'-'7')
        if (charCode >= 48 && charCode <= 55) { // '0'-'7'
            const digit = charCode - 48
            result = result * 8 + digit
        } else {
            // Invalid character
            _ea.deprecated_panic(`Invalid character in octal string`)
        }
    }
    
    return isNegative ? -result : result
}