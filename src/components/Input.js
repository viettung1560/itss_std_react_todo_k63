import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({addTask}) {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTask(value);
    setValue("");
  };
  
  return (
    <div className="panel-block">
      <form onSubmit={handleSubmit}>
        <input 
          className="input" 
          type="text" 
          placeholder="Todoを入力してください"
          value={value}
          onChange={handleChange}
          />
      </form>
    </div>
  );
}

export default Input;
