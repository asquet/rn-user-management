export default function getMenuStyles({ backgroundColor }) {
  return {
    container: {
      backgroundColor,
      flex: 1,
      padding: 10,
    },

    menuButton: {
      padding: 5,
    },

    header: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    listContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },

    menuItemButton: {
      marginBottom: 5,
    },

    menuItemText: {
      fontSize: 20,
    },

    drawerSelf: { shadowColor: '#000', shadowOpacity: 0.8, shadowRadius: 3 },
    drawerMain: { paddingLeft: 3 },
    drawerSelfOverlay: {  },
    drawerMainOverlay: {  },
  };
}