import './SearchForm.scss'
import { useRecoilState } from 'recoil'
import { foodSearchAtom } from '../../recoil/atom'
import { useEffect, useRef } from 'react';

export default function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useRecoilState(foodSearchAtom);
  const searchInputRef = useRef(null);
  //페이지가 바뀌면 바로 포커스를 줬음
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className='search_form'>
      <input
        type="search_input"
        value={searchKeyword} 
        onChange={(e)=>setSearchKeyword(e.target.value)}
        placeholder="원하는 음식을 입력하세요"
        ref={searchInputRef}
      />
    </div>
  );
}
