<template>
    <div class="modal fade" :id="'modal_' + id" tabindex="-1" role="dialog" :data-modal-identifier="modalIdentifier" :aria-labelledby="'modal_' + id + 'Label'" :data-backdrop="dataBackdrop" :data-keyboard="dataKeyboard">
        <div :class="'modal-dialog ' + modalDialogClass" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button v-if="showCloseButton" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-remove"></i></span></button>
                    <h4 class="modal-title" :id="'modal_' + id + 'Label'"><slot name="title"></slot></h4>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <div class="pull-left">
                        <slot name="footerText"></slot>
                    </div>
                    <div class="pull-right panel-controls">
                        <slot name="footerButtons">
                            <template v-if="type === 'form'">
                                <button type="button" class="btn btn-success btnSubmit"><span>{{ $t("label.save") }}</span></button>
                                <button type="button" class="btn btn-default" data-dismiss="modal"><span><i class="fa fa-times"></i> {{ $t("label.cancel") }}</span></button>
                            </template>
                            <template v-else-if="type === 'preview'">
                                <button type="button" class="btn btn-link" data-dismiss="modal"><span><i class="fa fa-times"></i> {{ $t("label.cancel") }}</span></button>
                            </template>
                        </slot>
                    </div>
                </div>
                <div class="pull-left"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import translationMessages from './../translations/messages'
    import generalMixin from './../mixins/General'
    import modalMixin from './../mixins/Modal'

    export default {
        name: 'modal',
        props: {
            closeOnClickOutside: { type: Boolean, default: true },
            customClass: { type: String, default: '' },
            modalIdentifier: { type: String, default: '' },
            recreateOnShow: { type: Boolean, default: true },
            showCloseButton: { type: Boolean, default: true },
            size: { type: String, default: '' },
            type: { type: String, default: 'default' }
        },
        mixins: [ generalMixin, modalMixin ],
        updated () {},
    data () {
        this.id = this._uid
        this.translations = translationMessages.translations[this.getDefaultLang()]

        return {
            modalDialogClass: this.getModalDialogClass(),
            dataBackdrop: this.closeOnClickOutside === false ? 'static' : 'true',
            dataKeyboard: this.closeOnClickOutside === false ? 'false' : 'true'
        }
    },
    beforeMount () {},
    mounted () {
        this.moveModalToPopSpace()
    },
    destroyed () {
        this.destroyModal()
    }
    }
</script>
