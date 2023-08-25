import React, { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import Particlesconfig from "../utils/particlesConfig";
import Intro from "./Intro";
import MainForm from "./MainForm";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        style={{ position: "absolute" }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particlesconfig}
      />
      <div className="bg-primary-meganta min-h-screen min-w-full">
        <Intro />
        <MainForm />
      </div>
    </>
  );
};

export default Home;
