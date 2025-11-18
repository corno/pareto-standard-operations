import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/list/enrich_with_position_information"


export const $$ = <T>($: _et.List<T>): _et.List<{
    'value': T
    'is first': boolean
    'is last': boolean
    'index': number
}> => {
    const length = $.__get_number_of_elements()
    let index = -1
    return $.map(($) => {
        index += 1
        return {
            'value': $,
            'is first': index === 0,
            'is last': index === length - 1,
            'index': index,
        }
    })
}