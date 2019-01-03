<template>
  <div>
    <div :data-snack-id="`@bhavik_charola/${snackName}`" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212733;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:640px;width:100%"></div>
  </div>
</template>

<script>
export default {
  props: [
    'snackName'
  ],
  mounted() {
    window.ExpoSnack.initialize()
  }
}
</script>
