
// Tip Popup
import { Dimensions } from 'react-native';
import { pos } from './core/variables.js';

import { posText } from './posBase.js';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const tipCenter = {
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center"
  }
}

export const posTipLabel = {
    text: {
      ...posText.text,
      fontSize: 20,
      lineHeight: 20
    }
  }
  
  export const posTipTotal = {
    text: {
      ...posText.text,
      fontSize: 30,
      lineHeight: 30,
      fontWeight: 'bold'
    }
  }
  
  export const posGrandTotalLabel = {
    text: {
      ...posText.text,
      fontSize: 30,
      lineHeight: 30
    }
  }
  
  export const posGrandTotal= {
    text: {
      ...posText.text,
      fontSize: 50,
      lineHeight: 50,
      fontWeight: 'bold'
    }
  }
  
  export const posTipButton = {
    container: {
      elevation: 4,
      backgroundColor: '#ff8c00',
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      borderBottomStartRadius: 15,
      borderBottomEndRadius: 15,
      alignItems: 'center',
      justifyContents: 'center',
      marginHorizoantal: 20,
      marginVertical: 10,
      padding: 5
    }
  }
  
  export const posTipButtonText = {
    text: {
      color: '#ffffff',
      fontSize: 30,
      lineHeight: 30,
      fontWeight: 'bold',
      paddingVertical: 10
    }
  }
  
  export const posTipButtonSubtext = {
    text: {
      ...posTipButtonText.text,
      fontSize: 20,
      lineHeight: 20
    }
  }
  
  export const posTipInput = {
    input: {
      textAlign: 'center',
      fontSize: 20,
      lineHeight: 20
    }
  }

  export const guestTipButton = {
    container: {
      backgroundColor: pos.surface,
      borderRadius: 14,
      paddingHorizontal: 23,
      paddingVertical: 6,
      width: "23%",
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
  export const creditContainer = {
    container: {
      height: "100%",
      paddingVertical: 10
  }
}
  export const posTipSubmit = {
    icon: {
      size: 20,
      color: pos.secondary
    },
    container: {
      borderWidth: 1,
      backgroundColor: pos.surface,
      borderRadius: 14,
      borderColor: pos.secondary,
    }
  }

  export const posTipSubmitOff = {
    icon: {
      size: 20,
      color: pos.surface
    },
    container: {
      borderWidth: 1,
      backgroundColor: pos.secondary,
      borderRadius: 14,
      borderColor: pos.surface
    }
  }
  
  export const posTipConfirmedText = {
    text: {
      ...posText.text,
      fontSize: 20,
      lineHeight: 20
    }
  }
  
  export const posTipConfirmedTitle = {
    text: {
      ...posText.text,
      fontSize: 40,
      lineHeight: 40,
      fontWeight: 'bold'
    }
  }
  