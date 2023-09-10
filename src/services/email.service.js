import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const robotService = {
  query,
  save,
  remove,
  getById,
  createEmail,
};

const email = {
  id: "e101",
  subject: "Miss you!",
  body: "Would love to catch up sometimes",
  isRead: false,
  isStarred: false,
  sentAt: 1551133930594,
  removedAt: null, //for later use from: 'momo@momo.com',
  to: "user@appsus.com",
};

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};

const STORAGE_KEY = "email";

_createDefultEmail();

async function query(filterBy) {
  const robots = await storageService.query(STORAGE_KEY);
  if (filterBy) {
    var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy;
    maxBatteryStatus = maxBatteryStatus || Infinity;
    minBatteryStatus = minBatteryStatus || 0;
    robots = robots.filter(
      (robot) =>
        robot.type.toLowerCase().includes(type.toLowerCase()) &&
        robot.model.toLowerCase().includes(model.toLowerCase()) &&
        robot.batteryStatus < maxBatteryStatus &&
        robot.batteryStatus > minBatteryStatus
    );
  }
  return robots;
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(robotToSave) {
  if (robotToSave.id) {
    return storageService.put(STORAGE_KEY, robotToSave);
  } else {
    robotToSave.isOn = false;
    return storageService.post(STORAGE_KEY, robotToSave);
  }
}

function createEmail(
  id = "",
  subject = "",
  body = "",
  isRead = "",
  isStarred = "",
  sentAt = "",
  removedAt = "",
  to = ""
) {
  return {
    id,
    subject,
    body,
    isRead,
    isStarred,
    sentAt,
    removedAt,
    to,
  };
}

function _createDefultEmail() {
  let emails = utilService.loadFromStorage(STORAGE_KEY);
  if (!emails || !emails.length) {
    utilService.saveToStorage(STORAGE_KEY, email);
  }
}
