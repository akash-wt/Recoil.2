import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { networkAtom, jobAtom, notifficationAtom, messegeAtom,allCount } from "./atoms";
import { memo } from "react";


function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const notificationkCount = useRecoilValue(notifficationAtom);
  const meassegeCount = useRecoilValue(messegeAtom);
  const allCounts=useRecoilValue(allCount)

  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount >= 100 ? "99+" : jobCount})</button>
      <button>
        Notifications ({notificationkCount >= 100 ? "99+" : notificationkCount})
      </button>

      <button>
        {" "}
        Messeging ({meassegeCount >= 100 ? "99+" : meassegeCount})
      </button>
      <button>Me ({allCounts})</button>
      <br />

      <UpdateJobs />
    </>
  );
}

const UpdateJobs = memo(() => {
  const setJobState = useSetRecoilState(jobAtom);

  console.log("re-render");

  return (
    <button
      onClick={() => {
        setJobState((c) => (c += 1));
      }}
    >
      {" "}
      Update Job
    </button>
  );
});
export default App;
