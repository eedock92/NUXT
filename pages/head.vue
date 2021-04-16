<template>
    <h1> {{title}} </h1>
</template>

<script>


export default{
    data() {
        return{
            title : 'hello world'
        }
    },
    head() {
        return {
            title: this.title,
            meta : [
                {hid: '1', name : '멍개', content: '멍개 입니다.'}
            ]
        }
    }
}
</script>
