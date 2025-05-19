// All reusable components for the dashboard

import React from "react";
import {
  COLORS,
  FONTS,
  SPACING,
  TYPOGRAPHY,
  BORDER_RADIUS,
  SHADOWS,
  COMPONENT_STYLES,
} from "./styles";

// ========== HEADER COMPONENT ==========
export const Header = () => {
  return (
    <div
      style={{
        borderBottom: `1px solid ${COLORS.border}`,
        paddingBottom: SPACING.lg,
        marginBottom: SPACING.lg,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: TYPOGRAPHY.heading1,
              fontWeight: "bold",
              color: COLORS.primary,
              marginBottom: SPACING.sm,
            }}
          >
            Aleo Developer Ecosystem Dashboard
          </h1>
          <p style={{ color: COLORS.textLight, fontSize: TYPOGRAPHY.small }}>
            Advanced analysis of developer engagement and ecosystem composition
          </p>
        </div>
        <div style={{ marginTop: SPACING.sm }}>
          <span
            style={{
              padding: `${SPACING.xs} ${SPACING.sm}`,
              backgroundColor: COLORS.primaryLight,
              color: COLORS.primary,
              borderRadius: BORDER_RADIUS.md,
              fontSize: TYPOGRAPHY.small,
              marginRight: SPACING.sm,
            }}
          >
            v1.0.0
          </span>
          <span
            style={{
              padding: `${SPACING.xs} ${SPACING.sm}`,
              backgroundColor: COLORS.grayLighter,
              color: COLORS.textLight,
              borderRadius: BORDER_RADIUS.md,
              fontSize: TYPOGRAPHY.small,
            }}
          >
            Last updated: May 12, 2025
          </span>
        </div>
      </div>

      {/* Methodology Summary */}
      <div
        style={{
          marginTop: SPACING.lg,
          backgroundColor: COLORS.primaryLight,
          padding: SPACING.md,
          borderRadius: BORDER_RADIUS.md,
          border: `1px solid ${COLORS.primary}`,
        }}
      >
        <h3
          style={{
            fontSize: TYPOGRAPHY.heading4,
            fontWeight: "bold",
            marginBottom: SPACING.sm,
            color: COLORS.primary,
          }}
        >
          Analysis Methodology Overview
        </h3>
        <p style={{ fontSize: TYPOGRAPHY.small, marginBottom: SPACING.sm }}>
          This dashboard analyzes developer engagement patterns across the Aleo
          ecosystem using data from GitHub API. We focused on 1,358 active
          developers who had their first touch with Aleo's 50+ GitHub
          repositories, and identified high/medium quality developers through
          holistic scoring.
        </p>
        <p style={{ fontSize: TYPOGRAPHY.small }}>
          Quality scores incorporate GitHub Engagement (40%), Aleo Immersion
          (30%), Technical Complexity (20%), and Ecosystem Impact (10%) metrics.
          Repository journey analysis tracks developer progression across 18
          repositories in 7 categories.
        </p>
      </div>

      {/* NEW Developer Flow Visualization */}
      <div
        style={{
          marginTop: SPACING.md,
          padding: SPACING.md,
          backgroundColor: COLORS.white,
          borderRadius: BORDER_RADIUS.md,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            padding: SPACING.xs,
          }}
        >
          {/* First Touch Developers */}
          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.primaryLight,
              borderRadius: BORDER_RADIUS.md,
              textAlign: "center",
              minWidth: "220px",
              borderLeft: `4px solid ${COLORS.primary}`,
            }}
          >
            <div
              style={{
                fontSize: TYPOGRAPHY.heading2,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1,358
            </div>
            <div style={{ fontWeight: "500", color: COLORS.text }}>
              First Touch Developers
            </div>
            <div
              style={{
                fontSize: TYPOGRAPHY.small,
                color: COLORS.textLight,
                marginTop: SPACING.xs,
              }}
            >
              Engaged with Aleo GitHub repos
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              margin: `0 ${SPACING.md}`,
              fontSize: TYPOGRAPHY.heading2,
              color: COLORS.textLight,
            }}
          >
            →
          </div>

          {/* Analysis Process */}
          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.grayLighter,
              borderRadius: BORDER_RADIUS.md,
              textAlign: "center",
              minWidth: "240px",
            }}
          >
            <div style={{ fontWeight: "500", color: COLORS.text }}>
              Holistic Quality Analysis
            </div>
            <div
              style={{
                fontSize: TYPOGRAPHY.small,
                color: COLORS.textLight,
                marginTop: SPACING.xs,
              }}
            >
              GitHub engagement & Aleo immersion scoring
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              margin: `0 ${SPACING.md}`,
              fontSize: TYPOGRAPHY.heading2,
              color: COLORS.textLight,
            }}
          >
            →
          </div>

          {/* High/Medium Quality */}
          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.primaryLight,
              borderRadius: BORDER_RADIUS.md,
              textAlign: "center",
              minWidth: "220px",
              borderLeft: `4px solid ${COLORS.primary}`,
            }}
          >
            <div
              style={{
                fontSize: TYPOGRAPHY.heading2,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            ></div>
            <div style={{ fontWeight: "500", color: COLORS.text }}>
              High/Medium Quality Devs
            </div>
            <div
              style={{
                fontSize: TYPOGRAPHY.small,
                color: COLORS.textLight,
                marginTop: SPACING.xs,
              }}
            >
              Quality score ≥ 50
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== NAVIGATION COMPONENT ==========
export const Navigation = ({ activeTab, setActiveTab }) => {
  // Tab configuration with labels and descriptions
  const tabs = [
    {
      id: "executiveSummary",
      label: "Executive Summary",
      description: "Key findings and developer ecosystem overview",
    },
    {
      id: "devEcosystem",
      label: "Developer Ecosystem",
      description: "Developer composition and segmentation analysis",
    },
    {
      id: "devJourneys",
      label: "Developer Journeys",
      description: "Repository interaction patterns and progression",
    },
    {
      id: "reengagement",
      label: "Re-engagement",
      description: "Opportunities for developer re-activation",
    },
  ];

  // Disabled features for future implementation
  const disabledFeatures = [
    {
      label: "CSV Export",
      comingSoon: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: `1px solid ${COLORS.border}`,
        marginBottom: SPACING.lg,
        paddingBottom: SPACING.md,
      }}
    >
      {/* Main navigation tabs */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          marginBottom: SPACING.sm,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={{
              padding: `${SPACING.sm} ${SPACING.md}`,
              marginRight: SPACING.sm,
              backgroundColor:
                activeTab === tab.id ? COLORS.primary : COLORS.grayLighter,
              color: activeTab === tab.id ? COLORS.white : COLORS.textLight,
              border: "none",
              borderRadius: BORDER_RADIUS.md,
              cursor: "pointer",
              fontFamily: FONTS.primary,
              fontWeight: activeTab === tab.id ? "bold" : "normal",
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}

        {/* Disabled features */}
        {disabledFeatures.map((feature, index) => (
          <button
            key={`disabled-${index}`}
            style={{
              padding: `${SPACING.sm} ${SPACING.md}`,
              backgroundColor: COLORS.grayLighter,
              color: COLORS.grayLight,
              border: "none",
              borderRadius: BORDER_RADIUS.md,
              cursor: "not-allowed",
              fontFamily: FONTS.primary,
              display: "flex",
              alignItems: "center",
              marginRight: SPACING.sm,
            }}
            disabled
          >
            {feature.label}
            {feature.comingSoon && (
              <span
                style={{
                  marginLeft: SPACING.sm,
                  padding: `${SPACING.xs} ${SPACING.sm}`,
                  backgroundColor: COLORS.grayLighter,
                  borderRadius: BORDER_RADIUS.md,
                  fontSize: TYPOGRAPHY.tiny,
                  border: `1px solid ${COLORS.grayLight}`,
                }}
              >
                Coming Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab description */}
      <div
        style={{
          fontSize: TYPOGRAPHY.small,
          color: COLORS.textLight,
          padding: `${SPACING.xs} ${SPACING.sm}`,
          backgroundColor: COLORS.grayLighter,
          borderRadius: BORDER_RADIUS.md,
          display: "inline-block",
          maxWidth: "fit-content",
        }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.description ||
          "Explore Aleo developer ecosystem data"}
      </div>
    </div>
  );
};

// ========== FOOTER COMPONENT ==========
export const Footer = () => {
  return (
    <div
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        marginTop: SPACING.xxl,
        paddingTop: SPACING.lg,
        fontSize: TYPOGRAPHY.small,
        color: COLORS.textLight,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div>
        <p>Aleo Developer Ecosystem Dashboard v1.0.0</p>
        <p style={{ marginTop: SPACING.xs }}>
          Based on analysis of 1,358 active developers across 18 repositories in
          7 categories
        </p>
        <p
          style={{
            marginTop: SPACING.xs,
            fontSize: TYPOGRAPHY.tiny,
            color: COLORS.grayLight,
          }}
        >
          GitHub API: commits, issues, PRs, stars, forks, contributors
        </p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: COLORS.primary,
              marginRight: SPACING.xs,
            }}
          ></span>
          Data Last Updated: May 12, 2025
        </p>
        <p style={{ marginTop: SPACING.xs }}>
          <button
            style={{
              background: "none",
              border: "none",
              textDecoration: "underline",
              color: COLORS.grayLight,
              cursor: "not-allowed",
              fontFamily: FONTS.primary,
              fontSize: TYPOGRAPHY.small,
            }}
          >
            Export to CSV
          </button>
          <span
            style={{
              marginLeft: SPACING.sm,
              padding: `${SPACING.xs} ${SPACING.sm}`,
              backgroundColor: COLORS.grayLighter,
              borderRadius: BORDER_RADIUS.md,
              fontSize: TYPOGRAPHY.tiny,
            }}
          >
            Coming Soon
          </span>
        </p>
        <p
          style={{
            marginTop: SPACING.xs,
            color: COLORS.grayLight,
            fontSize: TYPOGRAPHY.tiny,
          }}
        >
          Report issues or feature requests via GitHub
        </p>
      </div>
    </div>
  );
};

// ========== METHODOLOGY BOX COMPONENT ==========
export const MethodologyBox = ({ title, description, items }) => {
  return (
    <div
      style={{
        backgroundColor: COLORS.primaryLight,
        border: `1px solid ${COLORS.primary}`,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        fontSize: TYPOGRAPHY.small,
      }}
    >
      <h4
        style={{
          fontSize: TYPOGRAPHY.heading4,
          fontWeight: "bold",
          marginBottom: SPACING.sm,
          color: COLORS.primary,
        }}
      >
        {title || "Methodology"}
      </h4>

      {description && <p style={{ marginBottom: SPACING.sm }}>{description}</p>}

      {items && items.length > 0 && (
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: SPACING.xs }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ========== SUMMARY CARD COMPONENT ==========
export const SummaryCard = ({
  title,
  value,
  subtitle,
  valueColor,
  icon,
  highlight,
}) => {
  return (
    <div
      style={{
        backgroundColor: highlight ? COLORS.primaryLight : COLORS.white,
        padding: SPACING.md,
        borderRadius: BORDER_RADIUS.md,
        border: `1px solid ${highlight ? COLORS.primary : COLORS.border}`,
        boxShadow: SHADOWS.sm,
        height: "100%",
      }}
    >
      <p
        style={{
          color: COLORS.textLight,
          fontSize: TYPOGRAPHY.small,
          textTransform: "uppercase",
          marginBottom: SPACING.sm,
        }}
      >
        {title}
      </p>

      <p
        style={{
          fontSize: TYPOGRAPHY.heading2,
          fontWeight: "bold",
          color: valueColor || COLORS.text,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon && <span style={{ marginRight: SPACING.xs }}>{icon}</span>}
        {value}
      </p>

      {subtitle && (
        <p
          style={{
            color: COLORS.textLight,
            fontSize: TYPOGRAPHY.small,
            marginTop: SPACING.xs,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

// ========== SUMMARY CARD GRID COMPONENT ==========
export const SummaryCardGrid = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: SPACING.md,
        marginTop: SPACING.lg,
        marginBottom: SPACING.lg,
      }}
    >
      {children}
    </div>
  );
};

// ========== CHART TOOLTIP COMPONENT ==========
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          fontFamily: FONTS.primary,
          backgroundColor: COLORS.white,
          color: COLORS.text,
          padding: SPACING.sm,
          border: `1px solid ${COLORS.border}`,
          borderRadius: BORDER_RADIUS.md,
          boxShadow: SHADOWS.sm,
        }}
      >
        <p style={{ fontSize: TYPOGRAPHY.small, marginBottom: SPACING.xs }}>{`${
          label || payload[0].name
        }`}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            style={{
              color: entry.color || entry.stroke || COLORS.text,
              fontSize: TYPOGRAPHY.small,
            }}
          >
            {entry.dataKey || entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ========== DEVELOPER FUNNEL COMPONENT ==========
export { default as DeveloperFunnel } from "./DeveloperFunnel";
