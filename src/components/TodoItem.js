/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react';
function TodoItem({item}) {
  const [checked, setChecked] = useState(item.done);
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked = {checked}
        onChange = {handleChange}
      />
      <span class={checked && "has-text-grey-light"}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;