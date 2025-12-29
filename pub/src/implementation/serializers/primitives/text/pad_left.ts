import * as _ps from 'pareto-core-serializer'
import * as _pi from 'pareto-core-interface'

import * as signatures from "../../../../interface/signatures"
export const $$: signatures.serializers.primitives.text.pad_left = ($, $p) => {
    return _ps.build_text(($i) => {
        
        // Add padding characters if current length is less than desired length
        for (let i =  _ps.get_text_length($); i < $p['desired length']; i++) {
            $i['add character']($p['pad character'])
        }
        
    }) + $
}