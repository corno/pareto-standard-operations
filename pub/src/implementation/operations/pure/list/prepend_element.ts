import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Array<T>, $p: {
    'element': T
}): _et.Array<T> => _ea.build_list(($i) => {
    $i['add element']($p.element)
    $.__for_each(($) => {
        $i['add element']($)
    })
})