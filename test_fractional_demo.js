#!/usr/bin/env node

// Manual demo of the fractional decimal functionality

const { $$ : serializer } = require('./pub/dist/implementation/algorithms/integer/fractional_decimal/serializer');
const { $$ : deserializer } = require('./pub/dist/implementation/algorithms/integer/fractional_decimal/deserializer');

console.log('=== Fractional Decimal Demo ===\n');

// Test serializer with different parameters
console.log('Serializer Tests:');
console.log(`123 with 2 digits: "${serializer(123, { 'number of fractional digits': 2 })}"`);
console.log(`1234 with 2 digits: "${serializer(1234, { 'number of fractional digits': 2 })}"`);
console.log(`-567 with 2 digits: "${serializer(-567, { 'number of fractional digits': 2 })}"`);
console.log(`1000 with 3 digits: "${serializer(1000, { 'number of fractional digits': 3 })}"`);
console.log(`42 with 1 digit: "${serializer(42, { 'number of fractional digits': 1 })}"`);
console.log(`123 with 0 digits: "${serializer(123, { 'number of fractional digits': 0 })}"`);

console.log('\nDeserializer Tests:');

// Test deserializer with successful cases
try {
    console.log(`"12.34" with 2 digits: ${deserializer("12.34", { 'number of fractional digits': 2 }, (err) => { throw new Error(err); })}`);
    console.log(`"-12.34" with 2 digits: ${deserializer("-12.34", { 'number of fractional digits': 2 }, (err) => { throw new Error(err); })}`);
    console.log(`"1.234" with 3 digits: ${deserializer("1.234", { 'number of fractional digits': 3 }, (err) => { throw new Error(err); })}`);
    console.log(`"42.5" with 1 digit: ${deserializer("42.5", { 'number of fractional digits': 1 }, (err) => { throw new Error(err); })}`);
    console.log(`"123." with 0 digits: ${deserializer("123.", { 'number of fractional digits': 0 }, (err) => { throw new Error(err); })}`);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log('\nRound-trip Test:');
const originalValue = 123456;
const fractionalDigits = 3;
const serialized = serializer(originalValue, { 'number of fractional digits': fractionalDigits });
console.log(`Original: ${originalValue}, Serialized: "${serialized}"`);
try {
    const deserialized = deserializer(serialized, { 'number of fractional digits': fractionalDigits }, (err) => { throw new Error(err); });
    console.log(`Deserialized: ${deserialized}, Match: ${originalValue === deserialized}`);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log('\nError Cases:');
// Test error cases
const errorCases = [
    { input: "12.3", digits: 2, desc: "Wrong number of fractional digits" },
    { input: "12.abc", digits: 2, desc: "Invalid characters" },
    { input: "12.34.56", digits: 2, desc: "Multiple decimal points" },
    { input: ".34", digits: 2, desc: "Missing integer part" },
    { input: "12.", digits: 2, desc: "Missing fractional part when expecting digits" },
    { input: "12", digits: 2, desc: "No decimal point" }
];

errorCases.forEach(({ input, digits, desc }) => {
    try {
        deserializer(input, { 'number of fractional digits': digits }, (err) => { throw new Error(err); });
        console.log(`❌ "${input}" should have failed (${desc})`);
    } catch (e) {
        console.log(`✅ "${input}" correctly failed: ${e.message}`);
    }
});

console.log('\n=== Demo Complete ===');