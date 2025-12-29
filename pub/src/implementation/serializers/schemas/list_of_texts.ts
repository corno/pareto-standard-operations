import * as _pi from 'pareto-core-interface'
import * as _ps from 'pareto-core-serializer'

import * as signatures from "../../../interface/signatures"

export const $$: signatures.serializers.schemas.list_of_texts = ($) => _ps.build_text(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})