import Autocomplete from 'src/components/Autocomplete.vue'

describe('Autocomplete.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Autocomplete.props)
      .to.contains('dataOptions')
  })
  it('should have tag name entity-ajax', () => {
    expect(Autocomplete.name)
      .to.equal('autocomplete')
  })
  it('should have data method', () => {
    expect(typeof Autocomplete.data).to.equal('function')
  })
})
