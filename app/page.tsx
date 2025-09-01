import ContainerSubsection from "./Sections/ContainerSubsection/ContainerSubsection";
import ContainerWrapperSubsection from "./Sections/ContainerWrapperSubsection/ContainerWrapperSubsection";
import DivSubsection from "./Sections/DivSubsection/DivSubsection";
import DivWrapperSubsection from "./Sections/DivWrapperSubsection/DivWrapperSubsection";
import EbookSection from "./Sections/EbookSection/EbookSection";
import FrameSubsection from "./Sections/FrameSubsection/FrameSubsection";
import FrameWrapperSubsection from "./Sections/FrameWrapperSubsection/FrameWrapperSubsection";
import HeaderSubsection from "./Sections/HeaderSubsection/HeaderSubsection";
import SectionComponentNodeSubsection from "./Sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";
import SubContainerSubsection from "./Sections/SubContainerSubsection/SubContainerSubsection";
import SubContainerWrapperSubsection from "./Sections/SubContainerWrapperSubsection/SubContainerWrapperSubsection";
import WhitePaperSection from "./Sections/WhitePaperSection/WhitePaperSection";



export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#000000] relative">

            <HeaderSubsection/>

             <div id='home'>
                   <SectionComponentNodeSubsection/>
             </div>

              <div id="news">
                   <SubContainerWrapperSubsection/>
              </div>
                    
              <section id="features">
                   <FrameWrapperSubsection/>
              </section>
                     
                     <div id="reports">
                     <SubContainerSubsection/>
                     </div>
                   

                  <div id="research">
                  <FrameSubsection/>
                  </div>

               <div id="podcasts">
                  <ContainerSubsection/>
               </div>

               <div id="resources"> 
                  <DivWrapperSubsection/>
                  <div id="ebooks">
                  <WhitePaperSection/>
                  </div>
                  <div id='whitepaper'>
                  <EbookSection/>
                  </div>
                  
                  
               </div>

               <div id="testimonials">
                  <DivSubsection/>
               </div>

               <div id="contact">
                  <ContainerWrapperSubsection/>
               </div>

           {/* <div className="w-[452px] h-[537px] max-[500px]:w-[200px] max-[500px]:h-[350px] max-[500px]:top-[1200px] object-cover absolute top-[1050px] left-[0px] 
     bg-[url(/group-2.png)] 
     bg-cover bg-center 
     bg-blend-multilply
      blur-[20px] max-[500px]:blur-[3px]
     ">
 </div> */}
          <div className="w-[452px] h-[537px] max-[500px]:w-[200px] max-[500px]:h-[350px] absolute object-cover top-[1050px] left-[0px]           
          bg-[url(/group-250.png)] 
     bg-cover bg-center 
     blur-[20px]
     rotate-[180deg]
      ">
        </div>




          

          {/* part-2 */}
          <div className="w-[452px] h-[537px] max-[800px]:w-[200px] max-[800px]:h-[350px] object-cover absolute top-[7194px] max-[1500px]:top-[6600px] max-[1100px]:top-[8600px] max-[1000px]:top-[7600px] max-[830px]:top-[8000px]   max-[767px]:top-[9800px] max-[500px]:top-[10300px] max-[400px]:top-[10400px] max-[370px]:top-[11200px]    left-0    
          bg-[url(/group-250.png)] 
     bg-cover bg-center 
     blur-[30px]
     rotate-[180deg]
      ">
        </div>
          {/* part-3 */}
          <div className="w-[452px] h-[537px] max-[800px]:w-[200px] max-[800px]:h-[350px]  object-cover absolute top-[6194px] max-[1500px]:top-[5700px] max-[1100px]:top-[7300px] max-[1000px]:top-[6300px] max-[830px]:top-[6800px]  max-[767px]:top-[8500px] max-[370px]:top-[9900px] max-[500px]:top-[9000px]  right-[0]    
          bg-[url(/group-250.png)] 
     bg-cover bg-center 
     blur-[10px]
      ">
          </div>





          {/* Images */}
            
          <div className="bg-[radial-gradient(circle_at_center,_#2a0a3d_0%,_#0a0a0a_100%)] w-[147px] h-[527px] rotate-[90deg] blur-[50px] absolute top-[922px] right-[200px] ">


</div>


<div>
<div className="w-[252px] h-[537px] max-[560px]:w-[152px] max-[560px]:h-[337px] bg-[radial-gradient(circle_at_center,_#2a0a3d_0%,_#0a0a0a_100%)] absolute top-[2045px] -left-[162px] max-[1500px]:-left-[190px] max-[1000px]:-left-[80px] max-[560px]:-left-[15px]  blur-[145px] max-[1500px]:top-[2000px] max-[1000px]:top-[1800px]  max-[560px]:top-[2100px] max-[460px]:top-[2300px] max-[365px]:top-[2450px] z-10">

</div>


<img 
    src="/group-253.png" 
    className=" inset-0 w-[800px] h-[632px] object-contain mix-blend-light  absolute top-[2045px] max-[1700px]:top-[2100px] max-[1500px]:top-[2000px] max-[1500px]:w-[700px] max-[1500px]:h-[432px] max-[1300px]:top-[2200px]  -left-[162px] max-[1500px]:-left-[190px] max-[1000px]:top-[1800px] max-[560px]:top-[2100px] max-[460px]:top-[2300px] max-[365px]:top-[2450px]  max-[1000px]:w-[400px] max-[1000px]:h-[332px] max-[1000px]:-left-[80px] max-[560px]:w-[300px] max-[560px]:h-[332px] max-[460px]:w-[200px] max-[460px]:h-[232px] max-[560px]:-left-[15px]" 
    alt="" 
  />

</div>


{/* Image two */}




<div className="rotate-[180deg] w-[252px] h-[537px] max-[560px]:w-[152px] max-[560px]:h-[337px] bg-[radial-gradient(circle_at_center,_#2a0a3d_0%,_#0a0a0a_100%)] absolute top-[3866px] left-[1670px] max-[1700px]:left-[1470px] max-[1500px]:left-[1130px] max-[1300px]:left-[1130px] max-[1100px]:left-[830px] max-[900px]:left-[640px] max-[560px]:left-[480px] max-[530px]:top-[4500px] max-[530px]:left-[440px] max-[460px]:left-[300px] max-[365px]:top-[4700px]      blur-[145px] z-10">

</div>


<img 
    src="/group-254.png" 
    className="rotate-[180deg] inset-0 overflow-hidden w-[500px] h-[727px] object-contain mix-blend-light  absolute top-[3846px] left-[1420px] max-[1700px]:left-[1180px] max-[1700px]:h-[500px] max-[1500px]:left-[1030px] max-[1300px]:left-[860px] max-[1100px]:left-[610px] max-[1000px]:left-[590px] max-[860px]:left-[530px] max-[830px]:left-[500px] max-[800px]:left-[445px] max-[560px]:left-[280px]  max-[545px]:left-[250px] max-[545px]:top-[4500px] max-[460px]:left-[250px]  max-[430px]:left-[240px] max-[420px]:left-[225px] max-[400px]:left-[200px] max-[380px]:left-[190px] max-[365px]:left-[170px] max-[350px]:left-[160px] max-[340px]:left-[140px] max-[365px]:top-[4700px]    max-[1500px]:h-[432px] max-[1000px]:w-[400px] max-[1000px]:h-[332px]  max-[560px]:w-[300px] max-[560px]:h-[332px] max-[460px]:w-[200px] max-[460px]:h-[232px] " 
    alt="" 
  />




 {/* imge three  */}

 <div className="rotate-[180deg] w-[252px] h-[537px] max-[560px]:w-[152px] max-[560px]:h-[337px] bg-[radial-gradient(circle_at_center,_#2a0a3d_0%,_#0a0a0a_100%)] absolute top-[8146px] max-[1500px]:top-[7500px] max-[1100px]:top-[9600px] max-[1000px]:top-[8400px] max-[830px]:top-[9000px]  max-[560px]:top-[10800px]    left-[1670px] max-[1700px]:left-[1470px] max-[1500px]:left-[1130px] max-[1300px]:left-[1130px] max-[1100px]:left-[830px] max-[1000px]:left-[640px] max-[560px]:left-[480px]  max-[545px]:left-[460px] max-[460px]:left-[300px] max-[365px]:top-[11600px] max-[330px]:top-[12200px]     blur-[145px] z-10">

</div>


<img 
    src="/group-254.png" 
    className="rotate-[180deg] inset-0 overflow-hidden w-[500px] h-[727px] object-contain mix-blend-light  absolute top-[8146px] max-[1500px]:top-[7500px] max-[1100px]:top-[9600px] max-[1000px]:top-[8400px] max-[830px]:top-[9000px] max-[560px]:top-[10800px]   left-[1420px] max-[1700px]:left-[1180px] max-[1700px]:h-[500px] max-[1500px]:left-[1030px] max-[1300px]:left-[860px] max-[1100px]:left-[610px] max-[1000px]:left-[540px] max-[860px]:left-[530px] max-[830px]:left-[500px] max-[800px]:left-[445px] max-[560px]:left-[280px]  max-[545px]:left-[260px]  max-[460px]:left-[250px]  max-[430px]:left-[240px] max-[420px]:left-[225px] max-[400px]:left-[200px] max-[380px]:left-[190px] max-[365px]:left-[170px] max-[350px]:left-[160px] max-[340px]:left-[140px] max-[365px]:top-[11600px]  max-[330px]:top-[12200px]    max-[1500px]:h-[432px] max-[1000px]:w-[400px] max-[1000px]:h-[332px]  max-[560px]:w-[300px] max-[560px]:h-[332px] max-[460px]:w-[200px] max-[460px]:h-[232px] " 
    alt="" 
  />




    </div>
  );
}
