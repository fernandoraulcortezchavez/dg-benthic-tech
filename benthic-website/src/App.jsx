import './App.css'
import scientists from "./images/img-scientists.jpg"

function Header() {
  return (
    <header>
      <nav class="bg-dark">
        <ul class="nav-list">
          <li><a href="/">Home</a></li>
        </ul>
        <ul>
          <li><a href="/staff">Staff</a></li>
        </ul>
      </nav>
      <hgroup>
        <h1>Benthic Technologies</h1>
      </hgroup>
    </header>
  );
}

function Announcements() {
  return (
    <section id="announcements" class="announcements">
      <h2>Corporate Announcements & Safety Bulletins</h2>

      {/* ANNOUNCEMENT 1 */}
      <article class="announcement-item">
        <h3>Facility Maintenance: Scheduled Power Interruption (March 8, 2026)</h3>
        <p>Electricians will be on site conducting mandatory testing and load-balancing on the backup generator grids Monday between 02:00 and 05:00. Non-essential lab equipment should be safely powered down before leaving this evening. Main server arrays and primary containment refrigeration blocks will switch to auxiliary battery backups automatically and will not be affected. Normal operations should resume at 08:00 as usual.</p>
      </article>

      {/* ANNOUNCEMENT 2 */}
      <article class="announcement-item">
        <h3>Environmental Safety Advisory (March 5, 2026)</h3>
        <p>The Facility Operations team has completed a secondary sweep of the HVAC filtration blocks in the sub-level labs. Air quality levels remain within "acceptable tolerances" for spore density. Staff are reminded that localized metallic tastes, phantom odors, or minor involuntary muscle tremors are common side-effects of prolonged exposure to the active bio-reactors and should be logged via Form 88-A.</p>
      </article>

      {/* ANNOUNCEMENT 3 */}
      <article class="announcement-item">
        <h3>Staffing Update: Dr. McCaslan Returns (February 27, 2026)</h3>
        <p>Management is pleased to welcome Dr. Brent McCaslan back to the facility following his short personal leave of absence. Brent will be assuming a modified, non-field research role in the upper-level data analytics lab for the time being. Please note that his primary email communication channel has been restored, though his physical badge permissions remain restricted to Level-1 administrative zones until standard post-leave medical evaluations are finalized next week.</p>
      </article>

      {/* ANNOUNCEMENT 4 */}
      <article class="announcement-item">
        <h3>Staff Notice: Updated HR Open Enrollment & Benefits (February 24, 2026)</h3>
        <p>A reminder to all full-time employees that the open enrollment period for our updated dental and vision insurance plans closes this Friday at midnight. If you wish to change your contribution levels or add dependents, please complete the electronic forms via the Employee Benefits portal before the deadline. Contact HR if you require assistance with your log-in credentials.</p>
      </article>

      {/* ANNOUNCEMENT 5 */}
      <article class="announcement-item">
        <h3>Community Relations Updates (February 22, 2026)</h3>
        <p>Benthic Technologies is proud to renew our partnership with the Lewis and Clark County Sheriff’s Department. We thank Sheriff Potter and his deputies for their continued cooperation in maintaining security perimeters around the northern pit access points.</p>
      </article>

      {/* ANNOUNCEMENT 6 */}
      <article class="announcement-item">
        <h3>Health & Staffing Update: Project Mutualist Personnel (February 14, 2026)</h3>
        <p>Management is pleased to report that following yesterday's containment incident, both Dr. Ghent and Dr. McCaslan have been medically cleared by Dr. Nguyen and have made a full physical recovery. Dr. Ghent has returned to active duty and will resume leading the cellular synthesis team immediately. Dr. McCaslan has requested an immediate, indefinite personal leave of absence to rest and recuperate. Per standard corporate security policy, Dr. McCaslan's network privileges and facility access badges have been temporarily suspended for the duration of his time away from work. We wish Brent a swift return to wellness.</p>
      </article>

      {/* ANNOUNCEMENT 7 */}
      <article class="announcement-item">
        <h3>Safety Advisory: Critical PPE Protocol & Incident Review (February 13, 2026)</h3>
        <p>All field and containment personnel are urgently reminded to inspect, calibrate, and log the status of their EPA-mandated atmospheric filtration suits prior to entering the lower pit drainage tunnels. This directive follows a localized containment breach during this morning's core sampling. Two of our senior researchers, Dr. Ghent and Dr. McCaslan, experienced a sudden PPE seal failure while securing samples from the primary fungal shelf. Both doctors are currently stable under observation in the infirmary undergoing aggressive heavy-metal chelation therapy.</p>
      </article>

    </section>
  );
}

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main>
        {/* WELCOME SECTION */}
        <section id="welcome" class="bg-primary welcome">
          <div class="content-wrap">
            <h2>Deep Solutions for Human Health</h2>
            <p>Welcome to the Benthic Technologies Internal Network.</p>
            <p>At Benthic, we believe that the world’s greatest challenges require us to look deeper. Founded in 2018 in the historic mining district of Helena, Montana, our state-of-the-art facility bridges the gap between extreme environments and cellular revolution. By isolating and studying extremophilic organisms from deep-earth ecosystems, our dedicated team is unlocking the keys to advanced bioremediation, cellular longevity, and unprecedented neural-regeneration therapies.</p>
            <i>“Where nature meets the extreme, Benthic finds the cure.”</i>
          </div>
        </section>


        <div class="content-wrap main-content-container">
          {/* LEFT SECTION - GALLERY */}
          <section id="side-gallery" class="side-gallery">
            <img src={scientists} alt="Benthic Scientists" />
          </section>

          {/* RIGHT SECTION - ANNOUNCEMENTS */}
          <Announcements />
        </div>
      </main>

      {/* FOOTER */}
      <footer>
      </footer>
    </>
  );
}

export default App
