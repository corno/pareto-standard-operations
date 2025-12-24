import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.boolean.true_false = ($) => {
    return $ ? "true" : "false"
}