import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Bin from '../img/bin.png';

export default function Step2() {
  const [inputCount, setInputCount] = useState(3);
  const [inputs, setInputs] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState({});
  const [radioValue, setRadioValue] = useState('');

  useEffect(() => {
    const savedInputs = localStorage.getItem('step2Inputs');
    if (savedInputs) {
      setInputs(JSON.parse(savedInputs));
    } else {
      setInputs(['', '', '']);
    }

    const savedCheckboxValues = localStorage.getItem('checkboxValues');
    if (savedCheckboxValues) {
      setCheckboxValues(JSON.parse(savedCheckboxValues));
    }

    const savedRadioValue = localStorage.getItem('radioValue');
    if (savedRadioValue) {
      setRadioValue(savedRadioValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('step2Inputs', JSON.stringify(inputs));
  }, [inputs]);

  useEffect(() => {
    localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
  }, [checkboxValues]);

  useEffect(() => {
    localStorage.setItem('radioValue', radioValue);
  }, [radioValue]);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInput = () => {
    const newInputCount = inputCount + 1;
    setInputCount(newInputCount);
    setInputs([...inputs, '']);
  };

  const removeInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    setInputCount(inputCount - 1);
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setCheckboxValues((prevValues) => ({ ...prevValues, [id]: checked }));
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div className='mainContainer'>
    <div className="container_step">
      <div className="up">
        <div className="up-second">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#5558FA"/>
          <path d="M7.66147 11.8737C7.56698 11.9987 7.41929 12.0723 7.26252 12.0723H6.68243C6.54729 12.0723 6.41791 12.0176 6.32376 11.9206L3.50413 9.01762C3.31569 8.8236 3.31569 8.51491 3.50413 8.32089L3.97572 7.83535C4.1721 7.63317 4.49669 7.63317 4.69306 7.83535L6.49489 9.69046C6.70845 9.91034 7.06776 9.88806 7.25251 9.64349L11.1512 4.48265C11.321 4.2579 11.6428 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.66147 11.8737Z" fill="white"/>
        </svg>
        <svg width="340" height="8" viewBox="0 0 340 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="8" rx="4" fill="#5558FA"/>
          </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#5558FA"/>
          <circle cx="7.9999" cy="7.9999" r="1.6" fill="white"/>
        </svg>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#A6A6A6"/>
        </svg>
        </div>
        <div className="up">
          <div className="up-second-text">
            <span style={{fontSize:"14px", fontWeight: "600", color: "#5558FA"}}>1</span>
            <span style={{fontSize:"14px", fontWeight: "600", color: "#5558FA"}}>2</span>
          </div>
          <span style={{fontSize:"14px", fontWeight: "600"}}>3</span>
      </div>
      <div className="form2">
        <form>
          <label>
            Advantages<br></br>
            {inputs.map((input, index) => (
              <div key={`input-${index}`}>
                <input
                  id={`field-advantages-${index}`}
                  className="inputUser_step1"
                  name="advantages"
                  type="text"
                  placeholder="Placeholder"
                  value={input}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <img
                  id={`button-remove-${index}`}
                  className="iconTrash"
                  src={Bin}
                  alt="корзина"
                  onClick={() => removeInput(index)}
                />
              </div>
            ))}
          </label>
          <button id='button-add' className="btn-add" type="button" onClick={addInput} />
        </form>
        <div className='checkbox_step1'>
          <p className='checkboxGroup'>Checkbox group</p>
          <input
            id='field-checkbox-group-option-1'
            type='checkbox'
            checked={checkboxValues['field-checkbox-group-option-1']}
            onChange={handleCheckboxChange}
          />
          <span>1</span>
        </div>
        <div className='checkbox_step1'>
          <input
            id='field-checkbox-group-option-2'
            type='checkbox'
            checked={checkboxValues['field-checkbox-group-option-2']}
            onChange={handleCheckboxChange}
          />
          <span>2</span>
        </div>
        <div className='checkbox_step1'>
          <input
            id='field-checkbox-group-option-3'
            type='checkbox'
            checked={checkboxValues['field-checkbox-group-option-3']}
            onChange={handleCheckboxChange}
          />
          <span>3</span>
        </div>
        <div className='checkbox_step1'>
          <p className='radioGroup'>Radio group</p>
          <input
            id='field-radio-group-option-1'
            type='radio'
            value='1'
            checked={radioValue === '1'}
            onChange={handleRadioChange}
          />
          <span>1</span>
        </div>
        <div className='checkbox_step1'>
          <input
            id='field-radio-group-option-2'
            type='radio'
            value='2'
            checked={radioValue === '2'}
            onChange={handleRadioChange}
          />
          <span>2</span>
        </div>
        <div className='checkbox_step1'>
          <input
            id='field-radio-group-option-3'
            type='radio'
            value='3'
            checked={radioValue === '3'}
            onChange={handleRadioChange}
          />
          <span>3</span>
        </div>
      </div>
      <div className='footer_step2'>
        <Link to='/step1'>
          <button id='button-back' className='btn-noactive'>Back</button>
        </Link>
        <Link to='/step3'>
          <button id='button-next' className='btn-active'>Next</button>
        </Link>
      </div>
    </div>
    </div>
  );
}