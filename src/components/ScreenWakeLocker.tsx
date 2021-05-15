import { FC, useEffect } from "react";
import { useWakeLock } from "react-screen-wake-lock";
import { useToasts } from "react-toast-notifications";

const ScreenWakelocker: FC = () => {
  const { addToast } = useToasts();
  const alertToast = (message: string, released: boolean | undefined) => {
    addToast(
      <div>
        <p>
          {message}
          <br />
          Screen Wake Lock API supported: <b>{`${isSupported}`}</b>
          <br />
          Released: <b>{`${released}`}</b>
        </p>
        <button
          type="button"
          onClick={() =>
            released === false
              ? release()
              : request().then((res) => alertToast("ScreenLock active", false))
          }
        >
          {released === false ? "Release" : "Request"}
        </button>
      </div>,
      {
        appearance: released === false ? "success" : "error",
        autoDismiss: released === false ? true : false,
      }
    );
  };

  const { isSupported, released, request, release } = useWakeLock({
    // onRequest: () => alertToast("Screen Wake Lock: requested!", released),
    onError: () => alertToast("An error happened 💥", released),
    onRelease: () => alertToast("Screen Wake Lock: released!", released),
  });
  // Function that attempts to request a screen wake lock.
  useEffect(() => {
    request().then((res) => alertToast("ScreenLock active", false));
  }, []);

  return null;

  //   (
  //     <div>
  //       <p>
  //         Screen Wake Lock API supported: <b>{`${isSupported}`}</b>
  //         <br />
  //         Released: <b>{`${released}`}</b>
  //       </p>
  //       <button
  //         type="button"
  //         onClick={() => (released === false ? release() : request())}
  //       >
  //         {released === false ? "Release" : "Request"}
  //       </button>
  //     </div>
  //   );
};

export default ScreenWakelocker;
