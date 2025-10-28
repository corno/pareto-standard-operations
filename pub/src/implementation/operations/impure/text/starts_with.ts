import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_starts_with } from "exupery-standard-library/dist/implementation/operations/impure/text/starts_with"

export const $$ = (
    $: string,
    $p: {
        'search pattern': string,
        'position': number
    },
): boolean => op_starts_with($, $p['search pattern'], $p['position'])