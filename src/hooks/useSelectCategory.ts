import { collection, DocumentData, getDocs, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { CategoryType } from "../types/types";

const useSelectCategory = () => {
  const [categories, setCategory] = useState<CategoryType[]>([{ value: "fruit", label: "Fruit" }]);

  useEffect(() => {
    (async function () {
      const q = query(collection(db, "categories"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const categoriesArray: CategoryType[] = [];
        querySnapshot.forEach((doc) => {
          categoriesArray.push(doc.data());
        });

        setCategory(categoriesArray);
      });

      return () => {
        unsubscribe();
      };
    }());
  }, []);

  return {
    categories
  };

};

export default useSelectCategory;
