import style from "@/styles/dropDownCheckList.module.css";
import { useState } from "react";

const DropDownCheckList = ({filterHead, filterTopics, setSelectedCatgory}) => {

  const [active, setActive] = useState(false) 
  const handleActive = () => {
    setActive(!active)
  } 

  const handleCheckList = (e) => {
    const { id, checked } = e.target;
    if (checked) {
        setSelectedCatgory((prev) => [...prev, id]);
    } else {
        setSelectedCatgory((prev) => prev.filter((item) => item !== id));
    }
  }
  return (
    <div className={style.dropDownCheckList}>
        <div className={style.filterHead} onClick={handleActive}>
            <h1 >
                {filterHead} 
            </h1>
            {active 
                ? <span><img src="/icons/upArrow.svg"/></span> 
                : <span ><img src="/icons/downArrow.svg"/></span>
            }
        </div>
        <p>ALL</p>
        {active && filterTopics.map((topic,i) => 
            <div className={style.checkList} key={i}>
                <input type='checkbox' onChange={handleCheckList} id={topic}/>
                <label htmlFor={topic}>{topic}</label>
            </div>            
        )}
    </div>
  )
};

export default DropDownCheckList;

let obj = {
    category: "women's clothing",
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    id: 19,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    price: 7.95,
    rating: {
        count: 146,
        rate: 4.5,
    },  
    title: "Opna Women's Short Sleeve Moisture",
}