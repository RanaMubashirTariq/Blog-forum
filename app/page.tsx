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

 
          <div className="w-[452px] h-[537px] max-[500px]:w-[200px] max-[500px]:h-[350px] absolute object-cover top-[1050px] left-[0px]           
          bg-[url(/group-250.png)] bg-cover bg-center blur-[20px] rotate-[180deg] ">
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













    </div>
  );
}
