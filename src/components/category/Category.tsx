import { useState } from "react";
import "./Category.scss";


type ICategoryProps = {
  categories: string[];
  setCategory: (category: string) => void;
};
export default function Category({ categories, setCategory }: ICategoryProps) {
  const [active, setActive] = useState(0);

  const handleClick = (idx:number) => {
    setActive(idx);
    setCategory(categories[idx]);
  };

  return (
    <ul className="category">
      {categories.map((categorie, idx) => (
        <li
          key={idx}
          className={idx === active ? "active" : ""}
          onClick={() => handleClick(idx)}
        >
          {categorie}
        </li>
      ))}
    </ul>
  );
}
