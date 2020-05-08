import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    header: {
        flex: 0.8,
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    footer: {
        flex: 1.1,
        paddingHorizontal: 20,
    },
    footerTitle: {
        color: '#000',
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: '#f2f2f2'
    },
    input: {
        flex: 1,
        marginTop: 2,
        marginBottom: 2,
        color: 'gray'
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation: {
        backgroundColor: 'green',
        paddingVertical: 12,
        marginTop: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textLogin: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 17,

    }
})