import React from "react";

import KanyeQuoteView from "./KanyeQuoteView";
import PersonalQuoteView from "./PersonalQuoteView";

export default function HomeView() {
  return (
    <main style={{ marginLeft: "5%", marginRight: "5%", marginTop: "10vh" }}>
      <KanyeQuoteView />
      <PersonalQuoteView />
    </main>
  );
}
