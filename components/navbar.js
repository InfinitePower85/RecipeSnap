import React from "react";

//Seperate component for Navbar



const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f2fbe5',
    },

    navbarContainer: {
        height: deviceHeight/9,
        width: deviceWidth,
        backgroundColor: '#04AC7E',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navbarButton: {
        marginTop: deviceHeight/25,
        height: deviceHeight/10,
        width: deviceWidth/5,
        borderColor: '#7A0BC0',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Navbar;