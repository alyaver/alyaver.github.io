import { Link } from 'react-router-dom';

export default function ProcessScheduler() {
  return (
    <section>
      <Link to="/projects">Back to projects</Link>
      <h1>Process Scheduler</h1>
      <ul>
        <li>Developed a multithreaded job scheduler in C using POSIX threads and a shared job queue.</li>
        <li>Implemented configurable worker threads and first-fit and next-fit memory allocation algorithms.</li>
        <li>Managed a fixed memory pool with memory deallocation and coalescing to reduce fragmentation.</li>
      </ul>
      <h2>Technologies used</h2>
      <p>C, POSIX Threads</p>
      <section className="project-card" aria-labelledby="process-scheduler-live-heading">
        <h2 id="process-scheduler-live-heading">Live application</h2>
        <p>Coming soon.</p>
      </section>
    </section>
  );
}
