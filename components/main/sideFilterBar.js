import style from "@/styles/SideFilterBar.module.css";
import DropDownCheckList from "../ui/dropDownCheckList";

const SideFilterBar = ({setSelectedCatgory}) => {
    let filterConfig = [
        {
            filterHeading: 'CLOTHINGS',
            category: ["men's clothing","women's clothing","kid's clothing"],
        },
        {
            filterHeading: "JEWELERYS",
            category: ["Rings","Bracelets","Ear rings"],
        },
        {
            filterHeading: 'ELECTRONICS',
            category: ["Monitor","SSD","laptop bag"],
        },
        {
            filterHeading: 'MOBILE',
            category: ["Samsung", "Motorola"],
        },
        {
            filterHeading: 'LAPTOPS',
            category: ["Asus","HP","Dell","Alienware","Lenovo"],
        },

    ]

  return (
    <div className={style.sideFilterBar}>
        {/* Other category just for dummy perpose, due to lack of data */}
        {filterConfig.map((item,i) => 
            <DropDownCheckList filterHead={item.filterHeading} filterTopics={item.category} setSelectedCatgory={setSelectedCatgory} key={i}/>
        )}
    </div>
  )
};

export default SideFilterBar;

let a = ["men's clothing", "men's clothing", "men's clothing", "men's clothing", 'jewelery', 'jewelery', 'jewelery', 'jewelery', 'electronics', 'electronics', 'electronics', 'electronics', 'electronics', 'electronics', "women's clothing", "women's clothing", "women's clothing", "women's clothing", "women's clothing", "women's clothing"]