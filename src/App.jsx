import Header from "./components/Header";
import ServicesCard from "./components/ServicesCard";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";
import PDFButton from "./components/PDFButton";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div
     id="digital-card"
      style={{
        minHeight: "100vh",
        background: "#edf2f7",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
       id="digital-card"
        style={{
          width: "460px",
          background: "#fff",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,.15)",
          position: "relative",
        }}
      >
        <Header />
        <ServicesCard/>
        <ContactCard
  color="#2563eb"
  icon={<FaPhoneAlt />}
  title="+91 93728 04474"
  subtitle="Tap to Call"
  link="tel:+919372804474"
/>

<ContactCard
  color="#22c55e"
  icon={<FaWhatsapp />}
  title="WhatsApp"
  subtitle="Chat Instantly"
  link="https://wa.me/919372804474"
/>

<ContactCard
  color="#ef4444"
  icon={<FaEnvelope />}
  title="onesteprealestateservices@gmail.com"
  subtitle="Send Email"
  link="https://mail.google.com/mail/?view=cm&fs=1&to=onesteprealestateservices@gmail.com"
/>

{/* ADDRESS CARD */}

{/* ADDRESS CARD */}

<a
  href="https://www.google.com/maps/search/?api=1&query=One+Step+Real+Estate+Services+Nagpur"
  target="_blank"
  rel="noreferrer"
  style={{
    width: "87%",
    margin: "18px auto",
    background: "#fff",
    borderRadius: "24px",
    padding: "22px",
    display: "flex",
    gap: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    border: "1px solid #f1f5f9",
    position: "relative",
    textDecoration: "none",
    alignItems: "center",
  }}
>
  {/* Blue Strip */}
  <div
   id="digital-card"
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "5px",
      height: "100%",
      background: "#2563eb",
      borderRadius: "20px",
    }}
  />

  {/* Icon */}
  <div
   id="digital-card"
    style={{
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      background: "#2563eb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "28px",
      flexShrink: 0,
      marginLeft: "12px",
    }}
  >
    <FaMapMarkerAlt />
  </div>

  {/* Text */}
  <div
   id="digital-card"
    style={{
      flex: 1,
      textAlign: "left",
    }}
  >
    <div
     id="digital-card"
      style={{
        fontSize: "18px",
        fontWeight: "700",
        color: "#111",
        marginBottom: "6px",
        lineHeight: "1.2",
      }}
    >
      Office Address
    </div>

    <div
     id="digital-card"
      style={{
        color: "#555",
        fontSize: "15px",
        lineHeight: "1.65",
      }}
    >
      Mangalwari Complex,
      <br />
      B Wing, 2nd Floor,
      <br />
      Block No.:- 10,
      <br />
      Sadar, Nagpur
    </div>
  </div>
</a>

<SocialSection />
<Footer />
<PDFButton />
 </div>
    </div>
    
  );
}

export default App;