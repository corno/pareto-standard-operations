import * as _p from 'pareto-core-serializer'

import * as signatures from "../../../../../interface/signatures"
export const $$: signatures.serializers.primitives.text.pad_left = ($, $p) => _p.text.deprecated_build(($i) => {
    // Add padding characters if current length is less than desired length
    for (let i = _p.natural.text_length($); i < $p['desired length']; i++) {
        $i['add character']($p['pad character'])
    }
    $i['add snippet']($)
})