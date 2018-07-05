const INIT_LOAD = 'INIT_LOAD'

export function initLoad() {
  return {
    type: INIT_LOAD,
    data: []
  }
}

export function clickAction() {
  return {
    type: 'CLICK_ACT',
    data: []
  }
}