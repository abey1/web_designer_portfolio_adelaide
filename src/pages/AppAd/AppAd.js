import React, { useEffect } from "react";

const AppAd = () => {
  const cnappadtxt = {
    addaptxt: "google.com, pub-6905884377491239, DIRECT, f08c47fec0942fa0",
  };
  //this function will automatically create .txt file and downloads it.
  const downloader = () => {
    const link = document.createElement("a");
    const blob = new Blob([cnappadtxt.addaptxt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    link.download = "app-ads.txt";
    link.href = url;
    link.click();
  };
  useEffect(() => {
    downloader();
  }, []);
  return <div>google.com, pub-6905884377491239, DIRECT, f08c47fec0942fa0</div>;
};

export default AppAd;
