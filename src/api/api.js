/**
 * @module order
 */

import api from "@/config/axiosInst";

/**
 * Get json
 * @returns {*}
 */

export function saveSettings(data) {
  return api.post("save", data);
}
