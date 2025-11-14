import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$$ } from "../../../../interface/boolean/true_false/deserializer"

export const $$: $$$ = ($: string, abort: (error: string) => never): boolean => $ === "true"
    ? true
    : $ === "false"
        ? false
        : abort("HANDLE UNEXPECTED VALUE!")