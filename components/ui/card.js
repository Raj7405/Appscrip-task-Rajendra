import Image from "next/image"
import style from "@/styles/Card.module.css"

const Card = ({productInfo}) => {
    return(
        <div className={style.card}>
            <div className={style.cardImgContainer}>
                <img 
                    src={productInfo.image}
                    alt={productInfo.title}
                    className={style.cardImg}
                />
            </div>
            <h3 className={style.cardTitle}>{productInfo.title}</h3>
            <div className={style.cardPrice}>
                <h4>${productInfo.price}</h4>
                <img src="/icons/heart.svg" alt="heart"/>
            </div>
            <p className={style.cardInfo}>Sign in or Create an account to see pricing</p>
            {
                !productInfo.rating.count && <p className={style.stockOut}>OUT OF STOCK</p>     
            }
        </div>
    )
}

export default Card;