import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: _et.Array<string>, $p: { 'other': _et.Array<string> }): boolean => {
    if ($.__get_length() !== $p.other.__get_length()) {
        return false
    }
    for (let i = 0; i < $.__get_length(); i++) {
        if ($.__get_element_at(i) !== $p.other.__get_element_at(i)) {
            return false
        }
    }
    return true
}