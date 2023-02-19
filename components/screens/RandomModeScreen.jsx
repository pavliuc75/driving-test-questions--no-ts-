import {StyleSheet, TouchableHighlight, View} from "react-native";
import {useState} from "react";
import questionsHelper from "../../assets/questionsHelper";
import {styles} from "../../assets/css/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import {SafeAreaView} from "react-native-safe-area-context";
import QuestionSection from "../QuestionSection";

const RandomModeScreen = ({navigation}) => {
    const [currentQuestionSecondaryId, setCurrentQuestionId] = useState(1);
    const [randomQuestions, setRandomQuestions] =
        useState(questionsHelper.getRandomQuestions);

    function handleUserPickedAnAnswer(chosenAnswerId) {
        setRandomQuestions(randomQuestions.map((question) => {
            if (question.secondaryId === currentQuestionSecondaryId) {
                return {
                    ...question,
                    pickedAnswerId: chosenAnswerId,
                    isExplanationShown: question.isExplanationShown ? true : chosenAnswerId !== question.correctAnswer.id,
                    isAnimateExplanationShown: (chosenAnswerId !== question.correctAnswer.id) && !question.isExplanationShown
                }
            }
            return question;
        }))
    }

    function handleUserPressedNextQuestion() {
        disableAnimateExplanationShown();
        setCurrentQuestionId(currentQuestionSecondaryId + 1)
    }

    function handleUserPressedPreviousQuestion() {
        disableAnimateExplanationShown();
        setCurrentQuestionId(currentQuestionSecondaryId - 1)
    }

    function handleUserToggledExplanation() {
        setRandomQuestions(randomQuestions.map((question) => {
            if (question.secondaryId === currentQuestionSecondaryId) {
                return {
                    ...question,
                    isExplanationShown: 'isExplanationShown' in question ? !question.isExplanationShown : true,
                    isAnimateExplanationShown: false,
                }
            }
            return question;
        }))
    }

    function disableAnimateExplanationShown() {
        setRandomQuestions(randomQuestions.map((question) => {
            if (question.secondaryId === currentQuestionSecondaryId) {
                return {
                    ...question,
                    isAnimateExplanationShown: false,
                }
            }
            return question;
        }));
    }

    return (
        <SafeAreaView style={[styles.container, localStyles.container]}>
            <View style={[styles.header, localStyles.header]}>
                <TouchableHighlight activeOpacity={0.5}
                                    underlayColor="#fff"
                                    onPress={navigation.goBack}>
                    <Ionicons name="ios-chevron-back-outline"
                              size={24}/>
                </TouchableHighlight>
            </View>
            <QuestionSection question={randomQuestions[currentQuestionSecondaryId - 1]}
                             categoryIdLiteral={randomQuestions[currentQuestionSecondaryId - 1]["categoryIdLiteral"]}
                             isExplanationButtonEnabled={true}
                             isBackButtonHidden={currentQuestionSecondaryId === 1}
                             isNextButtonHidden={currentQuestionSecondaryId === randomQuestions.length}
                             onUserPickedAnAnswer={handleUserPickedAnAnswer}
                             onUserPressedNextQuestion={handleUserPressedNextQuestion}
                             onUserPressedPreviousQuestion={handleUserPressedPreviousQuestion}
                             onUserToggledExplanation={handleUserToggledExplanation}/>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default RandomModeScreen;