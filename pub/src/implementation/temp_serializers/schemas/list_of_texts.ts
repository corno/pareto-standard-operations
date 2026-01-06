import * as _p from 'pareto-core-serializer'

import * as signatures from "../../../interface/signatures"

export const $$: signatures.serializers.schemas.list_of_texts = ($) => _p.text.deprecated_build(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})