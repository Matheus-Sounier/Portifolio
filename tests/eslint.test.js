import { ESLint } from 'eslint'

describe('lint rules', () => {
  it('has no ESLint errors (fail on severity 2)', async () => {
    const eslint = new ESLint({ cwd: process.cwd() })
    let results = []
    try {
      results = await eslint.lintFiles(['app/**/*.jsx', 'tests/**/*.js', 'tests/**/*.jsx'])
    } catch (err) {
      if (err && /No files matching/.test(String(err))) {
        results = []
      } else {
        throw err
      }
    }

    const errors = results.flatMap((r) => r.messages || []).filter((m) => m.severity === 2)

    if (errors.length) {
      const formatted = errors
        .map((e) => `${e.ruleId} - ${e.message} (${e.line}:${e.column}) in ${e.filePath}`)
        .join('\n')
      throw new Error('ESLint errors found:\n' + formatted)
    }
  })
})
