import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as split } from "exupery-standard-library/dist/implementation/algorithms/operations/impure/text/split"


export const $$ = ($: string, separator: string): _et.Array<string> => split($, separator)