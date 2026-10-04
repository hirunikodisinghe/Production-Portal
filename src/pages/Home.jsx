import Header from "../components/Header";
import RoleCard from "../components/RoleCard";
import FooterStatus from "../components/FooterStatus";

function Home() {
  return (
    <div className="portal-page">
      <Header />

      <main className="portal-main">
        <div className="center-visual">
          <div className="circle-glow"></div>
          <img
            src="/production-portal/images/tire.png"
            alt="GRI Tire"
            className="tire-image"
          />
        </div>

        <RoleCard
          className="card-general"
          title="General Manager"
          path="general"
          description="Executive dashboards and company-wide production insights"
        />
        <RoleCard
          className="card-upstream"
          title="Upstream"
          path="upstream"
          description="Raw material to building process dashboards"
        />
        <RoleCard
          className="card-quality"
          title="Quality"
          path="quality"
          description="Quality control, inspection and analytics dashboards"
        />
        <RoleCard
          className="card-downstream"
          title="Downstream"
          path="downstream"
          description="Curing to shipment performance dashboards"
        />
        <RoleCard
          className="card-planning"
          title="Planning"
          path="planning"
          description="Production planning, scheduling and forecasting dashboards"
        />
      </main>

      <FooterStatus />
    </div>
  );
}

export default Home;
