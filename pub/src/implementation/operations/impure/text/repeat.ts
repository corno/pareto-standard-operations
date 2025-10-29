import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/impure/text/repeat"


export const $$ = ($: string, $p: { 'count': number }): string => _ea.build_text(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i['add snippet']($)
    }
})