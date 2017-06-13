module.exports = Object.freeze({
  // Auth
  WB_AUTH_GOOGLE: 'WB_AUTH_GOOGLE',
  WB_AUTH_GOOGLE_COMPLETE: 'WB_AUTH_GOOGLE_COMPLETE',
  WB_AUTH_GOOGLE_ERROR: 'WB_AUTH_GOOGLE_ERROR',

  WB_AUTH_MICROSOFT: 'WB_AUTH_MICROSOFT',
  WB_AUTH_MICROSOFT_COMPLETE: 'WB_AUTH_MICROSOFT_COMPLETE',
  WB_AUTH_MICROSOFT_ERROR: 'WB_AUTH_MICROSOFT_ERROR',

  WB_AUTH_SLACK: 'WB_AUTH_SLACK',
  WB_AUTH_SLACK_COMPLETE: 'WB_AUTH_SLACK_COMPLETE',
  WB_AUTH_SLACK_ERROR: 'WB_AUTH_SLACK_ERROR',

  WB_AUTH_TRELLO: 'WB_AUTH_TRELLO',
  WB_AUTH_TRELLO_COMPLETE: 'WB_AUTH_TRELLO_COMPLETE',
  WB_AUTH_TRELLO_ERROR: 'WB_AUTH_TRELLO_ERROR',

  WB_AUTH_WAVEBOX: 'WB_AUTH_WAVEBOX',
  WB_AUTH_WAVEBOX_COMPLETE: 'WB_AUTH_WAVEBOX_COMPLETE',
  WB_AUTH_WAVEBOX_ERROR: 'WB_AUTH_WAVEBOX_ERROR',

  // Window Management
  WB_NEW_WINDOW: 'WB_NEW_WINDOW',
  WB_OPEN_MONITOR_WINDOW: 'WB_OPEN_MONITOR_WINDOW',
  WB_TOGGLE_MAILBOX_WINDOW_FROM_TRAY: 'WB_TOGGLE_MAILBOX_WINDOW_FROM_TRAY',
  WB_SHOW_MAILBOX_WINDOW_FROM_TRAY: 'WB_SHOW_MAILBOX_WINDOW_FROM_TRAY',

  // Generic Windows
  WB_WINDOW_FIND_START: 'WB_WINDOW_FIND_START',
  WB_WINDOW_FIND_NEXT: 'WB_WINDOW_FIND_NEXT',
  WB_WINDOW_ZOOM_IN: 'WB_WINDOW_ZOOM_IN',
  WB_WINDOW_ZOOM_OUT: 'WB_WINDOW_ZOOM_OUT',
  WB_WINDOW_ZOOM_RESET: 'WB_WINDOW_ZOOM_RESET',
  WB_WINDOW_RELOAD_WEBVIEW: 'WB_WINDOW_RELOAD_WEBVIEW',
  WB_WINDOW_NAVIGATE_WEBVIEW_BACK: 'WB_WINDOW_NAVIGATE_WEBVIEW_BACK',
  WB_WINDOW_NAVIGATE_WEBVIEW_FORWARD: 'WB_WINDOW_NAVIGATE_WEBVIEW_FORWARD',

  // Mailboxes window
  WB_MAILBOX_STORAGE_CHANGE_ACTIVE: 'WB_MAILBOX_STORAGE_CHANGE_ACTIVE',
  WB_MAILBOXES_WINDOW_JS_LOADED: 'WB_MAILBOXES_WINDOW_JS_LOADED',
  WB_MAILBOXES_WINDOW_PREPARE_RELOAD: 'WB_MAILBOXES_WINDOW_PREPARE_RELOAD',
  WB_MAILBOXES_WINDOW_TOGGLE_SIDEBAR: 'WB_MAILBOXES_WINDOW_TOGGLE_SIDEBAR',
  WB_MAILBOXES_WINDOW_TOGGLE_APP_MENU: 'WB_MAILBOXES_WINDOW_TOGGLE_APP_MENU',
  WB_MAILBOXES_WINDOW_DOWNLOAD_COMPLETE: 'WB_MAILBOXES_WINDOW_DOWNLOAD_COMPLETE',
  WB_MAILBOXES_WINDOW_OPEN_MAILTO_LINK: 'WB_MAILBOXES_WINDOW_OPEN_MAILTO_LINK',
  WB_MAILBOXES_WINDOW_SWITCH_MAILBOX: 'WB_MAILBOXES_WINDOW_SWITCH_MAILBOX',
  WB_MAILBOXES_WINDOW_SWITCH_SERVICE_INDEX: 'WB_MAILBOXES_WINDOW_SWITCH_SERVICE_INDEX',
  WB_MAILBOXES_WINDOW_NAVIGATE_BACK: 'WB_MAILBOXES_WINDOW_NAVIGATE_BACK',
  WB_MAILBOXES_WINDOW_NAVIGATE_FORWARD: 'WB_MAILBOXES_WINDOW_NAVIGATE_FORWARD',
  WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_SLEEP: 'WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_SLEEP',
  WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_AWAKEN: 'WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_AWAKEN',
  WB_MAILBOXES_WINDOW_SHOW_SETTINGS: 'WB_MAILBOXES_WINDOW_SHOW_SETTINGS',
  WB_MAILBOXES_WINDOW_WEBVIEW_ATTACHED: 'WB_MAILBOXES_WINDOW_WEBVIEW_ATTACHED',
  WB_MAILBOXES_WINDOW_FETCH_OPEN_WINDOW_COUNT: 'WB_MAILBOXES_WINDOW_FETCH_OPEN_WINDOW_COUNT',

  // Browser
  WB_BROWSER_NOTIFICATION_CLICK: 'WB_BROWSER_NOTIFICATION_CLICK',
  WB_BROWSER_NOTIFICATION_PRESENT: 'WB_BROWSER_NOTIFICATION_PRESENT',
  WB_BROWSER_START_SPELLCHECK: 'WB_BROWSER_START_SPELLCHECK',
  WB_BROWSER_SPELLCHECK_ADD_WORD: 'WB_BROWSER_SPELLCHECK_ADD_WORD',
  WB_BROWSER_GUEST_WINDOW_CLOSE: 'WB_BROWSER_GUEST_WINDOW_CLOSE',
  WB_BROWSER_ELEVATED_LOG: 'WB_BROWSER_ELEVATED_LOG',
  WB_BROWSER_ELEVATED_ERROR: 'WB_BROWSER_ELEVATED_ERROR',
  WB_BROWSER_INJECT_CUSTOM_CONTENT: 'WB_BROWSER_INJECT_CUSTOM_CONTENT',
  WB_BROWSER_WINDOW_ICONS_IN_SCREEN: 'WB_BROWSER_WINDOW_ICONS_IN_SCREEN',
  WB_BROWSER_OPEN_MESSAGE: 'WB_BROWSER_OPEN_MESSAGE',
  WB_BROWSER_COMPOSE_MESSAGE: 'WB_BROWSER_COMPOSE_MESSAGE',

  // Google
  WB_BROWSER_GOOGLE_INBOX_TOP_MESSAGE_CHANGED: 'WB_BROWSER_GOOGLE_INBOX_TOP_MESSAGE_CHANGED',
  WB_BROWSER_GOOGLE_GMAIL_UNREAD_COUNT_CHANGED: 'WB_BROWSER_GOOGLE_GMAIL_UNREAD_COUNT_CHANGED',

  // Resource usage
  WB_PING_RESOURCE_USAGE: 'WB_PING_RESOURCE_USAGE',
  WB_PONG_RESOURCE_USAGE: 'WB_PONG_RESOURCE_USAGE',
  WB_SUBMIT_PROCESS_RESOURCE_USAGE: 'WB_SUBMIT_PROCESS_RESOURCE_USAGE',

  // App lifecycle
  WB_FOCUS_APP: 'WB_FOCUS_APP',
  WB_QUIT_APP: 'WB_QUIT_APP',
  WB_RELAUNCH_APP: 'WB_RELAUNCH_APP',

  // Squirrel & Update
  WB_SQUIRREL_UPDATE_CHECK: 'WB_SQUIRREL_UPDATE_CHECK',
  WB_SQUIRREL_APPLY_UPDATE: 'WB_SQUIRREL_APPLY_UPDATE',
  WB_USER_CHECK_FOR_UPDATE: 'WB_USER_CHECK_FOR_UPDATE',
  WB_SQUIRREL_UPDATE_DOWNLOADED: 'WB_SQUIRREL_UPDATE_DOWNLOADED',
  WB_SQUIRREL_UPDATE_ERROR: 'WB_SQUIRREL_UPDATE_ERROR',
  WB_SQUIRREL_UPDATE_AVAILABLE: 'WB_SQUIRREL_UPDATE_AVAILABLE',
  WB_SQUIRREL_UPDATE_NOT_AVAILABLE: 'WB_SQUIRREL_UPDATE_NOT_AVAILABLE',
  WB_SQUIRREL_UPDATE_CHECK_START: 'WB_SQUIRREL_UPDATE_CHECK_START',
  WB_SQUIRREL_UPDATE_DISABLED: 'WB_SQUIRREL_UPDATE_DISABLED',

  // Misc
  WB_PREPARE_WEBVIEW_SESSION: 'WB_PREPARE_WEBVIEW_SESSION'

})
