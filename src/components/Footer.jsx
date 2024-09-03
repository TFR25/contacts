import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      All rights reserved {"\u00A9"} {currentYear}
    </footer>
  );
}
