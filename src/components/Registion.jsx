import "./Registion.css";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Registion = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [phone, setPhone] = useState("");

  const TELEGRAM_BOT_TOKEN = "7930528192:AAH7_FPU1h1uWteUbSgtMwp6L5a5vxl2Pl4";
  const CHAT_ID = "5436125012";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullMesage = `📩 Yangi s'orov:n\n\n 📞 Telefon: ${phone}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: CHAT_ID,
      text: fullMesage,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Message succesfully sent!");
        setPhone("");
      } else {
        toast.error("Error sending message!");
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi!");
      // console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="Registion">
        <div className="Registion-wrap">
          <h1>
            {t("Reg-h1")}
            <Link to={"/"}>
              <RxCross1 className="Reg-cross" />
            </Link>
          </h1>

          <div className="Registion-optgroup">
            <p>{t("Reg-p")}</p>
            <label className="Reg-label">
              <select className="countryCode">
                <option value="+998">+998</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="text"
                className="Reg-input"
                onChange={(e) => setPhone(e.target.value)}
                maxLength={12}
                placeholder="(_ _) _ _ _  _ _  _ _"
              />
            </label>
          </div>
          <button className="Reg-btn" type="submit">
            {t("Reg-btn")}
          </button>
        </div>
      </form>
    </>
  );
};
export default Registion;
