<template>
    
    <div class = "">
        <h1>유저 리스트 페이지</h1>
        <!-- <comp :text="message1"></comp>
        <comp :text="message2"></comp> -->
        <comp :message="n"></comp>
        <h1>index 페이지 {{n}} </h1>
        
        <comp2 :touch="t1"></comp2>
        <comp2 :touch="t2"></comp2>

 
    </div>

  
</template>

             
   


<script>
import comp from '~/components/comp.vue'
import comp2 from '~/components/comp2.vue'

export default {
    components: {comp, comp2},
    data () {
        return {
            // message1 = "hello world1",
            // message2 = "hello world2",
            n : 1
        }
    },
    methods : {
        
        increment(){
            this.n += 1;
        }
        ,
        t1 (){
            alert('t1');
        },
        t2 (){
            alart('t2');
        }
    }
}
</script>
