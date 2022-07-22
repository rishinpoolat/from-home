import "./services.css";

const Services = () => {
  return (
    <div className="home-services df jc-sb">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default Services;

export const ServiceCard = () => {
  return (
    <div>
      <h3>service one</h3>
    </div>
  );
};
