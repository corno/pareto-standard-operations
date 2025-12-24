import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$ = <T>($: _et.List<T>, $p: {
    'element': T
}): _et.List<T> => _ea.build_list(($i) => {
    $i['add element']($p.element)
    $.__for_each(($) => {
        $i['add element']($)
    })
})