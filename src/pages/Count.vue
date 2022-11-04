<template>
  <button @click="count++">
    Counter: {{ count }}
  </button>
  </template>

<script>
export default {  // 컴포넌트
  //data: {
    //count: 0
  //}
  data() {
    return {
      count: 0
    }
  }
}
</script>