<template>
    <div id="main_footer" :class="['footer', fixed ? 'footer-fixed' : '']">
        <div class="footer-inner">
            <div class="footer-content" v-if='fixed'>
                <div class="container-fluid">
                    <div class="pull-left hidden-xs" v-html="content">
                    </div>
                    <div class="panel-controls pull-right" v-html="actions">
                    </div>
                </div>
                <div class="clearfix text-center pad-top-20 visible-xs-block">
                </div>
            </div>
            <div class="footer-content text-center" v-if="!fixed" v-html="content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'footer',
  props: ['dataOptions'],
  data () {
    let content = '<span>Copyright &copy; 2011 - ' + new Date().getFullYear() + ' <strong>eMAG</strong><br class="visible-xs-inline"/> All rights reserved.</span>'
    return Object.assign({ fixed: false, content: content, actions: '' }, this.dataOptions)
  }
}
</script>
