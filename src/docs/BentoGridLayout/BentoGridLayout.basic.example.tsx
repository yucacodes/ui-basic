import { BentoGrid, BentoGridItem } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <div style={{padding: "1rem", display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}> {/*__EXCLUDE__*/}
<div>
  <BentoGrid style={{padding: "1rem", width: "20rem"}}>
      <BentoGridItem colSpan={6} style={{background: "gray",padding: "1rem",}}>
        1
      </BentoGridItem>

      <BentoGridItem colSpan={6} style={{background: "gray",padding: "1rem",}}>
        2
      </BentoGridItem>

      <BentoGridItem colSpan={4} rowSpan={2} style={{background: "gray",padding: "1rem",}}>
        3
      </BentoGridItem>
      <BentoGridItem colSpan={4} style={{ background: "gray", padding: "1rem",}}>
        4
      </BentoGridItem>
      <BentoGridItem colSpan={4} style={{ background: "gray", padding: "1rem",}}>
        6
      </BentoGridItem>
      <BentoGridItem colSpan={3} style={{ background: "gray", padding: "1rem", }}>
        7
      </BentoGridItem>
      <BentoGridItem colSpan={3} style={{ background: "gray", padding: "1rem",}}>
        8
      </BentoGridItem>
      <BentoGridItem colSpan={2} style={{ background: "gray", padding: "1rem",}}>
        9
      </BentoGridItem>
     
  </BentoGrid>
</div>
  </div> // __EXCLUDE__
) // __EXCLUDE__
