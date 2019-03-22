/**
 * @module order
 */

import api from "@/config/axiosInst";

/**
 * Get json
 * @returns {*}
 */

export function saveSettings(data) {
  console.log('Send data', JSON.stringify(data));
  return api.post("save", data);
}
