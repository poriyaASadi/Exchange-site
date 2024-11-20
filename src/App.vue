<template>
<router-view/>
</template>
<script>
document.documentElement.classList.toggle('dark',
 localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
</script>
<style>

</style>
