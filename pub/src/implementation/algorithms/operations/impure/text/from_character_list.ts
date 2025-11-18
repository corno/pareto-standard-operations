import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: _et.List<number>): string => {
    return _ea.build_text(($i) => {
        $.__for_each(($) => {
            $i['add character']($)
        })
    })
}