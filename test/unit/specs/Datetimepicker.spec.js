import Datetimepicker from 'src/components/Datetimepicker'

describe('Datetimepicker.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Datetimepicker.props)
      .to.contains('dataOptions')
  })
  it('should have tag name datetimepicker', () => {
    expect(Datetimepicker.name)
      .to.equal('datetimepicker')
  })
  it('should have data method', () => {
    expect(typeof Datetimepicker.data).to.equal('function')
  })
})
