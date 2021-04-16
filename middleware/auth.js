export default function({store, redirect})
{
    if(store.state.isLogin){
        return redirect('/store')
    }else{
        return redirect('/signin')
    }
}