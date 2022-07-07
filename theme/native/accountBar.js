import { Dimensions } from 'react-native';

// Account Bar

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const posAccount = {
    container: {
      backgroundColor: '#585858',
      width: "100%"
    }
  }
  
  export const posAccountMessage = {
    text: {
      fontSize: 24,
      lineHeight: 24,
      color: '#A9A9A9'
    }
  }
  
  export const posAccountLinkedIconCOntainer = {
    container: {
      width : "10%"
    }  
  }

  export const posAccountLinkedIcon = {
    image: {
      resizeMode: "contain",
      width: 35,
      height: 35
    }
  }
  
  export const posAccountCardIcon = {
    image: {
      resizeMode: "contain",
      width: 70,
      height: 50
    }
  }
  
  export const posAccountLinkedNameContainer = {
    container: {
      width: "40%"
    }
  }

  export const posAccountLinkedName = {
    text: {
      fontSize: 24,
      lineHeight: 24,
      fontWeight: 'bold'
    }
  }
  
  export const posAccountUnregisteredName = {
    text: {
      fontSize: 18,
      lineHeight: 18,
      fontWeight: 'bold'
    }
  }
  
  export const posAccountLinkedTicketType = {
    container: {
      backgroundColor: '#c64297',
      padding: 10,
      borderRadius: 10
    },
    text: {
      color: '#ffffff'
    }
  }

  export const posAccountLinkedCardContainer = {
    container: {
      width: "50%"
    }
  }
  
  export const posAccountLinkedCard = {
    container: {
      backgroundColor: "#f5f5f5",
      padding: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#d3d3d3"
    }
  }

  export const posAccountUnlinkButtonContainer = {
    container: {
      width: "10%"
    }
  }
  
  export const posAccountUnlinkButton = {
    container: {
      backgroundColor: '#c64297',
      borderWidth: 0
    },
    caption: {
      color: '#ffffff'
    }
  }
  
  export const posAccountErrorIcon = {
    image: {
      resizeMode: "contain",
      width: 24,
      height: 24
    }
  }
  
  export const posAccountErrorMessage = {
    text: {
      fontSize: 24,
      lineHeight: 24,
      color: '#FF0000',
      fontWeight: 'bold'
    }
  }
  