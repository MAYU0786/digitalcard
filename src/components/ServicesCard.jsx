function ServicesCard() {
  return (
    <div
      style={{
        width: "85%",
        margin: "20px auto 0",
        background: "#fff",
        borderRadius: "28px",
        padding: "22px",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        border: "1px solid #f1f5f9",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "600",
          color: "#111",
        }}
      >
        Purchase
        <span style={{ color: "#2563eb", margin: "0 10px" }}>•</span>
        Sales
        <span style={{ color: "#2563eb", margin: "0 10px" }}>•</span>
        Rent
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "18px",
          marginBottom: "18px",
          height: "2px",
          background: "#e5e7eb",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "#ef4444",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "-4px",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#555",
          lineHeight: "1.9",
          fontSize: "16px",
        }}
      >
        Offices, Shops, Flats, Bungalows,
        <br />
        Duplexes, Lands, FarmHouses, Godowns
      </div>
    </div>
  );
}

export default ServicesCard;