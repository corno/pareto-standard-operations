import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: _et.Array<string>, $p: { 'separator': string }): string => _ea.build_text(($i) => {
    let is_first = true
    return _ea.build_text(($i) => {
        $.__for_each(($) => {
            if (!is_first) {
                $i['add snippet']($p.separator)
            }
            $i['add snippet']($)
            is_first = false

        })
    })
})