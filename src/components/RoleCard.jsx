import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashboards from "../data/dashboards";

function RoleCard({ title, path, className, description }) {
  const navigate = useNavigate();

  const getDashboardCount = () => {
    const category = dashboards[path];

    return Array.isArray(category) ? category.length : 0;
  };

  const dashboardCount = getDashboardCount();
  const isDisabled = dashboardCount === 0;

  const handleClick = () => {
    if (isDisabled) return;

    navigate(`/category/${path}`);
  };

  return (
    <div
      className={`floating-card ${className} ${
        isDisabled ? "floating-card-disabled" : ""
      }`}
      onClick={handleClick}
      aria-disabled={isDisabled}
    >
      <div className="card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="role-dashboard-count">
          <span className="dashboard-count-number">
            {dashboardCount}
          </span>

          <span className="dashboard-count-label">
            {dashboardCount === 1 ? "Dashboard" : "Dashboards"}
          </span>
        </div>
      </div>

      <button
        className="arrow-btn"
        type="button"
        disabled={isDisabled}
        onClick={(event) => {
          event.stopPropagation();
          handleClick();
        }}
        aria-label={
          isDisabled
            ? `${title} has no dashboards`
            : `Open ${title}`
        }
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

export default RoleCard;