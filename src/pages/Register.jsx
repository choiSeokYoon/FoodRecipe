import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { recoUluserList } from '../recoil/user';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    
    const setUserList = useResetRecoilState(recoUluserList);
    const handleSignup = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

    // 유효성 검사
    if (!email || !password || !name) {
      setError("이메일, 비밀번호, 이름을 모두 입력해주세요.");
      return;
    }

    //업데이트
    const newUser = { email, password, name };
    const userList = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = userList.find((user) => user.email === email);
    if (existingUser) {
      setError("이미 있는 이메일입니다.");
      return;
    }

    const updatedUserList = [...userList, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUserList));
        setUserList(updatedUserList);
        setSuccess(true);
        navigate('/login');
    };
    
    
  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    {error &&
        <div>{error}</div>
    }
    {
        success &&
        <div>회원가입이 완료되었습니다!</div>
    }
      <button type="submit">회원가입</button>
    </form>
  );
};

