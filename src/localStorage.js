const getInstalledApps = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

const saveInstalledApps = (key, apps) => {
  localStorage.setItem(key, JSON.stringify(apps));
};

export const getInstalledAppsID = () => getInstalledApps("installedApps");

export const isInstalledApp = (id) => getInstalledAppsID().includes(id);

export const addInstalledApp = (id) => {
  const installedApps = getInstalledAppsID();
  if (!isInstalledApp(id)) {
    installedApps.push(id);
    saveInstalledApps("installedApps", installedApps);
  }
};

export const removeInstalledApp = (id) => {
  const installedApps = getInstalledAppsID();
  const updated = installedApps.filter((appID) => appID !== id);
  saveInstalledApps("installedApps", updated);
};
