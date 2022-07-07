
// Cart

import { Dimensions } from 'react-native';
import { pos } from './core/variables.js';
import { posSurfaceText, posText } from './posBase.js';

export const posCart = {
    container: {
      backgroundColor: pos.background,
      margin: 0,
      padding: 0,
      height: "35%",
      width: "100%"
    }
  }

export const posGuestCart = {
  container: {
    backgroundColor: pos.background,
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%"
  }
} 

export const cashierAccountContainer = {
  container: {
    backgroundColor: pos.background,
    margin: 0,
    padding: 0,
    width: "100%"
  }
} 

export const checkoutCart = {
  container: {
    backgroundColor: '#585858',
    margin: 0,
    padding: 0,
    height: "30%",
    width: "100%"
  }
}


export const pageContainer = {
  container: {
    backgroundColor: '#585858',
    margin: 0,
    padding: 0,
    height: "100%"
  }
}

export const wrstbucksEdit = {
  container: {
    width: "15%",
    height: 15
  }
}

export const textBox = {
  input: {
    textAlign: "center"
  }
}

export const twenty = {
  container: {
    width: "20%"
  }
}

export const posCartfifty = {
  container: {
    width: "50%",
    backgroundColor: '#ffffff',
    elevation: 4,
    padding: 15,
    borderRadius: 14,
    marginBottom: 15
}
}

export const balanceInquiry = {
  container: {
    width: "100%",
    backgroundColor: '#ffffff',
    elevation: 4,
    padding: 15,
    borderRadius: 14,
    marginBottom: 15
}
}

export const seventyFive = {
  container: {
    width: "77%"
  }
}

export const eighty = {
  container: {
    width: "80%"
  }
}

export const guestCart = {
  container: {
    height: '30%'
  }
}

export const cartItem = {
  container: {
    padding: 10
  }
}
  
export const posCartItems = {
  container: {
    backgroundColor: pos.surface,
    height: "100%",
    width: "81%",      
    elevation: 4,
    borderRadius: 14,
    margin: 10
      }
  }

export const guestPayTotals = {
  container: {
    backgroundColor: pos.surface,
    width: "81%",      
    elevation: 4,
    borderRadius: 14,
    margin: 10
      }
  }

export const guestPayTip = {
  container: {
    borderRadius: 14,
    elevation: 4,
    backgroundColor: pos.surface,
    width: "70%",      
    marginTop: 90
      }
  }  

export const posCartDataContainer = {
  container: {
      backgroundColor: pos.background,
      margin: 0,
      padding: 0,
      width: "100%"
  }
}

export const balanceError = {
  text: {
    color: pos.error,
    fontSize: 12,
    margin: 5
  }
}

export const posCartTotals = {
  container: {
    backgroundColor: pos.surface,
    width: "48%",      
    elevation: 4,
    borderRadius: 14,
    margin: 10
  }
}

export const posCartTotalsRight = {
  container: {
    backgroundColor: pos.surface,
    width: "48%",      
    elevation: 4,
    borderRadius: 14,
    marginRight: 10,
    marginTop: 10
  }
}

export const posCartTotalsLeft = {
  container: {
    backgroundColor: pos.surface,
    width: "48%",      
    elevation: 4,
    borderRadius: 14,
    marginHorizontal: 10,
    marginTop: 10
  }
}
export const linkedAccountContainer = {
  container: {
    backgroundColor: "#585858",
    width: "100%"
  }
}

export const posCartContainer = {
  container: {
    width: "85%",
    height: "100%"
  }
}

export const checkoutCartContainer = {
  container: {
    width: "60%",
    height: "100%",
    margin: 0,
    padding: 0
  }
}

export const cartFunctionsContainer = {
  container: {
    width: "15%",
    height: "100%",
   }
}

export const cartFunctionsButtons = {
  container: {
    width: "15%",
    height: "100%",
  }
}

export const cashierAccountSpacer = {
  container: {
    width: "15%",
  }
}

export const cartAdminOptions = {
  container: {
    width: "48%"
}
}

export const cartAdminButtons = {
  container: {
    marginBottom: 10
  }
}

export const cartPaymentContainer = {
  container: {
    backgroundColor: "#424141",
    width: "80%",
    margin: 0,
    padding: 0
  }
}

export const swipeCOntainer = {
  container: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: pos.primaryVariant
  }
}

export const entitleAdjust = {
  container: {
    borderRadius: 13,
    borderWidth: 0,
    backgroundColor: '#ff8c00'
  },
  icon: {
    size: 10,
    color: '#ffffff'
  }
}

export const swipeCOntainerMod = {
  container: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: pos.secondary
  }
}

export const posCartData = {
  container: {
    backgroundColor: "#585858",
    width: "100%",
    marging: 0,
    padding: 0
  }
}


  
export const posCartCheckout = {
  container: {
    backgroundColor: '#585858',
    margin: 0,
    padding: 0,
    maxHeight: "30%",
    width: "100%"
  }
}


export const posCartLabel = {
  text: {
    ...posText.text,
    fontSize: 30,
    lineHeight: 30
  }
}
  
export const posCartImage = {
  container: {
    width: '70%',
    height: '70%'
  },
  image: {
    resizeMode: "contain",
    width: '100%',
    height: '100%'
  }
}

export const posCartImageSubtext = {
  text: {
    fontSize: 24,
    lineHeight: 24,
    color: pos.primary
  }
}

export const posCartTotalContainer = {
  container: {
    backgroundColor: '#ffffff',
    elevation: 4,
    padding: 15,
    borderRadius: 14,
    marginBottom: 15
  }
}
  
export const posCartSubtotalLabel = {
  text: {
    ...posText.text,
    fontSize: 20,
    margin: 5
  }
}

export const cashier = {
  text: {
    color: pos.whitesmoke,
    fontsize: 15,
    marginLeft: 5
  }
}

export const menu = {
  text: {
    color: pos.whitesmoke,
    fontsize: 15,
    marginRight: 5
  }
}

export const vendor = {
  text: {
    color: pos.whitesmoke,
    fontSize: 40,
    lineHeight: 40
  }
}

export const guestPayName = {
  text: {
    color: pos.whitesmoke,
    fontSize: 50,
    lineHeight: 50
  }
}

export const posCartHR = {
  container: {
    borderTopWidth: 1,
    borderColor: '#d3d3d3'
  }
}

export const posCartTotalLabel = {
  text: {
    ...posText.text,
    fontSize: 25,
    lineHeight: 25,
    margin: 5
  }
}
  
export const posCartTotalValue = {
  text: {
    ...posText.text,
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    margin: 5
  }
}

export const posCartBalanceDue = {
  text: {
    ...posText.text,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 'bold'
  }
}
  
export const posCartCompleteOrder = {
  container: {
    elevation: 4,
    padding: 10,
    borderRadius: 14,
    marginBottom: 15,
    backgroundColor: '#ff8c00',
    borderWidth: 0
  },
  caption: {
    fontSize: 25,
    lineHeight: 25
  },
  icon: {
    size: 25
  }
}
  
export const posCartCompleteOrderDisabled = {
  container: {
    elevation: 4,
    padding: 10,
    borderRadius: 14,
    marginBottom: 15,
    backgroundColor: '#d3d3d3',
    borderWidth: 0
  },
  caption: {
    fontSize: 25,
    lineHeight: 25
  },
  icon: {
    size: 25
  }
}

export const posCartCreditContainer = {
  container: {
    backgroundColor: '#ffffff',
    elevation: 4,
    padding: 15,
    borderRadius: 14
  }
}
  
export const posCartCreditAvailable = {
  text: {
    ...posText.text,
    fontSize: 20,
    lineHeight: 20
  }
}

export const posCartCreditAvailableLabel = {
  text: {
    color: pos.onSurface,
    marginLeft: 5
  }
}

export const posCartProductName = {
  text: {
    ...posText.text,
    fontSize: 24,
    lineHeight: 24,
    numberOfLines: 1,
  }
}
  
export const posCartProductButton = {
  container: {
    borderRadius: 13,
    borderWidth: 0,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 3
  },
  icon: {
    size: 20,
    color: '#000000'
  }
}

export const posCartProductButtonHasModification = {
  container: {
    ...posCartProductButton.container,
    backgroundColor: '#ff8c00',
  },
  icon: {
    ...posCartProductButton.icon,
    color: 'white',
  }
}
  
export const posCartProductPriceEa = {
  text: {
    ...posText.text,
    fontSize: 24,
    lineHeight: 24,
  }
}

export const posCartProductCount = {

  text: {
    ...posText.text,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
  }
}

export const posCartModTitle = {
  text: {
    ...posText.text
  }
}
  