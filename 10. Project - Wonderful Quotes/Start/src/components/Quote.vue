<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
          <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.panel-body {
  color: green;
  border: 1px solid lightseagreen;
  border-radius: 8px;
  font-style: italic;
  background-color: rgb(180, 252, 195);
  text-align: center;
}
.panel{
  border-radius: 8px;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: rgb(77, 206, 146);
}
</style>