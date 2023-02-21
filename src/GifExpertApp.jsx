import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      <div className="__footer">
        <a href="https://www.linkedin.com/in/josueaguilar-dev/" target="_blank">
          Josue Aguilar
        </a>
      </div>
    </>
  );
};
