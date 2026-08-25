import { ESLint } from 'eslint'

describe('react-hooks set-state-in-effect', () => {
  it('fails when setState is called synchronously inside an effect', async () => {
    const eslint = new ESLint({
      cwd: process.cwd(),
      overrideConfig: {
          languageOptions: {
            parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
          },
          plugins: {
            'react-hooks': require('eslint-plugin-react-hooks'),
          },
          rules: {
            'react-hooks/set-state-in-effect': 'error',
          },
        },
    })

    let results = []
    try {
      results = await eslint.lintFiles(['app/components/**/*.jsx'])
    } catch (err) {
      if (err && /No files matching/.test(String(err))) {
        results = []
      } else {
        throw err
      }
    }
    const hits = results.flatMap((r) => r.messages || []).filter((m) => m.ruleId === 'react-hooks/set-state-in-effect')

    if (hits.length) {
      const out = hits.map((h) => `${h.ruleId} ${h.message} (${h.filePath}:${h.line}:${h.column})`).join('\n')
      throw new Error('react-hooks/set-state-in-effect found:\n' + out)
    }
  })
})
