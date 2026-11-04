export const projects = [
  {
    title: 'DockVision',
    description: 'A web-based automated testing platform that allows users to create, execute, and monitor test workflows in isolated environments using Docker and Windows virtual machines.',
    to: '/projects/dockvision',
    technologies: ['JavaScript', 'React', 'Vite', 'Node.js', 'Docker', 'Python'],
  },
  {
    title: 'Flight Tracker',
    description: 'A Python-based flight tracking application that retrieves real-time aircraft data, filters and sorts nearby flights by distance, and uses reverse geocoding to identify their geographic locations.',
    to: '/projects/planefinder',
    technologies: ['Python', 'Tkinter', 'REST APIs', 'Geoapify API', 'adsb.fi API'],
  },
  {
    title: 'Process Scheduler',
    description: 'A multithreaded job scheduler built in C using POSIX threads that manages jobs through a shared queue, supports configurable worker threads, and implements first-fit and next-fit memory allocation algorithms.',
    to: '/projects/process-scheduler',
    technologies: ['C', 'POSIX Threads (Pthreads)'],
  },
];
