<template>
  <div>
    <button @click="post">send post request to /api/test</button>
  </div>
</template>

<script setup lang="ts">
async function post() {
  const { data } = await useFetch('/api/test', { method: 'POST', body: { some: 'json' } })
  console.log(data.value)
}
</script>
