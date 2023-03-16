import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { recoilUserList } from "../recoil/user";
import { IUser } from "../type/user.type";
import "./Register.scss";
export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const setUserList = useResetRecoilState(recoilUserList);
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
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
    const userList = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = userList.find((user: IUser) => user.email === email);
    if (existingUser) {
      setError("이미 있는 이메일입니다.");
      return;
    }

    const updatedUserList = [...userList, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUserList));
    setSuccess(true);
    navigate("/login");
  };
  
  return (
    <div className="register">
      <div className="register_container">
        <div className="title">
          <h1>회원가입</h1>
        </div>
        <form onSubmit={handleSignup} className="register_form">
          <div className="input_field">
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
            />
          </div>

          <div className="input_field">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name"
            />
          </div>
          {error && <div>{error}</div>}
          {success && <div>회원가입이 완료되었습니다!</div>}
          <div className="register_btn">
            <button type="submit" className="register_submit">
              회원가입
            </button>
            <Link to="/login">로그인 하러가기</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
