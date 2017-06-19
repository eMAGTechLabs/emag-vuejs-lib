<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <div class="nav-controls visible-xs-inline-block pull-left">
                    <button id="toggle-sidebar-btn" type="button" class="btn btn-default navbar-btn"
                            aria-expanded="false">
                        <span class="sr-only">Toggle sidepanel</span><i class="fa fa-bars"></i>
                    </button>
                </div>
                <a class="navbar-brand" href="#" v-on:click.stop="changeRoute(logoRoute)">
                    <img v-if="logoPath" :src="logoPath"/>
                </a>
                <div class="nav-controls visible-xs-inline-block pull-right">
                    <button id="toggle-nav-btn" type="button" class="btn btn-default navbar-btn" data-toggle="collapse"
                            data-target="#main-nav" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span><i class="fa fa-angle-down"></i>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="main-nav">
                <h4 class="navbar-text" v-if="appName">{{ appName }}</h4>
                <ul class="nav navbar-nav navbar-right" v-if="headerChildren">
                  <component v-bind:is="view.component" v-for="view in currentView" :key="view.name" :dataOptions="view.options">
                  </component>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
  import generalMixin from './../mixins/General'
  export default {
    name: 'header',
    props: ['dataOptions', 'headerChildren'],
    mixins: [ generalMixin ],
    data () {
      return {
        logoPath: this.dataOptions ? this.dataOptions.logoPath : '',
        logoRoute: this.dataOptions ? this.dataOptions.logoRoute : '',
        appName: this.dataOptions ? this.dataOptions.appName : '',
        currentView: this.headerChildren
      }
    },
    beforeMount () {
      this.unwatch = this.$watch('currentView', function (data) {
        this.currentView = this.headerChildren
      }, { deep: true })
    },
    destroy () {
      this.unwatch()
    }
  }
</script>
