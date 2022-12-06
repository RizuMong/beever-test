import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuote } from "../redux/reducers/reducer";

import Swal from "sweetalert2";

export default function KanyeQuoteView() {
  const quotes = useSelector((state) => state.data.quote);
  const dispatch = useDispatch();
  const [quote, changeQuote] = useState("");

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    const url = "https://api.kanye.rest/";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        changeQuote(res.quote);
      });
  };

  const handleFavorite = (quote) => {
    const getQuote = localStorage.getItem("addCart");
    if (getQuote) {
      const parsedquotes = JSON.parse(getQuote);
      parsedquotes.push(quote);
      const temp = JSON.stringify(parsedquotes);
      dispatch(setQuote(parsedquotes));
      localStorage.setItem("Favorite Quote", temp);
    } else {
      const temp = JSON.stringify([quote]);
      dispatch(setQuote([quote]));
      localStorage.setItem("Favorite Quote", temp);
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to Favorites Quote",
    });
  };

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>

      <button type="button" onClick={generateQuote}>
        Generate Quote
      </button>

      <button type="button" onClick={() => handleFavorite()}>
        Add Favorite
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "500" }}>
        {quote}
      </p>
      <hr style={{ maxWidth: "30%" }} />

      <p style={{ marginTop: "28px", fontSize: "18px", fontWeight: "500" }}>
        Your Favorite Quote
      </p>
      <p>{quotes.quote}</p>
      <hr style={{ maxWidth: "30%" }} />
    </section>
  );
}
