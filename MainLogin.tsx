import React from "react";
import LoginPage from "./Login";

const videoSource = require('./Building.mp4')
const MainLogin = () => {
  return (
    <>
    <div style={styles.container}>
      <video src={videoSource} autoPlay loop muted style={styles.video} />
      <LoginPage />
    </div>
    </>
  );
};

const styles = {
  container: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
  video: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
};

export default MainLogin;
