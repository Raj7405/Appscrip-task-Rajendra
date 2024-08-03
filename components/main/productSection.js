import { useState } from "react"
import style from '@/styles/ProductSection.module.css'
import Card from "../ui/card"

const ProductSection = ({productData}) => {
    const [data, setData] = useState(productData)
    const [filterSectionFlag, setFilterSectionFlag] = useState(false)
    console.log(data)
    const handleFilterSection = () => {
        setFilterSectionFlag(prev => !prev)
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
                    <select name="selectedFilterType" defaultValue="RECOMMENDED">
                        <option value="RECOMMENDED">RECOMMENDED</option>
                        <option value="POPULAR">POPULAR</option>
                        <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                        <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                    </select>
                </div>      
            </div>

            <div className={style.products}>
                {
                    productData.map((productItem, i) => <Card productInfo={productItem} key={productItem.id}/>)
                }   
            </div>
        </div>
    )
}

export default ProductSection