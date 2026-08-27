import React from "react";

const panels = [
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Infrastructure",
  },
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    title: "Construction",
  },
  {
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    title: "Engineering",
  },
];

const ThreePanelShowcase = () => {
  return (
    <section className="three-panel-section">
      <div className="three-panel-container">
        {panels.map((panel, index) => (
          <div key={index} className={`three-panel-item three-panel-${index}`}>
            <div className="three-panel-image">
              <img src={panel.img} alt={panel.title} />
            </div>
            <div className="three-panel-overlay" />
            <h3 className="three-panel-title">{panel.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreePanelShowcase;
