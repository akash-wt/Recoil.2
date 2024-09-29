import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<>loading...</>}>
        <MainApp />
      </Suspense>
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValueLoadable(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>

      <button>
        My network (
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  );

  // if ((networkCount.state === "loading")) {
  //   return <div>loading..</div>;
  // } else if (networkCount.state === "hasValue") {
  //   return (
  //     <div>
  //       <button>Home</button>

  //       <button>
  //         My network (
  //         {networkCount.networks >= 100 ? "99+" : networkCount.networks})
  //       </button>
  //       <button>Jobs {networkCount.contents.jobs}</button>
  //       <button>Messaging ({networkCount.contents.messaging})</button>
  //       <button>Notifications ({networkCount.contents.notifications})</button>

  //       <button>Me ({totalNotificationCount})</button>
  //     </div>
  //   );
  // }
}

export default App;
