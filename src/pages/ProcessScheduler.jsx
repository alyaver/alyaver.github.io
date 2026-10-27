import { Link } from 'react-router-dom';

export default function ProcessScheduler() {
  return (
    <section>
      <Link to="/projects">Back to projects</Link>
      <h1>Process Scheduler</h1>
      <p>Description</p>
      <h2>Technologies used</h2>
      <p>C, POSIX Threads (Pthreads)</p>
      <section className="project-card" aria-labelledby="process-scheduler-live-heading">
        <h2 id="process-scheduler-live-heading">Live application</h2>
        <p>Coming soon.</p>
      </section>
    </section>
  );
}
