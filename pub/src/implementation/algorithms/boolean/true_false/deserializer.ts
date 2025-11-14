import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$$ } from "../../../../interface/boolean/true_false/deserializer"

export const $$: $$$ = ($, abort) => $ === "true"
    ? true
    : $ === "false"
        ? false
        : abort("HANDLE UNEXPECTED VALUE!")