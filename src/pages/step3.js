import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import IconOk from '../img/IconOk.png';
import IconNG from '../img/IconNG.png';

export default function Step3() {

  const [aboutText, setAboutText] = useState(() => {
    const saved = window.localStorage.getItem('inputForm3');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    window.localStorage.setItem('inputForm3', JSON.stringify(aboutText))
  }, [aboutText])

  const maxCharacterCount = 200;

  const handleAboutChange = (event) => {
    const text = event.target.value;
    setAboutText(text);
  };

  function sendForm() {
    document.getElementsByClassName('mask')[0].style.display = 'block';
    document.getElementsByClassName('formsend')[0].style.display = 'block';
  }

  function errorForm() {
    document.getElementsByClassName('mask')[0].style.display = 'block';
    document.getElementsByClassName('formerror')[0].style.display = 'block';
  }
  function closeErrorForm() {
    document.getElementsByClassName('mask')[0].style.display = 'none';
    document.getElementsByClassName('formerror')[0].style.display = 'none';
  }


  function sendData() {
    const keys = ['tel', 'email', 'nickname', 'name', 'sername', 'sex', 'step2Inputs', 'checkboxValues', 'radioValue', 'inputForm3'];

    const data = {};

    keys.forEach(key => {
      const value = localStorage.getItem(key);
      data[key] = value;
    })

    fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {
      console.log('Результат API:', result);
      document.getElementsByClassName('mask')[0].style.display = 'block';
      document.getElementsByClassName('formsend')[0].style.display = 'flex';
    })
    .catch(error => {
      console.error('Ошибка при отправке данных', error);
      document.getElementsByClassName('mask')[0].style.display = 'block';
      document.getElementsByClassName('formerror')[0].style.display = 'flex';
    })
  }


  return (
    <div className='mainContainer'>
    <div className='container_step'>
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
        <path d="M7.66147 11.8737C7.56698 11.9987 7.41929 12.0723 7.26252 12.0723H6.68243C6.54729 12.0723 6.41791 12.0176 6.32376 11.9206L3.50413 9.01762C3.31569 8.8236 3.31569 8.51491 3.50413 8.32089L3.97572 7.83535C4.1721 7.63317 4.49669 7.63317 4.69306 7.83535L6.49489 9.69046C6.70845 9.91034 7.06776 9.88806 7.25251 9.64349L11.1512 4.48265C11.321 4.2579 11.6428 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.66147 11.8737Z" fill="white"/>
      </svg>
      </div>
      <div className="up-second">
        <svg width="340" height="8" viewBox="0 0 340 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="8" rx="4" fill="#5558FA"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#5558FA"/>
          <circle cx="7.9999" cy="7.9999" r="1.6" fill="white"/>
        </svg>
      </div>
      </div>
      <div className="up">
        <div className="up-second-text">
          <span style={{fontSize:"14px", fontWeight: "600", color: "#5558FA"}}>1</span>
          <span style={{fontSize:"14px", fontWeight: "600", color: "#5558FA"}}>2</span>
        </div>
        <span style={{fontSize:"14px", fontWeight: "600", color: "#5558FA"}}>3</span>
      </div>
      <div className='form3'>
        <p className='about_form3'>About</p>
        <textarea
          id="field-about"
          className="inputForm3"
          type="text"
          placeholder="Placeholder"
          maxLength={maxCharacterCount}
          style={{ fontFamily: 'sans-serif', padding: '12px' }}
          value={aboutText}
          onChange={handleAboutChange}
        ></textarea>
        <div className="characterCount">Символов без пробела: {aboutText.replace(/\s/g, '').length}</div>
      </div>
      <div className='formsend'>
        <div className='formbody'>
          <p>Форма успешно отправлена</p>
          <img src={IconOk} alt='iconOk' style={{marginTop: '50px'}}/>
          <Link to='/main'>
            <button id='button-to-main' className='btn-main'>На главную</button>
          </Link>   
        </div>
      </div>
      <div className='footer_step3'>
        <Link to='/step2'>
            <button id='button-back' className='btn-noactive'>Назад</button>
        </Link>
        <Link to=''>
            <button id='button-send' className='btn-active' onClick={sendData}>Отправить</button>
        </Link>
      </div>
      <div className='formerror'>
        
        <div className='formbody'>
        <div className='formbody-top'>
        <p className='textError'>Ошибка</p>
        <Link to='/step3'>
              <button className='IconBtnCls' onClick={closeErrorForm}></button>
        </Link>
        </div>
        
          <img src={IconNG} alt='iconNG' style={{marginTop: '50px'}}/>  
          <Link to='/step3'>
            <button id='button-close' className='btn-close' onClick={closeErrorForm}>Закрыть</button>
          </Link> 
        </div>
        
      </div>
      <div className='mask'></div>
    </div>
    </div>
  )
}
