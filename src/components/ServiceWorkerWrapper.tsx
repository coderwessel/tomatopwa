import React, { FC, useEffect } from "react";
// import { Snackbar, Button } from '@material-ui/core';
import { useToasts } from "react-toast-notifications";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

const ServiceWorkerWrapper: FC = () => {
  const [showReload, setShowReload] = React.useState(false);

  const [
    waitingWorker,
    setWaitingWorker,
  ] = React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  const { addToast } = useToasts();

  const notifyUpdate = () => {
    addToast(
      <div role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="mr-auto">Update</strong>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
            onClick={reloadPage}
          >
            <span aria-hidden="true">Reload</span>
          </button>
        </div>
        <div className="toast-body">A new version is available!</div>
      </div>,
      {
        appearance: "success",
        autoDismiss: false,
      }
    );
  };

  useEffect(() => {
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
    if (showReload) notifyUpdate(); // serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  return null;

  // <div className="toast"
  //   open={showReload}
  //   message="A new version is available!"
  //   onClick={reloadPage}
  //   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  //   action={
  //     <button
  //       color="inherit"
  //       size="small"
  //       onClick={reloadPage}
  //     >
  //       Reload
  //     </button>
  //   }
  // />
};

export default ServiceWorkerWrapper;
