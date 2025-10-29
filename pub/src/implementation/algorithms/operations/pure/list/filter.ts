import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/pure/list/filter"


export const $$ = <T>($: _et.Array<_et.Optional_Value<T>>): _et.Array<T> => _ea.build_list<T>(($i) => {
    $.__for_each(($) => {
        $.map(($) => {
            $i['add element']($)
        })
    })
})