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
  tagCategoryData,
  overlapMatrixData,
  categoryNames,
  developerArchetypeData,
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

const DeveloperEcosystem = () => {
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
        Developer Ecosystem Composition Analysis
      </h2>

      {/* Methodology */}
      <MethodologyBox
        title="Ecosystem Analysis Methodology"
        description="This section analyzes the composition and segmentation of developers within the Aleo ecosystem."
        items={[
          "Analysis of 500 developers from highest quality segments",
          "75+ developer tags evaluated and grouped into 8 high-level categories",
          "Matrix analysis to identify overlapping developer interests and skills",
          "Derived archetypes based on repository engagement patterns and contribution types",
        ]}
      />

      {/* Developer Archetypes */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          Developer Archetype Distribution
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: SPACING.lg,
          }}
        >
          {/* Pie chart */}
          <div>
            <div style={{ height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={developerArchetypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
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
                textAlign: "center",
              }}
            >
              <p>
                Hover over segments to view developer counts and percentages
              </p>
            </div>
          </div>

          {/* Archetype descriptions */}
          <div>
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                marginBottom: SPACING.md,
              }}
            >
              Developer Archetype Characteristics
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: SPACING.sm,
              }}
            >
              <div
                style={{
                  padding: SPACING.sm,
                  backgroundColor: COLORS.light,
                  borderRadius: BORDER_RADIUS.md,
                  borderLeft: `4px solid ${DATA_COLORS[0]}`,
                }}
              >
                <h5
                  style={{
                    fontSize: TYPOGRAPHY.body,
                    fontWeight: "bold",
                    marginBottom: SPACING.xs,
                  }}
                >
                  Core ZK Innovator (72.4%)
                </h5>
                <p style={{ fontSize: TYPOGRAPHY.small }}>
                  Strong cryptographic expertise, focused on zero-knowledge
                  protocol fundamentals and core implementations. Typically
                  engages with snarkOS, snarkVM repositories.
                </p>
              </div>

              <div
                style={{
                  padding: SPACING.sm,
                  backgroundColor: COLORS.light,
                  borderRadius: BORDER_RADIUS.md,
                  borderLeft: `4px solid ${DATA_COLORS[1]}`,
                }}
              >
                <h5
                  style={{
                    fontSize: TYPOGRAPHY.body,
                    fontWeight: "bold",
                    marginBottom: SPACING.xs,
                  }}
                >
                  Infrastructure & Protocol Specialist (24.4%)
                </h5>
                <p style={{ fontSize: TYPOGRAPHY.small }}>
                  Focused on network infrastructure, protocol implementation,
                  and scalability solutions. Works with core repositories but
                  emphasizes infrastructure aspects.
                </p>
              </div>

              <div
                style={{
                  padding: SPACING.sm,
                  backgroundColor: COLORS.light,
                  borderRadius: BORDER_RADIUS.md,
                  borderLeft: `4px solid ${DATA_COLORS[2]}`,
                }}
              >
                <h5
                  style={{
                    fontSize: TYPOGRAPHY.body,
                    fontWeight: "bold",
                    marginBottom: SPACING.xs,
                  }}
                >
                  Blockchain Tooling & dApp Specialist (2.2%)
                </h5>
                <p style={{ fontSize: TYPOGRAPHY.small }}>
                  Application-focused developers building user-facing
                  applications and developer tools. Represents a critical
                  ecosystem gap despite importance for adoption.
                </p>
              </div>

              <div
                style={{
                  padding: SPACING.sm,
                  backgroundColor: COLORS.light,
                  borderRadius: BORDER_RADIUS.md,
                  borderLeft: `4px solid ${DATA_COLORS[3]}`,
                }}
              >
                <h5
                  style={{
                    fontSize: TYPOGRAPHY.body,
                    fontWeight: "bold",
                    marginBottom: SPACING.xs,
                  }}
                >
                  Technical Community Leader (0.6%)
                </h5>
                <p style={{ fontSize: TYPOGRAPHY.small }}>
                  Educational content creators, workshop leaders, and community
                  contributors. Critical for ecosystem growth but severely
                  underrepresented.
                </p>
              </div>

              <div
                style={{
                  padding: SPACING.sm,
                  backgroundColor: COLORS.light,
                  borderRadius: BORDER_RADIUS.md,
                  borderLeft: `4px solid ${DATA_COLORS[4]}`,
                }}
              >
                <h5
                  style={{
                    fontSize: TYPOGRAPHY.body,
                    fontWeight: "bold",
                    marginBottom: SPACING.xs,
                  }}
                >
                  Cross-chain & Crypto Generalist (0.4%)
                </h5>
                <p style={{ fontSize: TYPOGRAPHY.small }}>
                  Developers with broad blockchain experience integrating Aleo
                  with other chains. Important for ecosystem expansion but
                  currently minimal representation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tag Categories */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          Tag Categories & Developer Distribution
        </h3>

        <div style={{ marginBottom: SPACING.md, fontSize: TYPOGRAPHY.small }}>
          <p style={{ marginBottom: SPACING.sm }}>
            <strong>Total Developers Analyzed:</strong> 500 |{" "}
            <strong>Mapped to at least 1 Tag:</strong> 455 (91%)
          </p>
          <p>
            <strong>Note:</strong> Developers may be tagged in multiple
            categories (see overlap matrix below)
          </p>
        </div>

        <div style={{ overflowX: "auto", marginBottom: SPACING.lg }}>
          <table style={COMPONENT_STYLES.table}>
            <thead>
              <tr>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Tag Category</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}># Developers</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>
                  Avg. Quality Score
                </th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>
                  Quality Percentile
                </th>
              </tr>
            </thead>
            <tbody>
              {tagCategoryData.map((category, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? COLORS.white : COLORS.light,
                  }}
                >
                  <td style={COMPONENT_STYLES.tableCell}>{category.name}</td>
                  <td style={COMPONENT_STYLES.tableCell}>{category.count}</td>
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      color:
                        category.avgQualityScore > 53
                          ? COLORS.primary
                          : COLORS.text,
                      fontWeight:
                        category.avgQualityScore > 53 ? "bold" : "normal",
                    }}
                  >
                    {category.avgQualityScore.toFixed(2)}
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    {category.avgQualityScore > 52
                      ? "Top 25%"
                      : category.avgQualityScore > 48
                      ? "Top 50%"
                      : category.avgQualityScore > 46
                      ? "Top 75%"
                      : "Bottom 25%"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tagCategoryData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                width={180}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="count"
                name="Developer Count"
                fill={COLORS.primary}
              />
              <Bar
                dataKey="avgQualityScore"
                name="Avg. Quality Score"
                fill={DATA_COLORS[2]}
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
            Key Insight:
          </p>
          <p>
            The highest-quality developers are concentrated in specialized
            niches: Systems/Compiler Infrastructure (55.43), Security & Audit
            (55.09), and ZK Identity & Privacy UX (52.32), despite representing
            small segments of the overall ecosystem.
          </p>
        </div>
      </div>

      {/* Tag Category Overlap Matrix */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Tag Category Overlap Matrix</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.small, marginBottom: SPACING.sm }}>
            This matrix shows <strong>how many developers are co-tagged</strong>{" "}
            in each pair of categories. The diagonal (marked with "—")
            represents developers that would overlap with themselves.
          </p>
          <p style={{ fontSize: TYPOGRAPHY.small, color: COLORS.textLight }}>
            Example: 174 developers are tagged in both Tooling and Interop
            categories.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={COMPONENT_STYLES.table}>
            <thead>
              <tr>
                <th style={COMPONENT_STYLES.tableHeaderCell}></th>
                {categoryNames.map((name, i) => (
                  <th key={i} style={COMPONENT_STYLES.tableHeaderCell}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {overlapMatrixData.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? COLORS.white : COLORS.light,
                  }}
                >
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      fontWeight: "bold",
                      backgroundColor: COLORS.grayLighter,
                    }}
                  >
                    {categoryNames[i]}
                  </td>
                  {row.map((cell, j) => {
                    // Highlight cells with high values
                    const highValue = parseInt(cell) > 100 && cell !== "—";
                    const cellValue = parseInt(cell);

                    return (
                      <td
                        key={j}
                        style={{
                          padding: `${SPACING.sm} ${SPACING.md}`,
                          borderBottom: `1px solid ${COLORS.border}`,
                          color:
                            cell === "—"
                              ? COLORS.grayLight
                              : highValue
                              ? COLORS.primary
                              : cellValue > 50
                              ? COLORS.primary
                              : cellValue > 20
                              ? COLORS.text
                              : COLORS.textLight,
                          fontWeight: highValue ? "bold" : "normal",
                          backgroundColor: highValue
                            ? COLORS.primaryLight
                            : "transparent",
                        }}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            marginTop: SPACING.md,
            padding: SPACING.md,
            backgroundColor: COLORS.primaryLight,
            borderRadius: BORDER_RADIUS.md,
            fontSize: TYPOGRAPHY.small,
            border: `1px solid ${COLORS.primary}`,
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: SPACING.sm,
              color: COLORS.primary,
            }}
          >
            Matrix Analysis Insights
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: SPACING.xs }}>
              <strong>High-volume core cluster:</strong> Tooling ↔ Interop ↔
              Infra form the dominant cluster with 152-174 overlapping
              developers
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              <strong>Cross-functional security:</strong> Security specialists
              frequently collaborate with Infrastructure developers (41 shared
              developers)
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              <strong>Isolated segments:</strong> Identity and DeFi are the most
              isolated categories with minimal developer overlap
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              <strong>Education bridges:</strong> Education category overlaps
              significantly with Tooling (78), Interop (66), and Infra (63),
              serving as ecosystem bridges
            </li>
          </ul>
        </div>
      </div>

      {/* Strategic Implications */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Strategic Implications</h3>

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
              Quality vs. Quantity Disparity
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Highest quality developers (avg. score 55+) are concentrated in
              specialized technical niches (Systems, Security) while the largest
              developer segments (Tooling, Interop, Infra) show average quality
              scores below 48.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                lineHeight: "1.5",
                marginTop: SPACING.sm,
              }}
            >
              <strong>Implication:</strong> Focus on recruiting high-quality
              developers into the larger segments to raise overall ecosystem
              quality.
            </p>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
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
              Critical Category Gaps
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              DeFi/Token (15 developers) and Identity/Privacy (19 developers)
              categories show critical mass deficiencies despite strategic
              importance to ZK technology applications.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                lineHeight: "1.5",
                marginTop: SPACING.sm,
              }}
            >
              <strong>Implication:</strong> Identify and target developers with
              relevant experience from other blockchain ecosystems to fill these
              gaps.
            </p>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
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
              Developer Segmentation Opportunity
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Current ecosystem segmentation shows only 2.2% dApp Specialists
              and 0.6% Community Leaders, creating bottlenecks in application
              development and knowledge transfer.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                lineHeight: "1.5",
                marginTop: SPACING.sm,
              }}
            >
              <strong>Implication:</strong> Create targeted developer programs
              focused specifically on application development and community-led
              education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperEcosystem;
