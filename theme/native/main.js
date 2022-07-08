import { pos } from "./core/variables";
import { Dimensions } from 'react-native';
import { posText, posBackground } from './posBase';
import { tipCenter } from "./tipPopup";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export * from './productButtons';
export * from './accountBar';
export * from './tipPopup';
export * from './cart';
export * from './settings';

export const bigButton = {
  container: {
    padding: 25,
    borderWidth: 0,
    alignItems: 'flex-end',
    height: 55
  },
  caption: {
    fontSize: 25,
    lineHeight: 25
  },
  icon: {
    size: 25
  }
}
export const accountContainer = {
  container: {
    backgroundColor: pos.surface,
    width: "81%",      
    elevation: 4,
    borderRadius: 14,
    marginHorizontal: 10,
    marginTop: 10
      }
}
export const pinPadButton = {
  container: {
    backgroundColor: '#ff8c00',
    borderColor: 'transparent',
    padding: 0,
    width: 100,
    height: 50
  },
  caption: {
    fontSize: 17,
  }
}

export const posPage = {
  container: {
    backgroundColor: pos.background,
    height: "100%"
  }
}

export const posPageFlex = {
  container: {
    backgroundColor: pos.background,
    height: "100%",
    flexDirection: "column"
  }
}

export const payButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 12,
    width: "100%",
    borderColor: pos.secondary,
    borderWidth: 1,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    fontSize: 20,
    color: pos.secondary
  },
  icon: {
    color: pos.secondary,
    size: 20
  }
}

export const guestPayButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 20,
    borderColor: pos.secondary,
    width: "97%",
    borderWidth: 1,
    margin: 10,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    fontSize: 20,
    lineHeight: 30,
    color: pos.secondary
  },
  icon: {
    color: pos.secondary,
    size: 15
  }
}

export const guestPayButtonHidden = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 6,
    borderColor: pos.onSurface,
    width: "97%",
    borderWidth: 1,
    margin: 10,
  },
  caption: {
    fontSize: 15,
    color: pos.onSurface
  },
  icon: {
    color: pos.onSurface,
    size: 15
  }
}

export const guestPayNoTipButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 20,
    borderColor: pos.primary,
    width: "40%",
    borderWidth: 1,
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  },
  caption: {
    fontSize: 25,
    lineHeight: 30,
    color: pos.primary
  },
  icon: {
    color: pos.primary,
    size: 25
  }
}

export const guestPayPresent = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 20,
    borderColor: pos.secondary,
    width: "40%",
    borderWidth: 1,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    fontSize: 25,
    lineHeight: 30,
    color: pos.secondary
  },
  icon: {
    color: pos.secondary,
    size: 25
  }
}

export const guestPayNoTipButtonHidden = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 20,
    borderColor: pos.onSurface,
    width: "40%",
    borderWidth: 1,
  },
  caption: {
    fontSize: 25,
    lineHeight: 30,
    color: pos.onSurface
  },
  icon: {
    color: pos.onSurface,
    size: 25
  }
}

export const wrstbucksButton = {
  container: {
    borderRadius: 11,
    backgroundColor: pos.surface,
    width: "100%",
    padding: 5,
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    marginTop: 0,
    margin: 10,
    rippleColor: pos.primaryVariant,
    underlayColor: pos.primaryVariant
  }
}
export const wrstbucksText = {
  text: {
    color: pos.primaryVariant,
    fontSize: 20,
    lineHeight: 20,
    margin: 5,
  }
}

export const wrstbucksTextlabel = {
  text: {
    color: pos.primaryVariant,
    fontSize: 30,
    lineHeight: 30,
    margin: 5
  }
}

export const tipText = {
  text: {
    color: "whitesmoke",
    fontSize: 30,
    lineHeight: 30,
    margin: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  }
}

export const tipTextlabel = {
  text: {
    color: "whitesmoke",
    fontSize: 30,
    lineHeight: 30,
    margin: 5,
  }
}

export const tipdataContainer = {
  container: {
    borderRadius: 11,
    backgroundColor: pos.surface,
    width: "100%",
    padding: 5,
    borderColor: pos.primary,
    borderWidth: 1,
    marginTop: 0,
    margin: 10,
    rippleColor: pos.primary,
    underlayColor: pos.primary
  }
}
export const tipDataText = {
  text: {
    color: pos.primary,
    fontSize: 20,
    margin: 5
  }
}

export const primaryVariantButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    rippleColor: pos.primaryVariant,
    underlayColor: pos.primaryVariant,
    padding: 0
  },
  caption: {
    color: pos.primaryVariant
  },
  icon: {
    color: pos.primaryVariant
  }
}

export const primaryButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    borderColor: pos.primary,
    borderWidth: 1,
    rippleColor: pos.primary,
    underlayColor: pos.primary,
    padding: 0
  },
  caption: {
    color: pos.primary
  },
  icon: {
    color: pos.primary
  }
}

export const viewEntitleButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    width: "90%",
    borderColor: pos.primary,
    borderWidth: 1,
    marginVertical: 10,
    marginBottom: 10,
    rippleColor: pos.primary,
    underlayColor: pos.primary
  },
  caption: {
    color: pos.primary,
    fontSize: 15
  },
  icon: {
    color: pos.primary,
    size: 15
  }
}
export const balanceButton = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 12,
    width: "14%",
    borderColor: pos.secondary,
    borderWidth: 1,
    marginRight: 10,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    color: pos.secondary
  }
}
export const adminButton = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: "46%",
    borderRadius: 14,
    borderColor: pos.primary,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  },
    caption: {
      color: pos.primary,
    },
    icon: {
    color: pos.primary,
  }
}

export const newTipButton = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: "20%",
    borderRadius: 14,
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.primaryVariantTouch,
    underlayColor: pos.primaryVariantTouch
  },
    caption: {
      color: pos.primaryVariant,
    },
    icon: {
    color: pos.primaryVariant,
  }
}

export const variantText = {
  text: {
    color: pos.primaryVariant
  }
}

export const newTipContainer = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 12,
    width: "20%",
    borderRadius: 14,
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.primaryVariantTouch,
    underlayColor: pos.primaryVariantTouch
  }
}

export const usedTipContainer = {
  container: {
    backgroundColor: pos.primaryVariantTouch,
    borderRadius: 14,
    paddingHorizontal: 12,
    width: "20%",
    borderRadius: 14,
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    marginTop: 10,
  }
}

export const themedButtonAvailable = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.primaryVariantTouch,
    underlayColor: pos.primaryVariantTouch
  },
  caption: {
    color: pos.primaryVariant
  },
    icon: {
    color: pos.primaryVariant,
  }
}

export const themedButtonAvailableSecondary = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderColor: pos.secondary,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    color: pos.secondary
  },
    icon: {
    color: pos.secondary,
  }
}

export const themedButtonAvailableSecondaryInverse = {
  container: {
    backgroundColor: pos.secondaryTouch,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderColor: pos.secondary,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    color: pos.secondary
  },
    icon: {
    color: pos.secondary,
  }
}

export const themedButtonPrimary = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderColor: pos.primary,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  },
  caption: {
    color: pos.primary
  },
    icon: {
    color: pos.primary,
  }
}


export const textButton = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 5,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderColor: pos.primary,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  },
  caption: {
    color: pos.primary
  },
    icon: {
    color: pos.primary,
  }
}

export const textButtonSecondary = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignItems: "center",
    width: "90%",
    borderColor: pos.secondary,
    borderWidth: 1,
    marginTop: 10,
    rippleColor: pos.secondaryTouch,
    underlayColor: pos.secondaryTouch
  },
  caption: {
    color: pos.secondary
  },
    icon: {
    color: pos.secondary,
  }
}

export const themedButtonUnavailable = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderColor: pos.onSurface,
    borderWidth: 1,
    marginTop: 10
  },
  icon: {
    color: pos.onSurface,
  }
}

export const themedButtonText = {
  text: {
    color: pos.primaryVariant,
  }
}


export const themedButtonMod = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.secondaryLight,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    width: "90%",
    borderRadius: 14,
    borderColor: pos.secondary,
    borderWidth: 1,
    marginTop: 10
  },
  icon: {
    color: pos.secondary,
  }
}

export const entitleButtonAvailable = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    borderColor: pos.primaryVariant,
    borderWidth: 1,
    rippleColor: pos.primaryVariantTouch,
    underlayColor: pos.primaryVariantTouch
  },
  caption: {
    color: pos.primaryVariant
  },
    icon: {
    color: pos.primaryVariant,
  }
}

export const entitleButtonUnavailable = {
  container: {
    borderRadius: 14,
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    borderColor: pos.onSurface,
    borderWidth: 1,
  },
  icon: {
    color: pos.onSurface,
  }
}

export const pinPadAttribute = {
  text: {
    fontSize: 24,
    lineHeight: 24,
    color: "#ffffff"
  }
}

export const pinPadFunctionButton = {
  container: {
    backgroundColor: '#ff8c00',
    borderColor: 'transparent',
    padding: 0,   
    width: 125,
    height: 50 
  },
  caption: {
    fontSize: 17
  }
}



// Login

export const posAutologin = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 15,
    padding: 15,
    width: 500
  }
}

export const posCashierPinInput = {
  input: {
    fontSize: 24,
    lineHeight: 24
  }
}

export const posCashierLogin = {
  ...bigButton,
  container: {
    ...bigButton.container,
    backgroundColor: '#c64297'
  }
}

// Location Select
export const locationList = {
  listItem: {
    borderWidth: 0
  }
}

export const locationListItem = {
  container: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    margin: 25,
    borderColor: '#888888',
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: 'white'
  }
}

// Header

export const posLogo = {
  image: {
    resizeMode: "contain",
    width: 50,
    height: 25
  }
}

export const posHeader = {
  text: {
    ...posText.text,
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold'
  }
}

export const posSurfaceText = {
  text: {
      color: pos.onSurface,
  }
}

export const posFooter = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    marginHorizontal: 10,
    width: "97%",
    flexBasis: "auto"
  }
}

export const posTip = {
  container: {
    backgroundColor: pos.surface,
    borderColor: pos.primary,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    elevation: 4,
    marginTop: 10,
    width: "20%",
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  }
}

export const usedPosTip = {
  container: {
    backgroundColor: pos.primaryTouch,
    borderColor: pos.primary,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    elevation: 4,
    marginTop: 10,
    width: "20%",
  }
}

export const posTipWith = {
  container: {
    backgroundColor: pos.surface,
    borderColor: pos.primaryVariant,
    paddingVertical: 15,
    borderRadius: 14,
    borderWidth: 1,
    elevation: 4,
    marginBottom: 10,
    width: "100%",
  }
}

export const chooseTip = {
  text: {
    color: pos.primary,
    fontSize: 15
  }
}

export const chooseTipWith = {
  text: {
    color: pos.primaryVariant,
    fontSize: 15
  }
}

export const posChargingIcon = {
  image: {
    resizeMode: "contain",
    width: 45,
    height: 45
  }
}

export const posSyncButton = {
  container: {
    borderWidth: 0,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0
  }
}

export const posSmallButton = {
  container: {
    backgroundColor: '#000000',
    borderWidth: 0,
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0
  },
  icon: {
    color: '#ffffff'
  }
}

export const posSignOut = {
  container: {
    ...bigButton.container,
    backgroundColor: '#000000'
  },
  caption: {
    ...bigButton.caption,
    color: '#ffffff'
  },
  icon: {
    ...bigButton.icon,
    color: '#ffffff'
  }
}

export const zeroMargin = {
  container: {
    width: "80%"
  }
}

// Page Tabs

export const posPageTab = {
  container: {
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 12,
    borderRadius: 14,
    marginRight: 6,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: pos.onSurface
  },
  caption: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: pos.whitesmoke
  }
}

export const posPageTabText = {
  text: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: '#ffffff'
  }
}

export const posPageContainer = {
  container: {
    marginLeft: 16
  }
}

export const posPageTabSelected = {
  container: {
    backgroundColor: pos.surface,
    paddingHorizontal: 23,
    paddingVertical: 12,
    borderRadius: 14,
    marginRight: 6,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: pos.primary,
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  },
  caption: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: pos.whitesmoke
  }
}

export const posMiscButton = {
  container: {
    ...posPageTab.container,
    backgroundColor: '#ababab',
    marginRight: 0
  },
  icon: {
    size: 15
  },
  caption: {
    ...posPageTabText.text
  }
}

// Menu Buttons 

export const posbuttonsContainerBackground = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    margin: 10,
    width: "97%",
    flexBasis: 500,
    flexShrink: 1
  }
}

export const back = {
  container: {
    height: 25,
    width: 50
  }
}
export const posbuttonsContainerBackgroundlinked = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    margin: 10,
    width: "97%",
    height: "32%"
  }
}
export const posbuttonsContainerBackgroundA = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    margin: 10,
    width: "97%",
    flexBasis: "41%",
    flexShrink: 1
  }
}

export const posbuttonsContainerBackgroundAlinked = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    margin: 10,
    width: "97%",
    height: "37%"
  }
}
export const guestHeaderContainer = {
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  }
}

export const guestHeaderContainer1 = {
  container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    marginHorizontal: 10,
    width: "81%",
  }
}

export const posHeaderContainer = {
  container: {
    marginTop: 10,
    backgroundColor: pos.surface,
    borderRadius: 14,
    elevation: 4,
    marginHorizontal: 10,
    width: "97%",    
  }
}

export const entitleEdit = {
  container: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: pos.primary,
    margin: 10
  }
}

export const menuSelect = {
  container: {
    backgroundColor: '#424141'
  }
}

// Modifications Popup

export const posModification = {
  container: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    padding: 10
  },
  caption: {
    ...posText.text,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold'
  }
}

export const posModificationSelected = {
  container: {
    ...posModification.container,
    backgroundColor: '#ff8c00',
    borderColor: '#ff8c00',
    elevation: 4
  },
  caption: {
    ...posModification.caption,
    color: 'white'
  }
}

export const posModificationCustomInstance = {
  container: {
    backgroundColor: '#ff8c00',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginVertical: 10
  }
}

// Misc. Item Popup

export const uniformDropdown = {
  useUniformDesign: true,
  iconStyle: {
    display: 'none'
  }
}

export const posInput = {
  label: {
    fontSize: 20,
    lineHeight: 20
  },
  input: {
    fontSize: 20,
    lineHeight: 20
  },
  value: {
    fontSize: 20,
    lineHeight: 20
  },
  validationMessage: {
    fontSize: 20,
    lineHeight: 30
  }
}

// Order Popup

export const posOrderPage = {
  statusBar: {
    backgroundColor: '#FF8C00'
  },
  header: {
    container: { backgroundColor: '#FF8C00' },
    title: { color: 'white' },
    backButtonText: { color: 'white' },
    backButtonIcon: { tintColor: 'white' }
  },
  container: { backgroundColor: '#f5f5f5' },
}

export const posBottomSheet = {
  container: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
    maxHeight: 600
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end"
  }
}

export const posBottomSheetContainer = {}
export const posModalBackdrop = {
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  }
}

export const posPopupContainer = {
  container: {
    width: "50%",
    padding: 40,
    backgroundColor: pos.background,
    elevation: 10,
    borderRadius: 10,
    maxHeight: 750
  }
}

export const posPopupShrinker = {
  container: {
    maxWidth: 500
  }
}

export const posPopupStretcher = {
  container: {
    minWidth: 750
  }
}

export const posModificationList = {
  container: {
    maxHeight: 500
  }
}

export const customTable = {
  container: {
    height: '80%'
  }
}

export const posOrderTotal = {
  text: {
    ...posText.text,
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold'
  }
}

// Order Confirmation

export const posOrderFinishAndPay = {
  ...bigButton,
  container: {
    ...bigButton.container,
    backgroundColor: '#008000'
  }
}

export const posOrderFinishAndPayDisabled = {
  ...bigButton,
  container: {
    ...bigButton.container,
    backgroundColor: '#d3d3d3'
  }
}

export const posOrderCancel = {
  ...bigButton,
}

// Order Complete

export const posOrderRemainingCredit = {
  text: {
    ...posText.text,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold'
  }
}

export const posOrderCheckmark = {
  image: {
    resizeMode: "contain",
    width: 50,
    height: 50
  }
}

// WRST Login
export const wrstBackground = {
  container: {
    flex: 1
  }
}

export const logo = {
  image: {
    resizeMode: "contain",
    height: 150,
    width: 250
  }
}


export const projectName = {
  text: {
    fontSize: 30,
    lineHeight: 30
  }
}

export const projectDescription = {
  text: {
    color: 'grey'
  }
}

export const loginButton = {
  container: {
    backgroundColor: '#c64297',
    borderWidth: 0,
    height: 40
  },
  caption: {
    fontSize: 16,
    lineHeight: 16
  }
}

export const wrstFooter = {
  text: {
    color: '#888888'
  }
}

export const whiteBackground = {
  container: {
    backgroundColor: '#ffffff'
  }
}
