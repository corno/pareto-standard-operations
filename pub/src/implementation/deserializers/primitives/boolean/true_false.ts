import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.deserializers.primitives.boolean.true_false = ($, abort) => $ === "true"
    ? true
    : $ === "false"
        ? false
        : abort("HANDLE UNEXPECTED VALUE!")