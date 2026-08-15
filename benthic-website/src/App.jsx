import './App.css'
import img_scientists_board from './images/img-scientists.jpg'
import img_diver from "./images/image-diver-measuring.jpg"
import img_dna from "./images/image-dna.jpg"
import img_scientists_smiling from './images/image-scientists-smiling.jpg'
import img_roster from './images/image-staff-roster.jpg'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let isUserEmployee = false;

const routes = [{
  path: '/',
  element: <Layout/>,
  children: [{
    path: '/',
    element: <PublicBody/>
  }, {
    path: '/staff',
    element: <EmployeeBody/>
  }, {
    path: '/roster',
    element: <RosterBody/>
  }]
}];


const router = createBrowserRouter(routes);

function Announcements() {
  return (
    <section id="announcements" className="announcements">
      <h2>Corporate Announcements & Safety Bulletins</h2>

      {/* ANNOUNCEMENT 1 */}
      <article className="announcement-item">
        <h3>Facility Maintenance: Scheduled Power Interruption (March 8, 2026)</h3>
        <p>Electricians will be on site conducting mandatory testing and load-balancing on the backup generator grids Monday between 02:00 and 05:00. Non-essential lab equipment should be safely powered down before leaving this evening. Main server arrays and primary containment refrigeration blocks will switch to auxiliary battery backups automatically and will not be affected. Normal operations should resume at 08:00 as usual.</p>
      </article>

      {/* ANNOUNCEMENT 2 */}
      <article className="announcement-item">
        <h3>Environmental Safety Advisory (March 5, 2026)</h3>
        <p>The Facility Operations team has completed a secondary sweep of the HVAC filtration blocks in the sub-level labs. Air quality levels remain within "acceptable tolerances" for spore density. Staff are reminded that localized metallic tastes, phantom odors, or minor involuntary muscle tremors are common side-effects of prolonged exposure to the active bio-reactors and should be logged via Form 88-A.</p>
      </article>

      {/* ANNOUNCEMENT 3 */}
      <article className="announcement-item">
        <h3>Staffing Update: Dr. McCaslan Returns (February 27, 2026)</h3>
        <p>Management is pleased to welcome Dr. Brent McCaslan back to the facility following his short personal leave of absence. Brent will be assuming a modified, non-field research role in the upper-level data analytics lab for the time being. Please note that his primary email communication channel has been restored, though his physical badge permissions remain restricted to Level-1 administrative zones until standard post-leave medical evaluations are finalized next week.</p>
      </article>

      {/* ANNOUNCEMENT 4 */}
      <article className="announcement-item">
        <h3>Staff Notice: Updated HR Open Enrollment & Benefits (February 24, 2026)</h3>
        <p>A reminder to all full-time employees that the open enrollment period for our updated dental and vision insurance plans closes this Friday at midnight. If you wish to change your contribution levels or add dependents, please complete the electronic forms via the Employee Benefits portal before the deadline. Contact HR if you require assistance with your log-in credentials.</p>
      </article>

      {/* ANNOUNCEMENT 5 */}
      <article className="announcement-item">
        <h3>Community Relations Updates (February 22, 2026)</h3>
        <p>Benthic Technologies is proud to renew our partnership with the Lewis and Clark County Sheriff’s Department. We thank Sheriff Potter and his deputies for their continued cooperation in maintaining security perimeters around the northern pit access points.</p>
      </article>

      {/* ANNOUNCEMENT 6 */}
      <article className="announcement-item">
        <h3>Health & Staffing Update: Project Mutualist Personnel (February 14, 2026)</h3>
        <p>Management is pleased to report that following yesterday's containment incident, both Dr. Ghent and Dr. McCaslan have been medically cleared by Dr. Nguyen and have made a full physical recovery. Dr. Ghent has returned to active duty and will resume leading the cellular synthesis team immediately. Dr. McCaslan has requested an immediate, indefinite personal leave of absence to rest and recuperate. Per standard corporate security policy, Dr. McCaslan's network privileges and facility access badges have been temporarily suspended for the duration of his time away from work. We wish Brent a swift return to wellness.</p>
      </article>

      {/* ANNOUNCEMENT 7 */}
      <article className="announcement-item">
        <h3>Safety Advisory: Critical PPE Protocol & Incident Review (February 13, 2026)</h3>
        <p>All field and containment personnel are urgently reminded to inspect, calibrate, and log the status of their EPA-mandated atmospheric filtration suits prior to entering the lower pit drainage tunnels. This directive follows a localized containment breach during this morning's core sampling. Two of our senior researchers, Dr. Ghent and Dr. McCaslan, experienced a sudden PPE seal failure while securing samples from the primary fungal shelf. Both doctors are currently stable under observation in the infirmary undergoing aggressive heavy-metal chelation therapy.</p>
      </article>

    </section>
  );
}

function CentralBody({isEmployee}) {
  return (
    <>
      {/* PUBLIC OR EMPLOYEE BODY SECTION */}
      {!isEmployee && <PublicBody />}
      {isEmployee && <EmployeeBody/>}
    </>
  );
}

function EmployeeBody() {
  return (
    <>
      {/* GALLERY + ANNOUNCEMENTS */}
      <div className="content-wrap main-content-container bg-light">
        {/* LEFT SECTION - GALLERY */}
        <section id="side-gallery" className="side-gallery">
          <img src={img_scientists_board} alt="Benthic Scientists" />
        </section>

        {/* RIGHT SECTION - ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </>
  );
}

function PublicBody() {
  return (
    <>
      <section className="about-section">
        <div className="content-wrap">
          <h2>Our Research</h2>

          <div className="scrolly-telling-container">
            <p className="block-left">From bio-industrial catalysts that withstand impossible conditions to revolutionary cellular therapies, Benthic is proud to engineer a cleaner, healthier, and more resilient tomorrow.</p>

            <img src={img_diver} alt="A diver measuring a coral"/>

            <p className="block-right">Where extreme nature meets human ingenuity.</p>

            <img src={img_dna} alt="A DNA strand"/>

            <p className="block-left">Adapting to the Impossible.</p>

            <img src={img_scientists_smiling} alt="Benthic scientists smiling"/>

            <i>We are Benthic</i>

          </div>

        </div>
      </section>
    </>
  );
}

function RosterBody() {
  return (
  <>
  <section className="roster-section">
    <div className="content-wrap bg-light">
        <h2>Roster for this week:</h2>
        <img src={img_roster} alt="roster table"/>
    </div>
  </section>

  </>
  );
}

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App
