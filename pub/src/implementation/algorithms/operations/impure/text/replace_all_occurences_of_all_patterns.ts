import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as replace_all_occurences_of_all_patterns } from "exupery-standard-library/dist/implementation/algorithms/operations/impure/text/replace_all_occurences_of_all_patterns"


export const $$ = ($: string, patterns: _et.Array<{ 'search value': string, 'replace value': string }>) => replace_all_occurences_of_all_patterns($, patterns)