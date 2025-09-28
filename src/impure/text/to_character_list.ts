import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_to_character_list } from "exupery-standard-library/dist/text/to_character_list"

export const $$ = ($: string): _et.Array<number> => op_to_character_list($)