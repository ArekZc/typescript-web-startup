import { expect } from 'chai'

import greetings from '../src/index'

describe('Unit: greetings()', () => {
  it('should greet by name', () => {
    expect(greetings('Arek')).to.equal('Hello Arek!')
  })
})
