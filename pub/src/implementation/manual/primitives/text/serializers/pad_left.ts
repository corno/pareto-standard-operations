import * as _p from 'pareto-core/dist/transformer'
import * as _ps from 'pareto-core/dist/serializer'

import * as signatures from "../../../../../interface/signatures"
export const $$: signatures.serializers.primitives.text.pad_left = ($, $p) => _ps.text.deprecated_build(($i) => {
    // Add padding characters if current length is less than desired length
    for (let i = _p.natural.text_length($); i < $p['desired length']; i++) {
        $i.add_character($p['pad character'])
    }
    $i.add_snippet($)
})