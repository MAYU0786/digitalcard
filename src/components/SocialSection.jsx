import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaAddressCard,
} from "react-icons/fa";

function SocialSection() {
  return (
    <div
      style={{
        marginTop: "50px",
        textAlign: "center",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
        }}
      >

        <a
          href="https://www.instagram.com/anup_patra786"
          target="_blank"
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg,#f58529,#dd2a7b,#8134af)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              boxShadow: "0 8px 18px rgba(0,0,0,.15)",
            }}
          >
            <FaInstagram />
          </div>
        </a>

        <a
          href="https://www.facebook.com/share/1BJkvV4Uqk/"
          target="_blank"
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#1877F2",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              boxShadow: "0 8px 18px rgba(0,0,0,.15)",
            }}
          >
            <FaFacebookF />
          </div>
        </a>

        <a
          href="https://wa.me/919372804474"
          target="_blank"
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#25D366",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              boxShadow: "0 8px 18px rgba(0,0,0,.15)",
            }}
          >
            <FaWhatsapp />
            <a
  href="/contact.vcf"
  download
  title="Save Contact"
>
  <div
    style={{
      width: "72px",
      height: "72px",
      borderRadius: "50%",
      background: "#111",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "32px",
      boxShadow: "0 8px 18px rgba(0,0,0,.15)",
      cursor: "pointer",
    }}
  >
    <FaAddressCard />
  </div>
</a>
          </div>
        </a>

      </div>

      
    </div>
  );
}

export default SocialSection;