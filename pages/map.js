import { Layout } from '../components'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const Map = () => {
   const [selected, setSelected] = React.useState('')
   const [viewport, setViewport] = React.useState({
      width: '90vw',
      height: '600px',
      latitude: 23.5120086,
      longitude: 80.3289551,
      zoom: 4,
   })

   const places = [
      {
         company: 'DailyKIT Inc.',
         longitude: 77.6350161,
         latitude: 12.927781,
         designation: 'Full Stack Developer',
      },
      {
         company: 'smartData Enterprises Inc.',
         longitude: 78.0744923,
         latitude: 30.3362092,
         designation: 'Full Stack Intern + Associate',
      },
      {
         company: 'Apptunix',
         longitude: 76.7071121,
         latitude: 30.7128942,
         designation: 'Web Dev Intern',
      },
   ]

   return (
      <Layout>
         <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
            mapStyle="mapbox://styles/codinggraden/ckcf90duj0ckb1hp4jgqyflsb"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            className="mx-auto w-full h-full"
         >
            {places.map((place) => (
               <React.Fragment key={place.company}>
                  <Marker
                     latitude={place.latitude}
                     longitude={place.longitude}
                     offsetLeft={-14}
                     offsetTop={-28}
                  >
                     <svg
                        onClick={() => setSelected(place.company)}
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        stroke="#6B46C1"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                     </svg>
                  </Marker>
                  {selected === place.company && (
                     <Popup
                        longitude={place.longitude}
                        latitude={place.latitude}
                        closeButton={true}
                        closeOnClick={false}
                        dynamicPosition={true}
                        anchor="top"
                        onClose={() => setSelected('')}
                     >
                        <div className="p-2 lg:p-4 text-center rounded">
                           <h3 className="font-medium mb-2 text-gray-600">{place.company}</h3>
                           <h3 className="font-bold text-purple-600">{place.designation}</h3>
                        </div>
                     </Popup>
                  )}
               </React.Fragment>
            ))}
         </ReactMapGL>
      </Layout>
   )
}

export async function getStaticProps() {
   return { props: {} }
}

export default Map
