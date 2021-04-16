<template>
    <h1>message: {{$store.state.data}}</h1>
</template>

<script>


export default {
    // vue 인스턴스가 생성되기 전 store 초기화
    fetch({store, params}){

        //데이터 가져오는 부분
        store.commit('dataUpdate',data)
    },

    //인스턴스가 생성 될 때 호출
    created () {
    },

    // 비동기적으로 데이터 생성 json 형태로 반환하면 data ()와 머지됨
    asyncData (context) {

        // 서버에서 데이터를 받아오는 부분

        return { message2: 'world'}
    },

    //데이터 생성 
    data() {
        return {message1 : 'hello'}
    },

    //없오도 됨!, 해당 페이지 <head> 커스텀마이징
    head() {
        return {
             title : '',
             meta: [
                 {hid : '고유값', name : '설명', content: '커스텀 설명' }
                   ]
                }
            },
    
    //해당 파일에 동작시킬 메서드 정의
    methods: {
    },

    //복잡한 계산식일 때 computed를 이용
    cumputed : {
    },

    //외부 컴포넌트 추가 {a, b, c}의 형태로 작성, 각각의 컴포넌트는 import a from 'a'로 가져옴
    components: {
        },

    //없어도 됨!, layout 설정, 기본 레이아웃 사용 시 지워도 됨
    laout: '',

    //없어도 됨!, 미들웨어 설정, middleware : 'authenticated'는 middleware 
    //디렉터리의 authenticated.js 파일 실행

    //없어도 됨!, 최상단 true, 최하단 false
    scrollToTop: true || false

}
</script>
