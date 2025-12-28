import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.text.repeated = ($, $p) => _ea.build_text(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i['add snippet']($)
    }
})