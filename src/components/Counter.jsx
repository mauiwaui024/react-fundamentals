import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    return <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Прибавить</button>
        <button onClick={()=>setCount(count-1)}>Отнять</button>
    </div>;
}



export default Counter;


  // let likes = 0;
  
  // function increment(){
  //   likes += 1
  //   console.log(likes);
  // } 
  // return (
  //   <div className="App">
  //     <h1>{likes}</h1>
  //     <button onClick = {increment}>Increment</button>
  //     <button onClick = {()=> likes -=1}>Decrement</button>
  //   </div>
  // );
  //ЭТО ВСЕ НЕ РАБОТАЕТ, ПОТОМУ ШО РЕАКТ НЕ ПОНИМАЕТ, ЧТО В КАКОМ ТО ЭЛЕМЕНТЕ ПРОИЗОШЛИ ИЗМЕНЕНИЯ И НЕ РЕНДЕРИТ ЕГО ЗАНОВО. ДЛЯ РЕШЕНИЯ ЭТОЙ ПРОБЛЕМЫ ПРИДУМАЛИ СОСТОЯНИЯ STATES
