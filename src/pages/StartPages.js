import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import Avatar from '../img/Avatar.jpg';
import SocialFolder from '../img/FolderSocial.png';
import axios from 'axios';
import InputMask from 'react-input-mask';


export default function StartPages() {


  const [tel, setTel] = useState(() => {
    const saved = window.localStorage.getItem('tel');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  })
  const [email, setEmail] = useState(() => {
    const saved = window.localStorage.getItem('email');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  })
  const [telDirty, setTelDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [telError, setTelError] = useState('Поле обязательно для заполнения')
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения')
  const [formValid, setFormValid] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);


  
  useEffect(() => {
    window.localStorage.setItem('tel', JSON.stringify(tel))
  }, [tel])

  useEffect(() => {
    window.localStorage.setItem('email', JSON.stringify(email))
  }, [email])


  useEffect(() => {
    if (telError || emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [telError, emailError])

  useEffect(() => {
    if (tel && email) {
      setFormValid(true);
    }
  }, [tel, email]);
  

  const telHandler = (e) => {
    setTel(e.target.value)
    let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!re.test(e.target.value)) {
      setTelError('Неправильный ввод данных')
    } else {
      setTelError('')
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Неправильный ввод данных')
    } else {
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'tel':
          setTelDirty(true)
          break
      case 'email':
        setEmailDirty(true)
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formValid) {
      const data = {
        tel: tel,
        email: email,
      };

        axios
        .post('https://api.sbercloud.ru/content/v1/bootcamp/frontend', data)
        .then((response) => {
          console.log(response);
          setIsError(false);
        })
        .catch((error) => {
          console.error(error);
          setIsError(true);
        });
    }
  };    

    return (
      <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='header'>
          <img 
            className='ImgAvatar'
            src={Avatar}
            alt="Avatar"
          />
          <div>
            <h3 className='UserName'>Иван Иванов</h3>
            <div className='social'>
                <img className='imgFolder' src={SocialFolder} alt='folder' />
                <p className='linkSocial'><a href='/'>Telegram</a></p>
                <img className='imgFolder' src={SocialFolder} alt='folder' />
                <p className='linkSocial'><a href='/'>GitHub</a></p>
                <img className='imgFolder' src={SocialFolder} alt='folder' />
                <p className='linkSocial'><a href='/'>Resume</a></p>
            </div>
          </div>
        </div>
        <div className='formStart'>
            <form>
                <label>
                  Номер телефона<br></br>
                  <InputMask onChange={e=>telHandler(e)} value={tel} onBlur={e=>blurHandler(e)} className='inputUser' name='tel' type='tel' placeholder='+7 (999) 999-99-99' mask="+7 (999) 999-99-99" maskChar="_" /><br></br>
                  {(telDirty && telError) && <div style={{color: 'red', marginTop: '-24px', marginBottom: '24px', fontSize: '10px'}}>{telError}</div>}
                </label>
                <label>
                  Email<br></br>
                  <input onChange={e=>emailHandler(e)} value={email} onBlur={e=>blurHandler(e)} className='inputUser' name='email' type='email' placeholder='tim.jennings@example.com' />
                  {(emailDirty && emailError) && <div style={{color: 'red', marginTop: '-24px', marginBottom: '24px', fontSize: '10px'}}>{emailError}</div>}
                </label>
            </form>
          </div>
          <Link to='/step1'>
            <button disabled={!formValid} id='button-start' className='btn-active'>Начать</button>
          </Link>
      </form>
      </div>
    )
  }
