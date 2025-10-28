import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>(
    $: _et.Dictionary<_et.Array<T>>,
): _et.Array<T> => _ea.build_list(($i) => {
    $.map(($, key) => {
        $.__for_each(($) => {
            $i['add element']($)
        })
    })
})