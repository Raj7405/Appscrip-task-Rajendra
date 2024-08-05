import style from "@/styles/footer.module.css";
import { useState } from "react";
const LowerFooter = () => {
  const [activeFooterLinks, setActiveFooterLinks] = useState(true);
  const [activeQuickLinksLinks, setActiveQuickLinksLinks] = useState(true);
  const handleFooterActive = () => {
    setActiveFooterLinks(!activeFooterLinks);
  };
  const handleQuickActive = () => {
    setActiveQuickLinksLinks(!activeQuickLinksLinks);
  };
  return (
    <div className={style.lowerFooter}>
      <div className={style.footerLinks}>
        <h4 onClick={handleFooterActive}>
          mettā muse
          {activeFooterLinks ? (
            <span>
              <img src="/icons/upArrowWhite.svg" />
            </span>
          ) : (
            <span>
              <img src="/icons/downArrowWhite.svg" />
            </span>
          )}
        </h4>
        {activeFooterLinks && (
          <>
            <h5>About Us</h5>
            <h5>Stories</h5>
            <h5>Artisans</h5>
            <h5>Boutiques</h5>
            <h5>Contact Us</h5>
            <h5>EU Compliances Docs</h5>
          </>
        )}
      </div>
      <div className={style.quickLinks}>
        <h4 onClick={handleQuickActive}>
          QUICK LINKS
          {activeQuickLinksLinks ? (
            <span>
              <img src="/icons/upArrowWhite.svg" />
            </span>
          ) : (
            <span>
              <img src="/icons/downArrowWhite.svg" />
            </span>
          )}
        </h4>
        {activeQuickLinksLinks && (
          <>
            <h5>Orders & Shipping</h5>
            <h5>Join/Login as a Seller</h5>
            <h5>Payment & Pricing</h5>
            <h5>Return & Refunds</h5>
            <h5>FAQs Us</h5>
            <h5>Privacy Policy</h5>
            <h5>Terms & Conditions </h5>
          </>
        )}
      </div>
      <div className={style.folloUsSeciton}>
        <div className={style.folloUs}>
          <h4>FOLLOW US</h4>
          <div className={style.socialLink}>
            <img src="/icons/insta.svg" alt="insta flag" />
            <img src="/icons/linkedIn.svg" alt="linkedIn flag" />
          </div>
        </div>
        <div className={style.folloUs}>
          <h4>mettā muse ACCEPTS</h4>
          <div className={style.socialLinkBanner}>
            <img src="/icons/google.svg" alt="media flag" />
            <img src="/icons/mastercard.svg" alt="media flag" />
            <img src="/icons/paypal.svg" alt="media flag" />
            <img src="/icons/amex.svg" alt="media flag" />
            <img src="/icons/apple.svg" alt="media flag" />
            <img src="/icons/opay.svg" alt="media flag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
