import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { recoilAuthUser } from '../recoil/user';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    // 클라이언트 측 유효성 검사 수행
    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 인증 수행
    const userList = JSON.parse(localStorage.getItem("users")) || [];
    const user = userList.find((user) => user.email === email && user.password === password);

    if (!user) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    // 로그인 수행
    setAuthUser(user);
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">로그인</button>
      {error && <p>{error}</p>}
    </form>
  );
};
