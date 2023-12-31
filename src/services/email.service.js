import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const emailService = {
  query,
  save,
  remove,
  getById,
  createEmail,
};

const email = [
  {
    id: "e101",
    subject: "Miss you!",
    body: "Would love to catch up sometimes",
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594,
    removedAt: null, //for later use from: 'momo@momo.com',
    to: "user@appsus.com",
  },
  {
    id: "e102",
    subject: "Test!",
    body: "Would love to catch up sometimes",
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594,
    removedAt: null, //for later use from: 'momo@momo.com',
    to: "user@appsus.com",
  },
];

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};

const STORAGE_KEY = "email";

_createDefultEmail();

async function query() {
  const emails = await storageService.query(STORAGE_KEY);
  // if (filterBy) {
  //   var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy;
  //   maxBatteryStatus = maxBatteryStatus || Infinity;
  //   minBatteryStatus = minBatteryStatus || 0;
  //   emails = emails.filter(
  //     (email) =>
  //       email.type.toLowerCase().includes(type.toLowerCase()) &&
  //       email.model.toLowerCase().includes(model.toLowerCase()) &&
  //       email.batteryStatus < maxBatteryStatus &&
  //       email.batteryStatus > minBatteryStatus
  //   );
  // }
  return emails;
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(emailToSave) {
  if (emailToSave.id) {
    return storageService.put(STORAGE_KEY, emailToSave);
  } else {
    //emailToSave.isOn = false;
    return storageService.post(STORAGE_KEY, emailToSave);
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
