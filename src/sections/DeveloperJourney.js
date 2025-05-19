import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";
import {
  repositoryJourneyData,
  devJourneyPatterns,
  COLORS as DATA_COLORS,
} from "../data";
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  COMPONENT_STYLES,
  BORDER_RADIUS,
  SHADOWS,
} from "../styles";
import { MethodologyBox, CustomTooltip } from "../Components";

const DeveloperJourney = () => {
  // State for active tab in journey patterns section
  const [activePatternTab, setActivePatternTab] = useState("beginners");

  // Function to get pattern data based on active tab
  const getPatternData = () => {
    switch (activePatternTab) {
      case "beginners":
        return devJourneyPatterns.beginners;
      case "intermediate":
        return devJourneyPatterns.intermediate;
      case "advanced":
        return devJourneyPatterns.advanced;
      default:
        return devJourneyPatterns.beginners;
    }
  };

  return (
    <div>
      <h2
        style={{
          fontSize: TYPOGRAPHY.heading2,
          fontWeight: "bold",
          marginBottom: SPACING.lg,
        }}
      >
        Developer Repository Journey Analysis
      </h2>

      {/* Methodology */}
      <MethodologyBox
        title="Repository Journey Methodology"
        description="This section analyzes how developers progress through different repositories in the Aleo ecosystem."
        items={[
          "Tracked sequence of repository interactions for all developers",
          "Categorized journey patterns by developer tenure and technical depth",
          "Identified common pathways and progression models",
          "Analyzed multi-step sequences to understand developer learning paths",
        ]}
      />

      {/* Journey Patterns Introduction */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          Developer Journey Pattern Overview
        </h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            Repository journeys reveal how developers engage with the Aleo
            ecosystem over time. We've identified distinct patterns based on
            developer tenure, revealing critical insights about onboarding,
            progression, and developer retention.
          </p>
          <p style={{ fontSize: TYPOGRAPHY.body, color: COLORS.textLight }}>
            Below, we visualize common journey patterns for different developer
            experience levels, from newcomers to long-term contributors.
          </p>
        </div>

        {/* Developer Journey Visualization */}
        <div
          style={{
            padding: SPACING.md,
            backgroundColor: COLORS.primaryLight,
            borderRadius: BORDER_RADIUS.md,
            marginBottom: SPACING.lg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Entry Point */}
            <div
              style={{
                textAlign: "center",
                width: "120px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: COLORS.primary,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Entry
              </div>
              <p style={{ fontSize: TYPOGRAPHY.tiny, marginTop: SPACING.xs }}>
                First Repository
              </p>
            </div>

            {/* Connecting Line */}
            <div
              style={{
                position: "absolute",
                height: "2px",
                backgroundColor: COLORS.grayLight,
                width: "calc(100% - 240px)",
                left: "120px",
                zIndex: 1,
              }}
            ></div>

            {/* Explore */}
            <div
              style={{
                textAlign: "center",
                width: "120px",
                zIndex: 2,
                position: "absolute",
                left: "calc(50% - 60px)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: DATA_COLORS[2],
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Explore
              </div>
              <p style={{ fontSize: TYPOGRAPHY.tiny, marginTop: SPACING.xs }}>
                Repository Journeys
              </p>
            </div>

            {/* Contributing */}
            <div
              style={{
                textAlign: "center",
                width: "120px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: DATA_COLORS[1],
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Contribute
              </div>
              <p style={{ fontSize: TYPOGRAPHY.tiny, marginTop: SPACING.xs }}>
                Active Engagement
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: SPACING.lg,
              fontSize: TYPOGRAPHY.small,
              color: COLORS.primary,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Typical Developer Repository Journey Flow
          </div>
        </div>

        {/* Journey Pattern Details */}
        <div>
          <h4
            style={{
              fontSize: TYPOGRAPHY.heading4,
              fontWeight: "bold",
              marginBottom: SPACING.md,
            }}
          >
            Developer Journey Patterns by Experience Level
          </h4>

          <div
            style={{
              display: "flex",
              borderBottom: `1px solid ${COLORS.border}`,
              marginBottom: SPACING.md,
            }}
          >
            <button
              style={{
                padding: `${SPACING.sm} ${SPACING.md}`,
                border: "none",
                borderBottom:
                  activePatternTab === "beginners"
                    ? `2px solid ${COLORS.primary}`
                    : "none",
                backgroundColor: "transparent",
                color:
                  activePatternTab === "beginners"
                    ? COLORS.primary
                    : COLORS.textLight,
                fontWeight:
                  activePatternTab === "beginners" ? "bold" : "normal",
                cursor: "pointer",
                marginRight: SPACING.md,
              }}
              onClick={() => setActivePatternTab("beginners")}
            >
              Beginner Devs
            </button>
            <button
              style={{
                padding: `${SPACING.sm} ${SPACING.md}`,
                border: "none",
                borderBottom:
                  activePatternTab === "intermediate"
                    ? `2px solid ${COLORS.primary}`
                    : "none",
                backgroundColor: "transparent",
                color:
                  activePatternTab === "intermediate"
                    ? COLORS.primary
                    : COLORS.textLight,
                fontWeight:
                  activePatternTab === "intermediate" ? "bold" : "normal",
                cursor: "pointer",
                marginRight: SPACING.md,
              }}
              onClick={() => setActivePatternTab("intermediate")}
            >
              Intermediate Devs
            </button>
            <button
              style={{
                padding: `${SPACING.sm} ${SPACING.md}`,
                border: "none",
                borderBottom:
                  activePatternTab === "advanced"
                    ? `2px solid ${COLORS.primary}`
                    : "none",
                backgroundColor: "transparent",
                color:
                  activePatternTab === "advanced"
                    ? COLORS.primary
                    : COLORS.textLight,
                fontWeight: activePatternTab === "advanced" ? "bold" : "normal",
                cursor: "pointer",
              }}
              onClick={() => setActivePatternTab("advanced")}
            >
              Advanced Devs
            </button>
          </div>

          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={getPatternData()}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={180}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="percentage"
                  name="Percentage of Developers"
                  fill={
                    activePatternTab === "beginners"
                      ? COLORS.primary
                      : activePatternTab === "intermediate"
                      ? DATA_COLORS[2]
                      : DATA_COLORS[1]
                  }
                  barSize={30}
                  label={{
                    position: "right",
                    formatter: (value) => `${value}%`,
                    fill: COLORS.text,
                    fontSize: 12,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              marginTop: SPACING.md,
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              fontSize: TYPOGRAPHY.small,
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: SPACING.sm }}>
              {activePatternTab === "beginners"
                ? "Beginner Developer Patterns (0-3 months)"
                : activePatternTab === "intermediate"
                ? "Intermediate Developer Patterns (3-12 months)"
                : "Advanced Developer Patterns (12+ months)"}
            </p>
            <p>
              {activePatternTab === "beginners"
                ? "New developers primarily focus on documentation and educational resources, with 68% starting their journey through the documentation repositories. Only 10% of beginners directly engage with core repositories."
                : activePatternTab === "intermediate"
                ? "After initial onboarding, developers begin to specialize, with 42% focusing on infrastructure repositories and 38% on tooling. Cross-category engagement increases as developers build broader ecosystem understanding."
                : "Established developers show deeper engagement patterns, with 56% contributing directly to core protocol repositories and significant recursive engagement between related repositories."}
            </p>
          </div>
        </div>
      </div>

      {/* Repository Journey Details */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          Developer Repository Journeys by Tenure
        </h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body }}>
            The repository journeys below show common paths that developers take
            through the Aleo ecosystem. Each journey represents a sequence of
            repository interactions, with step counts and occurrence
            frequencies.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: SPACING.lg,
          }}
        >
          {Object.entries(repositoryJourneyData).map(
            ([timespan, journeys], index) => (
              <div key={index}>
                <h4
                  style={{
                    fontSize: TYPOGRAPHY.heading4,
                    fontWeight: "bold",
                    marginBottom: SPACING.md,
                    color:
                      index === 0
                        ? COLORS.primary
                        : index < 3
                        ? DATA_COLORS[2]
                        : DATA_COLORS[1],
                  }}
                >
                  {timespan}
                </h4>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {journeys.map((journey, jIndex) => {
                    // Parse journey text to highlight steps and occurrences
                    const matches = journey.match(
                      /(.*?)(\(\d+-step, \d+ occurrences?\))/
                    );
                    const journeyPath = matches ? matches[1] : journey;
                    const journeyStats = matches ? matches[2] : "";

                    // Determine if this is a complex journey (more than 3 steps)
                    const stepCount = (journeyStats.match(/\d+-step/) || [
                      "",
                    ])[0];
                    const isComplex =
                      stepCount && parseInt(stepCount.split("-")[0]) > 3;

                    return (
                      <li
                        key={jIndex}
                        style={{
                          marginBottom: SPACING.sm,
                          padding: `${SPACING.sm} ${SPACING.md}`,
                          backgroundColor: isComplex
                            ? COLORS.primaryLight
                            : COLORS.light,
                          borderRadius: BORDER_RADIUS.md,
                          borderLeft: `4px solid ${
                            isComplex ? COLORS.primary : COLORS.border
                          }`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: TYPOGRAPHY.small,
                            color: isComplex ? COLORS.primary : COLORS.text,
                            fontFamily: "IBM Plex Mono",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {journeyPath}
                        </div>
                        <div
                          style={{
                            fontSize: TYPOGRAPHY.tiny,
                            color: COLORS.textLight,
                            marginTop: SPACING.xs,
                            fontWeight: isComplex ? "bold" : "normal",
                          }}
                        >
                          {journeyStats}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div
                  style={{
                    marginTop: SPACING.sm,
                    fontSize: TYPOGRAPHY.tiny,
                    color: COLORS.textLight,
                  }}
                >
                  {timespan === "Less than 1 Month" &&
                    "Early-stage developers focus on documentation repositories"}
                  {timespan === "1-3 Months" &&
                    "These developers begin exploring ecosystem projects"}
                  {timespan === "3-6 Months" &&
                    "More complex exploration patterns emerge at this stage"}
                  {timespan === "6-12 Months" &&
                    "Developers show deeper ecosystem knowledge"}
                  {timespan === "1-2 Years" &&
                    "Long-term contributors engage with core infrastructure"}
                  {timespan === "Greater than 2 Years" &&
                    "Deep recursive patterns indicate ecosystem expertise"}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Journey Pattern Insights */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Key Journey Pattern Insights</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: SPACING.md,
          }}
        >
          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              borderLeft: `4px solid ${COLORS.primary}`,
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: COLORS.primary,
                marginBottom: SPACING.sm,
              }}
            >
              Documentation Centrality
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Documentation repositories (welcome, leo-docs-source) are critical
              entry points for 68% of new developers, serving as gateways to
              deeper ecosystem engagement.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.sm,
                fontWeight: "bold",
              }}
            >
              Recommendation: Prioritize documentation improvements and
              onboarding resources
            </p>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              borderLeft: `4px solid ${DATA_COLORS[2]}`,
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: DATA_COLORS[2],
                marginBottom: SPACING.sm,
              }}
            >
              Journey Complexity Progression
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Developer journey complexity increases with tenure. New developers
              follow simple 2-3 step patterns, while developers with &gt;1 year
              experience journeys between multiple repositories.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.sm,
                fontWeight: "bold",
              }}
            >
              Recommendation: Design progressive engagement paths between
              repository categories
            </p>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              borderLeft: `4px solid ${DATA_COLORS[1]}`,
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: DATA_COLORS[1],
                marginBottom: SPACING.sm,
              }}
            >
              Repository Specialization
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Long-term ecosystem contributors (&gt;2 years) repository
              preferences. The most engaged developers show deep recursive
              patterns with core repositories (snarkOS, snarkVM) and rarely
              engage with application repositories.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.sm,
                fontWeight: "bold",
              }}
            >
              Recommendation: Create more bridges between core protocol and
              application development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperJourney;
