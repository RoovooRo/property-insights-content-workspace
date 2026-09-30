# Property insights and content workspace

I worked on a private web app for property market analysis, real-estate monitoring, social analytics, and AI-assisted content drafting. This case study presents its interface and a small runnable code example.

The market dashboard lets a user investigate an area, compare property categories, and check whether the underlying records contain prices or only transaction counts. The content workspace brings account performance, recommendations, and an editable post draft into the same application.

**The captures use the app's React components and styles with fictional data.** The market demonstration contains **27,547 synthetic records across 24 invented areas, five report categories, and January 2020 to February 2026**. These are demonstration figures, not the private database's size or real market results.

![Market price chart comparing four fictional areas, with property, date, metric, and region controls](visuals/market-trends.png)

[Explore the full feature tour](docs/FEATURE_TOUR.md) · [See the coverage example](examples/coverage.mjs)

## Property market analysis

| View | What the user can investigate |
| --- | --- |
| Overview | Average and median prices, transaction counts, and average transaction values for apartments and houses in two geographic scopes |
| Data table | Property type, report category, dates, regions, subcategories, sortable numeric columns, and a toggle for count-only records |
| Trend chart | Regions or subcategories over time; average and median prices; transaction counts; total, minimum, and maximum transaction values |
| Region comparison | Ranked areas, apartments or houses, four metrics, annual aggregates, and one or several selected months |
| Monthly statistics | Seven years of monthly values, selectable years, city or outlying-area scope, four metrics, and yearly summaries |
| Coverage matrix | Which region and month combinations have price data, transaction counts only, or no records, for each report category |

The private coverage endpoint uses paginated database aggregation by area, year, month, property type, and report category. Pagination prevents a single API page limit from silently cutting off later years. The coverage display then separates priced cells from count-only and missing cells.

The chart and table have separate filters. A user can keep a table selection while exploring another comparison in a chart. Sections can be collapsed, and the app remembers their open state locally.

<details>
<summary>Overview, filters, and transaction table</summary>

![Market overview and table with fictional values](visuals/market-overview.png)

![Grouped region selection menu](visuals/market-region-filters.png)

![Date range selection menu](visuals/market-date-filters.png)

![Table restricted to one fictional area](visuals/market-filtered.png)

![Expanded transaction table including count-only records](visuals/market-table.png)

</details>

<details>
<summary>Property categories and alternative chart metrics</summary>

![Transaction counts for four selected areas](visuals/market-transactions.png)

![Apartments compared by construction period](visuals/market-age-comparison.png)

![House types compared over time](visuals/market-house-types.png)

![House materials compared over time](visuals/market-house-materials.png)

![Houses compared by construction period](visuals/market-house-age.png)

![Total transaction values for house construction periods](visuals/market-value.png)

</details>

<details>
<summary>Region rankings, seasonal statistics, and data coverage</summary>

![Ranked region prices with year and month controls](visuals/market-region-comparison.png)

![Annual regional transaction counts](visuals/market-region-transactions.png)

![Monthly price statistics across seven years](visuals/market-monthly-stats.png)

![Monthly city transaction counts and yearly totals](visuals/market-monthly-transactions.png)

![Coverage matrix across 24 fictional areas and seven years](visuals/market-coverage.png)

</details>

## Property monitoring

The listing view combines source and property-type summaries with filters for source, sale or purchase, age, property type, rooms, and price range. Users can sort listings and view saved items. Cards show price, price per square metre, area, rooms, construction year, and time listed.

![Property monitor with fictional listings and filters](visuals/property-monitor.png)

<details>
<summary>Saved listing view</summary>

![Saved fictional listings with the active filter visible](visuals/property-saved.png)

</details>

## Social analytics

The analytics page combines account metrics, performance trends, hashtag results, posting frequency, top posts, audience breakdowns, stories, posting-time analysis, and competitor tracking. Platform tabs, time filters, a custom date selector, and a previous-period comparison control sit above the dashboard.

![Social analytics with a varied fictional daily performance series](visuals/analytics-overview.png)

<details>
<summary>Recommendations, audience, stories, and post metrics</summary>

![Recommendations based on fictional account metrics](visuals/analytics-recommendations.png)

![Audience age, gender, country, and city breakdowns](visuals/analytics-audience.png)

![Story summary metrics from a fictional account](visuals/analytics-stories.png)

![Post metrics table and surrounding analytics](visuals/analytics-posts.png)

</details>

<details>
<summary>Posting-time views and competitor comparisons</summary>

![Posting-time heatmap with day and hour view controls](visuals/analytics-best-times.png)

![Engagement by day of the week](visuals/analytics-by-day.png)

![Engagement by time of day](visuals/analytics-by-hour.png)

![Fictional competitor table and follower trends](visuals/analytics-competitors.png)

![Follower and engagement metrics with separate count and percentage axes](visuals/analytics-competitor-engagement.png)

</details>

## Content drafting

The editor combines chat, reusable photos, image previews, editable captions, hashtags, and Instagram and Facebook selection. Preview formats include Instagram 4:5, Instagram 1:1, Facebook, and the original image ratio.

![Simulated chat reply updating a post draft and photo preview](visuals/chat-preview.png)

<details>
<summary>Editor states, photo library, formats, and scheduling panel</summary>

![Empty editor](visuals/editor-start.png)

![Editable caption, hashtags, and platform controls](visuals/draft-controls.png)

![Expanded reusable-photo and portrait-template libraries](visuals/editor-library.png)

![Instagram 4:5 preview](visuals/editor-portrait.png)

![Scheduling panel with its disabled date and time inputs](visuals/editor-schedule.png)

</details>

The chat reply in these captures is simulated. It demonstrates how a structured reply updates the draft, rather than a live AI call. Publishing uses a mock service in this version. The scheduling inputs and publishing button are disabled in the captured editor, and the autosave hint does not establish a working autosave implementation.

## Account settings

The app includes profile and password forms, connected-account status, and a user approval view. The tour captures the profile, account connection, and user approval interface with a fictional user. It does not test authentication, password changes, or live account connections.

<details>
<summary>Profile and connected accounts</summary>

![Settings profile with a fictional user](visuals/settings-profile.png)

![Connected-account interface with fictional responses](visuals/settings-connections.png)

![User approval table with fictional users](visuals/settings-access.png)

</details>

## Technology and scope

The private app uses Next.js, React, TypeScript, Tailwind CSS, Recharts, and Supabase. It contains a Meta Graph API client, recommendation logic, and AI chat and image workflows. Those services and the application source remain private.

For these captures, I used an isolated local copy of the interface, translated visible labels to English, shortened long control labels, adjusted price-axis bounds for legibility, and replaced account details, area names, listing-source names, and API responses with fictional English content. Dates and visible controls use English formatting. The [apartment image](visuals/mock-apartment.png) is generated mock content. Browser requests to external services were blocked during capture. The synthetic series include peaks, dips, seasonal changes, and gaps to exercise the available views; they do not represent measured performance or real property prices.

## A small runnable code example

[`examples/coverage.mjs`](examples/coverage.mjs) adapts the coverage classification idea. It distinguishes prices, transaction counts only, and missing data. A price takes precedence when records overlap.

Run the tests with Node.js:

```bash
node --test examples/coverage.test.mjs
```

The private application, credentials, connected accounts, source history, and real content are not included in this repository.
