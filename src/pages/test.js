import React, { useState } from 'react';
import Trash from '../img/Trash.png';

function Test() {
  const [inputs, setInputs] = useState([]);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div>
            <label>
                {inputs.map((input, index) => (
                    <input
                    className='inputUser_step1'
                    name='advantages'
                    type='text'
                    placeholder='Placeholder'
                    key={index}
                    value={input}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                ))}
                <img className='iconTrash' id='button-remove-1' src={Trash} alt='корзина' /><br></br>
            </label>
            <button id='button add' className='btn-add' onClick={addInput}></button>
    </div>
  );
}

export default Test;





