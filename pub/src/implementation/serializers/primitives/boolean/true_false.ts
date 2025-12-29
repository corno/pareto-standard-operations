import * as _pi from 'pareto-core-interface'
import * as _ps from 'pareto-core-serializer'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.serializers.primitives.boolean.true_false = ($) => {
    return $ ? "true" : "false"
}