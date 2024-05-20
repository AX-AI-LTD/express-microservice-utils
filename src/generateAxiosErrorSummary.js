const generateAxiosErrorSummary = (err) => `------
ERROR @ ${new Date().toISOString()}: 
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

module.exports = generateAxiosErrorSummary;
