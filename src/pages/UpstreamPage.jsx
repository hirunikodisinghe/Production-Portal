import {
  ArrowRight,
  BarChart3,
  Factory,
  Layers,
  Scissors,
  CircleDot,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashboards from "../data/dashboards";

const upstreamSections = [
  {
    title: "Bead-Winding",
    path: "bead-winding",
    description: "Bead-winding process, output tracking and performance dashboards",
    badge: "01",
    icon: Factory,
  },
  {
    title: "3-Roll-Calendering",
    path: "3-roll-calendering",
    description: "3-roll calendering process, sheet preparation and material flow dashboards",
    badge: "02",
    icon: Activity,
  },
  {
    title: "Exrudering-SideWall",
    path: "exrudering-sidewall",
    description: "Exrudering and sidewall processing dashboards",
    badge: "03",
    icon: Layers,
  },
  {
    title: "Exrudering-Tread",
    path: "exrudering-tread",
    description: "Exrudering and tread processing dashboards",
    badge: "04",
    icon: BarChart3,
  },
  {
    title: "Slitting",
    path: "slitting",
    description: "Slitting process and material flow dashboards",
    badge: "05",
    icon: Scissors,
  },
  {
    title: "Bias-Cutter",
    path: "bias-cutter",
    description: "Bias cutter and upstream process dashboards",
    badge: "06",
    icon: CircleDot,
  },
];

function UpstreamPage() {
  const navigate = useNavigate();

  const getDashboardCount = (sectionId) => {
    const sectionDashboards = dashboards?.upstream?.[sectionId];

    if (!Array.isArray(sectionDashboards)) {
      return 0;
    }

    return sectionDashboards.length;
  };

  const openSection = (sectionId) => {
    const dashboardCount = getDashboardCount(sectionId);

    if (dashboardCount === 0) {
      return;
    }

    navigate(`/category/upstream/${sectionId}`);
  };

  return (
    <div className="portal-page upstream-page">
      <header className="portal-header upstream-header">
        <div className="brand">
          <div className="logo-box">GRI</div>

          <div>
            <h2>ST3 - Production Insights</h2>
            <span>Upstream Production Dashboard Portal</span>
          </div>
        </div>

        <button
          className="header-btn"
          type="button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
      </header>

      <main className="upstream-main-pro">
        <section className="upstream-title-block">
          <div className="title-line"></div>

          <div>
            <span className="section-kicker">Production Portal</span>
            <h1>Upstream Sections</h1>
            <p>Select a section to view related production dashboards.</p>
          </div>

          <div className="title-line"></div>
        </section>

        <section className="upstream-kpi-grid">
          {upstreamSections.map((section) => {
            const Icon = section.icon;
            const dashboardCount = getDashboardCount(section.path);
            const isDisabled = dashboardCount === 0;

            return (
              <article
                key={section.path}
                className={`upstream-kpi-card ${
                  isDisabled ? "upstream-kpi-card-disabled" : ""
                }`}
                aria-disabled={isDisabled}
                title={
                  isDisabled
                    ? `${section.title} has no dashboards yet`
                    : `Open ${section.title} dashboards`
                }
                onClick={() => openSection(section.path)}
              >
                <span className="upstream-number">{section.badge}</span>

                <div className="upstream-icon-wrap">
                  <Icon size={38} strokeWidth={1.8} />
                </div>

                <div className="upstream-info">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>

                  <button
                    className="dashboard-count-btn"
                    type="button"
                    disabled={isDisabled}
                    onClick={(event) => {
                      event.stopPropagation();
                      openSection(section.path);
                    }}
                  >
                    <BarChart3 size={15} />
                    <strong>{dashboardCount}</strong>
                    <span>
                      {dashboardCount === 1 ? "Dashboard" : "Dashboards"}
                    </span>
                  </button>
                </div>

                <button
                  className="upstream-open-btn"
                  type="button"
                  disabled={isDisabled}
                  aria-label={
                    isDisabled
                      ? `${section.title} disabled because no dashboards are available`
                      : `Open ${section.title}`
                  }
                  onClick={(event) => {
                    event.stopPropagation();
                    openSection(section.path);
                  }}
                >
                  <ArrowRight size={22} />
                </button>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default UpstreamPage;
