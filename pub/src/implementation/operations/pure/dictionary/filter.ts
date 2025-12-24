import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../../../interface/signatures"

export const $$: signatures.operations.pure.dictionary.filter = <T>($: _et.Dictionary<_et.Optional_Value<T>>): _et.Dictionary<T> => _ea.deprecated_build_dictionary(($i) => {
    $.map(($, key) => {
        $.map(($) => {
            $i['add entry'](key, $)
        })
    })
})