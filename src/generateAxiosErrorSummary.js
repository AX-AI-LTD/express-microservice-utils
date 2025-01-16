const genDebugSummary = (err) => `------
ERROR @ ${new Date().toISOString()}: 
UUID: ${err.config?.headers?.UUID}
Sent at: ${err.config?.headers?.SentAt}
Error: ${err.message}
Method/URL: ${(err.config?.method ?? "").toUpperCase()} ${err.config?.url}
RequestData: ${err.config?.data}${
  err.response
    ? `
Status: ${err.response?.status}
ResponseData: ${err.response?.data}`
    : `
No response received`
}
------`;

const genInfoSummary = (err) => `------
ERROR @ ${new Date().toISOString()}: 
Error: ${err.message}
Method/URL: ${(err.config?.method ?? "").toUpperCase()} ${err.config?.url}${
  err.response
    ? `
Status: ${err.response?.status}`
    : `
No response received`
}
------`;

const generateAxiosErrorSummary = (err) => {
  switch (process?.env?.AXAI_UTILS_LOG) {
    case "debug":
      return genDebugSummary(err);
    case "info":
      return genInfoSummary(err);
    default:
      return "";
  }
};

module.exports = generateAxiosErrorSummary;
