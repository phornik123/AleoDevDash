import React, { useState } from "react";
import "@fontsource/ibm-plex-mono";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";

import {
  COLORS,
  TYPOGRAPHY,
  LAYOUT,
  FONTS,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
} from "./styles";
import { Header, Navigation, Footer } from "./Components";

// Import dashboard sections
import ExecutiveSummary from "./sections/ExecutiveSummary";
import DeveloperEcosystem from "./sections/DeveloperEcosystem";
import DeveloperJourneys from "./sections/DeveloperJourney";
import Reengagement from "./sections/Reengagement";
import Methodology from "./sections/Methodology";

const App = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("executiveSummary");

  // Render the appropriate section based on active tab
  const renderSection = () => {
    switch (activeTab) {
      case "executiveSummary":
        return <ExecutiveSummary />;
      case "devEcosystem":
        return <DeveloperEcosystem />;
      case "devJourneys":
        return <DeveloperJourneys />;
      case "temporalAnalysis":
        return <TemporalAnalysis />;
      case "reengagement":
        return <Reengagement />;
      case "methodology":
        return <Methodology />;
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div
      style={{
        fontFamily: FONTS.primary,
        backgroundColor: COLORS.background,
        color: COLORS.text,
        minHeight: "100vh",
        padding: LAYOUT.containerPadding,
      }}
    >
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div style={{ padding: `0 0 ${SPACING.lg} 0` }}>{renderSection()}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
