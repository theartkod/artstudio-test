/**
 * @module order
 */

import api from "@/config/axiosInst";

/**
 * Get json
 * @returns {*}
 */

export function registerPartnerUser(data) {
  return api.get("save", data);
}
