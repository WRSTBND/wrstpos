import { pos } from './core/variables.js';
import { posSurfaceText, posText } from './posBase.js';

export const settingsButtonPrimary = {
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

export const buttonPrimary = {
container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
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

export const keypadFunctionbuttonPrimary = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        paddingHorizontal: 23,
        paddingVertical: 12,
        width: "30%",
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

export const keypadActionbuttonSecondary = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        paddingHorizontal: 23,
        paddingVertical: 12,
        width: "40%",
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

export const buttonPrimaryVariant = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        paddingHorizontal: 23,
        paddingVertical: 12,
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
export const buttonkeyPadVariant = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        paddingHorizontal: 23,
        paddingVertical: 12,
        width: "25%",
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

export const settingsButtonSecondary = {
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
    color: pos.secondary
}
}

export const buttonSecondary = {
container: {
    backgroundColor: pos.surface,
    borderRadius: 14,
    paddingHorizontal: 23,
    paddingVertical: 12,
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
    color: pos.secondary
}
}

  export const pinPadButtonContainer = {
      container: {
          width: "100%"
      }
  }

export const settingsSwitch = {
    checkboxInput: {
        color: pos.primary,
    },
    label: {
        color: "whitesmoke",
        fontSize: 15,
        margin: 5
    }
}

export const keyboard = {
    container: {
        width: "100%"
    }
}

export const keyboardPad = {
    container: {
        width: "40%"
    }
}



export const editEntitlement = {
    container: {
        width: "95%",
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderWidth: 1
    }
}

export const customNameInputActive = {
    containerDisabled: {
        backgroundColor: pos.surface,
    },
    inputDisabled: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderColor: pos.primaryVariant,
        borderWidth: 1,
        placeholderTextColor: "whitesmoke"       
    }
}

export const keyboardContainer = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderColor: pos.primaryVariant,
        borderWidth: 1,
        marginBottom: 10,
        paddingVertical: 20
    }
}

export const keyboardContainerHidden = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderColor: pos.onSurface,
        borderWidth: 1,
        marginBottom: 10,
        paddingVertical: 20
    }
}

export const customNameInputInActive = {
    containerDisabled: {
        backgroundColor: pos.surface,
    },
    inputDisabled: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderColor: pos.onSurface,
        borderWidth: 1, 
        placeholderTextColor: "whitesmoke"     
    }
}

export const settingsKeyboard = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderWidth: 1,
        margin: 2,
        paddingHorizontal: 25,
        borderColor: pos.primaryVariant,
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

export const settingsKeyboardHidden = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderWidth: 1,
        margin: 2,
        paddingHorizontal: 25,
        borderColor: pos.onSurface,
    },
    caption: {
        color: pos.onSurface
    },
        icon: {
        color: pos.onSurface
    }
    
}

export const spacebarHidden = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderWidth: 1,
        margin: 2,
        paddingHorizontal: 25,
        width: "25%",
        borderColor: pos.onSurface,
    },
    caption: {
        color: pos.onSurface
    },
        icon: {
        color: pos.onSurface
    }
    
}

export const spacebar = {
    container: {
        backgroundColor: pos.surface,
        borderRadius: 14,
        borderWidth: 1,
        margin: 2,
        paddingHorizontal: 25,
        width: "25%",
        borderColor: pos.primaryVariant,
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

export const idGood = {
    text: {
      color: pos.primary,
      fontSize: 20,
      margin: 5
    }
  }

  export const idBad = {
    text: {
      color: pos.secondary,
      fontSize: 20,
      margin: 5
    }
  }