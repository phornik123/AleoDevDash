import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import {
  developerArchetypeData,
  qualityScoreComponents,
  monthlyActiveDevsData,
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
import {
  MethodologyBox,
  SummaryCard,
  SummaryCardGrid,
  CustomTooltip,
} from "../Components";

const ExecutiveSummary = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Custom renderer for pie chart active sector
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={-20}
          textAnchor="middle"
          fill={COLORS.text}
          style={{ fontFamily: "IBM Plex Mono" }}
        >
          {payload.name}
        </text>
        <text
          x={cx}
          y={cy}
          dy={0}
          textAnchor="middle"
          fill={COLORS.text}
          style={{ fontFamily: "IBM Plex Mono" }}
        >
          {`${(percent * 100).toFixed(1)}%`}
        </text>
        <text
          x={cx}
          y={cy}
          dy={20}
          textAnchor="middle"
          fill={COLORS.text}
          style={{ fontFamily: "IBM Plex Mono" }}
        >
          {`${value} Developers`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  // Handle pie chart sector activation
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
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
        Aleo Developer Ecosystem Executive Summary
      </h2>

      {/* Executive summary methodology */}
      <MethodologyBox
        title="Executive Summary Methodology"
        description="This section presents the key findings from our comprehensive analysis of the Aleo developer ecosystem."
        items={[
          "Analysis based on GitHub data from 50 repositories across 7 categories",
          "Developer quality scoring based on GitHub engagement, Aleo immersion, technical complexity, and ecosystem impact",
          "Developer archetypes identified through clustering analysis of repository interactions and contribution patterns",
          "Focus on high and medium quality developers (scores ≥ 50) for ecosystem composition analysis",
        ]}
      />

      {/* Key findings */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Key Ecosystem Findings</h3>

        {/* Inline Developer Funnel */}
        <div style={{ marginBottom: SPACING.lg }}>
          <div
            style={{
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
                  minWidth: "200px",
                  borderLeft: `4px solid ${COLORS.primary}`,
                }}
              >
                <div
                  style={{
                    fontSize: TYPOGRAPHY.heading3,
                    fontWeight: "bold",
                    color: COLORS.primary,
                  }}
                >
                  1,358
                </div>
                <div style={{ fontWeight: "bold" }}>First Touch Developers</div>
                <div
                  style={{
                    fontSize: TYPOGRAPHY.small,
                    color: COLORS.textLight,
                  }}
                >
                  Engaged with 50+ Aleo GitHub repos
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  margin: "0 15px",
                  fontSize: TYPOGRAPHY.heading3,
                  color: COLORS.textLight,
                }}
              >
                →
              </div>

              {/* Analysis */}
              <div
                style={{
                  padding: SPACING.md,
                  backgroundColor: COLORS.grayLighter,
                  borderRadius: BORDER_RADIUS.md,
                  textAlign: "center",
                  minWidth: "240px",
                  borderLeft: `4px solid ${COLORS.primary}`,
                }}
              >
                <div style={{ fontWeight: "bold" }}>Holistic Analysis</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: SPACING.xs,
                    marginBottom: SPACING.xs,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: TYPOGRAPHY.small,
                        marginRight: "8px",
                        minWidth: "100px",
                        textAlign: "right",
                      }}
                    >
                      GitHub Score
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: "6px",
                        backgroundColor: COLORS.grayLight,
                        borderRadius: "3px",
                      }}
                    >
                      <div
                        style={{
                          width: "75%",
                          height: "100%",
                          backgroundColor: COLORS.primary,
                          borderRadius: "3px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: TYPOGRAPHY.small,
                        marginRight: "8px",
                        minWidth: "100px",
                        textAlign: "right",
                      }}
                    >
                      Aleo Immersion
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: "6px",
                        backgroundColor: COLORS.grayLight,
                        borderRadius: "3px",
                      }}
                    >
                      <div
                        style={{
                          width: "65%",
                          height: "100%",
                          backgroundColor: COLORS.primary,
                          borderRadius: "3px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: TYPOGRAPHY.small,
                    color: COLORS.textLight,
                  }}
                >
                  Quality scoring based on multiple metrics
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  margin: "0 15px",
                  fontSize: TYPOGRAPHY.heading3,
                  color: COLORS.textLight,
                }}
              >
                →
              </div>

              {/* High/Medium Quality */}
              <div
                style={{
                  padding: SPACING.md,
                  backgroundColor: COLORS.grayLighter,
                  borderRadius: BORDER_RADIUS.md,
                  textAlign: "center",
                  minWidth: "200px",
                  borderLeft: `4px solid ${COLORS.primary}`,
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  High/Medium Quality Devs
                </div>
                <div
                  style={{
                    fontSize: TYPOGRAPHY.small,
                    color: COLORS.textLight,
                  }}
                >
                  Quality score ≥ 50, driving ecosystem growth
                </div>
              </div>
            </div>

            {/* Legend */}
            <div
              style={{
                marginTop: SPACING.sm,
                fontSize: TYPOGRAPHY.small,
                color: COLORS.textLight,
                padding: SPACING.sm,
                backgroundColor: COLORS.grayLighter,
                borderRadius: BORDER_RADIUS.md,
              }}
            >
              <p>
                <strong>Quality Score Components:</strong> GitHub engagement
                (40%), Aleo immersion (30%), Technical complexity (20%),
                Ecosystem impact (10%)
              </p>
            </div>
          </div>
        </div>

        {/* Keep the remaining key stats */}
        <SummaryCardGrid>
          <SummaryCard
            title="Core ZK Innovators"
            value="72.4%"
            subtitle="Strong cryptographic expertise"
            valueColor={COLORS.primary}
          />

          <SummaryCard
            title="dApp Specialists"
            value="2.2%"
            subtitle="Critical ecosystem gap"
            valueColor={COLORS.danger}
          />
        </SummaryCardGrid>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: SPACING.lg,
          }}
        >
          {/* Developer archetype distribution */}
          <div>
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                marginBottom: SPACING.md,
              }}
            >
              Developer Archetype Distribution
            </h4>

            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={developerArchetypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill={COLORS.primary}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  >
                    {developerArchetypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={DATA_COLORS[index % DATA_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div
              style={{
                fontSize: TYPOGRAPHY.small,
                color: COLORS.textLight,
                marginTop: SPACING.sm,
              }}
            >
              <p>
                <strong>Hover over segments</strong> to view detailed developer
                counts
              </p>
            </div>
          </div>

          {/* Quality score components */}
          <div>
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                marginBottom: SPACING.md,
              }}
            >
              Developer Quality Score Components
            </h4>

            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={qualityScoreComponents}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                  />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <YAxis
                    dataKey="component"
                    type="category"
                    width={150}
                    tick={{ fill: COLORS.text, fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="weight"
                    name="Weight in Quality Score"
                    fill={COLORS.primary}
                    radius={[0, 4, 4, 0]}
                    barSize={30}
                    label={{
                      position: "right",
                      formatter: (value) => value,
                      fill: COLORS.white,
                      fontSize: 12,
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div
              style={{
                fontSize: TYPOGRAPHY.small,
                color: COLORS.textLight,
                marginTop: SPACING.sm,
              }}
            >
              <p>
                Quality scores range from 0-100, with 80+ considered "High
                Quality"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Critical insights */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Critical Ecosystem Insights</h3>

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
              height: "100%",
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
              Core ZK Strength
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.body, lineHeight: "1.5" }}>
              The Aleo ecosystem is dominated by Core ZK Innovators (72.4%),
              indicating strong technical expertise in zero-knowledge
              cryptography fundamentals. This provides a solid foundation for
              protocol development and advancement.
            </p>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              borderLeft: `4px solid ${COLORS.danger}`,
              height: "100%",
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: COLORS.danger,
                marginBottom: SPACING.sm,
              }}
            >
              Application Gap
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.body, lineHeight: "1.5" }}>
              Only 2.2% of developers are classified as Blockchain Tooling &
              dApp Specialists, revealing a critical gap in application-focused
              development. This suggests potential barriers to broader ecosystem
              adoption and usability.
            </p>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              borderLeft: `4px solid ${COLORS.warning}`,
              height: "100%",
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: COLORS.warningDark,
                marginBottom: SPACING.sm,
              }}
            >
              Community Leadership
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.body, lineHeight: "1.5" }}>
              Technical Community Leaders represent only 0.6% of the ecosystem,
              indicating a need for more developer advocates and educators to
              support onboarding and knowledge transfer within the ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* High quality developer activity */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          High-Value Developer Activity (Quality Score ≥ 80)
        </h3>

        <div
          style={{
            height: 300,
            marginTop: SPACING.md,
            marginBottom: SPACING.md,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyActiveDevsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Active High-Quality Developers"
                stroke={COLORS.primary}
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            padding: SPACING.md,
            backgroundColor: COLORS.light,
            borderRadius: BORDER_RADIUS.md,
            fontSize: TYPOGRAPHY.body,
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: SPACING.sm }}>
            Key Observation:
          </p>
          <p>
            Despite fluctuations, high-quality developer activity has shown
            consistent growth since 2021, with peak activity in May 2025. The
            sustained increase in high-value developers indicates growing
            ecosystem maturity and technical depth.
          </p>
        </div>
      </div>

      {/* Strategic recommendations */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Strategic Recommendations</h3>

        <ul
          style={{
            paddingLeft: SPACING.xl,
            fontSize: TYPOGRAPHY.body,
            lineHeight: "1.6",
          }}
        >
          <li style={{ marginBottom: SPACING.sm }}>
            <strong>Application Developer Focus:</strong> Implement targeted
            initiatives to attract and support dApp developers, as this
            represents the most critical ecosystem gap
          </li>
          <li style={{ marginBottom: SPACING.sm }}>
            <strong>Community Leadership:</strong> Cultivate and elevate
            technical community leaders to improve knowledge sharing and
            developer onboarding
          </li>
          <li style={{ marginBottom: SPACING.sm }}>
            <strong>Cross-chain Integration:</strong> Encourage more cross-chain
            specialists to bridge Aleo technology with broader blockchain
            ecosystem
          </li>
          <li style={{ marginBottom: SPACING.sm }}>
            <strong>Retention Focus:</strong> Implement retention programs for
            the high-value developers identified in December 2023 activity spike
          </li>
          <li style={{ marginBottom: SPACING.sm }}>
            <strong>Repository Journey Optimization:</strong> Streamline
            developer journeys between documentation, learning repositories, and
            core protocol repositories to improve developer progression
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
