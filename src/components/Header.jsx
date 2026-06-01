import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      {/* Top Corners */}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "180px",
          height: "180px",
          background:
            "linear-gradient(135deg,#0058ff,#8fb7ff)",
          borderBottomRightRadius: "100%",
          opacity: ".12",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "220px",
          height: "220px",
          background:
            "linear-gradient(135deg,#ff3b3b,#ffc0c0)",
          borderBottomLeftRadius: "100%",
          opacity: ".12",
        }}
      />

      {/* Logo */}

      <div
        style={{
          paddingTop: "30px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
    src={logo}
    alt="One Step Real Estate Services"
    style={{
        width: "88%",
        maxWidth: "340px",
        display: "block",
        margin: "0 auto",
    }}
    />
      </div>

      {/* Name */}

      <div
        style={{
          textAlign: "center",
          marginTop: "12px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            lineHeight: "1.1",
            fontWeight: "700",
            color: "#111",
            margin: 0,
          }}
        >
          Mr. Anup Patra
        </h1>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginTop: "8px",
  }}
>
  <div
    style={{
      width: "90px",
      height: "2px",
      background: "#2563eb",
      borderRadius: "999px",
    }}
  />

  <span
    style={{
      color: "#2563eb",
      fontWeight: 600,
      fontSize: "20px",
      minWidth: "90px",
      textAlign: "center",
    }}
  >
    Director
  </span>

  <div
    style={{
      width: "90px",
      height: "2px",
      background: "#ef4444",
      borderRadius: "999px",
    }}
  />
</div>
      </div>
    </>
  );
}

export default Header;