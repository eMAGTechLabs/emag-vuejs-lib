function moveModalToPopSpace () {
  $('#modal_' + this.id).detach().appendTo('pop_space')
}

function getModalDialogClass () {
  return getSizeCssClass()
}

function destroyModal() {
  $('#modal_' + this.id).modal('hide').data('bs.modal', null)
}

function getSizeCssClass () {
  switch (this.size) {
    case 'small':
      return 'modal-sm';
    case 'large':
      return 'modal-lg';
    default:
      return '';
  }
}

export default {
  methods: {
    moveModalToPopSpace,
    getModalDialogClass,
    destroyModal
  }
}