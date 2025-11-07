import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as parse_hex } from "exupery-standard-library/dist/implementation/algorithms/operations/impure/integer/parse_hexadecimal"


export const $$ = ($: string): number => parse_hex($)