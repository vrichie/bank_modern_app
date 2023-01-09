import React from "react";
import { clients } from "../constants";
import styles from "../style";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[20px]`}
          >
            <img
              src={client.logo}
              className="sm:w-[192px] w-[100px] object-contain"
              alt="client"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
