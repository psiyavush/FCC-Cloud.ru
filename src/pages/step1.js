import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom';


export default function Step1() {
  const [nickname, setNickname] = useState(() => {
    const saved = window.localStorage.getItem('nickname');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  })
  const [name, setName] = useState(() => {
    const saved = window.localStorage.getItem('name');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  })
  const [sername, setSername] = useState(() => {
    const saved = window.localStorage.getItem('sername');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  })
  const [sex, setSex] = useState(() => {
    const saved = window.localStorage.getItem('sex');
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });
  const [nicknameDirty, setNicknameDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [sernameDirty, setSernameDirty] = useState(false)
  const [nicknameError, setNicknameError] = useState('Поле обязательно для заполнения')
  const [nameError, setNameError] = useState('Поле обязательно для заполнения')
  const [sernameError, setSernameError] = useState('Поле обязательно для заполнения')
  const [formValid, setFormValid] = useState(false)
  

  useEffect(() => {
    window.localStorage.setItem('nickname', JSON.stringify(nickname))
  }, [nickname])

  useEffect(() => {
    window.localStorage.setItem('name', JSON.stringify(name))
  }, [name])

  useEffect(() => {
    window.localStorage.setItem('sername', JSON.stringify(sername))
  }, [sername])

  useEffect(() => {
    window.localStorage.setItem('sex', JSON.stringify(sex));
  }, [sex]);


  const nicknameHandler = (e) => {
    setNickname(e.target.value)
    let re = /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/g;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNicknameError('Неправильный ввод данных')
    } else {
      setNicknameError('')
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    let re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Неправильный ввод данных')
    } else {
      setNameError('')
    }
  }

  const sernameHandler = (e) => {
    setSername(e.target.value)
    let re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setSernameError('Неправильный ввод данных')
    } else {
      setSernameError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'nickname':
          setNicknameDirty(true)
          break
      case 'name':
          setNameDirty(true)
          break
      case 'sername':
          setSernameDirty(true)
          break
    }
  }

  const options = [
    {value: 'man', label: 'man', id: 'field-sex-option-man'},
    {value: 'woman', label: 'woman', id: 'field-sex-option-woman'},
  ]

  const handleSelectChange = (selectedOption) => {
    setSex(selectedOption);
  };

  useEffect(() => {
    if (sex) {
      window.localStorage.setItem('sex', JSON.stringify(sex));
    }
  }, [sex]);

  useEffect(() => {
    const savedSex = window.localStorage.getItem('sex');
    const parsedSex = JSON.parse(savedSex);
    if (parsedSex) {
      setSex(parsedSex);
    }
  }, []);

  useEffect(() => {
    if (nicknameError || nameError || sernameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nicknameError, nameError, sernameError])

  useEffect(() => {
    if (nickname && name && sername) {
      setFormValid(true);
    }
  }, [nickname, name, sername]);



  return (
    <div className='mainContainer'>
      <div className='container_step'>
      <div className="up">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" rx="8" fill="#5558FA"/>
                <circle cx="7.9999" cy="7.9999" r="1.6" fill="white"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" rx="8" fill="#A6A6A6"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" rx="8" fill="#A6A6A6"/>
              </svg>
              </div>
              <div className="up">
                <span style={{fontSize:"14px", fontWeight: "600", color: "#5558FA"}}>1</span>
                <span style={{fontSize:"14px", fontWeight: "600"}}>2</span>
                <span style={{fontSize:"14px", fontWeight: "600"}}>3</span>
              </div>
      <div className='form1'>
        <form>
            <label>
                NickName<br></br>
                <input onChange={e=>nicknameHandler(e)} onBlur={e=>blurHandler(e)} id='field-nickname' className='inputUser1' value={nickname} name='nickname' type='text' placeholder='placeholder' maxLength={30} /><br></br>
                {(nicknameDirty && nicknameError) && <div style={{color: 'red', marginTop: '-24px', marginBottom: '24px', fontSize: '10px'}}>{nicknameError}</div>}
            </label>
            <label>
                Name<br></br>
                <input onChange={e=>nameHandler(e)} onBlur={e=>blurHandler(e)} id='field-name' className='inputUser1' value={name} name='name' type='text' placeholder='placeholder' maxLength={50} /><br></br>
                {(nameDirty && nameError) && <div style={{color: 'red', marginTop: '-24px', marginBottom: '24px', fontSize: '10px'}}>{nameError}</div>}
            </label>
            <label>
                Sername<br></br>
                <input onChange={e=>sernameHandler(e)} onBlur={e=>blurHandler(e)} id='field-sername' className='inputUser1' value={sername} name='sername' type='text' placeholder='placeholder' maxLength={50} /><br></br>
                {(sernameDirty && sernameError) && <div style={{color: 'red', marginTop: '-24px', marginBottom: '24px', fontSize: '10px'}}>{sernameError}</div>}
            </label>
            <div className='select'>
            Sex
            <Select options={options} value={sex} onChange={handleSelectChange} id='field-sex' />
          </div>
        </form>
      </div>
      <div className='footer_step1'>
        <Link to='/main'>
            <button id='button-back' className='btn-noactive'>Назад</button>
        </Link>
        <Link to='/step2'>
            <button disabled={!formValid} id='button-next' className='btn-active'>Далее</button>
        </Link>
      </div>
    </div>
    </div>
    
  )
}