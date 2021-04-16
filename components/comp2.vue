<template>
<div>
    <h3>컴퍼넌트 테스트2 </h3>
    <button @click="touch">클릭</button>
</div>
</template>

<script>
export default {
    props: ['touch']
}
</script>