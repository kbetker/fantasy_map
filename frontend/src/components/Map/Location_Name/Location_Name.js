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

    function offset(coordX, coordY){
        let maxX = (loc.name_font_size_max * loc.name_offset_x) / loc.name_font_size
        let maxY = (loc.name_font_size_max * loc.name_offset_y) / loc.name_font_size

        let minX = (loc.name_font_size_min * loc.name_offset_x) / loc.name_font_size
        let minY = (loc.name_font_size_min * loc.name_offset_y) / loc.name_font_size


        if(loc.name_font_size / mapControl.scale > loc.name_font_size_max){
            return `${maxX}px, ${maxY}px`
        } else if (loc.name_font_size / mapControl.scale < loc.name_font_size_min ){
            return `${minX}px, ${minY}px`
        } else {
            return `${coordX / mapControl.scale}px, ${coordY / mapControl.scale}px`
        }
    }

    return (

        <div
            className="locationName"
            key={`dude-${loc.id}`}
            onClick={(e) => locationNameClick(loc)}
            style={{
                left: `${vertex.coord_x}px`,
                top: `${vertex.coord_y}px`,
                opacity: `${(isVisible(loc)).opacity}`,
                fontSize: `${fontSize()}px`,
                color: `${loc.location_color}`,
                transform: `translate(${offset(loc.name_offset_x, loc.name_offset_y)})`,
                textShadow: textShadow(loc),
                pointerEvents: isVisible(loc).pointer,
                fontFamily: loc.name_font_family,
            }}

        >
            {loc.name}
        </div>


    )

}

export default Location_Name
