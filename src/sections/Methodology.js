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
} from "recharts";
import {
  dataFilteringProcess,
  qualityScoreComponents,
  repositoryCategories,
  COLORS as DATA_COLORS,
} from "../data";
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  COMPONENT_STYLES,
  BORDER_RADIUS,
} from "../styles";
import { CustomTooltip } from "../Components";

const Methodology = () => {
  return (
    <div>
      <h2
        style={{
          fontSize: TYPOGRAPHY.heading2,
          fontWeight: "bold",
          marginBottom: SPACING.lg,
        }}
      >
        Analysis Methodology & Technical Details
      </h2>

      {/* Introduction */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Methodology Overview</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            This dashboard presents the results of a comprehensive analysis of
            the Aleo developer ecosystem, using a structured data collection and
            analysis approach to identify patterns, opportunities, and strategic
            insights.
          </p>
          <p style={{ fontSize: TYPOGRAPHY.body }}>
            The following sections detail our methodology, data sources,
            filtering approach, and analysis techniques.
          </p>
        </div>
      </div>

      {/* Data Collection Process */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Data Collection Process</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            We used a two-tier architecture for data collection and analysis:
          </p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              marginBottom: SPACING.md,
              fontSize: TYPOGRAPHY.body,
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>Tier 1:</strong> Raw engagement metrics for ALL users
              (stars, forks, commits, PRs, issues)
            </li>
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>Tier 2:</strong> Full developer profiles ONLY for active
              contributors (journey tracking, cohorts, milestones)
            </li>
          </ul>

          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            Data was collected from GitHub using the following APIs and
            endpoints:
          </p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              marginBottom: SPACING.md,
              fontSize: TYPOGRAPHY.body,
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: SPACING.xs }}>
              GitHub REST API v3:{" "}
              <code>
                /repos/{owner}/{repo}/contributors
              </code>
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              GitHub REST API v3:{" "}
              <code>
                /repos/{owner}/{repo}/stargazers
              </code>
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              GitHub REST API v3:{" "}
              <code>
                /repos/{owner}/{repo}/forks
              </code>
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              GitHub REST API v3:{" "}
              <code>
                /repos/{owner}/{repo}/pulls
              </code>
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              GitHub REST API v3:{" "}
              <code>
                /repos/{owner}/{repo}/issues
              </code>
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              GitHub GraphQL API v4: Custom queries for detailed repository and
              user data
            </li>
          </ul>

          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            We maintained a consistent data collection methodology across all
            repositories:
          </p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              fontSize: TYPOGRAPHY.body,
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: SPACING.xs }}>
              Token rotation to manage API rate limits (15,000 requests/hour)
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Incremental data collection to minimize redundant API calls
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Consistent data structures for cross-repository analysis
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              User identification via GitHub login as the unique identifier
            </li>
          </ul>
        </div>
      </div>

      {/* Data Filtering Process */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Data Filtering Process</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            Our analysis began with a broad set of GitHub users and
            progressively filtered to focus on the most relevant and active
            developers:
          </p>
        </div>

        <div style={{ height: 300, marginBottom: SPACING.lg }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataFilteringProcess}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="count"
                name="Developer Count"
                fill={COLORS.primary}
                label={{
                  position: "top",
                  fill: COLORS.text,
                  fontSize: 12,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ marginBottom: SPACING.lg }}>
          <h4
            style={{
              fontSize: TYPOGRAPHY.heading4,
              fontWeight: "bold",
              marginBottom: SPACING.sm,
            }}
          >
            Filtering Criteria Details
          </h4>

          <div style={{ overflowX: "auto" }}>
            <table style={COMPONENT_STYLES.table}>
              <thead>
                <tr>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>Stage</th>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>Count</th>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>
                    Filtering Criteria
                  </th>
                  <th style={COMPONENT_STYLES.tableHeaderCell}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Initial GitHub Users
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>12,957</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    All users who interacted with Aleo repositories in any way
                    (star, fork, commit, PR, issue)
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Establish baseline universe of potential developers
                  </td>
                </tr>
                <tr>
                  <td style={COMPONENT_STYLES.tableCell}>Wallets Analyzed</td>
                  <td style={COMPONENT_STYLES.tableCell}>5,247</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Users with verified wallet activity and non-bot accounts
                    (type: "User", not "Bot")
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Focus on actual human users with blockchain interaction
                  </td>
                </tr>
                <tr>
                  <td style={COMPONENT_STYLES.tableCell}>Active Developers</td>
                  <td style={COMPONENT_STYLES.tableCell}>1,358</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Users with substantive engagement: multiple interactions,
                    repository diversity, or contribution depth
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Focus on genuinely engaged developers, not casual browsers
                  </td>
                </tr>
                <tr>
                  <td style={COMPONENT_STYLES.tableCell}>
                    High/Medium Quality
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>500</td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Developers with quality scores ≥ 50, representing the
                    highest technical value and ecosystem impact
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    Identify core developer segment for detailed analysis and
                    targeting
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
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
            Additional Filtering Notes
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: SPACING.xs }}>
              Bot accounts were excluded based on GitHub account type and
              activity patterns
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Single-interaction users (e.g., one-time stargazers) were filtered
              from active developers
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Developers were required to have interactions with at least 2
              repositories for inclusion in final analysis
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Filtering was progressive, with each stage building on the
              previous selection
            </li>
          </ul>
        </div>
      </div>

      {/* Quality Score Calculation */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Quality Score Calculation</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            Developer quality scores represent a weighted composite metric
            ranging from 0-100, incorporating multiple dimensions of developer
            engagement and contribution value.
          </p>
        </div>

        <div style={{ height: 300, marginBottom: SPACING.lg }}>
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: SPACING.md,
            marginBottom: SPACING.lg,
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
              GitHub Engagement Score (30%)
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Measures commit frequency, PR quality, issue engagement, and
              overall GitHub activity.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                lineHeight: "1.5",
                marginTop: SPACING.sm,
              }}
            >
              <strong>Calculation:</strong> Normalized score (0-1) based on
              weighted contribution metrics:
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.xs,
              }}
            >
              <li>Commit frequency and quality (40%)</li>
              <li>PR submission and review activity (30%)</li>
              <li>Issue creation and resolution (20%)</li>
              <li>Overall GitHub reputation (10%)</li>
            </ul>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                fontStyle: "italic",
                marginTop: SPACING.sm,
              }}
            >
              Average Value: 0.63
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
                color: DATA_COLORS[2],
                marginBottom: SPACING.sm,
              }}
            >
              Aleo Immersion Score (40%)
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Measures depth and breadth of engagement with the Aleo ecosystem
              specifically.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                lineHeight: "1.5",
                marginTop: SPACING.sm,
              }}
            >
              <strong>Calculation:</strong> Cumulative score based on:
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.xs,
              }}
            >
              <li>Number of Aleo repositories engaged with</li>
              <li>Diversity of repository categories</li>
              <li>Consistency of engagement over time</li>
              <li>Depth of contribution to each repository</li>
            </ul>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                fontStyle: "italic",
                marginTop: SPACING.sm,
              }}
            >
              Average Value: 4,879
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
                color: DATA_COLORS[1],
                marginBottom: SPACING.sm,
              }}
            >
              Technical Complexity & Ecosystem Impact (30%)
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Measures technical sophistication and ecosystem influence.
            </p>
            <p
              style={{
                fontSize: TYPOGRAPHY.small,
                lineHeight: "1.5",
                marginTop: SPACING.sm,
              }}
            >
              <strong>Calculation:</strong> Combined score from:
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.xs,
              }}
            >
              <li>
                Technical Complexity (20%): Code complexity metrics and
                repository category weights
              </li>
              <li>
                Ecosystem Impact (10%): Repository diversity and influence
                metrics
              </li>
            </ul>
            <p style={{ fontSize: TYPOGRAPHY.small, marginTop: SPACING.sm }}>
              <strong>Quality Score Tiers:</strong>
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                fontSize: TYPOGRAPHY.small,
                marginTop: SPACING.xs,
              }}
            >
              <li>High Quality: Score ≥ 80</li>
              <li>Medium Quality: 60 ≤ Score &lt; 80</li>
              <li>Low Quality: Score &lt; 60</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Repository Categorization */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Repository Categorization</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            We analyzed 18 repositories across the Aleo ecosystem, categorizing
            them into 7 functional groups to better understand developer
            engagement patterns and preferences.
          </p>
        </div>

        <div style={{ overflowX: "auto", marginBottom: SPACING.md }}>
          <table style={COMPONENT_STYLES.table}>
            <thead>
              <tr>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Category</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Repositories</th>
                <th style={COMPONENT_STYLES.tableHeaderCell}>Description</th>
              </tr>
            </thead>
            <tbody>
              {repositoryCategories.map((category, index) => (
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
                    }}
                  >
                    {category.category}
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    <code>{category.repositories.join(", ")}</code>
                  </td>
                  <td style={COMPONENT_STYLES.tableCell}>
                    {category.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            padding: SPACING.md,
            backgroundColor: COLORS.light,
            borderRadius: BORDER_RADIUS.md,
            fontSize: TYPOGRAPHY.small,
          }}
        >
          <h4 style={{ fontWeight: "bold", marginBottom: SPACING.sm }}>
            Repository Journey Analysis
          </h4>
          <p style={{ marginBottom: SPACING.sm }}>
            We tracked developer progression through repositories to understand
            learning paths and engagement patterns. Journey analysis captured:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: SPACING.xs }}>
              Sequence of repository interactions (chronological ordering)
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Common entry points and progression paths
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Repository switching frequency and patterns
            </li>
            <li style={{ marginBottom: SPACING.xs }}>
              Category preferences by developer tenure and quality level
            </li>
          </ul>
        </div>
      </div>

      {/* Analysis Limitations */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>Analysis Limitations</h3>

        <div style={{ marginBottom: SPACING.md }}>
          <p style={{ fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
            While our analysis provides valuable insights into the Aleo
            developer ecosystem, several limitations should be considered when
            interpreting the results:
          </p>

          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              fontSize: TYPOGRAPHY.body,
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>GitHub API Limitations:</strong> Some data is limited by
              GitHub API restrictions, particularly for historical data beyond
              90 days for certain metrics
            </li>
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>Identity Disambiguation:</strong> Developer identity is
              primarily based on GitHub login, which may not capture developers
              who use multiple accounts
            </li>
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>Off-Platform Activity:</strong> Our analysis does not
              capture developer engagement that occurs outside of GitHub (e.g.,
              Discord, forum participation, offline events)
            </li>
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>Contribution Quality:</strong> While we analyze
              contribution frequency and some quality metrics, a full code
              quality assessment was beyond the scope of this analysis
            </li>
            <li style={{ marginBottom: SPACING.sm }}>
              <strong>Private Repositories:</strong> Our analysis is limited to
              public repositories and may miss engagement in private
              repositories or internal projects
            </li>
          </ul>
        </div>
      </div>

      {/* Future Analysis Opportunities */}
      <div style={COMPONENT_STYLES.card}>
        <h3 style={COMPONENT_STYLES.cardTitle}>
          Future Analysis Opportunities
        </h3>

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
              Enhanced Developer Profiling
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Expand developer profiling to include more detailed technical
              expertise categorization, cross-chain activity analysis, and
              domain-specific expertise identification.
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
                color: COLORS.primary,
                marginBottom: SPACING.sm,
              }}
            >
              Predictive Analysis
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Develop predictive models for developer retention and contribution
              patterns, enabling more proactive intervention and personalized
              engagement strategies.
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
                color: COLORS.primary,
                marginBottom: SPACING.sm,
              }}
            >
              Multi-Platform Analysis
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Expand data collection to include additional developer engagement
              platforms (Discord, forum participation, Twitter/social media
              activity) for a more comprehensive view of the developer
              ecosystem.
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
                color: COLORS.primary,
                marginBottom: SPACING.sm,
              }}
            >
              Competitive Ecosystem Comparison
            </h4>
            <p style={{ fontSize: TYPOGRAPHY.small, lineHeight: "1.5" }}>
              Compare Aleo developer ecosystem metrics with other ZK and
              privacy-focused blockchain ecosystems to identify competitive
              advantages and improvement opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
