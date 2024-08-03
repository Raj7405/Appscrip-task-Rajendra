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

