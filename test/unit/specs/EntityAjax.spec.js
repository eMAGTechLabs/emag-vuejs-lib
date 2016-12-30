import EntityAjax from 'src/components/EntityAjax.vue'

describe('EntityAjax.vue', () => {
  it('should have dataOptions prop', () => {
    expect(EntityAjax.props)
      .to.contains('dataOptions')
  })
  it('should have tag name entity-ajax', () => {
    expect(EntityAjax.name)
      .to.equal('entity-ajax')
  })
  it('should have data method', () => {
    expect(typeof EntityAjax.data).to.equal('function')
  })
})
