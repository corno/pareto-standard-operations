import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>($: _et.Array<_et.Optional_Value<T>>): _et.Array<T> => _ea.build_list<T>(($i) => {
    $.__for_each(($) => {
        $.map(($) => {
            $i['add element']($)
        })
    })
})