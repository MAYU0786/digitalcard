function Footer() {
  return (
    <div
      style={{
        position: "relative",
        height: "120px",
        marginTop: "20px",
        overflow: "hidden",
      }}
    >
      {/* Tagline */}

      <div
        style={{
          textAlign: "center",
          color: "#555",
          fontStyle: "italic",
          fontSize: "18px",
          marginTop: "10px",
          position: "relative",
          zIndex: 2,
        }}
      >
        Step towards destination....
      </div>

      {/* Blue Logo Inspired Arc */}

      <div
        style={{
          position: "absolute",
          bottom: "-55px",
          left: "-30px",
          width: "180px",
          height: "90px",
          borderTop: "6px solid #2563eb",
          borderRadius: "100% 100% 0 0",
          transform: "rotate(-10deg)",
        }}
      />

      {/* Red Logo Inspired Arc */}

      <div
        style={{
          position: "absolute",
          bottom: "-55px",
          right: "-30px",
          width: "180px",
          height: "90px",
          borderTop: "6px solid #ef4444",
          borderRadius: "100% 100% 0 0",
          transform: "rotate(10deg)",
        }}
      />
    </div>
  );
}

export default Footer;