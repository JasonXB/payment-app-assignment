export function reducer(state, action) {
  switch (action.type) {
    // Toggle dropdown menu
    case "TOGGLE_MENU":
      return {
        sortBy: !state.sortBy,
        revenueGenerated: false,
        mostRecentReferral: false,
      };
    // Close entire dropdown menu
    case "OPEN_MENU":
      return {
        sortBy: true,
        revenueGenerated: false,
        mostRecentReferral: false,
      };
    // Close entire dropdown menu
    case "CLOSE_MENU":
      return {
        sortBy: false,
        revenueGenerated: false,
        mostRecentReferral: false,
      };

    // Open revenue generated sub menu
    case "TOGGLE_REVENUE_GENERATED":
      return {
        sortBy: true,
        revenueGenerated: !state.revenueGenerated,
        mostRecentReferral: false,
      };
    // Open recent referral sub menu
    case "TOGGLE_RECENT_REFERRAL":
      return {
        sortBy: true,
        revenueGenerated: false,
        mostRecentReferral: !state.mostRecentReferral,
      };
    default:
      return state;
  }
}