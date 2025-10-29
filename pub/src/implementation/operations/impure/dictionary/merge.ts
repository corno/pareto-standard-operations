import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/impure/dictionary/merge"



/**
 * Merges two dictionaries into one,
 * All the entries of the context dictionary will be present, each optionally with the entry from the supporting dictionary
 * 
 * <
 *   {
 *     `A`: 1
 *     `B`: 2
 *   }
 *   (
 *     'supporting dictionary': {
 *       `A`: 3
 *       `C`: 4
 *     }
 *   )
 * > => {
 *   `A`: (
 *     'context': 1
 *     'supporting': + 3
 *   )
 *   `B`: (
 *     'context': 2
 *     'supporting': -
 *   )
 * }
 */
export const $$ = <Main, Supporting>(
    $: _et.Dictionary<Main>,
    $p: { 'supporting dictionary': _et.Dictionary<Supporting> }
): _et.Dictionary<{
    'context': Main
    'supporting': _et.Optional_Value<Supporting>
}> => _ea.build_dictionary(($i) => {
    $.map(($, key) => {
        $i['add entry'](key, {
            'context': $,
            'supporting': $p['supporting dictionary'].__get_entry(key),
        })
    })
})