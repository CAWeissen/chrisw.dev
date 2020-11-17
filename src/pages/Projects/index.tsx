// import * as React from 'react';
// import { StyledProjects } from './styles';
// import { Container } from '../../components/Container';
// import { H1 } from '../../utils/typography';
// import { Canvas, useThree } from 'react-three-fiber';
// import { Block } from '../../components/Block';
// import { Box, HTML } from '@react-three/drei';
// import { state } from '../../utils/constants';

// interface ProjectsProps {};

// function HtmlContent({ className, style, children, portal }:any) {
//   const { size } = useThree()
//   return (
//     <HTML
//       portal={portal}
//       style={{
//         position: 'absolute',
//         top: -size.height / 2,
//         left: -size.width / 2,
//         width: size.width,
//         height: size.height
//       }}>
//       <div className={className} style={style}>
//         {children}
//       </div>
//     </HTML>
//   )
// }

// function Lights() {
//   return (
//     <>
//       <ambientLight intensity={0.2} />
//       <pointLight position={[7, -5, 10]} intensity={1} angle={0.3} penumbra={1} />
//       <pointLight position={[1, -1, -5]} intensity={0.5} />
//     </>
//   )
// }

// function Projects({}: React.Props<ProjectsProps>) {
//   const [events, setEvents] = React.useState();
//   const domContent = React.useRef();
//   const scrollArea = React.useRef();

//   const onScroll = e => (state.top.current = e.target.scrollTop)
//   React.useEffect(() => void onScroll({ target: scrollArea.current }), [])

//   return (
//     <StyledProjects>
//       <Canvas
//         colorManagement
//         gl={{ alpha: false, antialias: true }}
//         camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 100 }}
//         onCreated={({ gl, events }) => {
//           gl.setClearColor('white')
//           gl.toneMappingExposure = 2.5;
//           // @ts-ignore
//           gl.toneMappingWhitePoint = 1;
//           // Export canvas events, we will put them onto the scroll area
//           setEvents(events)
//         }}>
//         <Block factor={1} offset={0}>
//           {/* <Shapes /> */}
//           <HtmlContent portal={domContent}>
//             <Container webGL>
//               <H1>I drive a tiny car</H1>
//             </Container>
//           </HtmlContent>
//         </Block>

//         <Block factor={1.5} offset={1}>
//           <Box />
//           // @ts-ignore
//           <HTML center portal={domContent}>
//             <h2>section 1</h2>
//           </HTML>
//         </Block>

//         <Block factor={1.5} offset={2}>
//           <Box />
//           // @ts-ignore
//           <HTML center portal={domContent}>
//             <h2>section 2</h2>
//           </HTML>
//         </Block>

//         <Block factor={-2} offset={4}>
//           <Box scale={[2, 2, 2]} />
//           {/* @ts-ignore */}
//           <HTML center portal={domContent}>
//             <h2>section 3</h2>
//           </HTML>
//         </Block>
//       </Canvas>
//       <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
//         <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
//         <div style={{ height: `calc(${state.pages * 100}vh - 100px)` }} />
//       </div>
//       {/* <Section>
//         <Container>
//           <H1>Projects</H1>
//         </Container>
//       </Section> */}
//     </StyledProjects>
//   );
// }

// export default Projects;
