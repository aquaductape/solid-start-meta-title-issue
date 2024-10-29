import { Title } from "@solidjs/meta";
import { createSignal, Match, Show, Switch } from "solid-js";

// This is client-side issue

// In order to see other Title forever persisting, you must change conditions at least 3 times aka click the button 3 times
// Originally I thought if there are more than two Titles inside JSX component and at least one of those Titles is conditionally rendered, the ancestor Title of that JSX component takes precidence.

const SectionAContent = () => {
  const [showSection, setShowSection] = createSignal("");
  return (
    <div
      style={{
        padding: "16px",
        background: "rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <button onClick={() => setShowSection(showSection() === "X" ? "Y" : "X")}>
        Switch to section {showSection() === "X" ? "Y" : "X"}
      </button>
      <Switch>
        <Match when={showSection() === "X"}>
          <SectionX />
        </Match>
        <Match when={showSection() === "Y"}>
          <SectionY />
        </Match>
      </Switch>
    </div>
  );
};

const AllSections = () => {
  const [showSection, setShowSection] = createSignal("A");
  const [showAll, setShowAll] = createSignal(true);
  return (
    <div>
      <Title>All Sections</Title>
      {/* <Show when={showSection() === "B"}>
        <Title>????</Title>
      </Show> */}
      {/* <Title>All ???</Title> */}
      <button onClick={() => setShowAll(!showAll())}>
        {showAll() ? "Remove" : "Show"} all
      </button>
      <br />

      <div
        style={{
          padding: "16px",
          background: "rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Show when={showAll()}>
          <button
            onClick={() => setShowSection(showSection() === "A" ? "B" : "A")}
          >
            Switch to section {showSection() === "A" ? "B" : "A"}
          </button>
          <Switch>
            <Match when={showSection() === "A"}>
              <SectionA />
            </Match>
            <Match when={showSection() === "B"}>
              <SectionB />
            </Match>
          </Switch>
        </Show>
      </div>
    </div>
  );
};

const SectionA = () => {
  return (
    <>
      <Title>SectionA</Title>
      {/* <Title>SectionA??</Title> */}
      <div
        style={{
          padding: "16px",
          background: "rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <p>SectionA</p>
        </div>
        <SectionAContent />
      </div>
    </>
  );
};

const SectionB = () => {
  return (
    <div
      style={{
        padding: "16px",
        background: "rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <p>SectionB</p>
      <Title>SectionB</Title>
    </div>
  );
};

const SectionX = () => {
  return (
    <div
      style={{
        padding: "16px",
        background: "rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <p>SectionX</p>
      <Title>SectionX</Title>
    </div>
  );
};

const SectionY = () => {
  return (
    <div
      style={{
        padding: "16px",
        background: "rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <p>SectionY</p>
      <Title>SectionY</Title>
    </div>
  );
};

export default AllSections;
