import * as _p from 'pareto-core-serializer'

import * as signatures from "../../../../../interface/signatures"

export const $$: signatures.serializers.primitives.text.repeated = ($, $p) => _p.text.deprecated_build(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i['add snippet']($)
    }
})