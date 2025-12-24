import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.operations.pure.text.join_list_of_texts = ($) => _ea.build_text(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})