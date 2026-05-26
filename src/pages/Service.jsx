import { useEffect, useState } from "react";
import { services, servicesData } from "../data/servicePageInfo";
import { Navigate, NavLink, useParams } from "react-router-dom";
import Service from "../components/section/services/Service";

export default function ServiceSection() {
  const { serviceType } = useParams();
  const serviceData = servicesData?.[serviceType];

  // 🚫 Invalid route protection
  if (!serviceData) {
    return <Navigate to="/404" replace />;
  }

  // ✅ Safe initial state
  const [activeTab, setActiveTab] = useState(null);

  // ✅ Reset tab safely when service changes
  useEffect(() => {
    if (serviceData?.techData) {
      const tabs = Object.keys(serviceData.techData);
      setActiveTab(tabs.length > 0 ? tabs[0] : null);
    } else {
      setActiveTab(null);
    }
  }, [serviceType, serviceData]);

  return (
    <section className="py-35 bg-linear-to-br w-full from-pink-50 via-white to-purple-100">
      <div className="max-w-350 w-[90%] mx-auto">
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-16">
          <h4 className="text-sm text-primary text-base-custom mb-10">
            --- OUR SERVICES ---
          </h4>
          <h2 className="text-sub-heading-custom text-gray-900">
            Always we offer the best{" "}
            <span className="text-primary">services for success!</span>
          </h2>
        </div>

        {/* ---------- SERVICE CARDS ---------- */}
        <div
          className="
            flex gap-4 overflow-x-auto pb-4 mb-20
            snap-x snap-mandatory

            sm:grid sm:grid-cols-2
            lg:grid-cols-4
            sm:gap-6
            sm:overflow-visible
          "
        >
          {services.map((service) => (
            <NavLink
              key={service.id}
              to={service.path}
              className={({ isActive }) =>
                `
                snap-start
                shrink-0
                w-55 sm:w-auto

                rounded-xl border py-4 text-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1 cursor-pointer

                ${
                  isActive
                    ? "border-primary bg-pink-100 shadow-lg"
                    : "border-gray-200 bg-white"
                }
                `
              }
            >
              <div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-14 h-14 mx-auto mb-3 object-contain"
                />
                <h3 className="text-base-custom text-gray-900">
                  {service.title}
                </h3>
              </div>
            </NavLink>
          ))}
        </div>

        {/* ---------- DETAIL SECTION ---------- */}
        {activeTab && (
          <Service
            key={activeTab}
            serviceData={serviceData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </section>
  );
}
