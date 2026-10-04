import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dashboards, { DEFAULT_IMAGE } from "../data/dashboards";

/* =====================================================
   UPSTREAM FILTERS
===================================================== */

const upstreamFilters = [
  { id: "summary", label: "Summary" },
  { id: "4-roll", label: "4-Roll" },
  { id: "3-roll", label: "3-Roll" },
  { id: "bias-cutter", label: "Bias Cutter" },
  { id: "bead-winder", label: "Bead Winder" },
  { id: "extruder-6", label: 'Extruder 6"' },
  { id: "extruder-10", label: 'Extruder 10"' },
];

/* =====================================================
   DOWNSTREAM FILTERS
===================================================== */

const downstreamFilters = [
  {
    id: "summary",
    label: "Summary",
  },
  {
    id: "curing",
    label: "Curing",
  },
  {
    id: "tbm",
    label: "TBM",
  },
];

/* =====================================================
   FORMAT PAGE TITLE
===================================================== */

function formatTitle(categoryId) {
  if (!categoryId) {
    return "Dashboards";
  }

  if (categoryId === "general") {
    return "General Management";
  }

  return categoryId
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/* =====================================================
   GET DASHBOARD LIST
===================================================== */

function getDashboardList(categoryId) {
  const categoryData = dashboards[categoryId];

  if (!categoryData) {
    return [];
  }

  return Array.isArray(categoryData) ? categoryData : [];
}

/* =====================================================
   CATEGORY PAGE
===================================================== */

function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const list = getDashboardList(categoryId);

  const isUpstream = categoryId === "upstream";
  const isDownstream = categoryId === "downstream";

  const hasFilters = isUpstream || isDownstream;

  const [selectedFilter, setSelectedFilter] = useState(
    hasFilters ? "summary" : "all"
  );

  /* ===================================================
     RESET FILTER WHEN CATEGORY CHANGES
  =================================================== */

  useEffect(() => {
    if (
      categoryId === "upstream" ||
      categoryId === "downstream"
    ) {
      setSelectedFilter("summary");
    } else {
      setSelectedFilter("all");
    }
  }, [categoryId]);

  /* ===================================================
     GET FILTER COUNT
  =================================================== */

  const getFilterCount = (filterId) => {
    if (isUpstream) {
      return list.filter(
        (item) => item.station === filterId
      ).length;
    }

    if (isDownstream) {
      return list.filter(
        (item) => item.section === filterId
      ).length;
    }

    return 0;
  };

  /* ===================================================
     FILTER DASHBOARDS
  =================================================== */

  const filteredList = (() => {
    if (isUpstream) {
      return list.filter(
        (item) => item.station === selectedFilter
      );
    }

    if (isDownstream) {
      return list.filter(
        (item) => item.section === selectedFilter
      );
    }

    return list;
  })();

  /* ===================================================
     OPEN DASHBOARD
  =================================================== */

  const openDashboard = (url) => {
    if (!url || url === "#") {
      alert("Dashboard link is not added yet.");
      return;
    }

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ===================================================
     BACK BUTTON
  =================================================== */

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="portal-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="portal-header">
        <div className="brand">

          <div className="logo-box">
            <img
              src="/production-portal/images/gri-logo.png"
              alt="GRI Logo"
              className="logo-icon"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.textContent =
                  "GRI";
              }}
            />
          </div>

          <div>
            <h2>{formatTitle(categoryId)}</h2>

            <span>
              Production Dashboards
            </span>
          </div>
        </div>

        <button
          className="header-btn"
          type="button"
          onClick={goBack}
        >
          ← Back
        </button>
      </header>

      {/* =================================================
          UPSTREAM FILTER BUTTONS
      ================================================= */}

      {isUpstream && (
        <div className="upstream-filter-buttons">
          {upstreamFilters.map((filter) => {
            const count = getFilterCount(filter.id);

            const isDisabled = count === 0;

            const isActive =
              selectedFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                disabled={isDisabled}
                className={`upstream-filter-btn ${
                  isActive ? "active" : ""
                } ${
                  isDisabled
                    ? "upstream-filter-btn-disabled"
                    : ""
                }`}
                onClick={() => {
                  if (!isDisabled) {
                    setSelectedFilter(filter.id);
                  }
                }}
              >
                <span className="upstream-filter-label">
                  {filter.label}
                </span>

                <span className="upstream-filter-count">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* =================================================
          DOWNSTREAM FILTER BUTTONS
      ================================================= */}

      {isDownstream && (
        <div className="downstream-filter-buttons">
          {downstreamFilters.map((filter) => {
            const count = getFilterCount(filter.id);

            const isDisabled = count === 0;

            const isActive =
              selectedFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                disabled={isDisabled}
                className={`downstream-filter-btn ${
                  isActive ? "active" : ""
                } ${
                  isDisabled
                    ? "downstream-filter-btn-disabled"
                    : ""
                }`}
                onClick={() => {
                  if (!isDisabled) {
                    setSelectedFilter(filter.id);
                  }
                }}
              >
                <span className="downstream-filter-label">
                  {filter.label}
                </span>

                <span className="downstream-filter-count">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* =================================================
          DASHBOARD LIST
      ================================================= */}

      <main className="dashboard-list">

        {filteredList.length === 0 ? (
          <article className="dashboard-card empty-dashboard-card">

            <div className="dashboard-content">
              <h3>No dashboards found</h3>

              <p>
                This section does not have any dashboards yet.
              </p>
            </div>

          </article>
        ) : (
          filteredList.map((item, index) => (

            <article
              className="dashboard-card"
              key={`${item.title}-${index}`}
            >

              {/* =========================================
                  DASHBOARD IMAGE
              ========================================= */}

              <div className="dashboard-preview">
                <img
                  src={item.image || DEFAULT_IMAGE}
                  alt={item.title}
                  className="dashboard-image"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      DEFAULT_IMAGE;
                  }}
                />
              </div>

              {/* =========================================
                  DASHBOARD INFORMATION
              ========================================= */}

              <div className="dashboard-content">

                {/* Title + Live */}

                <div className="dashboard-title-row">

                  <h3>
                    {item.title}
                  </h3>

                  <span className="live-pill">
                    Live
                  </span>

                </div>

                {/* Full Description */}

                <p className="dashboard-description">
                  {item.desc}
                </p>

                {/* =======================================
                    BOTTOM ROW
                ======================================= */}

                <div className="dashboard-bottom-row">

                  <button
                    className="dashboard-btn"
                    type="button"
                    onClick={() => {
                      openDashboard(item.url);
                    }}
                  >
                    Open Dashboard

                    <span className="dashboard-btn-icon">
                      ↗
                    </span>
                  </button>

                  <span className="dashboard-plant-badge">
                    ST3
                  </span>

                </div>

              </div>

            </article>
          ))
        )}

      </main>

    </div>
  );
}

export default CategoryPage;