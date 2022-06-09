import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [tab, setTab] = useState('ALL')

  const filteredItems = items.filter( item => {
    if (tab === 'ALL') return true;
    if (tab === 'DOING') return !item.done;
    if (tab === 'DONE') return item.done;
  });

  const addTask = (text) => {
    const newTask = {
      key : getKey(),
      text : text,
      done: false
    }
    putItems([...items, newTask])
  }

  const selectTab = value => {
    setTab(value)
  }

  const completeTodo = (key) => {
    const newItems= [...items];
    newItems[key].done = !newItems[key].done;
    putItems(newItems);
  };
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTask={addTask}/>
      <Filter value={tab} changeTab={selectTab} />
      {filteredItems.map((item, index) => (
        <TodoItem
          key={item.key}
          item={item}
          index={index}
          completeTodo={completeTodo}
        />
      ))}
      <div className="panel-block">
        {filteredItems.length} items
      </div>
    </div>
  );
}

export default Todo;