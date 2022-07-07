
// Product Buttons
import { Dimensions } from 'react-native';
import { pos } from './core/variables.js';
import { posText } from './posBase.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const posButtonsContainer = {
  container: {
    flexGrow: 1
  }
}

export const posButton = {
  container: {
    borderRadius: 14,
    borderColor: pos.primary,
    borderWidth: 1,
    height: 70,
    padding: 5,
    margin: 6,
    backgroundColor: pos.surface,
    rippleColor: pos.primaryTouch,
    underlayColor: pos.primaryTouch
  }
}


export const posButtonSoldOut = {
  container: {
    ...posButton.container,
    backgroundColor: pos.surface,
    borderColor: pos.onSurface
  }
}

export const posButtonEntitlement = {
  container: {
    ...posButton.container,
    backgroundColor: pos.primaryTouch,
  }
}

export const posButtonLabel = {
  text: {
    color: pos.whitesmoke,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    numberOfLines: 2
  }
}

export const posButtonLabelSoldOut = {
  text: {
    color: pos.onSurface,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    numberOfLines: 2
  }
}

export const posButtonBottomSection = {
  container: {
    justifyContent: 'space-between'
  }
}

export const posButtonSecondaryLabel = {
  text: {
    fontSize: 13,
    lineHeight: 13,
    color: '#A9A9A9',
    numberOfLines: 1
  }
}

export const posButtonPrice = {
  text: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    color: pos.secondary,
    numberOfLines: 1,
  }
}

export const posButtonPriceSoldOut = {
  text: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    color: pos.onSurface,
    numberOfLines: 1,
  }
}

export const posButtonSoldOutText = {
  text: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    color: pos.secondary,
    numberOfLines: 1,
  }
}

export const posButtonEntitlementLabel = {
  text: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#ff8c00',
    numberOfLines: 1
  }
}

export const posButtonIcon = {
  image: {
    resizeMode: "contain",
    width: 42,
    height: 42,
    borderRadius: 7
  }
}
