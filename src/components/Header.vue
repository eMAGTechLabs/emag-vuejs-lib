<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <div class="nav-controls visible-xs-inline-block pull-left">
          <button id="toggle-sidebar-btn" type="button" class="btn btn-default navbar-btn" aria-expanded="false">
            <span class="sr-only">Toggle sidepanel</span><i class="fa fa-bars"></i>
          </button>
        </div>
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="./../assets/logo.png" />
        </a>
        <div class="nav-controls visible-xs-inline-block pull-right">
          <button id="toggle-nav-btn" type="button" class="btn btn-default navbar-btn" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span><i class="fa fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="main-nav">
        <h4 class="navbar-text">Vue demo boilerplate</h4>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'navbar'
  }
</script>
