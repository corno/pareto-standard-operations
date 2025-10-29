import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/pure/text/join_list_of_texts"


export const $$ = ($: _et.Array<string>): string => _ea.build_text(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})