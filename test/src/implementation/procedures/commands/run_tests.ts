import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_main from "exupery-resources/dist/interface/temp_main"
import * as d_test from "../../../interface/generic"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/target"
import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/target"

export type Resources = {
    'commands': {
        'log error': _et.Command<d_log_error.Parameters, null>,
        'log': _et.Command<d_log.Parameters, null>,
    }
}

export type Procedure = _et.Command_Procedure<d_test.Results, null, Resources>

import { $$ as op_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/is_empty"
import { $$ as op_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"
import { $$ as op_flatten } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/flatten"

import * as t_test_result_to_text from "../../generic/transformers/test_result/lines"

const has_passed = (results: d_test.Results): boolean => {
    return op_is_empty(op_filter<null>(results.map(($) => {
        return _ea.cc($, ($) => {
            switch ($[0]) {
                case 'test': return _ea.ss($, ($) => $.passed ? _ea.not_set() : _ea.set(null))
                case 'group': return _ea.ss($, ($) => has_passed($) ? _ea.not_set() : _ea.set(null))
                default: return _ea.au($[0])
            }
        })
    })))
}

export const $$: Procedure = _easync.create_command_procedure(
    ($r, $p) => _easync.p.sequence([
        $r.commands.log.execute.direct(
            ($) => $,
            {
                'lines': _ea.array_literal([
                    `Running tests...`,
                ])
            }
        ),
        _easync.p.conditional.direct(
            has_passed($p),
            $r.commands.log.execute.direct(
                ($) => $,
                {
                    'lines': op_flatten( _ea.array_literal([
                       t_test_result_to_text.Results($p),
                       _ea.array_literal([ 
                        ``,
                        `all tests successful.`
                    ]),
                    ]))
                }
            ),
            $r.commands['log error'].execute.direct(
                ($) => $,
                {
                    'lines': op_flatten( _ea.array_literal([
                       t_test_result_to_text.Results($p),
                       _ea.array_literal([ 
                        ``,
                        `some tests failed`
                    ]),
                    ]))
                }
            ),
        )
    ])
)

