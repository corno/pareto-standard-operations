import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as op_replace_all } from "exupery-standard-library/dist/implementation/algorithms/operations/impure/text/replace_all_occurences_of_all_patterns"
import { Signature } from "../../../../../interface/algorithms/operations/impure/text/create_valid_file_name"


export const $$ = (
    $: string,
    $p: {
        'replace spaces with underscores': boolean
    }
): string => {
    if (!$p['replace spaces with underscores']) {
        return $ //FIXME: this needs to be implemented properly
    }
    return op_replace_all(
        $,
        _ea.array_literal([
            { 'search value': "$", 'replace value': "$$" },
            { 'search value': "_", 'replace value': "$_" },
            { 'search value': " ", 'replace value': "_" },
        ])
    )
}