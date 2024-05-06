// import tracer from 'dd-trace';

// tracer.init({
//   port: '8136',
//   startupLogs: true,
// });

// export default tracer;

const tracer = require('dd-trace').init({
  profiling: true,
  port: '8136',
  version: '1.0.3',
});

export default tracer;
