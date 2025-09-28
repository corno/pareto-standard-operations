import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: string, $p: { 'count': number }): string => _ea.build_text(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i['add snippet']($)
    }
})