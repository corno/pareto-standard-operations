import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/pure/list/is_equal_to"


export const $$ = ($: _et.Array<string>, $p: { 'other': _et.Array<string> }): boolean => {
    if ($.__get_number_of_elements() !== $p.other.__get_number_of_elements()) {
        return false
    }
    for (let i = 0; i < $.__get_number_of_elements(); i++) {
        if ($.__get_element_at(i) !== $p.other.__get_element_at(i)) {
            return false
        }
    }
    return true
}