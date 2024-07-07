"use client"

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import PluginsList from "@/components/sections/PluginsList";
import { usePlugins } from "@/hooks/usePlugins";

export default function Plugins() {
  const pluginData = usePlugins();

  return (
    <>
    <Banner />
    <Navbar />
    <PluginsList pluginData={pluginData}/>
    </>
  );
}
