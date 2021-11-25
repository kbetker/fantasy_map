import React from "react"

function Location_Name({ props }) {
    const loc = props.location
    const locationNameClick = props.locationNameClick
    const isVisible = props.isVisible
    const mapControl = props.mapControl
    const textShadow = props.textShadow
    const vertex = props.vertex

    function fontSize(e){
      if(loc.name_font_size / mapControl.scale > loc.name_font_size_max){
          return loc.name_font_size_max
      } else if (loc.name_font_size / mapControl.scale < loc.name_font_size_min ){
        return loc.name_font_size_min
      } else {
          return loc.name_font_size / mapControl.scale
      }
    }

    function offset(coord){
        return  coord
    }

    return (

        <div
            className="locationName"
            key={`dude-${loc.id}`}
            onClick={(e) => locationNameClick(loc)}
            style={{
                left: `${offset(vertex.coord_x)}px`,
                top: `${vertex.coord_y}px`,
                opacity: `${isVisible(loc)}`,
                fontSize: `${fontSize()}px`,
                color: `${loc.location_color}`,
                transform: `translate(${loc.name_offset_x / mapControl.scale}px, ${loc.name_offset_y / mapControl.scale}px)`,
                textShadow: textShadow(loc),
            }}

        >
            {loc.name}
        </div>


    )

}

export default Location_Name
