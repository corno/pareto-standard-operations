import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Array<T>): _et.Array<{
    'value': T
    'is first': boolean
    'is last': boolean
    'index': number
}> => {
    const length = $.__get_length()
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