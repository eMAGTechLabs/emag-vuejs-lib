import Vue from 'vue'
import JqGrid from 'src/components/JqGrid.vue'

describe('JqGrid.vue', () => {
  it('should have dataOptions prop', () => {
    expect(JqGrid.props)
      .to.contains('dataOptions')
  })
  it('should have data method', () => {
    expect(typeof JqGrid.data).to.not.equal('function')
  })
  it('should have beforeCreate callback and it should be a function', () => {
    expect(typeof JqGrid.beforeCreate).to.equal('function')
  })
  it('should have mounted callback and it should be a function', () => {
    expect(typeof JqGrid.mounted).to.equal('function')
  })
  it('should have tag name jqGrid', () => {
    expect(JqGrid.name)
      .to.equal('jqGrid')
  })
})
