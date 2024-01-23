export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  // port: process.env.PORT || '3000',
  serviceName: process.env.SERVICE_NAME,
  version: process.env.VERSION,
  enabledProfiling: process.env.ENABLED_PROFILING,
  defaultLimit: +process.env.DEFAULT_LIMIT,
  deafultOffset: +process.env.DEAFULT_OFFSET,
});
