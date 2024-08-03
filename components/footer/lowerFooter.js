import style from "@/styles/footer.module.css";
const LowerFooter = () => {
    return(
        <div className={style.lowerFooter}>
            <div className={style.footerLinks}>
                <h4>mettā muse</h4>
                <h5>About Us</h5>
                <h5>Stories</h5>
                <h5>Artisans</h5>
                <h5>Boutiques</h5>
                <h5>Contact Us</h5>
                <h5>EU Compliances Docs</h5>
            </div>
            <div className={style.quickLinks}>
                <h4>QUICK LINKS</h4>
                <h5>Orders & Shipping</h5>
                <h5>Join/Login as a Seller</h5>
                <h5>Payment & Pricing</h5>
                <h5>Return & Refunds</h5>
                <h5>FAQs Us</h5>
                <h5>Privacy Policy</h5>
                <h5>Terms & Conditions  </h5>
            </div>
            <div className={style.folloUsSeciton}>
                <div className={style.folloUs}>
                    <h4>FOLLOW US</h4>
                    <div className={style.socialLink}>
                        <img src="/icons/insta.svg" alt="insta flag"/>
                        <img src="/icons/linkedIn.svg" alt="linkedIn flag"/> 
                    </div>
                </div>
                <div className={style.folloUs}>
                    <h4>mettā muse ACCEPTS</h4>
                    <div className={style.socialLink}>
                        <img src="/icons/media.svg" alt="media flag"/>
                        
                    </div>
                </div>

            </div>    
        </div>
    )
}   

export default LowerFooter