
export function logAction(action, details) {
    const timestamp = new Date().toISOString();
    console.log(`[LOG] ${timestamp} - Action: ${action}`, details);
}
