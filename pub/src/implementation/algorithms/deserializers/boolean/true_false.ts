import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: string): boolean => $ === "true"
    ? true
    : $ === "false"
        ? false
        : _ea.deprecated_panic("HANDLE UNEXPECTED VALUE!")