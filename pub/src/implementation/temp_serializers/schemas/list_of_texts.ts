import * as _ps from 'pareto-core-serializer'

import * as signatures from "../../../interface/signatures"

export const $$: signatures.serializers.schemas.list_of_texts = ($) => _ps.text.build(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})