<template>
<div>
    <h4> 컴포넌트 테스트 {{ message }} </h4>
    <!-- <p> {{text}} </p> -->
    <button @click="increment">c1 증가</button>
  
</div>
</template>

<script>
export default {
    // props :['text'],
    props: {

        message : {
            type : Number
        }
    },
    methods : {
        increment (){
           // type: Function
           this.message += 2
        }
    }
}
</script>
