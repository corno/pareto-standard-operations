# Code Coverage Setup

This test directory includes code coverage analysis using [c8](https://github.com/bcoe/c8), which provides native V8 coverage support.

## Available Scripts

- `npm test` - Run tests without coverage
- `npm run test:coverage` - Run tests with coverage analysis and generate reports
- `npm run coverage:open` - Open the HTML coverage report in your browser

## Coverage Reports

When you run `npm run test:coverage`, three types of reports are generated:

1. **Text Report** - Displayed in the terminal with coverage percentages
2. **HTML Report** - Interactive web report saved to `./coverage/index.html`
3. **LCOV Report** - Machine-readable format saved to `./coverage/lcov.info`

## Coverage Configuration

Coverage is configured via `.c8rc.json` and includes:

- Source mapping from TypeScript to JavaScript
- Coverage of files in `../pub/dist/**/*.js` 
- Source file mapping to `../pub/src`
- HTML, text, and LCOV output formats
- Coverage thresholds set to 80% (configurable)

## Viewing Coverage

### Terminal Output
The terminal shows a summary table with:
- File-by-file coverage percentages
- Statement, branch, function, and line coverage
- Uncovered line numbers

### HTML Report
Open `./coverage/index.html` to see:
- Interactive file browser
- Line-by-line coverage highlighting
- Detailed branch coverage analysis
- Sortable coverage metrics

## Coverage Data

- Raw V8 coverage data is stored in `./coverage/.nyc_output/`
- This data is excluded from version control via `.gitignore`
- Coverage reports are regenerated on each run

## Notes

- The coverage tool works without modifying any existing test code
- Source maps are automatically used to map compiled JavaScript back to TypeScript
- Coverage includes only the production code in `../pub/dist/`, not test code