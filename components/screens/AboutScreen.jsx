import {Linking, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "../../assets/css/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useTranslation} from "react-i18next";

const AboutScreen = ({navigation}) => {
    const {t} = useTranslation();

    function goToGitPage() {
        Linking.openURL('https://github.com/pavliuc75/driving-test-questions');
    }

    function reportAProblem() {
        Linking.openURL(`mailto:pavliuc75@gmail.com?subject=${t('iFoundAMistake')}`)
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.header]}>
                <TouchableHighlight activeOpacity={0.5}
                                    underlayColor="#fff"
                                    onPress={navigation.goBack}>
                    <Ionicons name="ios-chevron-back-outline"
                              size={24}/>
                </TouchableHighlight>
            </View>
            <Text style={[localStyles.text, {marginTop: 16}]}>{t('thisApplicationIsMadeFor')}</Text>
            <Text style={{marginTop: 16}}>
                <Text style={[localStyles.text]}>{t('applicationIsMadeForEducation')} </Text>
                <Text style={[localStyles.text, localStyles.link]}
                      onPress={goToGitPage}>GitHub</Text>
                <Text style={[localStyles.text]}>.</Text>
            </Text>
            <Text style={{marginTop: 16}}>
                <Text style={[localStyles.text]}>{t('ifYouFoundAnyMistakePleaseEmail')} </Text>
                <Text style={[localStyles.text, localStyles.link]}
                      onPress={reportAProblem}>pavliuc75@gmail.com</Text>
                <Text style={[localStyles.text]}>.</Text>
            </Text>
            <Text style={[localStyles.text, {marginTop: 16}]}>{t('thankYouForUsing')}</Text>
            <Text style={[localStyles.text, {marginTop: 16}]}>{t('author')}</Text>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    text: {
        fontSize: 15,
        lineHeight: 20,
    },
    link: {
        textDecorationLine: 'underline',
        color: 'blue',
    }
});

export default AboutScreen;