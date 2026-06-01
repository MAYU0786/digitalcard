function ContactCard({
  color,
  icon,
  title,
  subtitle,
  link,
}) {
  return (
    <a
      href={link}
      style={{
        width: "85%",
        margin: "18px auto",
        background: "#fff",
        borderRadius: "24px",
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        gap: "28px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        border: "1px solid #f1f5f9",
        position: "relative",
        minHeight: "95px",
      }}
    >
      {/* Left Color Bar */}

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "5px",
          height: "100%",
          background: color,
          borderRadius: "20px",
        }}
      />

      {/* Icon */}

      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "30px",
          flexShrink: 0,
          marginLeft: "16px",
        }}
      >
        {icon}
      </div>

      {/* Text Block */}

      {/* Text Block */}

<div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    minHeight: "70px",
    flex: 1,
  }}
>
  <div
    style={{
      fontSize: "15px",
      fontWeight: "700",
      color: "#111",
      lineHeight: "1.3",
      wordBreak: "break-word",
      textAlign: "left",
      width: "100%",
    }}
  >
    {title}
  </div>

  <div
    style={{
      fontSize: "14px",
      color: "#666",
      marginTop: "6px",
      textAlign: "left",
      width: "100%",
    }}
  >
    {subtitle}
  </div>
</div>
    </a>
  );
}

export default ContactCard;