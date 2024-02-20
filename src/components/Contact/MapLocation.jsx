import React from "react";

const MapLocation = () => {
  return (
    <div data-aos="fade-up" className="py-8 lg:py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.77331398262044!2d106.91589906552353!3d-6.266206629228956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d326f9e7da3%3A0x5cc861650c9dfa65!2sPWM8%2BGCV%2C%20RT.001%2FRW.008%2C%20Jaticempaka%2C%20Kec.%20Pd.%20Gede%2C%20Kota%20Bks%2C%20Jawa%20Barat%2013620!5e0!3m2!1sid!2sid!4v1708436789322!5m2!1sid!2sid"
        width="100%"
        height={window.innerWidth < 768 ? "500" : "600"}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map Location"
      ></iframe>
    </div>
  );
};

export default MapLocation;
