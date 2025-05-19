import React from "react";
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
import { reEngagementData, COLORS as DATA_COLORS } from "../data";
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  COMPONENT_STYLES,
  BORDER_RADIUS,
} from "../styles";
import { MethodologyBox, CustomTooltip } from "../Components";

const Reengagement = () => {
  // Prepare data for category distribution chart
  const categoryDistributionData = [
    { name: "Application Development", value: 3 },
    { name: "Advanced Infrastructure", value: 1 },
    { name: "Learning & Onboarding", value: 1 },
  ];

  // Prepare data for activity span chart
  const activitySpanData = reEngagementData.map((dev) => ({
    name: dev.username,
    value: dev.activitySpan,
    category: dev.category,
  }));

  // Create month distribution data
  const monthDistribution = [
    { name: "Mar 2019", value: 1 },
    { name: "Aug 2023", value: 1 },
    { name: "Nov 2023", value: 1 },
    { name: "Mar 2024", value: 1 },
    { name: "Sep 2024", value: 1 },
  ];

  return (
    <div>
      <h2
        style={{
          fontSize: TYPOGRAPHY.heading2,
          fontWeight: "bold",
          marginBottom: SPACING.lg,
        }}
      >
        Developer Re-engagement Opportunities
      </h2>

      {/* Methodology */}
      <MethodologyBox
        title="Re-engagement Analysis Methodology"
        description="This section identifies developers with high potential for re-engagement based on quality, activity patterns, and engagement metrics."
        items={[
          "Analyzed 500 high-quality developers for potential re-engagement",
          "Applied filtering criteria: GitHub quality score ≥ 70, limited Aleo engagement, high potential impact",
          "Identified technical areas with critical developer gaps",
          "Prioritized developers based on activity span, technical relevance, and ecosystem impact",
        ]}
      />

      {/* Top Re-engagement Candidates */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Top Re-engagement Candidates</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body }}>
            We've identified the following developers as prime re-engagement
            targets based on their GitHub quality scores, previous Aleo
            engagement, and technical expertise. These developers showed initial
            interest but limited sustained engagement.
          </p>
        </div>

        <div style={{ overflowX: "auto", marginBottom: SPACING.lg }}>
          <table style={COMPONENT_STYLES.table}>
            <thead>
              <tr>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Username</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>First Activity</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Last Activity</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Activity Span</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Peak Month</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Category</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Priority</th>
              </tr>
            </thead>
            <tbody>
              {reEngagementData.map((dev, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? COLORS.white : COLORS.light,
                  }}
                >
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      fontWeight: "bold",
                      color: COLORS.primary,
                    }}
                  >
                    {dev.username}
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    {dev.firstActivity}
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>{dev.lastActivity}</td>
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      fontWeight: dev.activitySpan > 20 ? "bold" : "normal",
                      color:
                        dev.activitySpan > 20 ? COLORS.primary : COLORS.text,
                    }}
                  >
                    {dev.activitySpan} days
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>{dev.peakMonth}</td>
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      color:
                        dev.category === "Application Development"
                          ? COLORS.primary
                          : COLORS.text,
                    }}
                  >
                    {dev.category}
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: `${SPACING.xs} ${SPACING.sm}`,
                        backgroundColor:
                          dev.category === "Application Development"
                            ? COLORS.primaryLight
                            : dev.activitySpan > 20
                            ? DATA_COLORS[2] + "33"
                            : COLORS.grayLighter,
                        borderRadius: BORDER_RADIUS.md,
                        fontSize: TYPOGRAPHY.tiny,
                        fontWeight: "bold",
                        color:
                          dev.category === "Application Development"
                            ? COLORS.primary
                            : dev.activitySpan > 20
                            ? DATA_COLORS[2]
                            : COLORS.text,
                      }}
                    >
                      {dev.category === "Application Development"
                        ? "High"
                        : dev.activitySpan > 20
                        ? "Medium"
                        : "Standard"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: SPACING.lg,
          }}
        >
          {/* Category Distribution */}
          <div>
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                marginBottom: SPACING.md,
              }}
            >
              Re-engagement Candidates by Category
            </h4>

            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill={COLORS.primary}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryDistributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          index === 0 ? COLORS.primary : DATA_COLORS[index + 1]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
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
                Application Development focus is prioritized for re-engagement
              </p>
            </div>
          </div>

          {/* Activity Span */}
          <div>
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                marginBottom: SPACING.md,
              }}
            >
              Activity Span Comparison (Days)
            </h4>

            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activitySpanData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={50}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    label={{
                      value: "Days Active",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle" },
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="value"
                    name="Activity Span (Days)"
                    fill={COLORS.primary}
                  />
                </BarChart>
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
                Longer engagement periods suggest higher re-engagement potential
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Engagement Gaps */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Developer Engagement Gaps</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body }}>
            Based on our ecosystem analysis, we've identified critical developer
            gaps that should be prioritized for targeted re-engagement and
            recruitment efforts.
          </p>
        </div>

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
              borderLeft: `4px solid ${COLORS.danger}`,
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
              dApp Development
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Only 11 developers (2.2%) focused on application development
              represents a critical ecosystem gap. This severely limits end-user
              adoption and ecosystem utility.
            </p>
            <div
              style={{
                marginTop: SPACING.sm,
                padding: `${SPACING.xs} ${SPACING.sm}`,
                backgroundColor: COLORS.danger + "15",
                borderRadius: BORDER_RADIUS.md,
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontSize: TYPOGRAPHY.tiny,
                  color: COLORS.danger,
                  fontWeight: "bold",
                }}
              >
                CRITICAL GAP
              </span>
            </div>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              borderLeft: `4px solid ${COLORS.warning}`,
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
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Absence of Technical Community Leaders (0.6%) in the top developer
              segments creates knowledge transfer challenges and limits
              educational resource development.
            </p>
            <div
              style={{
                marginTop: SPACING.sm,
                padding: `${SPACING.xs} ${SPACING.sm}`,
                backgroundColor: COLORS.warning + "15",
                borderRadius: BORDER_RADIUS.md,
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontSize: TYPOGRAPHY.tiny,
                  color: COLORS.warningDark,
                  fontWeight: "bold",
                }}
              >
                HIGH PRIORITY GAP
              </span>
            </div>
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
              Cross-chain Integration
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Limited representation of Cross-chain Generalists (0.4%) hinders
              interoperability efforts and ecosystem expansion into broader
              blockchain networks.
            </p>
            <div
              style={{
                marginTop: SPACING.sm,
                padding: `${SPACING.xs} ${SPACING.sm}`,
                backgroundColor: DATA_COLORS[2] + "15",
                borderRadius: BORDER_RADIUS.md,
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontSize: TYPOGRAPHY.tiny,
                  color: DATA_COLORS[2],
                  fontWeight: "bold",
                }}
              >
                MEDIUM PRIORITY GAP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Re-engagement Initiatives */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          Strategic Re-engagement Initiatives
        </h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            Based on our analysis, we've developed the following strategic
            initiatives to re-engage high-value developers and address critical
            ecosystem gaps.
          </p>
        </div>

        <div
          style={{
            marginBottom: SPACING.lg,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: SPACING.md,
          }}
        >
          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.primaryLight,
              borderRadius: BORDER_RADIUS.md,
              border: `1px solid ${COLORS.primary}`,
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
              Developer Spotlight Program
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Create a featured developer program that highlights contributions
              from re-engaged developers, offering recognition, exclusive
              access, and potential funding opportunities.
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginTop: SPACING.sm,
                fontSize: TYPOGRAPHY.small,
              }}
            >
              <li style={{ marginBottom: SPACING.xs }}>
                Target: Application Development specialists
              </li>
              <li style={{ marginBottom: SPACING.xs }}>
                Timeline: Launch within 30 days
              </li>
              <li style={{ marginBottom: SPACING.xs }}>
                KPI: 40% re-engagement rate
              </li>
            </ul>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: COLORS.text,
                marginBottom: SPACING.sm,
              }}
            >
              Personalized Outreach Campaign
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Implement direct, personalized outreach to high-priority
              re-engagement candidates, focusing on specific technical interests
              and potential contributions.
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginTop: SPACING.sm,
                fontSize: TYPOGRAPHY.small,
              }}
            >
              <li style={{ marginBottom: SPACING.xs }}>
                Target: Top 5 developers from re-engagement list
              </li>
              <li style={{ marginBottom: SPACING.xs }}>
                Timeline: Begin immediately
              </li>
              <li style={{ marginBottom: SPACING.xs }}>
                KPI: 60% response rate
              </li>
            </ul>
          </div>

          <div
            style={{
              padding: SPACING.md,
              backgroundColor: COLORS.light,
              borderRadius: BORDER_RADIUS.md,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <h4
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: COLORS.text,
                marginBottom: SPACING.sm,
              }}
            >
              Technical Workshop Series
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Launch targeted technical workshops focused on application
              development, addressing the critical dApp development gap in the
              ecosystem.
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginTop: SPACING.sm,
                fontSize: TYPOGRAPHY.small,
              }}
            >
              <li style={{ marginBottom: SPACING.xs }}>
                Target: Both re-engagement candidates and new developers
              </li>
              <li style={{ marginBottom: SPACING.xs }}>
                Timeline: First workshop within 60 days
              </li>
              <li style={{ marginBottom: SPACING.xs }}>
                KPI: 15 active dApp developers within 90 days
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            padding: SPACING.md,
            border: `1px solid ${COLORS.border}`,
            borderRadius: BORDER_RADIUS.md,
          }}
        >
          <h4
            style={{
              fontSize: TYPOGRAPHY.heading4,
              fontWeight: "bold",
              marginBottom: SPACING.md,
            }}
          >
            Re-engagement Prioritization Framework
          </h4>

          <div style={{ overflowX: "auto" }}>
            <table style={COMPONENT_STYLES.table}>
              <thead>
                <tr>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>Priority</th>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>Criteria</th>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>
                    Target Developers
                  </th>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      fontWeight: "bold",
                      color: COLORS.primary,
                    }}
                  >
                    High
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Application Development focus
                    <br />
                    Activity span ≥ 30 days
                    <br />
                    Last active within 6 months
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>pavvann</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Direct personalized outreach
                    <br />
                    Project-specific invitations
                    <br />
                    Potential grant/funding opportunities
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      fontWeight: "bold",
                      color: DATA_COLORS[2],
                    }}
                  >
                    Medium
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Any technical category
                    <br />
                    Activity span 5-30 days
                    <br />
                    Last active within 12 months
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>DMitong, skywinder</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Category-specific newsletter
                    <br />
                    Workshop/hackathon invitations
                    <br />
                    Community recognition opportunities
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: `${SPACING.sm} ${SPACING.md}`,
                      borderBottom: `1px solid ${COLORS.border}`,
                      fontWeight: "bold",
                      color: COLORS.textLight,
                    }}
                  >
                    Standard
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Any technical category
                    <br />
                    Activity span &lt; 5 days
                    <br />
                    Last active any time
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>zhp1254, ansermino</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    General ecosystem updates
                    <br />
                    Public event invitations
                    <br />
                    Educational resource sharing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reengagement;
