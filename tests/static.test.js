import fs from 'fs'
import path from 'path'

describe('static assets', () => {
  it('public/resume.pdf should exist', () => {
    const publicPath = path.join(process.cwd(), 'public', 'resume.pdf')
    expect(fs.existsSync(publicPath)).toBe(true)
  })
})
