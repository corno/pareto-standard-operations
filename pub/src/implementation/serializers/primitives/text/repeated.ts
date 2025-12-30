import * as _ps from 'pareto-core-serializer'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.text.repeated = ($, $p) => _ps.build_text(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i['add snippet']($)
    }
})