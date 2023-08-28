import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {} from "../config/motion";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./nike.png"
              alt="logo"
              className="ms-5 w-12.5 h-16 object-contain"
            />
            <motion.div className="home-content " {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  Just <br className="xl:block hidden " /> Do it.
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-gray-650 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool. <strong>Unleash your imagination</strong>{" "}
                  and define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
