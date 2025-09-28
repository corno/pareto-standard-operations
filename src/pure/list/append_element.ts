import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Array<T>, $p: {
    'element': T
}): _et.Array<T> => _ea.build_list(($i) => {
    $.__for_each(($) => {
        $i['add element']($)
    })
    $i['add element']($p.element)
})