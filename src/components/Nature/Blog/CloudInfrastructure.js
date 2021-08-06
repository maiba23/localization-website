import React from "react";
import RoundedDialog from "../shared/windows/RoundedDialog";
const CloudInfrastructure = () => {
  return (
    <div className="cloud-infrastructure">
      <div className="cloud-infrastructure-dialog">
        <RoundedDialog
          title="Cloud Infrastructure"
          content="Making sure that all the servers and functionalities are working well and fast."
        />
      </div>
      <div className="cloud-infrastructure-image" />
    </div>
  );
};

export default CloudInfrastructure;
