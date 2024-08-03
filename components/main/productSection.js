import { useEffect, useState } from "react"
import style from '@/styles/ProductSection.module.css'
import Card from "../ui/card"
import sortDataBykey from "@/components/functions/sortDataBykey"
import SideFilterBar from "./sideFilterBar"
import { filterDataByCategory } from "../functions/filterDataByCategory"

const ProductSection = ({productData}) => {
    const [data, setData] = useState(productData)
    const [filterSectionFlag, setFilterSectionFlag] = useState(false)
    const [selectedCatgory, setSelectedCatgory] = useState([])

    useEffect(() => {
        console.log('re-rendered', selectedCatgory)
        if(selectedCatgory.length === 0){
            setData(productData)
        }else{
            const filterData = filterDataByCategory(productData, selectedCatgory);
            setData(filterDataByCategory(productData, selectedCatgory));
        }
    },[data, selectedCatgory])

    const handleFilterSection = () => {
        setFilterSectionFlag(prev => !prev)
    }

    const handleSelectionFilter = (e) => {
        console.log('called')
        console.log(data)
        switch(e.target.value){
            case 'RECOMMENDED': 
                setData(productData);
                break;
            case 'POPULAR': 
                setData(() => sortDataBykey(productData, 'rating.rate'));
                break;
            case 'PRICE: LOW TO HIGH': 
                setData(() => sortDataBykey(productData, 'price'));
                break;
            case 'PRICE: HIGH TO LOW': 
                setData(()=> {
                    let arr = sortDataBykey(productData, 'price')
                    return arr.toReversed();
                });
                break;
            default: setData(productData)
        }
        console.log(e.target.value)
    }

    return (
        <div className={style.productSection}>
            <div className={style.sectionHeader}>
                <div className={style.leftSectionHeader}>
                    <p>{data.length} Items</p>
                    {
                        filterSectionFlag 
                        ? <p className={style.showFilter} onClick={handleFilterSection}>&lt; Hide Filter</p>
                        : <p className={style.showFilter} onClick={handleFilterSection}>&gt; Show Filter</p>

                    }
                </div>
                <div className={style.rigthSectionHeader}>
                    <select name="selectedFilterType" defaultValue="RECOMMENDED" onChange={handleSelectionFilter}>
                        <option value="RECOMMENDED">RECOMMENDED</option>
                        <option value="POPULAR">POPULAR</option>
                        <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                        <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                    </select>
                </div>      
            </div>

            <div className={style.productShowSection}>
                {filterSectionFlag && <SideFilterBar setSelectedCatgory={setSelectedCatgory}/>}
                <div className={style.products}>
                {
                    data.length 
                    ? data.map((productItem, i) => <Card productInfo={productItem} key={productItem.id}/>)
                    : <div className={style.message}>
                        <h1>SELECTED CATEGORY PRODUCT IS NOT AVAILABLE</h1>
                    </div>
                }   
                 </div>
            </div>

        </div>
    )
}

export default ProductSection