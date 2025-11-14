#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as generic from "../interface/generic"

import {
    run_refiner_tests_with_parameters,
    run_refiner_tests_without_parameters,
    run_tests,
    run_transformer_tests_with_parameters,
    run_transformer_tests_without_parameters,
} from "../implementation/generic"

// Import test data
import { TEST_DATA } from "../data/test_data"

// Import serializers
import { $$ as s_decimal } from "pub/dist/implementation/algorithms/serializers/integer/decimal"
import { $$ as s_hexadecimal } from "pub/dist/implementation/algorithms/serializers/integer/hexadecimal"
import { $$ as s_binary } from "pub/dist/implementation/algorithms/serializers/integer/binary"
import { $$ as s_octal } from "pub/dist/implementation/algorithms/serializers/integer/octal"
import { $$ as s_udhr_to_iso } from "pub/dist/implementation/algorithms/serializers/integer/udhr_to_iso"
import { $$ as s_boolean_true_false } from "pub/dist/implementation/algorithms/serializers/boolean/true_false"
import { $$ as s_approx_scientific } from "pub/dist/implementation/algorithms/serializers/approximate_number/scientific_notation"
import { $$ as s_pad_left } from "pub/dist/implementation/algorithms/serializers/text/pad_left"

// Import deserializers
import { $$ as d_decimal } from "pub/dist/implementation/algorithms/deserializers/integer/decimal"
import { $$ as d_hexadecimal } from "pub/dist/implementation/algorithms/deserializers/integer/hexadecimal"
import { $$ as d_binary } from "pub/dist/implementation/algorithms/deserializers/integer/binary"
import { $$ as d_octal } from "pub/dist/implementation/algorithms/deserializers/integer/octal"
import { $$ as d_iso_to_udhr } from "pub/dist/implementation/algorithms/deserializers/integer/iso_to_udhr"
import { $$ as d_true_false } from "pub/dist/implementation/algorithms/deserializers/boolean/true_false"
import { $$ as d_approx_scientific } from "pub/dist/implementation/algorithms/deserializers/approximate_number/scientific_notation"


run_tests(_ea.dictionary_literal({
    "serializers": ['group', _ea.dictionary_literal({
        "integer": ['group', _ea.dictionary_literal({
            "decimal": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.decimal, s_decimal)], //do all like this one
            "hexadecimal": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.hexadecimal, s_hexadecimal)],
            "binary": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.binary, s_binary)],
            "octal": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.octal, s_octal)],
            "udhr to iso": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer['udhr to iso'], s_udhr_to_iso)],
        })],
        "boolean": ['group', _ea.dictionary_literal({
            "true false": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.boolean['true false'], s_boolean_true_false)],
        })],
        "approximate_number": ['group', _ea.dictionary_literal({
            "scientific notation": ['group', run_transformer_tests_with_parameters(TEST_DATA.serializers.approximate_number['scientific notation'], s_approx_scientific)],
        })],
        "text": ['group', _ea.dictionary_literal({
            "pad left": ['group', run_transformer_tests_with_parameters(TEST_DATA.serializers.text['pad left'], s_pad_left)],
        })],
    })],
    "deserializers": ['group', _ea.dictionary_literal({
        "integer": ['group', _ea.dictionary_literal({
            "decimal": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.decimal, d_decimal)],
            "hexadecimal": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.hexadecimal, d_hexadecimal)],
            "binary": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.binary, d_binary)],
            "octal": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.octal, d_octal)],
            "iso to udhr": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer['iso to udhr'], d_iso_to_udhr)],
        })],
        "boolean": ['group', _ea.dictionary_literal({
            "true false": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.boolean['true false'], d_true_false)],
        })],
        // "approximate_number": ['group', _ea.dictionary_literal({
        //     "scientific notation": ['group', TEST_DATA.deserializers.approximate_number['scientific notation'].map(($) => ['test', { 'passed': (() => {
        //         const result = d_approx_scientific($.input)
        //         const diff = result > $.expected ? result - $.expected : $.expected - result
        //         return diff <= $.tolerance
        //     })() }])],
        // })],
    })],
}))
