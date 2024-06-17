import AboutMosaic from "@/components/AboutMosaic";
import Intro from "@/components/Intro";
import WeAre from "@/components/WeAre";
import WeGuarantee from "@/components/WeGuarantee";


export default function Home() {
  return (
    <main className='main'>
      <Intro/>
      <WeAre/>
      <AboutMosaic/>
      <WeGuarantee/>
    </main>
  );
}
