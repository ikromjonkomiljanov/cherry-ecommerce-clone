import "./Favorites.css";
import Share from "../../assets/Nav-icons-share.png";
import { useTranslation } from "react-i18next";

const Favorites = () => {
      const [t, i18n] = useTranslation();
    
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
  return (
    <div className="Favorites">
      <h1>{t("favorites-h1")}</h1>
      <div className="Favorites-items">
        <img src={Share} alt="" />
        <p>{t("favorites-p")}</p>
      </div>
    </div>
  );
};

export default Favorites;
